/**
 * Main Game settlement object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.settlement
 * @returns {civitas.objects.settlement}
 */
civitas.objects.settlement = function(params) {
	
	/**
	 * Settlement properties.
	 *
	 * @private
	 * @type {Object}
	 */
	this.properties = {
		id: null,
		type: null,
		name: null,
		storage: null,
		population: null,
		climate: null,
		level: null,
		icon: null,
		population: null,
		ruler: null,
		religion: null,
		player: null,
		nationality: null,
		color: null,
		waterside: false
	};

	/**
	 * Location of the settlement.
	 *
	 * @private
	 * @type {Object}
	 */
	this._location = {
		x: 0,
		y: 0
	};

	/**
	 * Diplomacy status with all the settlements in the world.
	 *
	 * @private
	 * @type {Object}
	 */
	this._status = {};

	/**
	 * Pointer to the game core.
	 * 
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;
	
	/**
	 * List of the buildings in this settlement.
	 * 
	 * @private
	 * @type {Array}
	 */
	this.buildings = [];

	/**
	 * Soldiers headquartered in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.army = {};

	/**
	 * Ships built in this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this.navy = {};

	/**
	 * Mercenary armies available for this settlement.
	 * 
	 * @private
	 * @type {Number}
	 */
	this._mercenary = [];
	
	/**
	 * The resources of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.resources = {};

	/**
	 * The settlement heroes.
	 *
	 * @private
	 * @type {Array}
	 */
	this._heroes = [];

	/**
	 * List of the imports and exports of this settlement.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.trades = null;

	/**
	 * AI module for this settlement.
	 *
	 * @private
	 * @type {civitas.modules.ai}
	 */
	this._ai = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.settlement}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this._core = params.core;
		this.properties.id = params.properties.id;
		this.properties.name = (typeof params.properties.name !== 'undefined') ? params.properties.name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES);
		this.properties.player = (typeof params.properties.player !== 'undefined') ? params.properties.player : false;
		this.properties.level = (typeof params.properties.level !== 'undefined') ? params.properties.level : 1;
		this.properties.religion = (typeof params.properties.religion !== 'undefined') ? params.properties.religion : civitas.RELIGION_NONE;
		this.properties.nationality = (typeof params.properties.nationality !== 'undefined') ? params.properties.nationality : this.core().get_random_nationality();
		this.properties.type = (typeof params.properties.type !== 'undefined') ? params.properties.type : civitas.CITY;
		this.properties.ruler = (typeof params.properties.ruler !== 'undefined') ? params.properties.ruler : {
				title: (this.properties.type === civitas.CAMP) ? 'Warlord' : 'Mayor',
				avatar: civitas.utils.get_random(1, civitas.AVATARS),
				personality: (this.properties.type === civitas.CAMP) ? civitas.PERSONALITY_WARLORD : this.core().get_random_personality(),
				name: civitas.utils.get_random_unique(civitas.NAMES)
			};
		this.properties.icon = (typeof params.properties.icon !== 'undefined') ? params.properties.icon : 1;
		this.properties.waterside = (typeof params.properties.waterside !== 'undefined') ? params.properties.waterside : false;
		this.army = this.load_army(params.army);
		this._mercenary = (typeof params.mercenary !== 'undefined') ? params.mercenary : [];
		this._status = (typeof params.status !== 'undefined') ? params.status : {};
		this._heroes = (typeof params.heroes !== 'undefined') ? params.heroes : [];
		this.resources = (typeof params.resources !== 'undefined') ? params.resources : {};
		this._fill_resources();
		this._location = params.location;
		this.properties.color = (typeof params.properties.color !== 'undefined') ? params.properties.color : this.core().ui().get_random_color();
		this.core().world().add_settlement(this);
		if (this.waterside() === true) {
			this.navy = this.load_navy(params.navy);
		}
		this.trades = (typeof params.trades !== 'undefined') ? params.trades : {
				'imports': {},
				'exports': {}
			};
		if (!this.is_player()) {
			this.resources.fame = this.core().level_to_fame(this.level());
			this._ai = new civitas.modules.ai({
				core: this,
				type: this.properties.ruler.personality
			});
		}
		if (!this.is_player()) {
			const terrain = this.core().world().get_hex_terrain({
				x: this._location.x,
				y: this._location.y
			});
			const climate = this.core().world().get_climate_from_terrain(terrain);
			this.properties.climate = civitas['CLIMATE_' + climate.name.toUpperCase()];
			if (this.is_urban()) {
				this.setup_initial_buildings(this.core().get_buildings_for_settlement(this), true);
			}
		} else {
			this.properties.climate = params.properties.climate;
		}
		this.properties.population = (typeof params.properties.population !== 'undefined') ? params.properties.population : this.level() * civitas.POPULATION_PER_LEVEL;
		return this;
	};

	/**
	 * Get a reference to the AI module.
	 *
	 * @public
	 * @returns {civitas.modules.ai}
	 */
	this.ai = function() {
		return this._ai;
	};

	/**
	 * Export settlement data.
	 *
	 * @returns {Object}
	 * @public
	 */
	this.export = function() {
		const data = {
			properties: this.get_properties(),
			trades: this.get_trades(),
			resources: this.get_resources(),
			army: this.get_army(),
			navy: this.get_navy(),
			buildings: this.export_buildings(),
			mercenary: this.mercenary(),
			heroes: this.heroes(),
			location: this.location()
		};
		if (this.is_player()) {
			data.status = this.status();
		}
		return data;
	};

	/**
	 * Get the settlement properties.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.get_properties = function() {
		return this.properties;
	};

	/**
	 * Get/set if the settlement is waterside (can build ships).
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.waterside = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.waterside = value;
		}
		return this.properties.waterside;
	};

	/**
	 * Get/set the name of this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.name = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.name = value;
		}
		return this.properties.name;
	};

	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.core = function() {
		return this._core;
	};

	/**
	 * Raise the level of this settlement.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.level_up = function() {
		const level = this.level();
		this.fame(this.core().level_to_fame(level));
		this.properties.level++;
		this.properties.population = this.level() * civitas.POPULATION_PER_LEVEL;
		this.core().ui().log('The city of ' + this.name() + ' is now level ' + this.level() + '.');
		return this;
	};

	/**
	 * Rename this settlement.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.rename = function(value) {
		return this.name(value);
	};

	/**
	 * Get the rank of this settlement
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_rank = function() {
		const half_level = Math.round(this.level() / 2);
		const rank = {
			fame: this.fame(),
			prestige: this.prestige(),
			espionage: this.espionage(),
			score: Math.floor((
				(this.fame() / half_level) + (this.prestige() / half_level) + (this.espionage() / half_level)
			) / half_level)
		};
		return rank;
	};
	
	/**
	 * Get/set the ruler object of this settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.ruler = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.ruler = value;
		}
		return this.properties.ruler;
	};

	/**
	 * Get/set the level of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.level = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.level = value;
		}
		return this.properties.level;
	};

	/**
	 * Get/set the personality of the ruler of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.personality = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.ruler.personality = value;
		}
		return {
			id: this.properties.ruler.personality,
			name: civitas.PERSONALITIES[this.properties.ruler.personality].capitalize()
		};
	};

	/**
	 * Get/set the climate of the area of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.climate = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.climate = value;
		}
		return {
			id: this.properties.climate,
			name: civitas.CLIMATES[this.properties.climate].capitalize()
		};
	};
	
	/**
	 * Get/set the nationality of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Object}
	 */
	this.nationality = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.nationality = value;
		}
		return {
			id: this.properties.nationality,
			name: civitas.NATIONS[this.properties.nationality].capitalize()
		};
	};

	/**
	 * Get/set the icon of this settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.icon = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.icon = value;
		}
		return this.properties.icon;
	};

	/**
	 * Get/set the id of this settlement.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.id = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.id = id;
		}
		return this.properties.id;
	};

	/**
	 * Check if this settlement is a player settlement.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_player = function() {
		return this.properties.player;
	};

	/**
	 * Return the type of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_type = function() {
		return this.properties.type;
	};

	/**
	 * Return the population of this settlement.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.population = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.population = value;
		}
		return this.properties.population;
	};

	/**
	 * Check if this settlement is a city.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_city = function() {
		return this.properties.type === civitas.CITY;
	};

	/**
	 * Check if this settlement is a metropolis.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_metropolis = function() {
		return this.properties.type === civitas.METROPOLIS;
	};

	/**
	 * Check if this settlement is a camp.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_camp = function() {
		return this.properties.type === civitas.CAMP;
	};

	/**
	 * Check if this settlement is a village.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_village = function() {
		return this.properties.type === civitas.VILLAGE;
	};

	/**
	 * Refresh the heroes in the Tavern.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.refresh_heroes = function() {
		if (this.is_building_built('tavern')) {
			// TODO
		}
	};

	/**
	 * Check if the player settlement's nationality and the one passed as parameter nationality are the same.
	 *
	 * @param {String|civitas.objects.settlement|Number} settlement
	 * @returns {Boolean}
	 * @public
	 */
	this.has_same_nationality = function(settlement) {
		if (typeof settlement === 'object' && this.nationality().id === settlement.nationality().id) {
			return true;
		} else if (typeof settlement === 'number' || typeof settlement === 'string') {
			const _settlement = this.core().get_settlement(settlement);
			if (typeof _settlement !== 'undefined') {
				if (this.nationality().id === _settlement.nationality().id) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Get/set the heroes of the settlement.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.heroes = function(value) {
		if (typeof value !== 'undefined') {
			this._heroes = value;
		}
		return this._heroes;
	};

	/**
	 * Get/set the location of the settlement.
	 *
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.location = function(value) {
		if (typeof value !== 'undefined') {
			this._location = value;
		}
		return this._location;
	};

	/**
	 * Change this settlement's type to city.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.to_city = function() {
		this.properties.type = civitas.CITY;
	};

	/**
	 * Change this settlement's type to village.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.to_village = function() {
		this.properties.type = civitas.VILLAGE;
	};

	/**
	 * Change this settlement's type to camp.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.to_camp = function() {
		this.properties.type = civitas.CAMP;
	};

	/**
	 * Change this settlement's type to metropolis.
	 *
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.to_metropolis = function() {
		this.properties.type = civitas.METROPOLIS;
	};

	/**
	 * Check if the settlement has soldiers in its army.
	 *
	 * @public
	 * @param {Object} data
	 * @returns {Boolean}
	 */
	this.has_soldiers = function(data) {
		const army = this.get_army();
		for (let item in army) {
			if (army[item] - data[item] < 0) {
				return false;
			}
		}
		return true;
	};

	/**
	 * Adjust costs for the campaign.
	 *
	 * @public
	 * @param {Object} cost
	 * @param {Number} duration
	 * @param {Object} resources
	 * @returns {Object}
	 */
	this.adjust_campaign_cost = function(cost, duration, resources) {
		let mission_costs = cost;
		for (let item in mission_costs) {
			if (item === 'coins') {
				mission_costs[item] = Math.ceil(cost[item] * duration);
			} else if (item === 'provisions') {
				mission_costs[item] = Math.ceil((cost[item] * duration) / 4);
			}
		}
		if (typeof resources !== 'undefined') {
			let merged_costs = $.extend({}, resources);
			for (let item in mission_costs) {
				if (merged_costs[item]) {
					merged_costs[item] += mission_costs[item];
				} else {
					merged_costs[item] = mission_costs[item];
				}
			}
			return merged_costs;
		}
		return mission_costs;
	};

	/**
	 * Remove soldiers from the settlement's army (to create another army).
	 *
	 * @public
	 * @param {Object} data
	 * @returns {Boolean}
	 */
	this.split_army = function(data) {
		let army = this.get_army();
		if (this.has_soldiers(data)) {
			for (let item in army) {
				if (army[item] - data[item] >= 0) {
					army[item] = army[item] - data[item];
				} else {
					army[item] = 0;
				}
			}
			return true;
		}
		return false;
	};

	/**
	 * Get the color of the settlement.
	 *
	 * @public
	 * @returns {String}
	 */
	this.color = function() {
		return this.properties.color;
	};

	/**
	 * Check if the settlement has ships in its navy.
	 *
	 * @public
	 * @param {Object} data
	 * @returns {Boolean}
	 */
	this.has_ships = function(data) {
		let navy = this.get_navy();
		for (let item in navy) {
			if (navy[item] - data[item] < 0) {
				return false;
			}
		}
		return true;
	};

	/**
	 * Remove ships from the settlement's navy (to create another navy).
	 *
	 * @public
	 * @param {Object} data
	 * @returns {Boolean}
	 */
	this.split_navy = function(data) {
		let navy = this.get_navy();
		if (this.has_ships(data)) {
			for (let item in navy) {
				if (navy[item] - data[item] >= 0) {
					navy[item] = navy[item] - data[item];
				} else {
					navy[item] = 0;
				}
			}
			return true;
		}
		return false;
	};

	/**
	 * Return the number of the ships in this settlement's navy.
	 * 
	 * @public
	 * @param {Object} navy
	 * @returns {Object}
	 */
	this.num_ships = function(navy) {
		let total = 0;
		if (typeof navy === 'undefined') {
			navy = this.navy;
		}
		for (let item in navy) {
			if (typeof navy[item] !== 'undefined') {
				total = total + navy[item];
			}
		}
		return total;
	};

	/**
	 * Return the number of the soldiers in this settlement's army.
	 * 
	 * @public
	 * @param {Object} army
	 * @returns {Object}
	 */
	this.num_soldiers = function(army) {
		let total = 0;
		if (typeof army === 'undefined') {
			army = this.army;
		}
		for (let item in army) {
			if (typeof army[item] !== 'undefined') {
				total += army[item];
			}
		}
		return total;
	};

	/**
	 * Merge two armies.
	 *
	 * @public
	 * @param {Object} army
	 */
	this.merge_army = function(army) {
		const _army = this.get_army();
		let merged_army = $.extend({}, _army);
		for (let item in army) {
			if (merged_army[item]) {
				merged_army[item] += army[item];
			} else {
				merged_army[item] = army[item];
			}
		}
		this.army = merged_army;
	};

	/**
	 * Merge two navies.
	 *
	 * @public
	 * @param {Object} navy
	 */
	this.merge_navy = function(navy) {
		const _navy = this.get_navy();
		let merged_navy = $.extend({}, _navy);
		for (let item in navy) {
			if (merged_navy[item]) {
				merged_navy[item] += navy[item];
			} else {
				merged_navy[item] = navy[item];
			}
		}
		this.navy = merged_navy;
	};

	/**
	 * Method for the setup of the settlement's army.
	 *
	 * @public
	 * @param {Object} params
	 * @returns {Object}
	 */
	this.load_army = function(params) {
		let army = {};
		for (let item in civitas.SOLDIERS) {
			if (typeof params !== 'undefined' && typeof params[item] !== 'undefined') {
				army[item] = params[item];
			} else {
				army[item] = 0;
			}
		}
		return army;
	};

	/**
	 * Internal method for the initial setup of the settlement's navy.
	 *
	 * @private
	 * @param {Object} params
	 * @returns {Object}
	 */
	this.load_navy = function(params) {
		let navy = {};
		for (let item in civitas.SHIPS) {
			if (typeof params !== 'undefined' && typeof params[item] !== 'undefined') {
				navy[item] = params[item];
			} else {
				navy[item] = 0;
			}
		}
		return navy;
	};

	/**
	 * Get the list of settlement mercenary armies.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {Array}
	 */
	this.mercenary = function(value) {
		if (typeof value !== 'undefined') {
			this._mercenary = value;
		}
		return this._mercenary;
	};

	/**
	 * Check if this settlement can build ships.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.can_build_ships = function() {
		return this.is_building_built('shipyard');
	};

	/**
	 * Check if this settlement can recruit soldiers.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.can_recruit_soldiers = function() {
		return this.is_building_built('barracks');
	};

	/**
	 * Recruit a soldier for the settlement's army.
	 * 
	 * @public
	 * @param {String} name
	 * @returns {Boolean}
	 */
	this.recruit_mercenary_army = function(name) {
		for (let i = 0; i < civitas.MERCENARIES.length; i++) {
			if (name === civitas.MERCENARIES[i].handle) {
				const price = civitas.MERCENARIES[i].cost;
				if (this.dec_coins(price) === false) {
					return false;
				}
				const army = {
					id: i,
					handle: name,
					army: {}
				};
				for (let item in civitas.SOLDIERS) {
					if (typeof civitas.MERCENARIES[i].army[item] !== 'undefined') {
						army.army[item] = civitas.MERCENARIES[i].army[item];
					} else {
						army.army[item] = 0;
					}
				}
				this._mercenary.push(army);
				if (this.is_player()) {
					this.core().ui().notify('The mercenaries of the ' + civitas.MERCENARIES[i].name + ' are now available for skirmish missions for the duration of one year.', 'Mercenaries recruited.');
				}
				this.core().ui().log('game', 'The city of ' + this.name() + ' hired the mercenaries of ' + civitas.MERCENARIES[i].name + '.');
				this.core().save_and_refresh();
				return true;
			}
		}
		return false;
	};

	/**
	 * Construct a ship for the settlement's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {Boolean}
	 */
	this.recruit_ship = function(ship_name) {
		if (typeof this.navy[ship_name] !== 'undefined' && this.navy[ship_name] !== null ) {
			this.navy[ship_name] = this.navy[ship_name] + 1;
		} else {
			this.navy[ship_name] = 1;
		}
		if (this.is_player()) {
			this.core().save_and_refresh();
		}
		return true;
	};

	/**
	 * Recruit a soldier for the settlement's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {Boolean}
	 */
	this.recruit_soldier = function(soldier_name) {
		if (typeof this.army[soldier_name] !== 'undefined' && this.army[soldier_name] !== null ) {
			this.army[soldier_name] = this.army[soldier_name] + 1;
		} else {
			this.army[soldier_name] = 1;
		}
		if (this.is_player()) {
			this.core().save_and_refresh();
		}
		return true;
	};

	/**
	 * Disband a ship from the settlement's navy.
	 * 
	 * @public
	 * @param {String} ship_name
	 * @returns {Boolean}
	 */
	this.disband_ship = function(ship_name) {
		if (typeof this.navy[ship_name] === 'undefined') {
			return false;
		} else {
			if (this.navy[ship_name] - 1 >= 0) {
				this.navy[ship_name] = this.navy[ship_name] - 1;
			} else {
				this.navy[ship_name] = 0;
			}
		}
		return true;
	};

	/**
	 * Disband a soldier from the settlement's army.
	 * 
	 * @public
	 * @param {String} soldier_name
	 * @returns {Boolean}
	 */
	this.disband_soldier = function(soldier_name) {
		if (typeof this.army[soldier_name] === 'undefined') {
			return false;
		} else {
			if (this.army[soldier_name] - 1 >= 0) {
				this.army[soldier_name] = this.army[soldier_name] - 1;
			} else {
				this.army[soldier_name] = 0;
			}
		}
		return true;
	};

	/**
	 * Set the navy of the settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_navy = function(value) {
		this.navy = value;
		return this;
	};

	/**
	 * Set the soldiers of the settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_army = function(value) {
		this.army = value;
		return this;
	};

	/**
	 * Release all the mercenary armies.
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.release_mercenaries = function() {
		this._mercenary = [];
		return this;
	};

	/**
	 * Get the total number of soldiers available in this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_army = function() {
		return this.army;
	};
		
	/**
	 * Get the total number of ships available in this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_navy = function() {
		return this.navy;
	};

	/**
	 * Check if this mercenary army has already been recruited.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Boolean}
	 */
	this.is_mercenary_recruited = function(handle) {
		for (let i = 0; i < this._mercenary.length; i++) {
			if (typeof this._mercenary[i] !== 'undefined') {
				if (this._mercenary[i].handle === handle) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Release a recruited mercenary army.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {Boolean}
	 */
	this.release_mercenary = function(id) {
		if (typeof this._mercenary[id] !== 'undefined') {
			const mercenary_army_data = civitas.MERCENARIES[id];
			this._mercenary.splice(id, 1);
			if (this.is_player()) {
				this.core().ui().notify(mercenary_army_data.name + ' has been released from its duties.');
			}
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Get the list of settlement buildings, for export reasons.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.export_buildings = function() {
		const buildings_list = [];
		for (let i = 0; i < this.buildings.length; i++) {
			if (typeof this.buildings[i] !== 'undefined') {
				buildings_list.push({
					handle: this.buildings[i].get_handle(),
					level: this.buildings[i].get_level(),
					stopped: this.buildings[i].is_stopped()
				});
			}
		}
		return buildings_list;
	};

	/**
	 * Return a pointer to the specified building in this settlement by the specified
	 * handle.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.get_building = function(handle) {
		const buildings = this.get_buildings();
		if (typeof handle === 'string') {
			for (let i = 0; i < buildings.length; i++) {
				if (typeof buildings[i] !== 'undefined') {
					if (buildings[i].get_type() === handle) {
						return buildings[i];
					}
				}
			}
		}
		return false;
	};

	/**
	 * Internal method for creating a building.
	 *
	 * @private
	 * @param {String|Object} building
	 * @param {Boolean} hidden
	 * returns {Boolean}
	 */
	this._build = function(building, hidden) {
		hidden = (typeof hidden !== 'undefined') && hidden === true ? true : false;
		const handle = typeof building.handle !== 'undefined' ? building.handle : building;
		const level = typeof building.level !== 'undefined' ? building.level : 1;
		const stopped = typeof building.stopped !== 'undefined' ? building.stopped : false;
		const building_data = this.get_building_data(handle);
		if (building_data) {
			if (level > 1) {
				building_data.level = level;
			}
			let new_building = new civitas.objects.building({
				settlement: this,
				type: handle,
				data: building_data,
				hidden: hidden,
				stopped: stopped
			});
			this.buildings.push(new_building);
			return true;
		}
		return false;
	};

	/**
	 * Internal function for building the specified buildings, bypassing
	 * the requirements.
	 * 
	 * @public
	 * @param {String|Object} building_type
	 * @param {Boolean} hidden
	 * @returns {Boolean}
	 */
	this.setup_initial_buildings = function(building_type, hidden) {
		if (typeof building_type === 'object') {
			for (let i = 0; i < building_type.length; i++) {
				this._build(building_type[i], hidden);
			}
			return true;
		} else {
			this._build(building_type, hidden);
			return true;
		}
		return false;
	};

	/**
	 * Get the building data.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {Object|Boolean}
	 */
	this.get_building_data = function(handle) {
		const id = civitas.BUILDINGS.findIndexByHandle(handle);
		if (id !== false) {
			return civitas.BUILDINGS[id];
		}
		return false;
	};

	/**
	 * Build the specified building.
	 * 
	 * @public
	 * @param {String} building_type
	 * @returns {civitas.objects.building|Boolean}
	 */
	this.build = function(building_type) {
		const building_data = this.get_building_data(building_type);
		if (building_data) {
			if ((typeof building_data.requires.settlement_level !== 'undefined') && (this.properties.level < building_data.requires.settlement_level)) {
				if (this.is_player()) {
					this.core().ui().error('Your city level is too low to construct this building.');
				}
				return false;
			}
			if ((typeof building_data.requires.climate !== 'undefined') && ($.inArray(this.climate().id, building_data.requires.climate) === -1)) {
				if (this.is_player()) {
					this.core().ui().error('Your city lacks the required fertility and climate to construct this building.');
				}
				return false;
			}
			if ((typeof building_data.requires.research !== 'undefined') && (!this.core().has_research(building_data.requires.research))) {
				if (this.is_player()) {
					this.core().ui().error('Your city is missing the `' + this.core().get_research_config_data(building_data.requires.research).name + '` research needed to construct this building.');
				}
				return false;
			}
			if (typeof building_data.requires.buildings !== 'undefined') {
				const required = building_data.requires.buildings;
				for (let item in required) {
					if (!this.is_building_built(item, required[item])) {
						const _z = this.core().get_building_config_data(item);
						if (_z) {
							if (this.is_player()) {
								this.core().ui().error('You don`t have the required level ' + required[item] + ' ' + _z.name + '.');
							}
						}
						return false;
					}
				}
			}
			if (!this.has_resources(building_data.cost)) {
				if (this.is_player()) {
					this.core().ui().error('You don`t have enough resources to construct this building.');
				}
				return false;
			}
			if (!this.remove_resources(building_data.cost)) {
				return galse;
			}
			const _building = new civitas.objects.building({
				settlement: this,
				type: building_type,
				data: building_data
			});
			this.buildings.push(_building);
			this.raise_prestige();
			if (this.is_player()) {
				this.core().save_and_refresh();
				this.core().ui().citymap_scrollto_building(_building);
				this.core().ui().notify('A new ' + _building.get_name() + ' was just constructed in your city.');
				$('.tips').tipsy({
					gravity: $.fn.tipsy.autoNS,
					html: true
				});
			}
			return _building;
		}
		return false;
	};

	/**
	 * Check if the specified building is already built.
	 * 
	 * @public
	 * @param {String} handle
	 * @param {Number} level
	 * @returns {Boolean}
	 */
	this.is_building_built = function(handle, level) {
		if (typeof level === 'undefined') {
			level = 1;
		}
		const buildings = this.get_buildings();
		for (let i = 0; i < buildings.length; i++) {
			if (typeof buildings[i] !== 'undefined') {
				if (buildings[i].type === handle && buildings[i].level >= level) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Get the list of all the buildings in this settlement.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_buildings = function() {
		return this.buildings;
	};

	/**
	 * Perform diplomacy missions.
	 *
	 * @public
	 * @param {Number|civitas.objects.settlement} settlement
	 * @param {Number} mode
	 * @returns {Boolean}
	 */
	this.diplomacy = function(settlement, mode) {
		if (typeof settlement === 'object') {
			settlement = settlement.id();
		}
		if (typeof settlement === 'number') {
			this._status[settlement].status = mode;
			if (mode === civitas.DIPLOMACY_WAR) {
				this.core().do_achievement('declarewar');
				this.reset_influence(settlement);
			} else if (mode === civitas.DIPLOMACY_ALLIANCE) {
				this.core().do_achievement('gotyourback');
				this.set_influence(settlement, civitas.MAX_INFLUENCE_VALUE);
			} else if (mode === civitas.DIPLOMACY_PACT) {
				this.core().do_achievement('pactish');
				this.set_influence(settlement, Math.ceil(civitas.MAX_INFLUENCE_VALUE / 2));
			} else if (mode === civitas.DIPLOMACY_CEASE_FIRE) {
				this.set_influence(settlement, Math.ceil(civitas.MAX_INFLUENCE_VALUE / 4));
			} else if (mode === civitas.DIPLOMACY_VASSAL) {
				this.core().do_achievement('youaremine');
				this.set_influence(settlement, civitas.MAX_INFLUENCE_VALUE);
			}
			this.core().save_and_refresh();
			return true;
		}
		return false;
	};

	/**
	 * Get/set the diplomatic status with another settlement.
	 *
	 * @public
	 * @param {Number} settlement
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.status = function(settlement, value) {
		if (typeof value !== 'undefined') {
			this._status[settlement] = value;
		}
		if (typeof settlement !== 'undefined') {
			return this._status[settlement];
		} else {
			return this._status;
		}
	};

	/**
	 * Check if this settlement can recruit heroes.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.can_recruit_heroes = function() {
		return this.is_building_built('tavern');
	};

	/**
	 * Check if this settlement can conduct diplomatic missions.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.can_diplomacy = function() {
		return this.is_building_built('embassy');
	};

	/**
	 * Returns the influenceof this settlement with a specific settlement.
	 * 
	 * @public
	 * @param {String} settlement
	 * @returns {Number}
	 */
	this.get_influence_with_settlement = function(settlement) {
		if (typeof settlement === 'number') {
			return this._status[settlement].influence;
		} else if (typeof settlement === 'object') {
			return this._status[settlement.id()].influence;
		} else if (typeof settlement === 'string') {
			return this._status[this.core().get_settlement(settlement)].influence;
		}
	};

	/**
	 * Decrease the influence of this settlement.
	 * 
	 * @public
	 * @param {String} settlement
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.lower_influence = function(settlement, value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		return this.set_influence(settlement, this.get_influence_with_settlement(settlement) - value);
	};

	/**
	 * Set the influence with the specified settlement to this value.
	 *
	 * @public
	 * @param {civitas.objects.settlement} settlement
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.set_influence = function(settlement, value) {
		if (typeof settlement === 'object') {
			settlement = settlement.id();
		} else if (typeof settlement === 'string') {
			settlement = this.core().get_settlement(settlement);
		}
		if (value < civitas.MIN_INFLUENCE_VALUE || this._status[settlement].influence < civitas.MIN_INFLUENCE_VALUE) {
			this._status[settlement].influence = civitas.MIN_INFLUENCE_VALUE;
		} else {
			this._status[settlement].influence = value;
		}
		if (this._status[settlement].influence >= civitas.MAX_INFLUENCE_VALUE) {
			this._status[settlement].influence = civitas.MAX_INFLUENCE_VALUE;
		}
		return this.get_influence_with_settlement(settlement);
	};

	/**
	 * Increase the influence of this settlement.
	 * 
	 * @public
	 * @param {String} settlement
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.raise_influence = function(settlement, value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		return this.set_influence(settlement, this.get_influence_with_settlement(settlement) + value);
	};

	/**
	 * Reset the influence of this settlement.
	 * 
	 * @param {Number} s_id
	 * @returns {civitas.objects.settlement}
	 * @public
	 */
	this.reset_influence = function(s_id) {
		this.set_influence(s_id, civitas.MIN_INFLUENCE_VALUE);
		return this;
	};
		
	/**
	 * Return the diplomacy status of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_diplomacy_status = function(settlement) {
		return {
			id: this._status[settlement].status,
			name: civitas.DIPLOMACIES[this._status[settlement].status].capitalize()
		};
	};
	/**
	 * Raise the espionage of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.raise_espionage = function(value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		return this.espionage(this.espionage() + value);
	};

	/**
	 * Lower the espionage of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_espionage = function(value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		return this.espionage(this.espionage() - value);
	};

	/**
	 * Reset the espionage of this settlement.
	 * 
	 * @returns {Number}
	 * @public
	 */
	this.reset_espionage = function() {
		return this.espionage(civitas.MIN_ESPIONAGE_VALUE);
	};

	/**
	 * Get/set the espionage of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 * @param {Number} value
	 */
	this.espionage = function(value) {
		if (typeof value !== 'undefined') {
			if (value < civitas.MIN_ESPIONAGE_VALUE || this.resources.espionage < civitas.MIN_ESPIONAGE_VALUE) {
				this.resources.espionage = civitas.MIN_ESPIONAGE_VALUE;
			} else {
				this.resources.espionage = value;
			}
			if (this.resources.espionage >= civitas.MAX_ESPIONAGE_VALUE) {
				this.resources.espionage = civitas.MAX_ESPIONAGE_VALUE;
			}
		}
		return this.resources.espionage;
	};
	/**
	 * Increase this settlement's fame by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.raise_fame = function(amount) {
		if (typeof amount === 'undefined') {
			amount = 1;
		}
		return this.fame(this.fame() + amount);
	};

	/**
	 * Decrease this settlement's fame by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_fame = function(amount) {
		if (typeof amount === 'undefined') {
			amount = 1;
		}
		return this.fame(this.fame() - amount);
	};

	/**
	 * Get/set this settlement's fame.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.fame = function(value) {
		if (typeof value !== 'undefined') {
			if (value < civitas.MIN_FAME_VALUE || this.resources.fame < civitas.MIN_FAME_VALUE) {
				this.resources.fame = civitas.MIN_FAME_VALUE;
			} else {
				this.resources.fame = value;
			}
			return value;
		} else {
			return this.resources.fame;
		}
	};

	/**
	 * Reset the fame of this settlement.
	 * 
	 * @returns {Number}
	 * @public
	 */
	this.reset_fame = function() {
		return this.fame(civitas.MIN_FAME_VALUE);
	};

	/**
	 * Raise the prestige of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.raise_prestige = function(amount) {
		if (typeof amount === 'undefined') {
			amount = 1;
		}
		return this.prestige(this.prestige() + amount);
	};

	/**
	 * Lower the prestige of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_prestige = function(amount) {
		if (typeof amount === 'undefined') {
			amount = 1;
		}
		return this.prestige(this.prestige() - amount);
	};

	/**
	 * Reset the prestige of this settlement.
	 * 
	 * @returns {Number}
	 * @public
	 */
	this.reset_prestige = function() {
		return this.prestige(civitas.MIN_PRESTIGE_VALUE);
	};

	/**
	 * Get/set the prestige of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 * @param {Number} value
	 */
	this.prestige = function(value) {
		if (typeof value !== 'undefined') {
			if (value < civitas.MIN_PRESTIGE_VALUE || this.resources.prestige < civitas.MIN_PRESTIGE_VALUE) {
				this.resources.prestige = civitas.MIN_PRESTIGE_VALUE;
			} else {
				this.resources.prestige = value;
			}
			if (this.resources.prestige >= civitas.MAX_PRESTIGE_VALUE) {
				this.resources.prestige = civitas.MAX_PRESTIGE_VALUE;
			}
		}
		return this.resources.prestige;
	};
	/**
	 * Change religion of your settlement.
	 *
	 * @public
	 * @param {Number|String} id
	 * @returns {Boolean}
	 */
	this.change_religion = function(id) {
		if (this.faith() !== civitas.MAX_FAITH_VALUE && id !== 0) {
			if (this.is_player()) {
				this.core().ui().error('You don`t have enough faith to switch religions.');
			}
			return false;
		}
		if ((typeof id === 'number' && this.religion().id === id) || (typeof id === 'string' && this.religion().name === id)) {
			if (this.is_player()) {
				this.core().ui().error('You cannot switch religion to your already existing one.');
			}
			return false;
		}
		if (!this.religion(id)) {
			if (this.is_player()) {
				this.core().ui().error('Unable to switch religion to the specified one.');
			}
			return false;
		}
		this.reset_faith();
		this.refresh_heroes();
		if (this.is_player()) {
			this.core().ui().notify('Your settlement`s new religion is <strong>' + this.religion().name + '</strong>', 'Religion Adopted', false, civitas.NOTIFY_RELIGION);
		}
		this.core().save_and_refresh();
		return true;
	};

	/**
	 * Get/set the religion of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.religion = function(value) {
		if (typeof value !== 'undefined') {
			if (typeof value === 'number') {
				this.properties.religion = value;
				return true;
			} else if (typeof value === 'string') {
				const pos = $.inArray(value, civitas.RELIGIONS);
				if (pos !== -1) {
					this.properties.religion = pos;
					return true;
				}
			}
		}
		return {
			id: this.properties.religion,
			name: civitas.RELIGIONS[this.properties.religion].capitalize()
		};
	};

	/**
	 * Raise the faith of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.raise_faith = function(value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		return this.faith(this.faith() + value);
	};

	/**
	 * Lower the faith of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_faith = function(value) {
		if (typeof value === 'undefined') {
			value = 1;
		}
		return this.faith(this.faith() - value);
	};

	/**
	 * Reset the faith of this settlement.
	 * 
	 * @returns {Number}
	 * @public
	 */
	this.reset_faith = function() {
		return this.faith(civitas.MIN_FAITH_VALUE);
	};

	/**
	 * Get/set the faith of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 * @param {Number} value
	 */
	this.faith = function(value) {
		if (typeof value !== 'undefined') {
			if (value < civitas.MIN_FAITH_VALUE || this.resources.faith < civitas.MIN_FAITH_VALUE) {
				this.resources.faith = civitas.MIN_FAITH_VALUE;
			} else {
				this.resources.faith = value;
			}
			if (this.resources.faith >= civitas.MAX_FAITH_VALUE) {
				this.resources.faith = civitas.MAX_FAITH_VALUE;
			}
		}
		return this.resources.faith;
	};

	/**
	 * Check if this settlement can recruit soldiers.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.can_research = function() {
		return this.is_building_built('academy');
	};

	/**
	 * Raise the research of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.raise_research = function(amount) {
		if (typeof amount === 'undefined') {
			amount = 1;
		}
		return this.research(this.research() + amount);
	};

	/**
	 * Lower the research of this settlement by the specified amount.
	 * 
	 * @public
	 * @param {Number} amount
	 * @returns {Number}
	 */
	this.lower_research = function(amount) {
		if (typeof amount === 'undefined') {
			amount = 1;
		}
		return this.research(this.research() - amount);
	};

	/**
	 * Reset the research of this settlement.
	 * 
	 * @returns {Number}
	 * @public
	 */
	this.reset_research = function() {
		return this.research(civitas.MIN_RESEARCH_VALUE);
	};

	/**
	 * Get/set the research of this settlement.
	 * 
	 * @public
	 * @returns {Number}
	 * @param {Number} value
	 */
	this.research = function(value) {
		if (typeof value !== 'undefined') {
			if (value < civitas.MIN_RESEARCH_VALUE || this.resources.research < civitas.MIN_RESEARCH_VALUE) {
				this.resources.research = civitas.MIN_RESEARCH_VALUE;
			} else {
				this.resources.research = value;
			}
			if (this.resources.research >= civitas.MAX_RESEARCH_VALUE) {
				this.resources.research = civitas.MAX_RESEARCH_VALUE;
			}
		}
		return this.resources.research;
	};

	/**
	 * Merge resources from a source into settlement's storage.
	 *
	 * @public
	 * @param {Object} resources
	 * @returns {civitas.objects.settlement}
	 */
	this.merge_resources = function(resources) {
		if (typeof resources !== 'undefined') {
			for (let item in resources) {
				if (!civitas.utils.is_virtual_resource(item)) {
					this.add_to_storage(item, resources[item]);
				}
			}
		}
		return this;
	};

	/**
	 * Get resources from the settlement's storage as spoils of war.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.get_spoils = function() {
		const resources = this.get_resources();
		let tmp_res = Object.keys(resources);
		const spoils = {};
		let tmp;
		let resource;
		let random_resource;
		let count = 0;
		while (count < 3) {
			random_resource = tmp_res[Math.floor(Math.random() * tmp_res.length)];
			resource = resources[random_resource];
			if (!civitas.utils.is_virtual_resource(random_resource)) {
				if (resource > 0) {
					if (this.remove_resource(random_resource, resource)) {
						spoils[random_resource] = resource;
						count++;
					}
				}
			}
		}
		return spoils;
	};

	/**
	 * Increase this settlement's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.inc_coins = function(value) {
		return this.coins(this.coins() + value);
	};
		
	/**
	 * Decrease this settlement's coins by the specified amount.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.dec_coins = function(value) {
		if (!this.has_coins(value)) {
			return false;
		}
		this.coins(this.coins() - value);
		return true;
	};
		
	/**
	 * Get/set the coins of the settlement.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.coins = function(value) {
		if (typeof value !== 'undefined') {
			this.resources.coins = value;
		}
		return this.resources.coins;
	};

	/**
	 * Get/set the storage space of this settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.storage = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.storage = value;
		}
		let storage = 0;
		for (let item in this.get_resources()) {
			if (!civitas.utils.is_virtual_resource(item)) {
				storage += this.get_resources()[item];
			}
		}
		return {
			occupied: storage,
			all: this.properties.storage
		};
	};
		
	/**
	 * Adjust the resources according to the settlement owner.
	 *
	 * @private
	 * @returns {civitas.objects.settlement}
	 */
	this._fill_resources = function() {
		for (let item in civitas.RESOURCES) {
			if (typeof this.resources[item] === 'undefined') {
				this.resources[item] = 0;
			}
		}
		return this;
	};

	/**
	 * Add a specified amount of a resource to the storage of this settlement.
	 * 
	 * @public
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.add_to_storage = function(item, amount) {
		if (!civitas.utils.resource_exists(item)) {
			return false;
		}
		if (!this.has_storage_space_for(item, amount)) {
			return false;
		}
		const res = this.get_resources();
		if (typeof res[item] !== 'undefined') {
			res[item] = res[item] + amount;
		} else {
			res[item] = amount;
		}
		return true;
	};
		
	/**
	 * Check if the settlement has the required coins to create this building.
	 * 
	 * @public
	 * @param {Number} coins
	 * @returns {Boolean}
	 */
	this.has_coins = function(coins) {
		if (this.coins() - coins < 0) {
			if (this.is_player()) {
				this.core().ui().error(this.name() + ' doesn`t have enough ' + civitas.utils.get_resource_name('coins') + '.');
			}
			return false;
		}
		return true;
	};

	/**
	 * Remove the specified resources from the settlement's storage.
	 *
	 * @public
	 * @param {Object} resources
	 * @returns {Boolean}
	 */
	this.remove_resources = function(resources) {
		let good = true;
		for (let item in resources) {
			good = this.remove_resource(item, resources[item]);
			if (good === false) {
				return false;
			}
		}
		return true;
	};

	/**
	 * Remove the amount of specified resource from the settlement's storage.
	 *
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_resource = function(resource, amount) {
		const resources = this.get_resources();
		resources[resource] = resources[resource] - amount;
		if (resources[resource] < 0) {
			resources[resource] = 0;
		}
		return true;
	};

	/**
	 * Check if the settlement has storage space for the amount of specified resource.
	 *
	 * @public
	 * @param {String|Object} resources
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.has_storage_space_for = function(resources, amount) {
		let total = 0;
		if (typeof amount === 'undefined') {
			for (let item in resources) {
				if (!civitas.utils.is_virtual_resource(item)) {
					total += resources[item];
				}
			}
		} else {
			if (!civitas.utils.is_virtual_resource(resources)) {
				total += amount;
			}
		}
		let storage = this.storage();
		if ((storage.occupied + total) > storage.all) {
			return false;
		}
		return true;
	};

	/**
	 * Check if the settlement is urban.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_urban = function() {
		if (this.is_city() || this.is_metropolis()) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Check if the settlement has any of the specified resources.
	 *
	 * @public
	 * @param {Object} resources
	 * @returns {Boolean}
	 */
	this.has_any_resources = function(resources) {
		let good = false;
		for (let item in resources) {
			good = this.has_resource(item, resources[item]);
			if (good === true) {
				return item;
			}
		}
		return false;
	};

	/**
	 * Check if the settlement has the specified resources.
	 *
	 * @public
	 * @param {Object} resources
	 * @returns {Boolean}
	 */
	this.has_resources = function(resources) {
		let good = true;
		for (let item in resources) {
			good = this.has_resource(item, resources[item]);
			if (good === false) {
				return false;
			}
		}
		return good;
	};

	/**
	 * Check if the settlement has the amount of specified resource.
	 *
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.has_resource = function(resource, amount) {
		const resources = this.get_resources();
		if (!civitas.utils.resource_exists(resource)) {
			return false;
		}
		if (resources[resource] - amount < 0) {
			return false;
		}
		return true;
	};

	/**
	 * Get the resources available in this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_resources = function() {
		return this.resources;
	};
		
	/**
	 * Set the resources of the settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_resources = function(value) {
		this.resources = value;
		return this;
	};
	
	/**
	 * Check if this settlement can trade resources.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.can_trade = function() {
		return this.is_building_built('tradingpost');
	};

	/**
	 * Buy the specified goods from a settlement.
	 * 
	 * @public
	 * @param {civitas.objects.settlement|String|Number} settlement
	 * @param {String} resource
	 * @param {Number} amount
	 * @param {Boolean} is_auctioneer
	 * @returns {Object|Boolean}
	 */
	this.buy_from_settlement = function(settlement, resource, amount, is_auctioneer) {
		if (!civitas.utils.resource_exists(resource)) {
			if (this.is_player()) {
				this.core().ui().error('The resource you specified does not exist.');
			}
			return false;
		}
		if (this.can_trade()) {
			const resources = this.get_resources();
			let _settlement;
			let discount;
			if (typeof settlement === 'string' || typeof settlement === 'number') {
				_settlement = this.core().get_settlement(settlement);
				if (settlement === false) {
					if (this.is_player()) {
						this.core().ui().error('The settlement of <strong>' + settlement + '</strong> does not exist.');
					}
					return false;
				}
			} else {
				_settlement = settlement;
				settlement = _settlement.name();
			}
			const is_double = this.religion().id === _settlement.religion().id ? true : false;
			const trades = _settlement.get_trades();
			if (trades === null) {
				if (this.is_player()) {
					this.core().ui().error('The settlement of <strong>' + settlement + '</strong> does not trade any goods.');
				}
				return false;
			}
			if (typeof trades.exports === 'undefined') {
				if (this.is_player()) {
					this.core().ui().error('The settlement of <strong>' + settlement + '</strong> does not export any goods.');
				}
				return false;
			}
			for (let item in trades.exports) {
				if (item === resource) {
					if (typeof amount === 'undefined') {
						amount = trades.exports[item];
					}
					discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
					if (typeof is_auctioneer !== 'undefined' && is_auctioneer === true) {
						discount = Math.ceil(discount + Math.ceil((civitas.RESOURCES[item].price * civitas.AUCTIONEER_DISCOUNT) / 100));
					}
					const price = civitas.utils.calc_price_plus_discount(amount, item, discount);
					const s_price = civitas.utils.calc_price(amount, item);
					const item_discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
					if (!this.has_storage_space_for(amount)) {
						this.core().ui().error(this.name() + ' does not have enough storage space for <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + '.');
						return false;
					}
					if (this.dec_coins(price) === false) {
						return false;
					}
					if (!_settlement.has_resource(item, amount)) {
						return false;
					}
					if (!_settlement.remove_resource(item, amount)) {
						return false;
					}
					_settlement.inc_coins(s_price);
					this.add_to_storage(item, amount);
					this.remove_from_exports(_settlement, item, amount);
					this.raise_influence(_settlement.id(), (is_double ? civitas.IMPORT_INFLUENCE * 2 : civitas.IMPORT_INFLUENCE));
					this.raise_prestige(is_double ? civitas.IMPORT_PRESTIGE * 2 : civitas.IMPORT_PRESTIGE);
					this.raise_fame(civitas.FAME_PER_TRADE);
					this.core().ui().refresh();
					if (this.is_player()) {
						this.core().ui().notify(this.name() + ' bought <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + ' from ' + settlement + ' for <strong>' + item_discount_price + '</strong> ' + civitas.utils.get_resource_name('coins') + ' each, for a total of <strong>' + price + '</strong> ' + civitas.utils.get_resource_name('coins') + '.', 'World Market');
					}
					return {
						buyer: this.name(),
						amount: amount,
						goods: civitas.utils.get_resource_name(item),
						seller: settlement,
						price: Math.round(civitas.RESOURCES[item].price + discount),
						totalPrice: price
					};
				}
			}
			if (this.is_player()) {
				this.core().ui().error('The settlement of <strong>' + settlement + '</strong> does not export the requested goods.');
			}
		}
		return false;
	};
		
	/**
	 * Perform a trades reset (resets all amounts of resources available
	 * for trade and randomize the amount.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.reset_trades = function() {
		const data = this.core().generate_random_resources(false, this.get_type());
		let new_resources = data.resources;
		new_resources.coins = this.resources.coins;
		new_resources.fame = this.resources.fame;
		new_resources.prestige = this.resources.prestige;
		new_resources.espionage = this.resources.espionage;
		new_resources.research = this.resources.research;
		new_resources.faith = this.resources.faith;
		this.resources = new_resources;
		if (this.is_urban()) {
			this.trades = data.trades;
		}
		return true;
	};

	/**
	 * Sell the specified goods to a settlement.
	 * 
	 * @public
	 * @param {civitas.objects.settlement|String|Number} settlement
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.sell_to_settlement = function(settlement, resource, amount) {
		if (!civitas.utils.resource_exists(resource)) {
			if (this.is_player()) {
				this.core().ui().error('The resource you specified does not exist.');
			}
			return false;
		}
		if (this.can_trade()) {
			const resources = this.get_resources();
			let _settlement;
			if (typeof settlement === 'string' || typeof settlement === 'number') {
				_settlement = this.core().get_settlement(settlement);
				if (settlement === false) {
					if (this.is_player()) {
						this.core().ui().error(settlement + ' does not exist.');
					}
					return false;
				}
			} else {
				_settlement = settlement;
			}
			const is_double = this.religion().id === _settlement.religion().id ? true : false;
			const trades = _settlement.get_trades();
			if (trades === null) {
				if (this.is_player()) {
					this.core().ui().error(settlement + ' does not trade any goods.');
				}
				return false;
			}
			if (typeof trades.imports === 'undefined') {
				if (this.is_player()) {
					this.core().ui().error(settlement + ' does not import any goods.');
				}
				return false;
			}
			for (let item in trades.imports) {
				if (item === resource) {
					if (typeof amount === 'undefined') {
						amount = trades.imports[item];
					}
					const discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
					const price = civitas.utils.calc_price_minus_discount(amount, item, discount);
					const s_price = civitas.utils.calc_price(amount, item);
					const item_discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
					if (!this.has_resource(item, amount)) {
						this.core().ui().error(this.name() + ' does not have enough ' + civitas.utils.get_resource_name(item) + ' to sell.');
						return false;
					}
					if (!this.remove_resource(item, amount)) {
						return false;
					}
					this.inc_coins(price);
					if (!_settlement.dec_coins(s_price)) {
						if (this.is_player()) {
							this.core().ui().error(settlement + ' does not have enough ' + civitas.utils.get_resource_name('coins') + '.');
						}
						return false;
					}
					_settlement.add_to_storage(item, amount);
					this.remove_from_imports(_settlement, item, amount);
					this.raise_influence(_settlement.id(), (is_double ? civitas.EXPORT_INFLUENCE * 2 : civitas.EXPORT_INFLUENCE));
					this.raise_prestige(is_double ? civitas.EXPORT_PRESTIGE * 2 : civitas.EXPORT_PRESTIGE);
					this.raise_fame(civitas.FAME_PER_TRADE);
					this.core().ui().refresh();
					if (this.is_player()) {
						this.core().ui().notify(this.name() + ' sold <strong>' + amount + '</strong> ' + civitas.utils.get_resource_name(item) + ' to ' + settlement + ' for <strong>' + item_discount_price + '</strong> ' + civitas.utils.get_resource_name('coins') + ' each, for a total of <strong>' + price + '</strong> ' + civitas.utils.get_resource_name('coins') + '.', 'World Market');
					}
					return {
						seller: this.name(),
						amount: amount,
						goods: civitas.utils.get_resource_name(item),
						buyer: settlement,
						price: Math.round(civitas.RESOURCES[item].price - discount),
						totalPrice: price
					};
				}
			}
			if (this.is_player()) {
				this.core().ui().error(settlement + ' does not import the specified goods.');
			}
		}
		return false;
	};
		
	/**
	 * Remove a specified amount of a resource from the trade exports of a settlement.
	 * 
	 * @public
	 * @param {civitas.objects.settlement} settlement
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_from_exports = function(settlement, item, amount) {
		settlement.trades.exports[item] = settlement.trades.exports[item] - amount;
		return true;
	};

	/**
	 * Remove a specified amount of a resource from the trade imports of a settlement.
	 * 
	 * @public
	 * @param {civitas.objects.settlement} settlement
	 * @param {String} item
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.remove_from_imports = function(settlement, item, amount) {
		settlement.trades.imports[item] = settlement.trades.imports[item] - amount;
		return true;
	};

	/**
	 * Get the imports and exports of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_trades = function() {
		return this.trades;
	};

	/**
	 * Get the exports of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_trades_exports = function() {
		return this.trades.exports;
	};

	/**
	 * Get the imports of this settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_trades_imports = function() {
		return this.trades.imports;
	};

	/**
	 * Format settlement's name into something nicer.
	 *
	 * @public
	 * @returns {String}
	 */
	this.nice_name = function() {
		if (this.is_metropolis()) {
			return 'Metropolis of ' + this.name();
		} else if (this.is_city()) {
			return 'City of ' + this.name();
		} else if (this.is_village()) {
			return 'Village of ' + this.name();
		} else if (this.is_camp()) {
			return 'Raider Camp ' + this.name();
		} else {
			return '';
		}
	};

	/**
	 * Set the imports and exports of this settlement.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {civitas.objects.settlement}
	 */
	this.set_trades = function(value) {
		this.trades = value;
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};
