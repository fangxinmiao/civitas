/*!
 * Civitas empire-building game.
 *
 * @author sizeof(cat) <sizeofcat AT riseup.net>
 * @version 0.3.0.7172019
 * @license GPLv3
 */ 'use strict';

/**
 * Find index by handle into an array.
 *
 * @function findIndexByHandle
 * @param {String} value
 * @returns {Object|Boolean}
 */
Array.prototype.findIndexByHandle = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i].handle === value) {
			return i;
		}
	}
	return false;
};

/**
 * Capitalize first letter of a string.
 *
 * @function capitalize
 * @returns {String}
 */
String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * This is the main object of the Civitas game. Everything gets injected into
 * the `civitas` namespace.
 *
 * @mixin civitas
 * @license GPLv3
 * @author sizeof(cat) <sizeofcat@riseup.net>
 * @version 0.3.0
 */
const civitas = {
	game: {
		// Todo
	},
	objects: {
		// Todo
	},
	controls: {
		// Todo
	},
	modules: {
		// Todo
	}
};

/**
 * Boot up the core.
 */
$(document).ready(function () {
	new civitas.game();
});

/**
 * Autostart music or not.
 * 
 * @constant
 * @default
 * @type {Boolean}
 */
civitas.AUTOSTART_MUSIC = false;

/**
 * Enable encryption or not.
 * 
 * @constant
 * @default
 * @type {Boolean}
 */
civitas.ENCRYPTION = false;

/**
 * URL to the game assets
 * 
 * @constant
 * @default
 * @type {String}
 */
civitas.ASSETS_URL = './';

/**
 * How many real seconds has a game day.
 *
 * constant
 * @default
 * @type {Number}
 */
civitas.SECONDS_TO_DAY = 10;

/**
 * Number of city ruler avatars available to choose.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.AVATARS = 99;

/**
 * Application version.
 * 
 * @constant
 * @type {String}
 */
civitas.VERSION = '0.3.0.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear();

/**
 * Whether the application is in debug mode.
 * 
 * @default
 * @constant
 * @type {Boolean}
 */
civitas.DEBUG = true;

/**
 * Browser localStorage key to store game data into.
 *
 * @constant
 * @default
 * @type {String}
 */
civitas.STORAGE_KEY = 'civitas';

/**
 * Difficulty level of the game is easy.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIFFICULTY_EASY = 1;

/**
 * Difficulty level of the game is medium.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIFFICULTY_MEDIUM = 2;

/**
 * Difficulty level of the game is hard.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIFFICULTY_HARD = 3;

/**
 * Difficulty level of the game is hardcore.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIFFICULTY_HARDCORE = 4;

/**
 * When a building is notifying the player it's out of resources (the
 * building, not the player).
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFICATION_MISSING_RES = 1;

/**
 * When a building is notifying the player its production is paused
 * manually by the player.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFICATION_PAUSED = 2;

/**
 * When a building is notifying the player it is missing its requirements.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFICATION_MISSING_REQ = 3;

/**
 * When a building is notifying the player the level of the city is too low.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFICATION_SETTLEMENT_LOW_LEVEL = 4;

/**
 * Game type as single player (campaign, local).
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MODE_SINGLEPLAYER = 1;

/**
 * Game type as multi player (sandbox, networked).
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MODE_MULTIPLAYER = 2;

/**
 * Error notification
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_ERROR = 0;

/**
 * Achievement notification
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_ACHIEVEMENT = 1;

/**
 * Normal notification
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_NORMAL = 2;

/**
 * Event notification.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_EVENT = 3;

/**
 * Research notification.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_RESEARCH = 4;

/**
 * Religion notification.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_RELIGION = 5;

/**
 * War notification.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.NOTIFY_WAR = 6;

/**
 * Max numbers of lines to show in the console. Too many will overload the DOM.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_CONSOLE_LINES = 5000;

/**
 * List of the possible seasons.
 * 
 * @constant
 * @default
 * @type {Array}
 */
civitas.SEASONS = [
	'spring',
	'summer',
	'autumn',
	'winter'
];

/**
 * Spring season.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.SEASON_SPRING = 0;

/**
 * Summer season.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.SEASON_SUMMER = 1;

/**
 * Autumn season.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.SEASON_AUTUMN = 2;

/**
 * Winter season.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.SEASON_WINTER = 3;

/**
 * List of the possible religion types.
 * 
 * @constant
 * @default
 * @type {Array}
 */
civitas.RELIGIONS = [
	'none',
	'christianity',
	'islam',
	'judaism',
	'buddhism',
	'hinduism',
	'confucianism',
	'taoism'
];

/**
 * No religion
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_NONE = 0;

/**
 * Christianity
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_CHRISTIANITY = 1;

/**
 * Islam
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_ISLAM = 2;

/**
 * Judaism
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_JUDAISM = 3;

/**
 * Buddhism
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_BUDDHISM = 4;

/**
 * Hinduism
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_HINDUISM = 5;

/**
 * Confucianism
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_CONFUCIANISM = 6;

/**
 * Taoism
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.RELIGION_TAOISM = 7;

/**
 * The minimum value settlement faith can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MIN_FAITH_VALUE = 1;

/**
 * The maximum value settlement faith can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_FAITH_VALUE = 1000;

/**
 * List of game diplomacy options.
 *
 * @constant
 * @default
 * @type {Array}
 */
civitas.DIPLOMACIES = [
	'truce',
	'war',
	'pact',
	'alliance',
	'cease fire',
	'pact proposed',
	'alliance proposed',
	'cease fire proposed',
	'proposed to join you',
	'vassal'
];

/**
 * The campaign is an army.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CAMPAIGN_ARMY = 1;

/**
 * The campaign is a caravan.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CAMPAIGN_CARAVAN = 2;

/**
 * The campaign is a spy.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CAMPAIGN_SPY = 3;

/**
 * The campaign is an army returning home with spoils of war.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CAMPAIGN_ARMY_RETURN = 4;

/**
 * Just met, temporary truce, can declare war, can trade.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_TRUCE = 0;

/**
 * At war, no trades possible.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_WAR = 1;

/**
 * In a pact, can declare war, can trade.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_PACT = 2;

/**
 * In an alliance, cannot declare war, can trade with discounts,
 * can share armies.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_ALLIANCE = 3;

/**
 * A cease fire means a temporary peace.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_CEASE_FIRE = 4;

/**
 * Propose pact.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_PACT = 5;

/**
 * Propose alliance.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_ALLIANCE = 6;

/**
 * Propose cease fire.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_CEASE_FIRE = 7;

/**
 * Propose to join your settlement.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_PROPOSE_JOIN = 8;

/**
 * Vassal villages count as part of your empire.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.DIPLOMACY_VASSAL = 9;

/**
 * Influence gained when selling goods to a settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.EXPORT_INFLUENCE = 2;

/**
 * Influence gained when buying goods from a settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.IMPORT_INFLUENCE = 1;

/**
 * Prestige gained when selling goods to a settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.EXPORT_PRESTIGE = 2;

/**
 * Prestige gained when buying goods from a settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.IMPORT_PRESTIGE = 1;

/**
 * The minimum value settlement prestige can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MIN_PRESTIGE_VALUE = 1;

/**
 * The maximum value settlement prestige can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_PRESTIGE_VALUE = 10000;

/**
 * The minimum value settlement espionage can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MIN_ESPIONAGE_VALUE = 1;

/**
 * The maximum value settlement espionage can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_ESPIONAGE_VALUE = 1000;

/**
 * The success rate of an espionage mission is the espionage points
 * assigned to the mission divided by this value.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_ESPIONAGE_SUCESS_RATE = 100;

/**
 * The minimum value settlement influence can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MIN_INFLUENCE_VALUE = 1;

/**
 * The maximum value settlement influence can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_INFLUENCE_VALUE = 100;

/**
 * Amount of influence your settlement loses each year.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.YEARLY_INFLUENCE_LOSS = 2;

/**
 * Amount of influence your settlement gains each year.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.YEARLY_INFLUENCE_GAIN = 2;

/**
 * List of game diplomacy options.
 *
 * @constant
 * @default
 * @type {Array}
 */
civitas.SPY_MISSIONS = [
	'none',
	'adopt religion',
	'influence settlement',
	'steal resources',
	'instigate turmoil'
];

/**
 * Spy mission to do absolutely nothing in the target city (except
 * maybe get noticed?).
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SPY_MISSION_NONE = 0;

/**
 * Spy mission to persuade the target city to take the same religion
 * as the spy home city.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SPY_MISSION_RELIGION = 1;

/**
 * Spy mission to raise the influence of the spy's home city with the
 * target city.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SPY_MISSION_INFLUENCE = 2;

/**
 * Spy mission to steal resources from the target city.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SPY_MISSION_STEAL_RESOURCES = 3;

/**
 * Spy mission to instigate turmoil in the target city.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SPY_MISSION_INSTIGATE = 4;

/**
 * Initial resource costs for sending a caravan.
 *
 * @constant
 * @default
 * @type {Object}
 */
civitas.CARAVAN_COSTS = {
	coins: 100,
	donkeys: 10,
	wood: 10,
	ropes: 2,
	provisions: 1
}

/**
 * Initial resource costs for sending a spy mission.
 *
 * @constant
 * @default
 * @type {Object}
 */
civitas.SPY_COSTS = {
	coins: 50,
	spyglasses: 1,
	weapons: 1,
	provisions: 1
}

/**
 * Initial resource costs for sending a scout mission.
 *
 * @constant
 * @default
 * @type {Object}
 */
civitas.SCOUT_COSTS = {
	coins: 50,
	spyglasses: 1,
	provisions: 1
}

/**
 * Scouting mission to reveal information about the target.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SCOUT_MISSION_INFO = 1;

/**
 * Initial resource costs for sending an army.
 *
 * @constant
 * @default
 * @type {Object}
 */
civitas.ARMY_COSTS = {
	coins: 200,
	provisions: 1
}

/**
 * Amount of influence a settlement gains when sending a caravan
 * to another settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CARAVAN_INFLUENCE = 5;

/**
 * Diplomacy proposal action.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.ACTION_DIPLOMACY = 0;

/**
 * Campaign action.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.ACTION_CAMPAIGN = 1;

/**
 * Research action.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.ACTION_RESEARCH = 2;

/**
 * Build a special place action.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.ACTION_BUILD_PLACE = 2;

/**
 * List of the possible nation types.
 * 
 * @constant
 * @default
 * @type {Array}
 */
civitas.NATIONS = [
	'none',
	'phoenician',
	'carthaginian',
	'greek',
	'egyptian',
	'assyrian',
	'roman',
	'thracian',
	'sudanese',
	'spanish',
	'sumerian',
	'chinese',
	'indian',
	'franks',
	'russian',
	'nigerian',
	'malinese',
	'mongolian',
	'tibetan',
	'persan',
	'khmer',
	'japanese',
	'french'
];

/**
 * Phoenicians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_PHOENICIAN = 1;

/**
 * Carthaginans
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_CARTHAGINIAN = 2;

/**
 * Greeks
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_GREEK = 3;

/**
 * Egyptians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_EGYPTIAN = 4;

/**
 * Assyrians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_ASSYRIAN = 5;

/**
 * Romans
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_ROMAN = 6;

/**
 * Thracians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_THRACIAN = 7;

/**
 * Sudanese
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_SUDANESE = 8;

/**
 * Spanish
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_SPANISH = 9;

/**
 * Sumerians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_SUMERIAN = 10;

/**
 * Chinese
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_CHINESE = 11;

/**
 * Indian
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_INDIAN = 12;

/**
 * Franks
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_FRANKS = 13;

/**
 * Russians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_RUSSIAN = 14;

/**
 * Nigerians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_NIGERIAN = 15;

/**
 * Malinese
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_MALINESE = 16;

/**
 * Mongolians
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_MONGOLIAN = 17;

/**
 * Tibetans
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_TIBETAN = 18;

/**
 * Persans
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_PERSAN = 19;

/**
 * Khmer
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_KHMER = 20;

/**
 * Japanese
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_JAPANESE = 21;

/**
 * French
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.NATION_FRENCH = 22;

/**
 * List of the possible climate types.
 * 
 * @constant
 * @default
 * @type {Array}
 */
civitas.CLIMATES = [
	'none',
	'temperate',
	'tropical',
	'arid',
	'polar'
];

/**
 * Temperate climate, all balanced.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.CLIMATE_TEMPERATE = 1;

/**
 * Tropical climate, favoring farms and exotic goods.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.CLIMATE_TROPICAL = 2;

/**
 * Arid climate, favoring ore mines.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.CLIMATE_ARID = 3;

/**
 * Polar climate, very extreme.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.CLIMATE_POLAR = 4;

/**
 * List of the possible ruler personality types.
 * 
 * @constant
 * @default
 * @type {Array}
 */
civitas.PERSONALITIES = [
    'none',
    'balanced',
    'diplomat',
    'warlord'
];

/**
 * Balanced type, the ruler weights in all the possibilities before deciding
 * whether to go to war or let diplomacy win.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.PERSONALITY_BALANCED = 1;

/**
 * The ruler will always consider diplomacy before going to war.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.PERSONALITY_DIPLOMAT = 2;

/**
 * If you upset this ruler, he will go to war and give you hell.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.PERSONALITY_WARLORD = 3;

/**
 * The attacking side (left) in a battleground.
 *
 * @type {Number}
 * @default
 * @constant
 */
civitas.BATTLEGROUND_ATTACK = 1;

/**
 * The defending side (right) in a battleground.
 *
 * @type {Number}
 * @default
 * @constant
 */
civitas.BATTLEGROUND_DEFENSE = 2;

/**
 * List of soldier types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
civitas.SOLDIERS = {
	militia: {
		name: 'Militia',
		attack: 1,
		defense: 1,
		moves: 1,
		cost: {
			coins: 100,
			bread: 1,
			weapons: 1
		}
	},
	swordsman: {
		name: 'Swordsman',
		attack: 2,
		defense: 2,
		moves: 2,
		cost: {
			coins: 300,
			bread: 1,
			meat: 1,
			weapons: 2
		}
	},
	axeman: {
		name: 'Axeman',
		attack: 3,
		defense: 1,
		moves: 2,
		cost: {
			coins: 400,
			bread: 1,
			meat: 3,
			weapons: 2
		}
	},
	bowman: {
		name: 'Bowman',
		attack: 3,
		defense: 1,
		ranged: 5,
		moves: 3,
		cost: {
			coins: 500,
			bread: 1,
			meat: 3,
			weapons: 4
		}
	},
	pikeman: {
		name: 'Pikeman',
		attack: 2,
		defense: 4,
		moves: 2,
		cost: {
			coins: 700,
			provisions: 1,
			iron: 1,
			weapons: 5,
			armor: 1
		}
	},
	crossbowman: {
		name: 'Crossbowman',
		attack: 5,
		defense: 2,
		moves: 3,
		ranged: 8,
		cost: {
			coins: 1000,
			provisions: 2,
			iron: 1,
			weapons: 7,
			armor: 1
		}
	},
	knight: {
		name: 'Knight',
		attack: 6,
		defense: 6,
		moves: 4,
		cost: {
			coins: 1500,
			provisions: 3,
			iron: 1,
			weapons: 9,
			armor: 4
		}
	},
	legionnaire: {
		name: 'Legionnaire',
		attack: 7,
		defense: 7,
		moves: 2,
		cost: {
			coins: 2500,
			provisions: 6,
			iron: 2,
			weapons: 12,
			armor: 12
		}
	},
	crusader: {
		name: 'Crusader',
		attack: 9,
		defense: 9,
		moves: 4,
		cost: {
			coins: 3000,
			provisions: 8,
			iron: 4,
			weapons: 15,
			armor: 15
		}
	},
	cannon: {
		name: 'Cannon',
		attack: 15,
		defense: 1,
		moves: 0,
		siege: true,
		ranged: 20,
		cost: {
			coins: 25000,
			provisions: 30,
			gunpowder: 30,
			iron: 40,
			steel: 20,
			cannons: 1
		}
	},
	catapult: {
		name: 'Catapult',
		attack: 50,
		defense: 1,
		ranged: 20,
		siege: true,
		moves: 0,
		cost: {
			coins: 100000,
			provisions: 100,
			gunpowder: 150,
			iron: 140,
			catapults: 1
		}
	}
};

/**
 * List of mercenary armies available for hire.
 * 
 * @constant
 * @type {Object}
 */
civitas.MERCENARIES = [{
	name: 'Legio I Adiutrix',
	description: 'Legio prima Adiutrix is a Roman legion.',
	handle: 'legio1',
	icon: 1,
	army: {
		axeman: 300,
		knight: 100,
		crossbowman: 220,
		pikeman: 200,
		legionnaire: 100
	},
	cost: 120000
}, {
	name: 'Legio II Augusta',
	description: 'Legio secunda Augusta is a Roman legion.',
	handle: 'legio2',
	icon: 8,
	army: {
		axeman: 220,
		knight: 100,
		crossbowman: 300,
		pikeman: 100,
		legionnaire: 100
	},
	cost: 130000
}, {
	name: 'Legio III Cyrenaica',
	description: 'Legio tertia Cyrenaica is a Roman legion.',
	handle: 'legio3',
	icon: 15,
	army: {
		axeman: 280,
		crossbowman: 500,
		pikeman: 180,
		legionnaire: 100
	},
	cost: 100000
}, {
	name: 'Legio IV Flavia Felix',
	description: 'Legio quarta Flavia Felix is a Roman legion.',
	handle: 'legio4',
	icon: 9,
	army: {
		militia: 140,
		axeman: 190,
		knight: 90,
		bowman: 20,
		crossbowman: 100,
		pikeman: 180,
		legionnaire: 100
	},
	cost: 190000
}, {
	name: 'Legio V Alaudae',
	description: 'Legio quinta Alaudae is a Roman legion.',
	handle: 'legio5',
	icon: 16,
	army: {
		militia: 100,
		axeman: 200,
		bowman: 190,
		legionnaire: 130
	},
	cost: 110000
}, {
	name: 'Legio VI Victrix',
	description: 'Legio sexta Victrix is a Roman legion.',
	handle: 'legio6',
	icon: 22,
	army: {
		militia: 330,
		axeman: 230,
		knight: 100,
		bowman: 100,
		legionnaire: 100
	},
	cost: 140000
}, {
	name: 'Varangian Guard',
	description: 'The Varangian Guard is an elite unit of the Byzantine Army.',
	handle: 'varangian',
	icon: 18,
	army: {
		militia: 410,
		axeman: 210,
		bowman: 190,
		crossbowman: 100,
		pikeman: 220
	},
	cost: 120000
}, {
	name: 'Magna Societas Catalanorum',
	description: 'The Catalan Company of the East, officially the Magna ' +
		'Societas Catalanorum is a company of mercenaries founded by Roger de ' +
		'Flor.',
	handle: 'catalan',
	icon: 23,
	army: {
		axeman: 310,
		knight: 120,
		bowman: 210,
		pikeman: 310
	},
	cost: 100000
}, {
	name: 'Army of the Western Garden',
	description: 'The Army of the Western Garden is an army established ' +
		'during the reign of Emperor Ling in the Eastern Han Dynasty.',
	handle: 'western',
	icon: 27,
	army: {
		axeman: 290,
		knight: 40,
		bowman: 170,
		pikeman: 300
	},
	cost: 90000
}, {
	name: 'Scholae Palatinae',
	description: 'The Scholae Palatinae are an elite military guard unit, ' +
		'usually ascribed to the Roman Emperor Constantine the Great as a ' +
		'replacement for the equites singulares Augusti, the cavalry arm ' +
		'of the Praetorian Guard.',
	handle: 'scholae',
	icon: 26,
	army: {
		axeman: 10,
		knight: 200,
		bowman: 100,
		pikeman: 210
	},
	cost: 290000
}, {
	name: 'Imperial Guards',
	description: 'The Imperial Guards of the Tang Dynasty, also known as ' +
		'the Forbidden Troops were initially honor guards of the emperor ' +
		'and garrisons of the imperial capitals during the Tang`s dinasty ' +
		'formation in early 7th century.',
	handle: 'forbidden',
	icon: 25,
	army: {
		axeman: 290,
		knight: 80,
		bowman: 100,
		pikeman: 210
	},
	cost: 130000
}, {
	name: 'Navy of the Order of Saint John',
	description: 'The navy of the Order of Saint John, also known as the ' +
		'Maltese Navy, was the first navy of a chivalric order, established ' +
		'in the Middle Ages, around the late 12th century.',
	handle: 'maltesenavy',
	icon: 28,
	navy: {
		corsair: 19,
		caravel: 14,
		warship: 12,
		shipoftheline: 10
	},
	cost: 1500000
}];

/**
 * List of ship types, their attributes and cost.
 * 
 * @type {Object}
 * @constant
 */
civitas.SHIPS = {
	corsair: {
		name: 'Corsair',
		attack: 5,
		defense: 5,
		cost: {
			coins: 1000,
			wood: 200,
			iron: 50,
			provisions: 50,
			ropes: 10,
			cottonfabric: 5,
			cannons: 5,
			gunpowder: 2
		}
	},
	caravel: {
		name: 'Caravel',
		attack: 10,
		defense: 10,
		cost: {
			coins: 3000,
			wood: 400,
			iron: 80,
			provisions: 60,
			ropes: 30,
			cottonfabric: 10,
			cannons: 20,
			gunpowder: 5,
			weapons: 10
		}
	},
	frigatte: {
		name: 'Frigatte',
		attack: 17,
		defense: 8,
		cost: {
			coins: 3000,
			wood: 400,
			iron: 80,
			provisions: 60,
			ropes: 30,
			cottonfabric: 20,
			cannons: 30,
			gunpowder: 10,
			weapons: 10
		}
	},
	galleon: {
		name: 'Galleon',
		attack: 15,
		defense: 15,
		cost: {
			coins: 5000,
			wood: 300,
			woodplanks: 600,
			iron: 150,
			provisions: 100,
			ropes: 80,
			cottonfabric: 30,
			cannons: 20,
			gunpowder: 15,
			weapons: 15
		}
	},
	warship: {
		name: 'Warship',
		attack: 35,
		defense: 30,
		cost: {
			coins: 10000,
			wood: 400,
			woodplanks: 800,
			iron: 500,
			steel: 100,
			provisions: 200,
			ropes: 100,
			cottonfabric: 40,
			cannons: 50,
			weapons: 20,
			gunpowder: 20,
			carpets: 10
		}
	},
	shipoftheline: {
		name: 'Ship of the Line',
		attack: 55,
		defense: 50,
		cost: {
			coins: 15000,
			wood: 500,
			woodplanks: 1000,
			coal: 500,
			iron: 1500,
			steel: 400,
			provisions: 200,
			barrels: 100,
			ropes: 100,
			cottonfabric: 50,
			cannons: 100,
			gunpowder: 30,
			weapons: 50
		}
	}
};

/**
 * The minimum value settlement research can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MIN_RESEARCH_VALUE = 1;

/**
 * The maximum value settlement research can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_RESEARCH_VALUE = 1000;

/**
 * List of all game research technologies.
 * 
 * @constant
 * @type {Array}
 */
civitas.TECHNOLOGIES = [
	{
		name: 'Agriculture',
		handle: 'agriculture',
		description: 'The development of agriculture enables the human population to grow many times larger than could be sustained by hunting and gathering.',
		duration: 80,
		cost: {
			research: 500,
			coins: 500000,
			woodplanks: 200,
			wheat: 100,
			tools: 10
		},
		effect: {
			buildings: {
				cottonfarm: 1,
				grainfarm: 1,
				grapesfarm: 1,
				rosenursery: 1,
				tobaccofarm: 1,
				almondsfarm: 1,
				coffeefarm: 1,
				datesfarm: 1,
				indigofarm: 1,
				sugarfarm: 1
			}
		}
	}, {
		name: 'Animal Enclosures',
		handle: 'animalenclosure',
		description: 'Animal enclosures will allow your animal farms to raise more livestock.',
		duration: 70,
		cost: {
			research: 400,
			coins: 300000,
			woodplanks: 100,
			iron: 100
		},
		effect: {
			buildings: {
				cattlefarm: 1,
				pigfarm: 1,
				goatfarm: 1,
				apiary: 1
			}
		}
	}, {
		name: 'Archeology',
		handle: 'archeology',
		description: '',
		duration: 96,
		cost: {
			research: civitas.MAX_RESEARCH_VALUE,
			coins: 200000,
			prestige: 100
		},
		effect: {
		}
	}, {
		name: 'Canned Food',
		handle: 'cannedfood',
		description: 'Canning is a method of preserving food in which the food contents are processed and sealed in an airtight container (jars like Mason jars, and steel and tin cans).',
		duration: 50,
		cost: {
			research: 500,
			coins: 200000,
			meals: 100,
			bread: 50,
			meat: 50,
			iron: 20
		},
		effect: {
			buildings: {
				cookhouse: 1,
				butcher: 1,
				bakery: 1
			}
		}
	}, {
		name: 'Circular Saw',
		handle: 'circularsaw',
		description: 'The circular saw was invented around the end of the 18th century as a rip-saw to convert logs into lumber in sawmills and various claims have been made as to who invented the circular saw.',
		duration: 120,
		cost: {
			research: 300,
			coins: 200000,
			wood: 200,
			woodplanks: 100
		},
		effect: {
			buildings: {
				carpenter: 2,
				lumberjack: 2
			}
		}
	}, {
		name: 'Diplomacy',
		handle: 'diplomacy',
		description: 'Researching diplomacy will give a boost to your Embassy`s production of fame and espionage.',
		duration: 320,
		cost: {
			research: civitas.MAX_RESEARCH_VALUE,
			coins: 500000,
			soap: 100,
			jewelery: 100,
			alcohol: 10,
			perfume: 10,
			donkeys: 50
		},
		effect: {
			buildings: {
				embassy: 10
			}
		}
	}, {
		name: 'Distillery',
		handle: 'distillery',
		description: 'If you need more beer or wine in your settlement, research this technology.',
		duration: 120,
		cost: {
			research: 500,
			coins: 500000,
			alcohol: 200,
			barrels: 100,
			bottles: 100,
			wine: 100,
			coal: 400,
			copper: 100
		},
		effect: {
			buildings: {
				winery: 1,
				brewery: 1
			}
		}
	}, {
		name: 'Minerals',
		handle: 'minerals',
		description: 'Digging deeper into the mountains, your settlers will find more minerals if you research this technology.',
		duration: 120,
		cost: {
			research: 700,
			coins: 500000,
			steel: 200,
			glass: 1000,
			iron: 100
		},
		effect: {
			buildings: {
				ironmine: 1,
				coppermine: 1,
				goldmine: 1
			}
		}
	}, {
		name: 'Projectiles',
		handle: 'projectiles',
		description: 'Researching heavy projectiles will give a production boost to your Cannon Foundry and Catapult Workshop.',
		duration: 200,
		cost: {
			research: civitas.MAX_RESEARCH_VALUE,
			coins: 800000,
			steel: 200,
			gunpowder: 100,
			coal: 300,
			copper: 50,
			sulphur: 100,
			glass: 1000
		},
		effect: {
			buildings: {
				cannonfoundry: 1,
				catapultworkshop: 1
			}
		}
	}, {
		name: 'Railway',
		handle: 'railway',
		description: 'Researching the railway will break in half the time required to travel from one city to another.',
		duration: 300,
		cost: {
			research: civitas.MAX_RESEARCH_VALUE,
			coins: 1000000,
			steel: 1000,
			glass: 1000,
			gunpowder: 500,
			iron: 1000,
			woodplanks: 100
		},
		effect: {
			distance: 2
		}
	}, {
		name: 'Sewing machine',
		handle: 'sewingmachine',
		description: 'Sewing machine technology will give a boost to your buildings responsible with manufacturing clothes and textile goods.',
		duration: 36,
		cost: {
			research: 500,
			coins: 100000,
			cottonfabric: 100,
			cotton: 100,
			leather: 100,
			steel: 100,
			copper: 20,
			glass: 100
		},
		effect: {
			buildings: {
				clothingfactory: 2,
				weaver: 2,
				furrier: 2
			}
		}
	}, {
		name: 'Taxation',
		handle: 'taxation',
		description: 'Researching taxation will provide an extra 100 coins from each of your houses, regardless of their level.',
		duration: 260,
		cost: {
			research: civitas.MAX_RESEARCH_VALUE,
			coins: 1000000,
			gold: 1000,
			silver: 1000
		},
		effect: {
			tax: 100
		}
	}, {
		name: 'Trawlers',
		handle: 'trawlers',
		description: 'Researching this technology will provide your ships with better trawl nets, therefore giving a boost to your settlement`s Shipyard.',
		duration: 36,
		cost: {
			research: 200,
			coins: 100000,
			cottonfabric: 100,
			cotton: 100
		},
		effect: {
			buildings: {
				shipyard: 1,
				fisherman: 1
			}
		}
	}
];

/**
 * All the buildings for a city.
 * 
 * @constant
 * @type {Array}
 */
civitas.BUILDINGS_ALL = [
	'marketplace', 'lumberjack', 'barracks', 'warehouse', 'mill', 'castle',
	'stonequarry', 'claymine', 'ironmine', 'trapper', 'almondsfarm',
	'almondsfield', 'tavern', 'shipyard', 'pigfarm', 'cattlefarm',
	'pigfield', 'cattlefield', 'house1', 'house2', 'house3', 'house4',
	'house5', 'house6', 'house7', 'datesfarm', 'datesfield', 'house8',
	'house9', 'house10', 'house11', 'church', 'bakery', 'butcher',
	'grainfarm', 'grainfield', 'ironsmelter', 'tannery', 'furrier',
	'coppermine', 'goldmine', 'goldsmelter', 'coppersmelter', 'armory',
	'coffeefarm', 'coffeefield', 'cottonfarm', 'cottonfield', 'sugarfarm',
	'spicefarm', 'spicefield', 'sugarfield', 'silkfarm', 'silkfield',
	'coffeeroaster', 'quartzmine', 'grapesfarm', 'grapesfield', 'winery',
	'carpenter', 'pottery', 'jeweler', 'toolmaker', 'saltprocessor',
	'charcoalburnerhut', 'opticiansworkshop', 'papermill',
	'printingpress', 'redsmithsworkshop', 'ropeyard', 'glassworks',
	'provisions', 'silkweaver', 'gunpowdermill', 'goatfarm', 'goatfield',
	'coalmine', 'carpetmanufacturer', 'apiary', 'beehive', 'barrelcooperage',
	'brewery', 'candlemakersworkshop', 'indigofarm', 'indigofield',
	'sugarmill', 'rosenursery', 'rosefield', 'fisherman',
	'catapultworkshop', 'cannonfoundry', 'cosmetics', 'tradingpost',
	'clothingfactory', 'weaver', 'embassy',  'academy', 'marzipanworkshop',
	'brickworks', 'tobaccofarm', 'tobaccofield', 'cookhouse'
];

/**
 * Buildings' categories.
 * 
 * @constant
 * @type {Object}
 */
civitas.BUILDINGS_CATEGORIES = {
	'Municipal': [
		'academy',
		'church',
		'embassy',
		'marketplace',
		'shipyard',
		'tavern',
		'tradingpost',
		'warehouse'
	],
	'Housing': [
		'house1',
		'house2',
		'house3',
		'house4',
		'house5',
		'house6',
		'house7',
		'house8',
		'house9',
		'house10',
		'house11'
	],
	'Food': [
		'bakery',
		'butcher',
		'cookhouse',
		'fisherman',
		'mill'
	],
	'Mines': [
		'claymine',
		'coalmine',
		'coppermine',
		'goldmine',
		'ironmine',
		'quartzmine',
		'stonequarry'
	],
	'Farms': [
		'almondsfarm',
		'almondsfield',
		'apiary',
		'beehive',
		'cattlefarm',
		'cattlefield',
		'coffeefarm',
		'coffeefield',
		'cottonfarm',
		'cottonfield',
		'datesfarm',
		'datesfield',
		'goatfarm',
		'goatfield',
		'grainfarm',
		'grainfield',
		'grapesfarm',
		'grapesfield',
		'indigofarm',
		'indigofield',
		'pigfarm',
		'pigfield',
		'rosenursery',
		'rosefield',
		'silkfarm',
		'silkfield',
		'spicefarm',
		'spicefield',
		'sugarfarm',
		'sugarfield',
		'tobaccofarm',
		'tobaccofield'
	],
	'Industry': [
		'barrelcooperage',
		'brewery',
		'brickworks',
		'candlemakersworkshop',
		'carpenter',
		'charcoalburnerhut',
		'clothingfactory',
		'coppersmelter',
		'furrier',
		'glassworks',
		'goldsmelter',
		'gunpowdermill',
		'ironsmelter',
		'lumberjack',
		'pottery',
		'ropeyard',
		'saltprocessor',
		'trapper',
		'tannery',
		'toolmaker',
		'weaver'
	],
	'Luxury': [
		'carpetmanufacturer',
		'coffeeroaster',
		'jeweler',
		'marzipanworkshop',
		'opticiansworkshop',
		'papermill',
		'cosmetics',
		'printingpress',
		'redsmithsworkshop',
		'silkweaver',
		'sugarmill',
		'winery'
	],
	'Military': [
		'armory',
		'cannonfoundry',
		'castle',
		'catapultworkshop',
		'barracks',
		'provisions'
	]
};

/**
 * List of all game buildings.
 * 
 * @constant
 * @type {Array}
 */
civitas.BUILDINGS = [
	{
		name: 'Marketplace',
		handle: 'marketplace',
		description: 'The Marketplace is the main building of your settlement and provides a place for the settlers to gather. It cannot be demolished.',
		storage: 50000,
		is_municipal: true,
		levels: 5,
		large: true,
		visible_upgrades: true,
		position: {
			x: 1600,
			y: 500
		},
		production: {
			fame: 3
		},
		cost: {
			coins: 100000
		},
		requires: {
			settlement_level: 1
		}
	}, {
		name: 'Warehouse',
		handle: 'warehouse',
		description: 'The Warehouse is a trade building that provides market carts that pick up goods from production buildings. A Warehouse also adds extra storage space for the materials in your city.',
		storage: 100000,
		levels: 10,
		visible_upgrades: true,
		position: {
			x: 670,
			y: 970
		},
		cost: {
			coins: 150000,
			wood: 500,
			bricks: 30,
			woodplanks: 200,
			stones: 500,
			tools: 50
		},
		requires: {
			settlement_level: 16
		}
	}, {
		name: 'Church',
		handle: 'church',
		description: 'A Church provides a massive fame boost to your settlement by using coins and converting them to fame, as well as providing faith for free. Faith allows you to choose a religion for your settlement.',
		is_municipal: true,
		levels: 3,
		large: true,
		position: {
			x: 1600,
			y: 820
		},
		production: {
			fame: 5,
			faith: 1
		},
		materials: {
			coins: 50
		},
		cost: {
			coins: 10000,
			wood: 20,
			woodplanks: 20,
			stones: 20,
			tools: 10
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Trading Post',
		handle: 'tradingpost',
		description: 'The Trading Post is a merchant building that allows you to trade resources with the other settlements in the world. Also allows you to use the powerful Auctioneer.',
		is_municipal: true,
		storage: 10000,
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 2300,
			y: 1370
		},
		cost: {
			coins: 15000,
			wood: 40,
			woodplanks: 40,
			stones: 40
		},
		requires: {
			settlement_level: 4
		}
	}, {
		name: 'Academy',
		handle: 'academy',
		description: 'The Academy provides a minor amount of fame each day as well as research for this settlement at the expense of coins. All technologies will be researched here by your settlement`s scholars.',
		is_municipal: true,
		visible_upgrades: true,
		large: true,
		levels: 5,
		position: {
			x: 1320,
			y: 640
		},
		production: {
			fame: 5,
			research: 1
		},
		materials: {
			coins: 100
		},
		cost: {
			coins: 100000,
			woodplanks: 500,
			stones: 500,
			tools: 20
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Embassy',
		handle: 'embassy',
		description: 'An Embassy is required to propose pacts, declare war, send spies to other settlements, basically any diplomacy.',
		is_municipal: true,
		large: true,
		levels: 3,
		position: {
			x: 1840,
			y: 740
		},
		production: {
			fame: 5,
			espionage: 1
		},
		materials: {
			coins: 50
		},
		cost: {
			coins: 100000,
			woodplanks: 100,
			stones: 100,
			tools: 10
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Provision House',
		handle: 'provisions',
		description: 'The Provision House requires various goods to produce provisions for military units and expeditions.',
		levels: 3,
		position: {
			x: 290,
			y: 780
		},
		production: {
			provisions: 2
		},
		materials: {
			meals: 1,
			clothes: 1,
			leather: 1,
			pottery: 1,
			ropes: 1
		},
		cost: {
			coins: 100000,
			wood: 200,
			stones: 200,
			woodplanks: 100
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Tavern',
		handle: 'tavern',
		description: 'The Tavern is the place where heroes of the known (and unknown) world hang around. If you are looking to recruit Achilles, build a Tavern and he might show up.',
		is_municipal: true,
		levels: 3,
		position: {
			x: 1920,
			y: 550
		},
		materials: {
			coins: 20,
			meals: 1,
		},
		cost: {
			coins: 100000,
			woodplanks: 200,
			stones: 200,
			wood: 200,
			wine: 100,
			bricks: 10,
			meat: 100,
			tools: 50
		},
		requires: {
			settlement_level: 16,
			buildings: {
				academy: 2
			}
		}
	}, {
		name: 'Shipyard',
		handle: 'shipyard',
		description: 'The Shipyard helps you expand your settlement overseas by housing your ships and providing you with fish, oil and an ultra-small chance to gather pearls.',
		large: true,
		levels: 5,
		position: {
			x: 2430,
			y: 900
		},
		chance: {
			pearls: 0.005
		},
		cost: {
			coins: 200000,
			wood: 200,
			woodplanks: 200,
			stones: 100,
			ropes: 10,
			barrels: 10,
			tools: 20
		},
		production: {
			fish: 3,
			oil: 1
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Barracks',
		handle: 'barracks',
		description: 'The Barracks is your main base of defense and attack. If you plan on going to war, you will need one. It also raises your settlement`s prestige.',
		levels: 5,
		visible_upgrades: true,
		large: true,
		position: {
			x: 1970,
			y: 950
		},
		production: {
			prestige: 1
		},
		cost: {
			coins: 50000,
			wood: 200,
			woodplanks: 200,
			stones: 160,
			tools: 10
		},
		requires: {
			settlement_level: 8,
			buildings: {
				provisions: 1
			}
		}
	}, {
		name: 'Castle',
		handle: 'castle',
		description: 'The Castle is your main base of operations. It houses your settlement`s soldiers and provides you with prestige and some extra fame.',
		is_municipal: true,
		large: true,
		levels: 2,
		position: {
			x: 700,
			y: 1200
		},
		production: {
			fame: 100,
			prestige: 1
		},
		materials: {
			coins: 200
		},
		cost: {
			coins: 1000000,
			wood: 500,
			iron: 500,
			woodplanks: 500,
			stones: 500,
			bricks: 500,
			steel: 50,
			tools: 100
		},
		requires: {
			settlement_level: 20,
			buildings: {
				barracks: 1,
				provisions: 2
			}
		}
	}, {
		name: 'Lumberjack',
		handle: 'lumberjack',
		description: 'A Lumberjack provides you with wood which you can use for creating additional buildings, resources or sell to other settlements.',
		levels: 5,
		position: {
			x: 1840,
			y: 340
		},
		production: {
			wood: 4
		},
		cost: {
			coins: 2000,
			stones: 20
		},
		requires: {
			settlement_level: 1
		}
	}, {
		name: 'Carpenter',
		handle: 'carpenter',
		description: 'The Carpenter processes the wood from the Lumberjack into wood planks that are required for more advanced buildings.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 2060,
			y: 460
		},
		materials: {
			wood: 2
		},
		production: {
			woodplanks: 2
		},
		cost: {
			coins: 5000,
			wood: 10,
			stones: 10
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Stone Quarry',
		handle: 'stonequarry',
		description: 'A Stone Quarry produces stone blocks that are essential for the construction of any settlement`s buildings.',
		visible_upgrades: true,
		levels: 6,
		position: {
			x: 930,
			y: 290
		},
		production: {
			stones: 1
		},
		cost: {
			coins: 2000,
			wood: 20
		},
		chance: {
			mosaic: 0.001,
			limestone: 0.01,
			sand: 0.05
		},
		requires: {
			settlement_level: 1
		}
	}, {
		name: 'Gold Mine',
		handle: 'goldmine',
		description: 'The Gold Mine extracts gold ore, that can be smelted later into gold bars.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1010,
			y: 200
		},
		production: {
			goldore: 3
		},
		chance: {
			gems: 0.0004,
			diamonds: 0.0004
		},
		cost: {
			coins: 10000,
			woodplanks: 20,
			stones: 20
		},
		requires: {
			settlement_level: 6
		}
	}, {
		name: 'Coal Mine',
		handle: 'coalmine',
		description: 'The Coal Mine extracts coal from the mountains you own (provided you own some).',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1180,
			y: 240
		},
		production: {
			coal: 4
		},
		chance: {
			gems: 0.0001,
			diamonds: 0.0001
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 7
		}
	}, {
		name: 'Iron Mine',
		handle: 'ironmine',
		description: 'The Iron Mine extracts iron ore, that can be smelted later into iron bars.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 380,
			y: 620
		},
		production: {
			ironore: 3
		},
		chance: {
			gems: 0.0002,
			diamonds: 0.0002
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Salt Processor',
		handle: 'saltprocessor',
		description: 'A Salt Processor processes seawater and retrieves salt.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 500,
			y: 540
		},
		production: {
			salt: 3
		},
		cost: {
			coins: 8000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 5
		}
	}, {
		name: 'Clay Mine',
		handle: 'claymine',
		description: 'The Clay Mine produces clay which is required later for bricks and pottery.',
		levels: 5,
		position: {
			x: 2900,
			y: 800
		},
		production: {
			clay: 2
		},
		cost: {
			coins: 5000,
			wood: 20,
			stones: 20
		},
		chance: {
			limestone: 0.01,
			sand: 0.1
		},
		requires: {
			settlement_level: 2
		}
	}, {
		name: 'Copper Mine',
		handle: 'coppermine',
		description: 'The copper mine extracts copper ore, that can be smelted later into copper bars.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1310,
			y: 110
		},
		production: {
			copperore: 3
		},
		chance: {
			gems: 0.0001,
			diamonds: 0.0002
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 5
		}
	}, {
		name: 'Flour Mill',
		handle: 'mill',
		description: 'The Flour Mill produces flour from the wheat cultivated by your Grain Farm.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1360,
			y: 1180
		},
		production: {
			flour: 2
		},
		materials: {
			wheat: 2
		},
		cost: {
			coins: 10000,
			woodplanks: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Bakery',
		handle: 'bakery',
		description: 'The Bakery creates bread from flour, therefore providing your settlers with basic food.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 550,
			y: 910
		},
		production: {
			bread: 3
		},
		materials: {
			flour: 2
		},
		cost: {
			coins: 15000,
			woodplanks: 30,
			stones: 30
		},
		requires: {
			settlement_level: 4
		}
	}, {
		name: 'Pottery Workshop',
		handle: 'pottery',
		description: 'The Pottery Workshop uses a high-temperature kiln and clay to create pottery for the inhabitants of your settlement.',
		levels: 3,
		position: {
			x: 1740,
			y: 1240
		},
		production: {
			pottery: 4
		},
		materials: {
			clay: 3
		},
		cost: {
			coins: 30000,
			woodplanks: 30,
			stones: 30,
			clay: 100
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Gunpowder Mill',
		handle: 'gunpowdermill',
		description: 'A Gunpowder Mill is creating highly useful (and unstable) gunpowder from the sulphur found in your Charcoal Burner`s Hut.',
		levels: 3,
		position: {
			x: 500,
			y: 1370
		},
		production: {
			gunpowder: 1
		},
		materials: {
			sulphur: 10
		},
		cost: {
			coins: 30000,
			woodplanks: 30,
			stones: 30,
			bricks: 50,
			clay: 50,
			tools: 20
		},
		requires: {
			settlement_level: 26
		}
	}, {
		name: 'Armory',
		handle: 'armory',
		description: 'The Armory is a major building that produces weapons and armor for your soldiers. If you want to conquer other settlements, you will need to build one and keep it stocked with materials.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1820,
			y: 180
		},
		production: {
			weapons: 1,
			armor: 1
		},
		materials: {
			iron: 10,
			wood: 2,
			leather: 8,
			copper: 4
		},
		cost: {
			coins: 50000,
			woodplanks: 100,
			stones: 100,
			tools: 20
		},
		requires: {
			settlement_level: 9
		}
	}, {
		name: 'Butcher',
		handle: 'butcher',
		description: 'The Butcher slaughters cattle, pigs or goats for meat, providing meat, a food type that is more nutritious. Hides will be processed further at the Tannery.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 420,
			y: 850
		},
		production: {
			meat: 3,
			hides: 2,
			tallow: 1
		},
		materials: [
			{
				pig: 1,
				cattle: 1,
				goat: 1
			}, {
				salt: 1
			}
		],
		cost: {
			coins: 20000,
			woodplanks: 40,
			stones: 40
		},
		requires: {
			settlement_level: 5
		}
	}, {
		name: 'Iron smelter',
		handle: 'ironsmelter',
		description: 'The Iron Smelter (or foundry) smelts iron ore into iron bars using coal.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1140,
			y: 100
		},
		production: {
			iron: 4
		},
		materials: {
			ironore: 4,
			coal: 2
		},
		chance: {
			steel: 0.05
		},
		cost: {
			coins: 30000,
			woodplanks: 40,
			stones: 50
		},
		requires: {
			settlement_level: 7
		}
	}, {
		name: 'Copper smelter',
		handle: 'coppersmelter',
		description: 'The Copper Smelter smelts copper ore into copper bars using coal.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1480,
			y: 150
		},
		production: {
			copper: 2
		},
		materials: {
			copperore: 4,
			coal: 1
		},
		cost: {
			coins: 40000,
			woodplanks: 50,
			stones: 50
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Gold smelter',
		handle: 'goldsmelter',
		description: 'The Gold Smelter smelts gold ore into gold bars using coal.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1680,
			y: 230
		},
		production: {
			gold: 1
		},
		materials: {
			goldore: 4,
			coal: 1
		},
		cost: {
			coins: 40000,
			woodplanks: 55,
			bricks: 5,
			stones: 55
		},
		requires: {
			settlement_level: 12
		}
	}, {
		name: 'Trapper`s Lodge',
		handle: 'trapper',
		description: 'The trapper captures wild animals and slaughters them, gathering their furs and some meat.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 790,
			y: 410
		},
		production: {
			furs: 2,
			meat: 1
		},
		cost: {
			coins: 15000,
			wood: 40,
			stones: 40
		},
		requires: {
			settlement_level: 6
		}
	}, {
		name: 'Furrier`s Workshop',
		handle: 'furrier',
		description: 'The furrier uses furs from the Trapper`s Lodge mixed with salt and processes them into fur coats that will help your settlers during the cold winters.',
		levels: 3,
		position: {
			x: 1640,
			y: 1140
		},
		production: {
			furcoats: 1
		},
		materials: {
			furs: 2,
			salt: 2
		},
		cost: {
			coins: 15000,
			woodplanks: 30,
			stones: 40
		},
		requires: {
			settlement_level: 9
		}
	}, {
		name: 'Clothing Factory',
		handle: 'clothingfactory',
		description: 'The Clothing Factory produces clothes for your settlement. You don`t want naked citizens, do you?',
		levels: 3,
		position: {
			x: 1580,
			y: 1280
		},
		production: {
			clothes: 1
		},
		materials: {
			cottonfabric: 2
		},
		cost: {
			coins: 15000,
			wood: 40,
			bricks: 10,
			stones: 40
		},
		requires: {
			settlement_level: 15
		}
	}, {
		name: 'Weaver`s Hut',
		handle: 'weaver',
		description: 'The weaver uses a hefty amount of cotton to produce cotton fabric for your settlers` clothes.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1230,
			y: 1250
		},
		production: {
			cottonfabric: 2
		},
		materials: {
			cotton: 4
		},
		cost: {
			coins: 10000,
			wood: 30,
			stones: 30
		},
		requires: {
			settlement_level: 12
		}
	}, {
		name: 'Tannery',
		handle: 'tannery',
		description: 'The Tannery produces leather from processed animal hides.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 930,
			y: 1110
		},
		production: {
			leather: 2
		},
		materials: {
			hides: 4,
			salt: 1
		},
		cost: {
			coins: 20000,
			wood: 35,
			stones: 40
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Coffee roaster',
		handle: 'coffeeroaster',
		description: 'The Coffee Roaster uses the coffee beans from your Coffee Farm and processes them into coffee.',
		levels: 3,
		position: {
			x: 2150,
			y: 1430
		},
		production: {
			coffee: 1
		},
		materials: {
			coffeebeans: 4
		},
		cost: {
			coins: 70000,
			woodplanks: 80,
			stones: 60,
			bricks: 30,
			tools: 20
		},
		requires: {
			settlement_level: 28,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Sugar Mill',
		handle: 'sugarmill',
		description: 'The Sugar Mill processes any sugar cane you have in storage into sugar.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 2700,
			y: 880
		},
		production: {
			sugar: 1
		},
		materials: {
			sugarcane: 4
		},
		cost: {
			coins: 70000,
			woodplanks: 80,
			stones: 60,
			bricks: 30,
			tools: 10
		},
		requires: {
			settlement_level: 26,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Winery',
		handle: 'winery',
		description: 'The Winery uses the grapes from your Grapes Farm and processes them into wine. It uses either barrels or bottles, depending on what you have in storage.',
		levels: 5,
		position: {
			x: 2520,
			y: 510
		},
		production: {
			wine: 2
		},
		materials: [
			{
				barrels: 1,
				bottles: 1
			}, {
				grapes: 4
			}
		],
		chance: {
			alcohol: 0.01
		},
		cost: {
			coins: 50000,
			wood: 50,
			bricks: 10,
			stones: 40,
			tools: 10
		},
		requires: {
			settlement_level: 14
		}
	}, {
		name: 'Optician`s Shop',
		handle: 'opticiansworkshop',
		description: 'The optician uses copper and glass to create glasses for your settlers.',
		levels: 3,
		position: {
			x: 1280,
			y: 330
		},
		production: {
			glasses: 1
		},
		materials: {
			copper: 2,
			glass: 2
		},
		cost: {
			coins: 81000,
			woodplanks: 70,
			stones: 70,
			bricks: 30,
			tools: 10
		},
		requires: {
			settlement_level: 24
		}
	}, {
		name: 'Paper Mill',
		handle: 'papermill',
		description: 'The Paper Mill uses wood to produce paper, which is used together with indigo to produce books at the Printing House.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1080,
			y: 340
		},
		production: {
			paper: 2
		},
		materials: {
			wood: 1
		},
		cost: {
			coins: 83000,
			woodplanks: 60,
			stones: 50,
			bricks: 30,
			tools: 10
		},
		requires: {
			settlement_level: 22
		}
	}, {
		name: 'Printing Press',
		handle: 'printingpress',
		description: 'The Printing Press produces books from paper using indigo ink.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1540,
			y: 430
		},
		production: {
			books: 1
		},
		materials: {
			paper: 4,
			indigo: 1
		},
		cost: {
			coins: 84000,
			woodplanks: 100,
			stones: 100,
			bricks: 30,
			tools: 10
		},
		requires: {
			settlement_level: 28
		}
	}, {
		name: 'Cosmetics',
		handle: 'cosmetics',
		description: 'The Cosmetics manufacturer produces soap and perfume.',
		levels: 3,
		position: {
			x: 1500,
			y: 1170
		},
		production: {
			perfume: 1,
			soap: 1
		},
		materials: {
			roses: 8,
			tallow: 8,
			honey: 1,
			cocoa: 1,
			alcohol: 1
		},
		cost: {
			coins: 90000,
			woodplanks: 80,
			stones: 40,
			bricks: 20,
			tools: 10
		},
		requires: {
			settlement_level: 30,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Redsmith`s Workshop',
		handle: 'redsmithsworkshop',
		description: 'The Redsmith`s Workshop processes copper and candles into candlesticks.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 520,
			y: 720
		},
		production: {
			candlesticks: 1
		},
		materials: {
			copper: 3,
			candles: 2
		},
		cost: {
			coins: 75000,
			wood: 70,
			bricks: 30,
			stones: 50,
			tools: 10
		},
		requires: {
			settlement_level: 22
		}
	}, {
		name: 'Ropeyard',
		handle: 'ropeyard',
		description: 'The Ropeyard produces ropes that are needed for your city`s ships.',
		levels: 3,
		position: {
			x: 3000,
			y: 1030
		},
		production: {
			ropes: 1
		},
		materials: {
			cotton: 2
		},
		cost: {
			coins: 15000,
			wood: 70,
			stones: 60,
			tools: 10
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Glassworks',
		handle: 'glassworks',
		description: 'The Glassworks processes quartz, sand and coal into glass.',
		levels: 3,
		position: {
			x: 1400,
			y: 1320
		},
		production: {
			glass: 1
		},
		materials: {
			quartz: 2,
			sand: 3,
			coal: 1
		},
		chance: {
			bottles: 0.2
		},
		cost: {
			coins: 50000,
			wood: 50,
			bricks: 10,
			stones: 80
		},
		requires: {
			settlement_level: 22
		}
	}, {
		name: 'Carpet Mill',
		handle: 'carpetmanufacturer',
		description: 'The Carpet Mill produces carpets.',
		levels: 3,
		position: {
			x: 2020,
			y: 1370
		},
		production: {
			carpets: 1
		},
		materials: {
			cottonfabric: 4,
			indigo: 2
		},
		cost: {
			coins: 50000,
			wood: 50,
			bricks: 30,
			stones: 80,
			tools: 10
		},
		requires: {
			settlement_level: 26,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Marzipan Workshop',
		handle: 'marzipanworkshop',
		description: 'The Marzipan Workshop uses milk, almonds and sugar from city storage to create delicious marzipan. Your settlers will definitely appreciate it.',
		levels: 3,
		position: {
			x: 1090,
			y: 850
		},
		production: {
			marzipan: 1
		},
		materials: {
			almonds: 2,
			sugar: 2,
			milk: 4
		},
		cost: {
			coins: 50000,
			wood: 50,
			bricks: 40,
			stones: 80,
			tools: 10
		},
		requires: {
			settlement_level: 26,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Silk Weaver',
		handle: 'silkweaver',
		description: 'The Silk Weaver requires cotton, gold and silk and produces brocade robes.',
		levels: 3,
		position: {
			x: 1220,
			y: 970
		},
		production: {
			robes: 1
		},
		materials: {
			silk: 2,
			cotton: 1,
			gold: 2
		},
		cost: {
			coins: 50000,
			wood: 50,
			bricks: 30,
			stones: 80,
			tools: 10
		},
		requires: {
			settlement_level: 23,
			buildings: {
				tradingpost: 1
			}
		}
	}, {
		name: 'Quartz Mine',
		handle: 'quartzmine',
		description: 'The Quartz Mine provides your city with quartz.',
		levels: 3,
		position: {
			x: 700,
			y: 710
		},
		production: {
			quartz: 2
		},
		cost: {
			coins: 40000,
			wood: 50,
			bricks: 30,
			stones: 90
		},
		requires: {
			settlement_level: 16,
			climate: [
				civitas.CLIMATE_ARID
			]
		}
	}, {
		name: 'Apiary',
		handle: 'apiary',
		description: 'The Apiary produces honey and bees wax for use in candles.',
		levels: 3,
		position: {
			x: 1140,
			y: 1150
		},
		production: {
			wax: 2,
			honey: 1
		},
		cost: {
			coins: 40000,
			wood: 50,
			bricks: 30,
			stones: 40
		},
		requires: {
			settlement_level: 16,
			buildings: {
				beehive: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL,
				civitas.CLIMATE_TEMPERATE
			]
		}
	}, {
		name: 'Bee Hive',
		handle: 'beehive',
		description: 'The Bee Hive is required for an Apiary to produce bees wax and honey.',
		position: {
			x: 1260,
			y: 1100
		},
		cost: {
			coins: 2000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 16,
			climate: [
				civitas.CLIMATE_TROPICAL,
				civitas.CLIMATE_TEMPERATE
			]
		}
	}, {
		name: 'Barrel Cooperage',
		handle: 'barrelcooperage',
		description: 'The Barrel Cooperage creates barrels from wood and iron.',
		levels: 3,
		position: {
			x: 910,
			y: 430
		},
		production: {
			barrels: 2
		},
		materials: {
			wood: 3,
			iron: 1
		},
		cost: {
			coins: 25000,
			wood: 80,
			stones: 70,
			tools: 10
		},
		requires: {
			settlement_level: 9
		}
	}, {
		name: 'Brewery',
		handle: 'brewery',
		description: 'The Brewery brews beer from wheat. Beer is needed for higher-level houses or your city`s navy.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 650,
			y: 1120
		},
		production: {
			beer: 2
		},
		materials: {
			barrels: 1,
			wheat: 2
		},
		chance: {
			alcohol: 0.01
		},
		cost: {
			coins: 25000,
			wood: 60,
			stones: 70
		},
		requires: {
			settlement_level: 9
		}
	}, {
		name: 'Candlemaker`s Hut',
		handle: 'candlemakersworkshop',
		description: 'The Candlemaker Hut produces candles for your settlers` houses.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 640,
			y: 480
		},
		production: {
			candles: 1
		},
		materials: {
			wax: 2,
			cotton: 1
		},
		cost: {
			coins: 45000,
			woodplanks: 80,
			stones: 60,
			bricks: 20,
			tools: 10
		},
		requires: {
			settlement_level: 20
		}
	}, {
		name: 'Catapult Workshop',
		handle: 'catapultworkshop',
		description: 'The Catapult Workshop builds catapults, the ultimate siege weapon.',
		levels: 3,
		position: {
			x: 1400,
			y: 1050
		},
		production: {
			catapults: 1
		},
		materials: {
			wood: 100,
			steel: 12,
			iron: 20,
			stones: 30,
			coal: 5,
			woodplanks: 40,
			ropes: 10
		},
		cost: {
			coins: 250000,
			woodplanks: 200,
			stones: 300,
			bricks: 30,
			tools: 20
		},
		requires: {
			settlement_level: 20
		}
	}, {
		name: 'Cannon Foundry',
		handle: 'cannonfoundry',
		description: 'The Cannon Foundry is responsable with the manufacture of the city cannons.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 760,
			y: 560
		},
		production: {
			cannons: 1
		},
		materials: {
			wood: 70,
			copper: 30,
			iron: 10,
			coal: 20,
			steel: 15,
			woodplanks: 10,
			ropes: 2,
			gunpowder: 6
		},
		cost: {
			coins: 200000,
			woodplanks: 200,
			stones: 300,
			bricks: 30,
			tools: 20
		},
		requires: {
			settlement_level: 18
		}
	}, {
		name: 'Charcoal Burner`s Hut',
		handle: 'charcoalburnerhut',
		description: 'The Charcoal Burner`s Hut burns wood into coal and sulphur, which is needed by all your smelters.',
		levels: 3,
		position: {
			x: 1370,
			y: 230
		},
		production: {
			coal: 4,
			sulphur: 1
		},
		materials: {
			wood: 2
		},
		cost: {
			coins: 25000,
			wood: 50,
			stones: 50,
			bricks: 50
		},
		requires: {
			settlement_level: 15
		}
	}, {
		name: 'House',
		handle: 'house1',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 5,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1200,
			y: 770
		},
		cost: {
			wood: 10,
			coins: 1000
		},
		materials: {
			bread: 1
		},
		requires: {
			settlement_level: 1
		}
	}, {
		name: 'House',
		handle: 'house2',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 10,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1080,
			y: 680
		},
		cost: {
			wood: 10,
			coins: 2000
		},
		materials: {
			bread: 1
		},
		requires: {
			settlement_level: 1
		}
	}, {
		name: 'House',
		handle: 'house3',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 15,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 960,
			y: 590
		},
		cost: {
			woodplanks: 10,
			stones: 20,
			coins: 3000
		},
		materials: {
			bread: 1,
			meat: 1
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'House',
		handle: 'house4',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 20,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1200,
			y: 580
		},
		cost: {
			woodplanks: 10,
			stones: 20,
			coins: 4000
		},
		materials: {
			bread: 1,
			meat: 1,
			pottery: 1
		},
		requires: {
			settlement_level: 6,
			buildings: {
				church: 1
			}
		}
	}, {
		name: 'House',
		handle: 'house5',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 25,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1080,
			y: 500
		},
		cost: {
			woodplanks: 25,
			stones: 35,
			coins: 5000
		},
		materials: {
			fish: 1,
			meat: 2,
			pottery: 1,
			beer: 1
		},
		requires: {
			settlement_level: 10,
			buildings: {
				church: 1
			}
		}
	}, {
		name: 'House',
		handle: 'house6',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 30,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1300,
			y: 840
		},
		cost: {
			woodplanks: 30,
			stones: 45,
			bricks: 10,
			coins: 6000
		},
		materials: {
			meals: 1,
			pottery: 1
		},
		requires: {
			settlement_level: 16,
			buildings: {
				church: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house7',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 35,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1470,
			y: 780
		},
		cost: {
			woodplanks: 40,
			stones: 80,
			bricks: 15,
			coins: 7000
		},
		materials: {
			meals: 1,
			pottery: 1,
			candlesticks: 1
		},
		requires: {
			settlement_level: 20,
			buildings: {
				academy: 1
			}
		}
	}, {
		name: 'House',
		handle: 'house8',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 40,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1700,
			y: 390
		},
		cost: {
			woodplanks: 50,
			stones: 100,
			bricks: 20,
			coins: 8000
		},
		materials: {
			meals: 1,
			milk: 1,
			pottery: 1,
			candlesticks: 1,
			furcoats: 1
		},
		requires: {
			settlement_level: 25,
			buildings: {
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house9',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 50,
		levels: 6,
		visible_upgrades: true,
		position: {
			x: 1840,
			y: 480
		},
		cost: {
			woodplanks: 100,
			stones: 200,
			bricks: 25,
			coins: 10000
		},
		materials: {
			meals: 1,
			milk: 1,
			pottery: 1,
			candlesticks: 1,
			furcoats: 1,
			perfume: 1,
			soap: 1
		},
		requires: {
			settlement_level: 30,
			buildings: {
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house10',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 60,
		cost: {
			woodplanks: 100,
			stones: 200,
			bricks: 30,
			coins: 10000
		},
		materials: {
			meals: 2,
			milk: 1,
			pottery: 1,
			candlesticks: 1,
			furcoats: 1,
			perfume: 1,
			soap: 1,
			robes: 1
		},
		position: {
			x: 1390,
			y: 550
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 32,
			buildings: {
				church: 2,
				academy: 2
			}
		}
	}, {
		name: 'House',
		handle: 'house11',
		description: 'Houses provide coins through taxes and space for your settlers.',
		tax: 80,
		cost: {
			woodplanks: 100,
			stones: 200,
			bricks: 35,
			coins: 10000
		},
		materials: {
			meals: 2,
			milk: 1,
			pottery: 1,
			candlesticks: 1,
			furcoats: 1,
			perfume: 1,
			robes: 1,
			soap: 1,
			marzipan: 1
		},
		position: {
			x: 1400,
			y: 910
		},
		levels: 6,
		visible_upgrades: true,
		requires: {
			settlement_level: 36,
			buildings: {
				church: 2,
				academy: 2
			}
		}
	}, {
		name: 'Dates farm',
		handle: 'datesfarm',
		description: 'The Dates Farm cultivates dates.',
		production: {
			dates: 1
		},
		levels: 3,
		position: {
			x: 2480,
			y: 770
		},
		cost: {
			coins: 40000,
			wood: 30,
			stones: 30
		},
		requires: {
			settlement_level: 36,
			buildings: {
				datesfield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Dates field',
		handle: 'datesfield',
		description: 'An Dates Field is required for the Dates Farm to operate.',
		position: {
			x: 2380,
			y: 660
		},
		cost: {
			coins: 5000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 36,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Almonds farm',
		handle: 'almondsfarm',
		description: 'The Almonds Farm cultivates almonds for marzipan manufacture or export.',
		production: {
			almonds: 1
		},
		levels: 3,
		position: {
			x: 2050,
			y: 1610
		},
		cost: {
			coins: 40000,
			wood: 30,
			stones: 30
		},
		requires: {
			settlement_level: 36,
			buildings: {
				almondsfield: 1
			},
			climate: [
				civitas.CLIMATE_ARID,
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Almonds field',
		handle: 'almondsfield',
		description: 'An Almonds Field is required for the Almonds Farm to operate.',
		position: {
			x: 2190,
			y: 1570
		},
		cost: {
			coins: 5000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 36,
			climate: [
				civitas.CLIMATE_ARID,
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Cattle Farm',
		handle: 'cattlefarm',
		description: 'A Cattle Farm grows cattle so your settlers can eat food that is more nutritious than bread. Also produces milk and has a low chance for producing cheese.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1510,
			y: 1470
		},
		production: {
			cattle: 1,
			milk: 1
		},
		chance: {
			cheese: 0.01
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3,
			buildings: {
				cattlefield: 1
			}
		}
	}, {
		name: 'Cattle field',
		handle: 'cattlefield',
		description: 'A Cattle Field is required for the Cattle Farm to operate.',
		position: {
			x: 1630,
			y: 1420
		},
		cost: {
			coins: 1000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Pig Farm',
		handle: 'pigfarm',
		description: 'A Pig Farm grows pigs so your settlers can eat food that is more nutritious than bread.',
		visible_upgrades: true,
		production: {
			pig: 1
		},
		levels: 5,
		position: {
			x: 1900,
			y: 1150
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 3,
			buildings: {
				pigfield: 1
			}
		}
	}, {
		name: 'Pig field',
		handle: 'pigfield',
		description: 'A Pig Field is required for the Pig Farm to operate.',
		position: {
			x: 1900,
			y: 1270
		},
		cost: {
			coins: 1500,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 3
		}
	}, {
		name: 'Goat Farm',
		handle: 'goatfarm',
		description: 'A Goat Farm grows cattle so your settlers can eat food that is more nutritious than bread. Also produces milk and has a low chance for producing cheese.',
		visible_upgrades: true,
		production: {
			goat: 1,
			milk: 1
		},
		chance: {
			cheese: 0.01
		},
		levels: 5,
		position: {
			x: 2300,
			y: 900
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 10,
			buildings: {
				goatfield: 1
			}
		}
	}, {
		name: 'Goat field',
		handle: 'goatfield',
		description: 'A Goat Field is required for the Goat Farm to operate.',
		position: {
			x: 2150,
			y: 900
		},
		cost: {
			coins: 1500,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Grain farm',
		handle: 'grainfarm',
		description: 'A Grain Farm cultivates wheat that will be later transformed into bread, and your settlers will live happily ever after.',
		visible_upgrades: true,
		production: {
			wheat: 2
		},
		levels: 6,
		position: {
			x: 2660,
			y: 590
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 2,
			buildings: {
				grainfield: 1
			}
		}
	}, {
		name: 'Grain field',
		handle: 'grainfield',
		description: 'A Grain Field is required for the Grain Farm to operate.',
		position: {
			x: 2550,
			y: 670
		},
		cost: {
			coins: 1000,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 2
		}
	}, {
		name: 'Grapes farm',
		handle: 'grapesfarm',
		description: 'A Grapes Farm provides your city with grapes for wine processing.',
		levels: 3,
		position: {
			x: 2380,
			y: 460
		},
		production: {
			grapes: 2
		},
		cost: {
			coins: 15000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 16,
			buildings: {
				grapesfield: 1
			},
			climate: [
				civitas.CLIMATE_TEMPERATE
			]
		}
	}, {
		name: 'Grapes field',
		handle: 'grapesfield',
		description: 'A Grapes Field is required for the Grapes Farm to operate.',
		position: {
			x: 2290,
			y: 530
		},
		cost: {
			coins: 1500,
			wood: 10,
			clay: 20
		},
		requires: {
			settlement_level: 16,
			climate: [
				civitas.CLIMATE_TEMPERATE
			]
		}
	}, {
		name: 'Coffee farm',
		handle: 'coffeefarm',
		description: 'A Coffee Farm cultivates coffee beans in your city, ready to be processed into coffee.',
		levels: 3,
		position: {
			x: 1840,
			y: 1000
		},
		production: {
			coffeebeans: 2
		},
		cost: {
			coins: 60000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 36,
			buildings: {
				coffeefield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Coffee field',
		handle: 'coffeefield',
		description: 'A Coffee Field is required for the Coffee Farm to operate.',
		position: {
			x: 1740,
			y: 1080
		},
		cost: {
			coins: 6000,
			wood: 10,
			clay: 40
		},
		requires: {
			settlement_level: 36,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Cotton farm',
		handle: 'cottonfarm',
		description: 'A Cotton Farm provides your city with cotton.',
		levels: 3,
		position: {
			x: 1870,
			y: 1590
		},
		production: {
			cotton: 3
		},
		cost: {
			coins: 20000,
			wood: 20,
			stones: 20
		},
		requires: {
			research: 'agriculture',
			settlement_level: 10,
			buildings: {
				cottonfield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Cotton field',
		handle: 'cottonfield',
		description: 'A Cotton Field is required for the Cotton Farm to operate.',
		position: {
			x: 1970,
			y: 1530
		},
		cost: {
			coins: 2000,
			wood: 10,
			clay: 20
		},
		requires: {
			research: 'agriculture',
			settlement_level: 10,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Silk farm',
		handle: 'silkfarm',
		description: 'A Silk Farm provides your city with silk.',
		levels: 3,
		position: {
			x: 1450,
			y: 340
		},
		production: {
			silk: 1
		},
		cost: {
			coins: 80000,
			wood: 20,
			stones: 20
		},
		requires: {
			research: 'agriculture',
			settlement_level: 28,
			buildings: {
				silkfield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Silk field',
		handle: 'silkfield',
		description: 'A Silk Field is required for the Silk Farm to operate.',
		position: {
			x: 1600,
			y: 320
		},
		cost: {
			coins: 8000,
			wood: 10,
			clay: 100
		},
		requires: {
			research: 'agriculture',
			settlement_level: 28,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Sugar Cane Farm',
		handle: 'sugarfarm',
		description: 'A Sugar Cane Farm provides your city with sugar cane.',
		levels: 3,
		position: {
			x: 2280,
			y: 780
		},
		production: {
			sugarcane: 2
		},
		cost: {
			coins: 100000,
			wood: 20,
			stones: 20
		},
		requires: {
			settlement_level: 24,
			buildings: {
				academy: 1,
				sugarfield: 1
			},
			climate: [
				civitas.CLIMATE_TEMPERATE
			]
		}
	}, {
		name: 'Sugar field',
		handle: 'sugarfield',
		description: 'A Sugar Field is required for the Sugar Farm to operate.',
		position: {
			x: 2100,
			y: 720
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 100
		},
		requires: {
			settlement_level: 24,
			climate: [
				civitas.CLIMATE_TEMPERATE
			]
		}
	}, {
		name: 'Indigo farm',
		handle: 'indigofarm',
		description: 'The Indigo Farm produces indigo that can be turned to ink and used to create books.',
		levels: 5,
		visible_upgrades: true,
		position: {
			x: 2440,
			y: 1440
		},
		production: {
			indigo: 1
		},
		cost: {
			coins: 200000,
			wood: 30,
			stones: 30,
			clay: 30
		},
		requires: {
			settlement_level: 20,
			buildings: {
				indigofield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Indigo field',
		handle: 'indigofield',
		description: 'An Indigo Field is required for the Indigo Farm to operate.',
		position: {
			x: 2320,
			y: 1500
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 100
		},
		requires: {
			settlement_level: 20,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Tobacco farm',
		handle: 'tobaccofarm',
		description: 'A Tobacco Farm produces cigars from tobacco.',
		levels: 3,
		position: {
			x: 1750,
			y: 1500
		},
		production: {
			cigars: 1
		},
		materials: {
			tobacco: 2
		},
		cost: {
			coins: 200000,
			wood: 30,
			stones: 30,
			bricks: 30
		},
		requires: {
			settlement_level: 25,
			buildings: {
				tobaccofield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Tobacco field',
		handle: 'tobaccofield',
		description: 'The Tobacco Field produces tobacco that will be further processed by the Tobacco Farm',
		position: {
			x: 1870,
			y: 1460
		},
		production: {
			tobacco: 1
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 100
		},
		requires: {
			settlement_level: 20,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Rose Farm',
		handle: 'rosenursery',
		description: 'The Rose Farm produces roses which are needed to manufacture perfume.',
		levels: 3,
		position: {
			x: 2780,
			y: 670
		},
		production: {
			roses: 1
		},
		cost: {
			coins: 20000,
			wood: 50,
			stones: 50,
			clay: 50
		},
		requires: {
			research: 'agriculture',
			settlement_level: 26,
			buildings: {
				academy: 1,
				rosefield: 1
			},
			climate: [
				civitas.CLIMATE_ARID,
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Roses field',
		handle: 'rosefield',
		description: 'A Roses Field is required for the Rose Farm to operate.',
		position: {
			x: 2650,
			y: 740
		},
		cost: {
			coins: 10000,
			wood: 10,
			clay: 100
		},
		requires: {
			research: 'agriculture',
			settlement_level: 26,
			climate: [
				civitas.CLIMATE_ARID,
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Spice Farm',
		handle: 'spicefarm',
		description: 'The Spice Farm is responsable for the production of spices.',
		levels: 3,
		position: {
			x: 1500,
			y: 970
		},
		production: {
			spices: 1
		},
		cost: {
			coins: 200000,
			wood: 60,
			stones: 60,
			clay: 60
		},
		requires: {
			settlement_level: 32,
			buildings: {
				academy: 1,
				spicefield: 1
			},
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Spice field',
		handle: 'spicefield',
		description: 'A Spice Field is required for the Spice Farm to operate.',
		position: {
			x: 1600,
			y: 1030
		},
		cost: {
			coins: 20000,
			wood: 40,
			clay: 300
		},
		requires: {
			settlement_level: 32,
			climate: [
				civitas.CLIMATE_TROPICAL
			]
		}
	}, {
		name: 'Toolmaker Workshop',
		handle: 'toolmaker',
		description: 'Tools are needed to construct higher-level buildings, and a Toolmaker Workshop will create those for your settlement.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 1640,
			y: 110
		},
		production: {
			tools: 2
		},
		materials: {
			wood: 1,
			iron: 1,
			coal: 1,
			copper: 1
		},
		cost: {
			coins: 30000,
			wood: 80,
			stones: 80,
			clay: 60
		},
		requires: {
			settlement_level: 8
		}
	}, {
		name: 'Jeweler',
		handle: 'jeweler',
		description: 'The Jeweler processes pearls into jewelery for your settlers (and traders).',
		levels: 3,
		position: {
			x: 1780,
			y: 1350
		},
		production: {
			jewelery: 1
		},
		materials: {
			pearls: 10
		},
		cost: {
			coins: 55000,
			wood: 60,
			stones: 60,
			bricks: 60,
			tools: 10
		},
		requires: {
			settlement_level: 20
		}
	}, {
		name: 'Brickworks',
		handle: 'brickworks',
		description: 'The Brickworks uses coal and clay to manufacture bricks, needed for higher-level buildings in your settlement.',
		levels: 5,
		position: {
			x: 620,
			y: 640
		},
		production: {
			bricks: 2
		},
		materials: {
			clay: 3,
			coal: 1
		},
		cost: {
			coins: 10000,
			wood: 20,
			stones: 20,
			clay: 20
		},
		requires: {
			settlement_level: 12,
			buildings: {
				claymine: 1
			}
		}
	}, {
		name: 'Cookhouse',
		handle: 'cookhouse',
		description: 'The Cookhouse makes meals for your houses, army, navy and expeditions.',
		levels: 3,
		position: {
			x: 1020,
			y: 970
		},
		production: {
			meals: 2
		},
		materials: {
			bread: 2,
			meat: 2,
			fish: 2,
			wine: 1
		},
		cost: {
			coins: 20000,
			wood: 100,
			stones: 20,
			bricks: 20,
			woodplanks: 10
		},
		requires: {
			settlement_level: 10
		}
	}, {
		name: 'Fisherman',
		handle: 'fisherman',
		description: 'The fisherman reels in fish from the waters surrounding your settlement.',
		visible_upgrades: true,
		levels: 5,
		position: {
			x: 2830,
			y: 970
		},
		chance: {
			pearls: 0.003
		},
		production: {
			fish: 1
		},
		cost: {
			coins: 15000,
			wood: 100,
			stones: 20,
			bricks: 20,
			woodplanks: 10
		},
		requires: {
			settlement_level: 8
		}
	}
];

/**
 * Width of the world in hexes.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.WORLD_SIZE_WIDTH = 64;

/**
 * Height of the world in hexes.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.WORLD_SIZE_HEIGHT = 64;

/**
 * Size of a world hex.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.WORLD_HEX_SIZE = 24;

/**
 * Whether to beautify the worldmap terrain.
 *
 * @constant
 * @default
 * @type {Boolean}
 */
civitas.WORLD_BEAUTIFY = true;

/**
 * Whether to display the worldmap grid.
 *
 * @constant
 * @default
 * @type {Boolean}
 */
civitas.WORLD_GRID = true;

/**
 * World generator roughness.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.WORLD_EROSION = 1.8;

/**
 * Goods importance, vital.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.IMPORTANCE_VITAL = 50;

/**
 * Goods importance, high.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.IMPORTANCE_HIGH = 30;

/**
 * Goods importance, medium.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.IMPORTANCE_MEDIUM = 20;

/**
 * Goods importance, low.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.IMPORTANCE_LOW = 10;

/**
 * Tax discount for buying resources.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.TRADES_ADDITION = 10;

/**
 * Tax percent for selling resources.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.TRADES_DISCOUNT = 20;

/**
 * Amount of fame your settlement gets for each successful trade.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.FAME_PER_TRADE = 50;

/**
 * The black market discount.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.BLACK_MARKET_DISCOUNT = 80;

/**
 * The auctioneer discount.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.AUCTIONEER_DISCOUNT = 20;

/**
 * Special place.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.SPECIAL_PLACE = 99;

/**
 * Days it takes to complete a world project.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.PLACE_TIME_TO_BUILD = 7200;

/**
 * Resources required to complete atage 2 or builging a world project.
 *
 * @constant
 * @default
 * @type {Object}
 */
civitas.PLACE_RESOURCES_REQ = {
	coins: 100000000,
	wood: 10000,
	woodplanks: 50000,
	stones: 50000,
	limestone: 10000,
	mosaic: 1000,
	meals: 10000,
	tools: 1000,
	bricks: 50000,
	sand: 1000,
	steel: 10000,
	gold: 10000,
	silver: 10000,
	clothes: 10000,
	furcoats: 10000,
	gems: 1000,
	diamonds: 1000,
	champagne: 1000,
	cigars: 1000,
	jewelery: 1000,
	robes: 1000,
	perfume: 1000,
	soap: 1000,
	silk: 1000
};

civitas.PLACES_NAMES = [
	'Aria',
	'Zeffari',
	'Laenteglos',
	'Eastborne',
	'Larton',
	'Nantgarw',
	'Kingcardine',
	'Swindlincote',
	'Cewmann',
	'Rochdale',
	'Malrton',
	'Falcon Haven',
	'Rotherham',
	'Ironforge',
	'Halivaara',
	'Ularee',
	'Snake Canyon',
	'Dornwich',
	'Stawford',
	'Eastborne',
	'Dry Gulch',
	'Tamworth',
	'Ferncombe',
	'Rutherglen',
	'Dewhurst',
	'Haedleigh',
	'Chepstow'
];

/**
 * List of settlement types
 *
 * @constant
 * @default
 * @type {Array}
 */
civitas.SETTLEMENTS = [
	'city',
	'village',
	'metropolis',
	'camp'
];

/**
 * City settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CITY = 0;

/**
 * Village settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.VILLAGE = 1;

/**
 * Metropolis settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.METROPOLIS = 2;

/**
 * Raider camp settlement.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.CAMP = 3;

/**
 * Max number of settlements on a map.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_SETTLEMENTS = 100;

/**
 * Max number of settlement icons.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_SETTLEMENT_ICONS = 3;

/**
 * Max level a settlement can have.
 * 
 * @constant
 * @default
 * @type {Number}
 */
civitas.MAX_SETTLEMENT_LEVEL = 99;

/**
 * Getting total city population is city_level * civitas.POPULATION_PER_LEVEL.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.POPULATION_PER_LEVEL = 2300;

/**
 * The minimum value settlement fame can have.
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.MIN_FAME_VALUE = 1;

/**
 * List of possible world settlement names.
 *
 * @constant
 * @type {Array}
 */
civitas.SETTLEMENT_NAMES = [
	'Alexandria',
	'Rome',
	'Carthage',
	'Constantinople',
	'Karakorum',
	'Niniveh',
	'Damascus',
	'Thebes',
	'Men-nefer',
	'Peshawar',
	'Uruk',
	'Abydos',
	'Actium',
	'Tripolis',
	'Troia',
	'Chengdu',
	'Mombasa',
	'Apullum',
	'Byblos',
	'Abu',
	'Pi-Ramesses',
	'Djedu',
	'Kyrene',
	'Athens',
	'Menat Khufu',
	'Niani',
	'Novgorod',
	'Sarmizegetusa',
	'Sigiriya',
	'Selima Oasis',
	'Tournai',
	'Taruga',
	'Amarna',
	'Toledo',
	'Mogadishu',
	'Xinjiang',
	'Yinxu',
	'Bublidrus',
	'Mylyra',
	'Ialezus',
	'Thebeia',
	'Demaphos',
	'Smyrnione',
	'Dimonassa',
	'Cyrarnassus',
	'Posigeneia',
	'Kasmigeneia',
	'Khemdjumunein',
	'Sakpi',
	'Kersatennu',
	'Farsou',
	'Dehsa',
	'Djasumar',
	'Absaitunis',
	'Avsi',
	'Wasvarmeru',
	'Behdju',
	'Galamia',
	'Pekies',
	'VyVyrodari',
	'Viasseto',
	'Messibria',
	'Molfeserta',
	'Quanes',
	'Braga',
	'Seicer',
	'Legara',
	'Albadolid',
	'Getastela',
	'Drepanum',
	'Canusium',
	'Mogontiacum',
	'Leucarum',
	'Pautalia',
	'Scallabis',
	'Chernogan',
	'Yelatrov',
	'Novomoksary',
	'Chistongelsk',
	'Timaryevsk',
	'Naberkuta',
	'Koloyevka',
	'Obnirodvinsk',
	'Beloredimir',
	'Kaspikarino',
	'Troten',
	'Neunsee',
	'Weveltals',
	'Oudenhout',
	'Plailimar',
	'Puciennes',
	'Bernsloh',
	'Geiselkau',
	'Waterlina',
	'Clonkenny',
	'Terbommel',
	'Drachnisse',
	'Werdenthal',
	'Erzell',
	'Arrabona',
	'Ugernum',
	'Bulla Regia',
	'Umbracum',
	'Aquae Armenetiae',
	'Isara',
	'Regium Lepidum',
	'Aquisgranium',
	'Saint Petersburg',
	'Gerasa',
	'Besontio',
	'Rhegium',
	'Argentoratum',
	'Apamea',
	'Hadrianopolis',
	'Byzantium',
	'Ravenna',
	'Carnotum',
	'Podium Aniciense',
	'Beroe Augusta Trajana',
	'Dubris',
	'Avenio',
	'Luentinum',
	'Castra Nicia',
	'Crotona',
	'Concordia Sagittaria',
	'Vibo Valentia',
	'Portus',
	'Faventia',
	'Tchidimbo',
	'Concala',
	'Berlowa',
	'Bagangoua',
	'Bangamo',
	'Bossemlindao',
	'Boti',
	'Bonnamar',
	'Dilobunda',
	'Lupugani',
	'Mimomo',
	'Nkolabo',
	'Mindo',
	'Kindamno',
	'Kanyesisi',
	'Mwinirenje',
	'Tbouleang',
	'Kamphon',
	'Jamya',
	'Yogtar',
	'Ambu',
	'Kubak',
	'Wainlet',
	'Shwebyu',
	'Gaguio',
	'Cartangas',
	'Surakham',
	'Kratai',
	'Sa Pha',
	'My Tinh',
	'Neurau',
	'Hollatrenk',
	'Woluten',
	'Forwerpen',
	'Sarsir',
	'Pérission',
	'Alsfeld',
	'Goldburg',
	'Thurway',
	'Watertowel',
	'Hengeloopen',
	'Alkningen',
	'Mornach',
	'Gorpen',
	'Novoupa',
	'Ozyosinsk',
	'Cheregansk',
	'Sibanovsk',
	'Vserodvinsk',
	'Polelensk',
	'Novokugadan',
	'Belgovgrad',
	'Chelyakala',
	'Tovodsk',
	'Kensato',
	'Kurishiri',
	'Aridakoshi',
	'Pingguan',
	'Zoajiang',
	'Ulaanteeg',
	'Nomsai',
	'Tangye',
	'Chuncheon',
	'Ikju'
];

/**
 * List of possible ruler names for settlements and various other obscure
 * reasons.
 *
 * @type {Array}
 * @constant
 */
civitas.NAMES = [
	'Caesar',
	'Cronus',
	'Dido',
	'Genghis',
	'Khufu',
	'Musa I',
	'Sennacherib',
	'Pepi',
	'Hatshepsut',
	'Clovis',
	'Gilgamesh',
	'Dalai Lama',
	'Ashoka',
	'Charlemagne',
	'Darius',
	'Ivan III',
	'Qin Shi Huang',
	'Ozymandias',
	'Timur',
	'Pol Pot',
	'Napoleon',
	'Hirohito',
	'Ivan Sirko',
	'Peter the Great',
	'Pan',
	'Victor',
	'Lekan',
	'Sheamus',
	'Itumeleng',
	'Varya',
	'Gervas',
	'Stefanija',
	'Meera',
	'Sethunya',
	'Soupi',
	'Vestmar',
	'Numi',
	'Marteinn',
	'Saithor',
	'Haki',
	'Ragnar',
	'Qiao',
	'Zeng',
	'Zhan',
	'Guo',
	'Yan',
	'Zarpiya',
	'Hada',
	'Kikarnahsu',
	'Tarhuntapiya',
	'Karnapaka',
	'Dambi',
	'Silalluhi',
	'Zuwahallati',
	'Sakkummilla',
	'Hapu',
	'Ammalli',
	'Kawiya',
	'Nisasar',
	'Abba',
	'Rishabha',
	'Sena',
	'Kalpana',
	'Nupur',
	'Anu',
	'Parvati',
	'Rani',
	'Chandrama',
	'Dhani',
	'Gallus',
	'Flavius',
	'Decimus',
	'Titus',
	'Papia',
	'Aburia',
	'Volusia',
	'Macrinia',
	'Lucia',
	'Lucretia',
	'Dubov',
	'Filimonov',
	'Mikhail',
	'Larissa',
	'Zenaide',
	'Lenora',
	'Natasha',
	'Muhammet',
	'Haydar',
	'Hizir',
	'Orhan',
	'Huriye',
	'Fehime',
	'Seher',
	'Qadir',
	'Lim',
	'Yami',
	'Veasna',
	'Baadur',
	'Sharar',
	'Yuuta',
	'Hallie',
	'Anson',
	'Davis',
	'Ondina',
	'Zan',
	'Gibs',
	'Soth',
	'Naoki',
	'Hachirou',
	'Irmhild',
	'Thiago',
	'Stefano',
	'Gerardo',
	'Alonso',
	'Mario',
	'Consuela',
	'Graciela',
	'Alicia',
	'Mariangel',
	'Qimmiabruk',
	'Qajak',
	'Akrittok',
	'Kuk`uq',
	'Noahtakmiut',
	'Kinaktok',
	'Iluliaq',
	'Taktuq',
	'Aquutaq',
	'Tulugaq',
	'Uyarak',
	'Onartok',
	'Karpok',
	'Husain',
	'Farhan',
	'Umar',
	'Safiyya',
	'Yanduza',
	'Fatimah',
	'Tasufin',
	'Hammad'
];

/**
 * List of all available in-game events.
 * 
 * @constant
 * @type {Array}
 */
civitas.EVENTS = [
	{
		name: 'Great earthquake',
		description: 'A great earthquake sweeps across your city destroying the settlement`s BUILDING in the process.',
		chance: 0.00001,
		destroy: true
	}, {
		name: 'Royal marriage',
		description: 'A marriage was arranged between a member of your family ' +
			'and the royal family of SETTLEMENT. This raises your influence on ' +
			'SETTLEMENT by INFLUENCE. Good job!',
		chance: 0.0001,
		raise: {
			influence: 10
		}
	}, {
		name: 'Raiders attack',
		description: 'A band of raiders attacked the outskirts of your ' +
			'settlement. Repairing the affected buildings costs your settlement ' +
			'COINS coins.',
		chance: 0.0002,
		lower: {
			coins: 1000
		}
	}, {
		name: 'Discovery',
		description: 'The engineers in your settlement made a great discovery ' +
			'which made you more famous, thus gaining FAME fame and RESEARCH ' +
			'research.',
		chance: 0.0004,
		raise: {
			fame: 100,
			research: 10
		}
	}, {
		name: 'Foreign spy discovered',
		description: 'A spy from SETTLEMENT was found hiding in your ' +
			'settlement, as a reward for finding him you gain ESPIONAGE ' +
			'espionage.',
		chance: 0.002,
		raise: {
			espionage: 10
		}
	}, {
		name: 'Your spy uncovered',
		description: 'One of your spies in SETTLEMENT was discovered, ' +
			'SETTLEMENT`s ruler is angry so you lose PRESTIGE prestige.',
		chance: 0.003,
		lower: {
			prestige: 10
		}
	}
];


/**
 * List of resource categories.
 * 
 * @constant
 * @default
 * @type {Array}
 */
civitas.RESOURCE_CATEGORIES = [
	'food',
	'construction',
	'animals',
	'industry',
	'military',
	'luxury',
	'exotic'
];

/**
 * List of all the resources available in-game.
 * 
 * @constant
 * @type {Object}
 */
civitas.RESOURCES = {
	coins: {
		name: 'Coins',
		category: 'virtual',
		toolbar: true
	},
	fame: {
		name: 'Fame',
		category: 'virtual'
	},
	prestige: {
		name: 'Prestige',
		category: 'virtual'
	},
	espionage: {
		name: 'Espionage',
		category: 'virtual'
	},
	research: {
		name: 'Research',
		category: 'virtual'
	},
	faith: {
		name: 'Faith',
		category: 'virtual'
	},
	alcohol: {
		name: 'Alcohol',
		price: 80,
		category: 'industry'
	},
	almonds: {
		name: 'Almonds',
		price: 180,
		category: 'exotic'
	},
	armor: {
		name: 'Armor',
		price: 220,
		category: 'military'
	},
	barrels: {
		name: 'Barrels',
		price: 60,
		category: 'industry'
	},
	beer: {
		name: 'Beer',
		price: 30,
		category: 'industry'
	},
	books: {
		name: 'Books',
		price: 100,
		category: 'luxury'
	},
	bottles: {
		name: 'Bottles',
		price: 10,
		category: 'industry'
	},
	bread: {
		name: 'Bread',
		price: 30,
		category: 'food',
		toolbar: true
	},
	bricks: {
		name: 'Bricks',
		price: 40,
		category: 'construction'
	},
	candles: {
		name: 'Candles',
		price: 100,
		category: 'luxury'
	},
	candlesticks: {
		name: 'Candlesticks',
		price: 170,
		category: 'luxury'
	},
	cannons: {
		name: 'Cannons',
		price: 700,
		category: 'military'
	},
	carpets: {
		name: 'Carpets',
		price: 400,
		category: 'luxury'
	},
	catapults: {
		name: 'Catapults',
		price: 1200,
		category: 'military'
	},
	cattle: {
		name: 'Cattle',
		price: 43,
		category: 'animals'
	},
	champagne: {
		name: 'Champagne',
		price: 300,
		imported: true,
		category: 'luxury'
	},
	cheese: {
		name: 'Cheese',
		price: 130,
		category: 'food'
	},
	cigars: {
		name: 'Cigars',
		price: 290,
		category: 'luxury'
	},
	clay: {
		name: 'Clay',
		price: 20,
		category: 'construction',
		toolbar: true
	},
	clothes: {
		name: 'Clothes',
		price: 104,
		category: 'industry'
	},
	coal: {
		name: 'Coal',
		price: 36,
		category: 'industry'
	},
	cocoa: {
		name: 'Cocoa',
		price: 210,
		category: 'exotic'
	},
	coffee: {
		name: 'Coffee',
		price: 300,
		category: 'exotic'
	},
	coffeebeans: {
		name: 'Coffee Beans',
		price: 220,
		category: 'exotic'
	},
	copper: {
		name: 'Copper',
		price: 60,
		category: 'industry',
		toolbar: true
	},
	copperore: {
		name: 'Copper Ore',
		price: 43,
		category: 'industry'
	},
	corn: {
		name: 'Corn',
		price: 50,
		category: 'food'
	},
	cotton: {
		name: 'Cotton',
		price: 146,
		category: 'industry'
	},
	cottonfabric: {
		name: 'Fabric',
		price: 246,
		category: 'industry'
	},
	dates: {
		name: 'Dates',
		price: 160,
		category: 'exotic'
	},
	diamonds: {
		name: 'Diamonds',
		price: 900,
		category: 'luxury'
	},
	donkeys: {
		name: 'Donkeys',
		price: 90,
		imported: true,
		category: 'animals'
	},
	elephants: {
		name: 'Elephants',
		price: 150,
		imported: true,
		category: 'animals'
	},
	essentialoil: {
		name: 'Essential Oil',
		price: 370,
		imported: true,
		category: 'luxury'
	},
	fish: {
		name: 'Fish',
		price: 16,
		category: 'food'
	},
	flour: {
		name: 'Flour',
		price: 40,
		category: 'food'
	},
	furcoats: {
		name: 'Fur coats',
		price: 105,
		category: 'industry'
	},
	furs: {
		name: 'Furs',
		price: 78,
		category: 'industry'
	},
	gems: {
		name: 'Gems',
		price: 460,
		category: 'luxury'
	},
	glass: {
		name: 'Glass',
		price: 86,
		category: 'industry'
	},
	glasses: {
		name: 'Glasses',
		price: 140,
		category: 'luxury'
	},
	goat: {
		name: 'Goat',
		price: 55,
		category: 'animals'
	},
	gold: {
		name: 'Gold',
		price: 260,
		category: 'industry',
		toolbar: true
	},
	goldore: {
		name: 'Gold Ore',
		price: 80,
		category: 'industry'
	},
	grapes: {
		name: 'Grapes',
		price: 35,
		category: 'industry'
	},
	gunpowder: {
		name: 'Gunpowder',
		price: 420,
		category: 'military'
	},
	hides: {
		name: 'Hides',
		price: 25,
		category: 'industry'
	},
	honey: {
		name: 'Honey',
		price: 180,
		category: 'luxury'
	},
	horses: {
		name: 'Horses',
		price: 100,
		imported: true,
		category: 'animals'
	},
	indigo: {
		name: 'Indigo',
		price: 80,
		category: 'exotic'
	},
	iron: {
		name: 'Iron',
		price: 82,
		category: 'industry',
		toolbar: true
	},
	ironore: {
		name: 'Iron Ore',
		price: 42,
		category: 'industry'
	},
	jewelery: {
		name: 'Jewelery',
		price: 900,
		category: 'luxury'
	},
	leather: {
		name: 'Leather',
		price: 60,
		category: 'industry'
	},
	limestone: {
		name: 'Limestone',
		price: 20,
		category: 'construction'
	},
	lithium: {
		name: 'Lithium',
		price: 260,
		imported: true,
		category: 'exotic'
	},
	marzipan: {
		name: 'Marzipan',
		price: 150,
		category: 'luxury'
	},
	meals: {
		name: 'Meals',
		price: 120,
		category: 'food'
	},
	meat: {
		name: 'Meat',
		price: 30,
		category: 'food',
		toolbar: true
	},
	milk: {
		name: 'Milk',
		price: 30,
		category: 'industry'
	},
	mosaic: {
		name: 'Mosaic',
		price: 200,
		category: 'construction'
	},
	oil: {
		name: 'Oil',
		price: 200,
		category: 'industry'
	},
	paper: {
		name: 'Paper',
		price: 70,
		category: 'luxury'
	},
	pearls: {
		name: 'Pearls',
		price: 450,
		category: 'luxury'
	},
	perfume: {
		name: 'Perfume',
		price: 305,
		category: 'luxury'
	},
	pig: {
		name: 'Pig',
		price: 55,
		category: 'animals'
	},
	pottery: {
		name: 'Pottery',
		price: 55,
		category: 'industry'
	},
	provisions: {
		name: 'Provisions',
		price: 300,
		category: 'military'
	},
	quartz: {
		name: 'Quartz',
		price: 18,
		category: 'industry'
	},
	robes: {
		name: 'Robes',
		price: 400,
		category: 'luxury'
	},
	ropes: {
		name: 'Ropes',
		price: 42,
		category: 'industry'
	},
	roses: {
		name: 'Roses',
		price: 70,
		category: 'luxury'
	},
	salt: {
		name: 'Salt',
		price: 20,
		category: 'industry',
		toolbar: true
	},
	sand: {
		name: 'Sand',
		price: 10,
		category: 'construction'
	},
	silk: {
		name: 'Silk',
		price: 320,
		category: 'exotic'
	},
	silverore: {
		name: 'Silver Ore',
		price: 120,
		imported: true,
		category: 'luxury'
	},
	silver: {
		name: 'Silver',
		price: 300,
		imported: true,
		category: 'luxury'
	},
	spices: {
		name: 'Spices',
		price: 285,
		category: 'exotic'
	},
	spyglasses: {
		name: 'Spyglasses',
		price: 280,
		imported: true,
		category: 'military'
	},
	soap: {
		name: 'Soap',
		price: 220,
		category: 'luxury'
	},
	statues: {
		name: 'Statues',
		price: 1200,
		imported: true,
		category: 'industry'
	},
	steel: {
		name: 'Steel',
		price: 160,
		imported: true,
		category: 'industry'
	},
	stones: {
		name: 'Stones',
		price: 16,
		category: 'construction',
		toolbar: true
	},
	sugar: {
		name: 'Sugar',
		price: 145,
		category: 'luxury'
	},
	sugarcane: {
		name: 'Sugarcane',
		price: 120,
		category: 'luxury'
	},
	sulphur: {
		name: 'Sulphur',
		price: 180,
		category: 'industry'
	},
	tallow: {
		name: 'Tallow',
		price: 10,
		category: 'industry'
	},
	tobacco: {
		name: 'Tobacco',
		price: 190,
		category: 'exotic'
	},
	tools: {
		name: 'Tools',
		price: 135,
		category: 'construction'
	},
	wax: {
		name: 'Wax',
		price: 40,
		category: 'luxury'
	},
	weapons: {
		name: 'Weapons',
		price: 220,
		category: 'military'
	},
	wheat: {
		name: 'Wheat',
		price: 25,
		category: 'food'
	},
	wine: {
		name: 'Wine',
		price: 95,
		category: 'luxury'
	},
	wood: {
		name: 'Wood',
		price: 20,
		category: 'construction',
		toolbar: true
	},
	woodplanks: {
		name: 'Wood Planks',
		price: 30,
		category: 'construction',
		toolbar: true
	}
};

/**
 * List of all obtainable game achievements.
 *
 * @constant
 * @type {Array}
 */
civitas.ACHIEVEMENTS = [
	{
		description: 'Develop your settlement to level 10.',
		name: 'Kiddo',
		handle: 'kiddo',
		conditions: {
			settlement_level: 10
		},
		points: 100
	}, {
		description: 'Develop your settlement to level 20.',
		name: 'Teen',
		handle: 'teen',
		conditions: {
			settlement_level: 20
		},
		points: 200
	}, {
		description: 'Develop your settlement to level 30.',
		name: 'On my own',
		handle: 'onmyown',
		conditions: {
			settlement_level: 30
		},
		points: 500
	}, {
		description: 'Develop your settlement to level 40.',
		name: 'Fear me',
		handle: 'fearme',
		conditions: {
			settlement_level: 40
		},
		points: 1000
	}, {
		description: 'Gather maximum espionage.',
		name: 'Anna Chapman',
		handle: 'chapman',
		conditions: {
			resources: {
				espionage: civitas.MAX_ESPIONAGE_VALUE
			}
		},
		points: 100
	}, {
		description: 'Gather maximum faith.',
		name: 'Jesus Christ',
		handle: 'jesus',
		conditions: {
			resources: {
				faith: civitas.MAX_FAITH_VALUE
			}
		},
		points: 100
	}, {
		description: 'Gather maximum prestige.',
		name: 'Your highness',
		handle: 'highness',
		conditions: {
			resources: {
				espionage: civitas.MAX_PRESTIGE_VALUE
			}
		},
		points: 100
	}, {
		description: 'Gather maximum research.',
		name: 'Albert Einstein',
		handle: 'eistein',
		conditions: {
			resources: {
				research: civitas.MAX_RESEARCH_VALUE
			}
		},
		points: 100
	}, {
		description: 'Gather 100k coins in your settlement.',
		name: 'Gatherer',
		handle: 'gatherer',
		conditions: {
			resources: {
				coins: 100000
			}
		},
		points: 100
	}, {
		description: 'Gather 500k coins in your settlement.',
		name: 'Ba dum tss',
		handle: 'badumtss',
		conditions: {
			resources: {
				coins: 500000
			}
		},
		points: 100
	}, {
		description: 'Gather 1M coins in your settlement.',
		name: 'Milionaire',
		handle: 'milionaire',
		conditions: {
			resources: {
				coins: 1000000
			}
		},
		points: 100
	}, {
		description: 'Gather 10M coins in your settlement.',
		name: 'Rockefeller',
		handle: 'rockefeller',
		conditions: {
			resources: {
				coins: 10000000
			}
		},
		points: 100
	}, {
		description: 'Gather 100M coins in your settlement.',
		name: 'Rottschild',
		handle: 'rottschild',
		conditions: {
			resources: {
				coins: 100000000
			}
		},
		points: 100
	}, {
		description: 'Gather 10k stones in your settlement.',
		name: 'Stone Age',
		handle: 'stoneage',
		conditions: {
			resources: {
				stones: 10000
			}
		},
		points: 100
	}, {
		description: 'Gather 10k wood in your settlement.',
		name: 'Woody the Woodpecker',
		handle: 'woody',
		conditions: {
			resources: {
				wood: 10000
			}
		},
		points: 100
	}, {
		description: 'Gather 10k meat in your settlement.',
		name: 'Animal killer',
		handle: 'animalkiller',
		conditions: {
			resources: {
				meat: 10000
			}
		},
		points: 100
	}, {
		description: 'Recruit 100 soldiers in your settlement.',
		name: 'Armed to the teeth',
		handle: 'armedteeth',
		conditions: {
			soldiers: 100
		},
		points: 100
	}, {
		description: 'Recruit 500 soldiers in your settlement.',
		name: 'Warfiend',
		handle: 'warfiend',
		conditions: {
			soldiers: 500
		},
		points: 200
	}, {
		description: 'Recruit 1000 soldiers in your settlement',
		name: 'Warlord',
		handle: 'warlord',
		conditions: {
			soldiers: 1000
		},
		points: 1000
	}, {
		description: 'Recruit 10 ships in your settlement.',
		name: 'Shipwrecked',
		handle: 'shipwrecked',
		conditions: {
			ships: 10
		},
		points: 100
	}, {
		description: 'Recruit 50 ships in your settlement.',
		name: 'Ship has sailed',
		handle: 'shipsailed',
		conditions: {
			ships: 50
		},
		points: 100
	}, {
		description: 'Recruit 100 ships in your settlement.',
		name: 'Captain Ahab',
		handle: 'ahab',
		conditions: {
			ships: 100
		},
		points: 1000
	}, {
		description: 'Gather 100 prestige.',
		name: 'Prestigious',
		handle: 'prestigious',
		conditions: {
			resources: {
				prestige: 100
			}
		},
		points: 100
	}, {
		description: 'Gather 500 prestige.',
		name: 'The God King',
		handle: 'godking',
		conditions: {
			resources: {
				prestige: 500
			}
		},
		points: 100
	}, {
		description: 'Gather 10 espionage.',
		name: 'You got Mossad-ed!',
		handle: 'mossad',
		conditions: {
			resources: {
				espionage: 10
			}
		},
		points: 10
	}, {
		description: 'Gather 100 espionage.',
		name: 'You got Snowden-ed!',
		handle: 'snowden',
		conditions: {
			resources: {
				espionage: 100
			}
		},
		points: 100
	}, {
		description: 'Gather 500 espionage.',
		name: 'I spy with my own eye',
		handle: 'ispy',
		conditions: {
			resources: {
				espionage: 500
			}
		},
		points: 100
	}, {
		description: 'Gather 10 research.',
		name: 'Initiate',
		handle: 'initiate',
		conditions: {
			resources: {
				research: 10
			}
		},
		points: 10
	}, {
		description: 'Gather 100 research.',
		name: 'Researcher',
		handle: 'researcher',
		conditions: {
			resources: {
				research: 100
			}
		},
		points: 100
	}, {
		description: 'Gather 500 research.',
		name: 'Searching',
		handle: 'searching',
		conditions: {
			resources: {
				research: 500
			}
		},
		points: 100
	}, {
		description: 'Gather 100 faith.',
		name: 'Faithful',
		handle: 'faithful',
		conditions: {
			resources: {
				faith: 100
			}
		},
		points: 100
	}, {
		description: 'Gather 500 faith.',
		name: 'Disciple',
		handle: 'disciple',
		conditions: {
			resources: {
				faith: 500
			}
		},
		points: 100
	}, {
		description: 'Build a Castle in your settlement.',
		name: 'Castlevania',
		handle: 'castlevania',
		conditions: {
			buildings: {
				castle: 1
			}
		},
		points: 400
	}, {
		description: 'Build a Church in your settlement.',
		name: 'Winston Churchill',
		handle: 'churchill',
		conditions: {
			buildings: {
				church: 1
			}
		},
		points: 100
	}, {
		description: 'Build an Academy in your settlement.',
		name: 'Academician',
		handle: 'academician',
		conditions: {
			buildings: {
				academy: 1
			}
		},
		points: 100
	}, {
		description: 'Build each of the mines (Iron, Gold, Copper and Salt).',
		name: 'All mine!',
		handle: 'allmine',
		conditions: {
			buildings: {
				ironmine: 1,
				goldmine: 1,
				coppermine: 1,
				saltmine: 1
			}
		},
		points: 200
	}, {
		description: 'Fill out all your storage space.',
		name: 'All filled up',
		handle: 'allfilledup',
		conditions: {
			storage: 0
		},
		points: 500
	}, {
		description: 'Build 10 catapults in your settlement.',
		name: 'Cat-a-pulter',
		handle: 'catapulter',
		conditions: {
			resources: {
				catapults: 10
			}
		},
		points: 200
	}, {
		description: 'Build an Embassy in your settlement.',
		name: 'Gandhi',
		handle: 'gandhi',
		conditions: {
			buildings: {
				embassy: 1
			}
		},
		points: 100
	}, {
		description: 'Get 100 achievements.',
		name: 'Sir Achievealot',
		handle: 'achievelot',
		conditions: {
			achievements: 100
		},
		points: 100
	}, {
		description: 'Recruit a mercenary army.',
		name: 'Merc',
		handle: 'merc',
		conditions: {
			mercenary: 1
		},
		points: 100
	}, {
		description: 'Reach 10 milion people in your settlement.',
		name: 'Megalopolis',
		handle: 'megalopolis',
		conditions: {
			population: 10000000
		},
		points: 200
	}, {
		description: 'Upgrade your settlement`s Academy to level 3.',
		name: 'Too much research',
		handle: 'toomuchresearch',
		conditions: {
			buildings: {
				academy: 3
			}
		},
		points: 200
	}, {
		description: 'Upgrade your settlement`s Castle to level 3.',
		name: 'Goldilocks',
		handle: 'goldilocks',
		conditions: {
			buildings: {
				castle: 3
			}
		},
		points: 500
	}, {
		description: 'Upgrade your settlement`s Church to level 3.',
		name: 'Cathedral',
		handle: 'cathedral',
		conditions: {
			buildings: {
				church: 3
			}
		},
		points: 300
	}, {
		description: 'Build a Tournir Area in your settlement.',
		name: 'Richard Lionheart',
		handle: 'lionheart',
		conditions: {
			buildings: {
				tournir: 1
			}
		},
		points: 1000
	}, {
		description: 'Send a caravan to another settlement.',
		name: 'Donkey Lord',
		handle: 'donkeylord',
		points: 100
	}, {
		description: 'Send a spy to another settlement.',
		name: 'Bond. James Bond.',
		handle: 'jamesbond',
		points: 100
	}, {
		description: 'Send an army to another settlement.',
		name: 'Warrior',
		handle: 'sendarmy',
		points: 100
	}, {
		description: 'Declare war to another settlement.',
		name: 'Warlord',
		handle: 'declarewar',
		points: 100
	}, {
		description: 'Propose to another settlement to join you.',
		name: 'The One to Rule Them All',
		handle: 'rulethemall',
		points: 100
	}, {
		description: 'Propose a pact to another settlement.',
		name: 'The Friendly',
		handle: 'friendly',
		points: 100
	}, {
		description: 'Propose an alliance to another settlement.',
		name: 'The Pacifist',
		handle: 'pacifist',
		points: 100
	}, {
		description: 'Win a battleground.',
		name: 'Conqueror',
		handle: 'conqueror',
		points: 20
	}, {
		description: 'Lose a battleground.',
		name: 'Foolish!',
		handle: 'foolish',
		points: 10
	}, {
		description: 'Convince another settlement to accept an alliance.',
		name: 'I got your back',
		handle: 'gotyourback',
		points: 200
	}, {
		description: 'Convince another settlement to accept a pact.',
		name: 'Pactish',
		handle: 'pactish',
		points: 200
	}, {
		description: 'Convince another settlement to join your settlement.',
		name: 'You are mine!',
		handle: 'youaremine',
		points: 500
	}, {
		description: 'Adopt Christianity as the religion of your settlement.',
		name: 'Church of Nativity',
		handle: 'nativity',
		conditions: {
			religion: 'christianity'
		},
		points: 100
	}, {
		description: 'Adopt Islam as the religion of your settlement.',
		name: 'Kaaba',
		handle: 'kaaba',
		conditions: {
			religion: 'islam'
		},
		points: 100
	}, {
		description: 'Adopt Judaism as the religion of your settlement.',
		name: 'Hanukkah',
		handle: 'hanukkah',
		conditions: {
			religion: 'judaism'
		},
		points: 100
	}, {
		description: 'Adopt Buddhism as the religion of your settlement.',
		name: 'Bodhisattva',
		handle: 'bodhisattva',
		conditions: {
			religion: 'buddhism'
		},
		points: 100
	}, {
		description: 'Adopt Hinduism as the religion of your settlement.',
		name: 'Bhagavad Gita',
		handle: 'gita',
		conditions: {
			religion: 'hinduism'
		},
		points: 100
	}, {
		description: 'Adopt Confucianism as the religion of your settlement.',
		name: 'Tiān',
		handle: 'tian',
		conditions: {
			religion: 'confucianism'
		},
		points: 100
	}, {
		description: 'Adopt Taoism as the religion of your settlement.',
		name: 'Laozi',
		handle: 'laozi',
		conditions: {
			religion: 'taoism'
		},
		points: 100
	}
];

/*
 * Items in Civitas
 * ================
 *
 * The items in Civitas follow a very simple rule: common is the worst type,
 * rare is good, epic is very good, legendary is for the gods and heroes.
 *
 * That's it for now.
 */

/**
 * Armor
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_TYPE_ARMOR = 1;

/**
 * Weapon
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_TYPE_WEAPON = 2;

/**
 * Other
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_TYPE_OTHER = 3

/**
 * Cloth armor
 *
 * @constant
 * @type {Number}
 */
civitas.ARMOR_TYPE_CLOTH = 1;

/**
 * Leather armor
 *
 * @constant
 * @type {Number}
 */
civitas.ARMOR_TYPE_LEATHER = 2;

/**
 * Mail armor
 *
 * @constant
 * @type {Number}
 */
civitas.ARMOR_TYPE_MAIL = 3;

/**
 * Plate armor
 *
 * @constant
 * @type {Number}
 */
civitas.ARMOR_TYPE_PLATE = 4;

/**
 * Melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE = 1;

/**
 * Ranged weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_RANGED = 2;

/**
 * Bow ranged weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_RANGED_BOW = 1;

/**
 * Crossbow ranged weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_RANGED_CROSSBOW = 2;

/**
 * Gun ranged weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_RANGED_GUN = 3;

/**
 * Thrown ranged weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_RANGED_THROWN = 4;

/**
 * Dagger melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_DAGGER = 1;

/**
 * One-handed axe melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_AXE_ONE_HAND = 2;

/**
 * Two-handed axe melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_AXE_TWO_HAND = 3;

/**
 * Fist melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_FIST = 4;

/**
 * One-handed mace melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_MACE_ONE_HAND = 5;

/**
 * Two-handed mace melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_MACE_TWO_HAND = 6;

/**
 * Polearm melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_POLEARM = 7;

/**
 * Staff melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_STAFF = 8;

/**
 * One-handed sword melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_SWORD_ONE_HAND = 9;

/**
 * Two-handed sword melee weapon
 *
 * @constant
 * @type {Number}
 */
civitas.WEAPON_TYPE_MELEE_SWORD_TWO_HAND = 10;

/**
 * Common quality, bad
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_QUALITY_COMMON = 1;

/**
 * Rare quality, good
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_QUALITY_RARE = 2;

/**
 * Epic quality, very good
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_QUALITY_EPIC = 3;

/**
 * Legendary quality, legen-wait for it-dary!
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_QUALITY_LEGENDARY = 4;

/**
 * Names of the types of item quality
 *
 * @constant
 * @type {Array}
 */
civitas.ITEM_QUALITY_LIST = [
	'',
	'Common',
	'Rare',
	'Epic',
	'Legendary'
];

/**
 * List of colors for each type of item quality
 *
 * @constant
 * @type {Array}
 */
civitas.ITEM_QUALITY_COLORS = [
	'',
	'#00ff00',
	'#0070ff',
	'#a335ee',
	'#ff8000'
];

/**
 * No actual slot, reserved
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_NONE = 0;

/**
 * Neck item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_NECK = 1;

/**
 * Head item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_HEAD = 2;

/**
 * Ring item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_RING = 3;

/**
 * Shoulder item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_SHOULDER = 4;

/**
 * Chestpiece item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_CHEST = 5;

/**
 * Leggings item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_LEGS = 6;

/**
 * Hands item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_HANDS = 7;

/**
 * Waist item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_WAIST = 8;

/**
 * Feet item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_FEET = 9;

/**
 * Main hand item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_MAIN_HAND = 10;

/**
 * Off hand item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_OFF_HAND = 11;

/**
 * Any hand item slot
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOT_ANY_HAND = 12;

/**
 * Number of item slots
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_SLOTS_NUM = 12;

/**
 * Number of backpack slots
 *
 * @constant
 * @type {Number}
 */
civitas.ITEM_BACKPACK_NUM = 6;

/**
 * Name of item slots
 *
 * @constant
 * @type {Array}
 */
civitas.ITEM_SLOTS_LIST = [
	'',
	'Neck',
	'Head',
	'Ring',
	'Shoulder',
	'Chest',
	'Legs',
	'Hands',
	'Waist',
	'Feet',
	'Main Hand',
	'Off Hand',
	''
];

/**
 * Random items
 *
 * @constant
 * @type {Array}
 */
civitas.RANDOM_UNCOMMON = [
	{
		name: 'ITEM of Spirit',
		stats: {
			spirit: 0
		}
	}, {
		name: 'ITEM of Intellect',
		stats: {
			intellect: 0
		}
	}, {
		name: 'ITEM of Strength',
		stats: {
			strength: 0
		}
	}, {
		name: 'ITEM of Stamina',
		stats: {
			spirit: 0
		}
	}, {
		name: 'ITEM of Agility',
		stats: {
			agility: 0
		}
	}, {
		name: 'ITEM of the Tiger',
		stats: {
			strength: 0,
			agility: 0
		}
	}, {
		name: 'ITEM of the Bear',
		stats: {
			strength: 0,
			stamina: 0
		}
	}, {
		name: 'ITEM of the Gorilla',
		stats: {
			strength: 0,
			intellect: 0
		}
	}, {
		name: 'ITEM of the Boar',
		stats: {
			strength: 0,
			spirit: 0
		}
	}, {
		name: 'ITEM of the Monkey',
		stats: {
			agility: 0,
			stamina: 0
		}
	}, {
		name: 'ITEM of the Falcon',
		stats: {
			agility: 0,
			intellect: 0
		}
	}, {
		name: 'ITEM of the Wolf',
		stats: {
			agility: 0,
			spirit: 0
		}
	}, {
		name: 'ITEM of the Eagle',
		stats: {
			stamina: 0,
			intellect: 0
		}
	}, {
		name: 'ITEM of the Whale',
		stats: {
			stamina: 0,
			spirit: 0
		}
	}, {
		name: 'ITEM of the Owl',
		stats: {
			intellect: 0,
			spirit: 0
		}
	}, {
		name: 'ITEM of the Bandit',
		stats: {
			agility: 0,
			stamina: 0,
			attackPower: 0
		}
	}, {
		name: 'ITEM of the Beast',
		stats: {
			agility: 0,
			strength: 0,
			stamina: 0
		}
	}
];

/**
 * Weapon items
 *
 * @constant
 * @type {Object}
 */
civitas.ITEM_WEAPON_DAGGER_WICKED = {
	name: 'Wicked Dagger',
	id: 1,
	stats: {
		damageMin: 0,
		damageMax: 2,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 1
};

civitas.ITEM_WEAPON_DAGGER_DIRK = {
	name: 'Wicked Dirk',
	id: 2,
	stats: {
		damageMin: 1,
		damageMax: 3,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 1.2
};

civitas.ITEM_WEAPON_AXE_SMALL = {
	name: 'Small Axe',
	id: 3,
	stats: {
		damageMin: 3,
		damageMax: 10,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};

civitas.ITEM_WEAPON_SWORD_SMALL = {
	name: 'Small Sword',
	id: 4,
	stats: {
		damageMin: 2,
		damageMax: 4,
		speed: 1.60
	},
	slot: civitas.ITEM_SLOT_ANY_HAND,
	type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};

civitas.ITEM_WEAPON_BUCKLER_SMALL = {
	name: 'Small Buckler',
	id: 5,
	stats: {
		armor: 10
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 2.2
};

civitas.ITEM_EXCALIBUR = {
	name: 'Excalibur',
	id: 6,
	stats: {
		damageMin: 10,
		damageMax: 50,
		speed: 1.0,
		agility: 20,
		stamina: 10,
		strength: 30
	},
	slot: civitas.ITEM_SLOT_MAIN_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_CROWN_OF_KINGS = {
	name: 'Crown of Kings',
	id: 7,
	stats: {
		armor: 10,
		stamina: 10,
		strength: 30
	},
	slot: civitas.ITEM_SLOT_HEAD,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_BULWARK_OF_GODS = {
	name: 'The Bulwark of Gods',
	id: 8,
	stats: {
		armor: 100,
		stamina: 20,
		strength: 50
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_CHESTPIECE_OF_ZEUS = {
	name: 'Chestpiece of Zeus',
	id: 9,
	stats: {
		armor: 200,
		stamina: 30,
		agility: 20,
		strength: 20
	},
	slot: civitas.ITEM_SLOT_CHEST,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_ARCHAIC_WAIST_BAND = {
	name: 'Archaic Waist Band',
	id: 10,
	stats: {
		armor: 5,
		stamina: 3,
		strength: 2,
		intellect: 2
	},
	slot: civitas.ITEM_SLOT_WAIST,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_ALCMENE_BAND = {
	name: 'Alcmene Band',
	id: 11,
	stats: {
		armor: 2,
		stamina: 2,
		strength: 1,
		agility: 2,
		intellect: 1,
		spirit: 10
	},
	slot: civitas.ITEM_SLOT_RING,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_SUN_NECKLACE = {
	name: 'Sun Necklace',
	flavour: 'From Amun Ra to his beloved son.',
	id: 11,
	stats: {
		armor: 4,
		stamina: 2,
		strength: 1,
		intellect: 10,
		spirit: 1
	},
	slot: civitas.ITEM_SLOT_NECK,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_TROJAN_BASTARD_SWORD = {
	name: 'Trojan Bastard Sword',
	flavour: 'Hector`s sword, dropped by the fallen Trojan prince.',
	id: 12,
	stats: {
		damageMin: 8,
		damageMax: 34,
		speed: 1.3,
		stamina: 15,
		strength: 10
	},
	slot: civitas.ITEM_SLOT_MAIN_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_SPEAR_OF_DESTINY = {
	name: 'Spear of Destiny',
	flavour: 'The spear that befell the Trojan prince, Hector.',
	id: 13,
	stats: {
		damageMin: 25,
		damageMax: 90,
		speed: 2,
		stamina: 40,
		strength: 3
	},
	slot: civitas.ITEM_SLOT_MAIN_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_LEGENDARY,
	cost: 1
};

civitas.ITEM_GOLDEN_KATANA = {
	name: 'Golden Katana',
	id: 14,
	stats: {
		damageMin: 10,
		damageMax: 20,
		speed: 1.1,
		stamina: 10,
		agility: 20,
		strength: 5
	},
	slot: civitas.ITEM_SLOT_OFF_HAND,
	type: civitas.ITEM_TYPE_WEAPON,
	secondary_type: civitas.WEAPON_TYPE_MELEE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_ETHEREAL_BOOTS = {
	name: 'Ethereal Boots',
	id: 15,
	stats: {
		armor: 6,
		strength: 10,
		agility: 10
	},
	slot: civitas.ITEM_SLOT_FEET,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_RARE,
	cost: 1
};

civitas.ITEM_SHOULDERPADS_OF_VALOR = {
	name: 'Shoulderpads of Valor',
	id: 16,
	stats: {
		armor: 15,
		strength: 20,
		stamina: 10
	},
	slot: civitas.ITEM_SLOT_SHOULDER,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_COMMON,
	cost: 1
};

civitas.ITEM_MOUNTAIN_TROLLS = {
	name: 'Mountain Trolls',
	id: 17,
	stats: {
		armor: 25,
		agility: 10,
		stamina: 30
	},
	slot: civitas.ITEM_SLOT_LEGS,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

civitas.ITEM_GAUNTLETS_OF_GHASTLY_GLARE = {
	name: 'Gauntlets of Ghastly Glare',
	flavour: 'Ghastly indeed ...',
	id: 18,
	stats: {
		armor: 10,
		strength: 20,
		stamina: 2,
		intellect: 30
	},
	slot: civitas.ITEM_SLOT_HANDS,
	type: civitas.ITEM_TYPE_ARMOR,
	secondary_type: civitas.ARMOR_TYPE_PLATE,
	quality: civitas.ITEM_QUALITY_EPIC,
	cost: 1
};

/**
 * Warrior class
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.HERO_CLASS_WARRIOR = 1;

/**
 * Mage class
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.HERO_CLASS_MAGE = 2;

/**
 * Druid class
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.HERO_CLASS_DRUID = 3;

/**
 * Priest class
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.HERO_CLASS_PRIEST = 4;

/**
 * Rogue class
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.HERO_CLASS_ROGUE = 5;

/**
 * Shaman class
 *
 * @constant
 * @default
 * @type {Number}
 */
civitas.HERO_CLASS_SHAMAN = 6;

/**
 * List of names for hero classes
 *
 * @constant
 * @default
 * @type {Array}
 */
civitas.HERO_CLASS_LIST = [
	'',
	'Warrior',
	'Mage',
	'Druid',
	'Priest',
	'Rogue',
	'Shaman'
];

/**
 * List of in-game heroes.
 *
 * @constant
 * @type {Object}
 */
civitas.HEROES = [
	{
		name: 'Achilles',
		handle: 'achilles',
		description: 'Achilles is a Greek hero of the Trojan War and the central character and greatest warrior of Homer`s Iliad. His mother is the immortal nymph Thetis, and his father, the mortal Peleus, is the king of the Myrmidons.',
		price: 5000000,
		link: 'https://en.wikipedia.org/wiki/Achilles',
		stats: {
			strength: 10,
			stamina: 10,
			agility: 10,
			spirit: 5,
			intellect: 7
		},
		class: civitas.HERO_CLASS_WARRIOR,
		items: [
			civitas.ITEM_TROJAN_BASTARD_SWORD
		],
		backpack: [
		]
	}, {
		name: 'Hector',
		handle: 'hector',
		description: 'In Greek mythology and Roman Mythology, Hector is a Trojan prince and the greatest fighter for Troy in the Trojan War. As the first-born son of King Priam and Queen Hecuba, who was a descendant of Dardanus and Tros, the founder of Troy, he is a prince of the royal house and the heir apparent to his father`s throne.',
		price: 4000000,
		link: 'https://en.wikipedia.org/wiki/Hector',
		stats: {
			strength: 8,
			stamina: 10,
			agility: 6,
			spirit: 4,
			intellect: 6
		},
		class: civitas.HERO_CLASS_WARRIOR,
		items: [
			civitas.ITEM_EXCALIBUR,
			civitas.ITEM_GOLDEN_KATANA
		],
		backpack: [
		]
	}, {
		name: 'Hannibal',
		handle: 'hannibal',
		description: 'Hannibal Barca is a Carthaginian general, considered one of the greatest military commanders in history.',
		price: 3000000,
		link: 'https://en.wikipedia.org/wiki/Hannibal',
		stats: {
			strength: 7,
			stamina: 7,
			agility: 4,
			spirit: 2,
			intellect: 9
		},
		class: civitas.HERO_CLASS_WARRIOR,
		items: [
		],
		backpack: [
		]
	}, {
		name: 'Heracles',
		handle: 'heracles',
		description: 'Heracles is a divine hero in Greek mythology, the son of Zeus and Alcmene, foster son of Amphitryon and great-grandson and half-brother (as they are both sired by the god Zeus) of Perseus.<br /><br />He is the greatest of the Greek heroes, a paragon of masculinity, the ancestor of royal clans who claim to be Heracleidae, and a champion of the Olympian order against chthonic monsters.',
		price: 5000000,
		link: 'https://en.wikipedia.org/wiki/Heracles',
		stats: {
			strength: 9,
			stamina: 9,
			agility: 6,
			spirit: 7,
			intellect: 9
		},
		class: civitas.HERO_CLASS_WARRIOR,
		items: [
			civitas.ITEM_SPEAR_OF_DESTINY,
			civitas.ITEM_CROWN_OF_KINGS,
			civitas.ITEM_BULWARK_OF_GODS,
			civitas.ITEM_CHESTPIECE_OF_ZEUS,
			civitas.ITEM_ARCHAIC_WAIST_BAND,
			civitas.ITEM_ALCMENE_BAND,
			civitas.ITEM_SUN_NECKLACE,
			civitas.ITEM_ETHEREAL_BOOTS,
			civitas.ITEM_SHOULDERPADS_OF_VALOR,
			civitas.ITEM_MOUNTAIN_TROLLS,
			civitas.ITEM_GAUNTLETS_OF_GHASTLY_GLARE
		],
		backpack: [
		]
	}, {
		name: 'Akhenaten',
		handle: 'akhenaten',
		description: 'Akhenaten, known before the fifth year of his reign as Amenhotep IV (sometimes given its Greek form, Amenophis IV, and meaning "Amun Is Satisfied"), is an Ancient Egyptian pharaoh of the 18th Dynasty who ruled for 17 years.',
		price: 1000000,
		link: 'https://en.wikipedia.org/wiki/Akhenaten',
		stats: {
			strength: 4,
			stamina: 4,
			agility: 8,
			spirit: 9,
			intellect: 9
		},
		class: civitas.HERO_CLASS_PRIEST,
		items: [
		],
		backpack: [
		]
	}
];

/**
 * Initial state of the game, based on the selected difficulty.
 *
 * @constant
 * @default
 * @type {Object}
 */
civitas.INITIAL_SEED = [
	/* Easy difficulty */
	{
		/* Roughness of the world generator */
		roughness: 5,
		/* Number of settlements to build initially */
		settlements: {
			/* Cities */
			0: 8, //5,
			/* Villages */
			1: 5,
			/* Metropolis */
			2: 6, //1,
			/* Raider camps */
			3: 6 //0
		},
		places: 6,
		/* Number of soldiers and ships to build initially */
		military: {
			army: {
				militia: 10,
				axeman: 2,
				bowman: 4
			},
			navy: {
				corsair: 2,
				caravel: 1
			}
		},
		resources: {
			coins: 55000,
			fame: civitas.MIN_FAME_VALUE,
			faith: civitas.MIN_FAITH_VALUE,
			prestige: civitas.MIN_PRESTIGE_VALUE,
			espionage: civitas.MIN_ESPIONAGE_VALUE,
			research: civitas.MIN_RESEARCH_VALUE,
			bread: 400,
			meat: 100,
			stones: 100,
			weapons: 100,
			wheat: 40,
			wood: 100,
			woodplanks: 50,
			tools: 40
		},
		buildings: [
			{
				handle: 'marketplace',
				level: 1
			}, {
				handle: 'lumberjack',
				level: 1
			}, {
				handle: 'stonequarry',
				level: 1
			}, {
				handle: 'house1',
				level: 1
			}, {
				handle: 'house2',
				level: 1
			}
		]
	},
	/* Medium difficulty */
	{
		roughness: 6,
		settlements: {
			0: 5,
			1: 10,
			2: 5,
			3: 3
		},
		places: 4,
		military: {
			army: {
				militia: 5,
				axeman: 1,
				bowman: 2
			},
			navy: {
				corsair: 1,
				caravel: 1
			}
		},
		resources: {
			coins: 20000,
			fame: civitas.MIN_FAME_VALUE,
			faith: civitas.MIN_FAITH_VALUE,
			prestige: civitas.MIN_PRESTIGE_VALUE,
			espionage: civitas.MIN_ESPIONAGE_VALUE,
			research: civitas.MIN_RESEARCH_VALUE,
			bread: 300,
			meat: 100,
			stones: 100,
			weapons: 60,
			wheat: 40,
			wood: 100,
			woodplanks: 30,
			tools: 20
		},
		buildings: [
			{
				handle: 'marketplace',
				level: 1
			}, {
				handle: 'lumberjack',
				level: 1
			}, {
				handle: 'stonequarry',
				level: 1
			}, {
				handle: 'house1',
				level: 1
			}, {
				handle: 'house2',
				level: 1
			}
		]
	},
	/* Hard difficulty */
	{
		roughness: 8,
		settlements: {
			0: 10,
			1: 10,
			2: 6,
			3: 10
		},
		places: 3,
		military: {
			army: {
				militia: 3,
				bowman: 2
			},
			navy: {
				corsair: 1
			}
		},
		resources: {
			coins: 10000,
			fame: civitas.MIN_FAME_VALUE,
			faith: civitas.MIN_FAITH_VALUE,
			prestige: civitas.MIN_PRESTIGE_VALUE,
			espionage: civitas.MIN_ESPIONAGE_VALUE,
			research: civitas.MIN_RESEARCH_VALUE,
			bread: 300,
			meat: 100,
			stones: 70,
			wheat: 40,
			wood: 70,
			woodplanks: 20,
			tools: 10
		},
		buildings: [
			{
				handle: 'marketplace',
				level: 1
			}, {
				handle: 'lumberjack',
				level: 1
			}, {
				handle: 'stonequarry',
				level: 1
			}, {
				handle: 'house1',
				level: 1
			}, {
				handle: 'house2',
				level: 1
			}
		]
	},
	/* Hardcore difficulty */
	{
		roughness: 1,
		settlements: {
			0: 10,
			1: 20,
			2: 20,
			3: 20
		},
		places: 1,
		military: {
			army: {},
			navy: {}
		},
		resources: {
			coins: 5000,
			fame: civitas.MIN_FAME_VALUE,
			faith: civitas.MIN_FAITH_VALUE,
			prestige: civitas.MIN_PRESTIGE_VALUE,
			espionage: civitas.MIN_ESPIONAGE_VALUE,
			research: civitas.MIN_RESEARCH_VALUE,
			bread: 100,
			meat: 50,
			stones: 50,
			wheat: 40,
			wood: 50
		},
		buildings: [
			{
				handle: 'marketplace',
				level: 1
			}, {
				handle: 'lumberjack',
				level: 1
			}, {
				handle: 'stonequarry',
				level: 1
			}, {
				handle: 'house1',
				level: 1
			}, {
				handle: 'house2',
				level: 1
			}
		]
	}
];

/**
 * Main Game AI (Artificial Intelligence) object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.modules.ai
 * @returns {civitas.modules.ai}
 */
civitas.modules.ai = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Personality type for this AI.
	 *
	 * @private
	 * @type {Number}
	 */
	this._type = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.modules.ai}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._type = params.type;
		// Todo
		return this;
	};

	/**
	 * Perform the actual data processing for this AI.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.process = function() {
		// Todo
		return true;
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

	// Fire up the constructor
	return this.__init(params);
};

/**
 * World object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.world
 * @returns {civitas.objects.world}
 */
civitas.objects.world = function (params) {

	/**
	 * Random seeds for world generation.
	 *
	 * @private
	 * @type {Object}
	 */
	this._seeds = {
		elevation: null,
		moisture: null
	};

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Terrain colors.
	 *
	 * @private
	 * @type {Object}
	 */
	this._colors = {
		background: '#64B4E1',
		ocean: '#64B5E1',
		grass: '#E6F59A',
		subtropical_desert: '#F2CD63',
		temperate_desert: '#F2CD63',
		taiga: '#E1C85A',
		shrubland: '#E1C859',
		beach: '#FFF899',
		scorched: '#E5F59A',
		bare: '#D1BE79',
		tundra: '#E5F59A',
		snow: '#DCDCE6',
		temperate_deciduous_forest: '#78AA46',
		temperate_rain_forest: '#78AA46',
		tropical_rain_forest: '#549D65',
		tropical_seasonal_forest: '#549D65',
		hills: '#E1C859',
		mountains: '#B37D1A',
		mountains_ice: '#DCDCE6'
	};

	/**
	 * Raw world data.
	 *
	 * @private
	 * @type {Array}
	 */
	this._data = [];

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.world}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._seeds.moisture = typeof params.moisture !== 'undefined' && params.moisture !== null ? params.moisture : this.seed();
		this._seeds.elevation = typeof params.elevation !== 'undefined' && params.elevation !== null ? params.elevation : this.seed();
		this._data = typeof params.data !== 'undefined' ? params.data : [];
		if (this._data.length === 0) {
			this._create_array();
			this._generate();
		}
		return this;
	};

	/**
	 * Get a random number to seed the generator.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.seed = function() {
		return Math.random() * (2147483646 - 1) + 1;
	};

	/**
	 * Get the terrain data as a string based on the elevation.
	 * 
	 * @public
	 * @param {Object} hex
	 * @returns {String}
	 */
	this.get_hex_terrain = function(hex) {
		let elevation = this._data[hex.y][hex.x].e;
		let moisture = this._data[hex.y][hex.x].m;
		if (elevation <= 0.1) {
			return 'ocean';
		} else if (elevation > 0.1 && elevation <= 0.15) {
			return 'beach';
		} else if (elevation > 0.15 && elevation <= 0.35) {
			if (moisture <= 0.30) {
				return 'subtropical_desert';
			} else if (moisture > 0.30 && moisture <= 0.45) {
				return 'grass';
			} else if (moisture > 0.45 && moisture <= 0.66) {
				return 'tropical_seasonal_forest';
			} else {
				return 'tropical_rain_forest';
			}
		} else if (elevation > 0.35 && elevation <= 0.75) {
			if (moisture <= 0.20) {
				return 'temperate_desert';
			} else if (moisture > 0.20 && moisture <= 0.50) {
				return 'grass';
			} else if (moisture > 0.50 && moisture <= 0.83) {
				return 'temperate_deciduous_forest';
			} else {
				return 'temperate_rain_forest';
			}
		} else if (elevation > 0.75 && elevation <= 0.8) {
			if (moisture <= 0.33) {
				return 'temperate_desert';
			} else if (moisture > 0.33 && moisture <= 0.66) {
				return 'shrubland';
			} else {
				return 'taiga';
			}
		} else if (elevation > 0.8 && elevation <= 0.85) {
			return 'hills';
		} else {
			if (moisture >= 0.8) {
				return 'mountains_ice';
			} else {
				return 'mountains';
			}
		}
	};

	/**
	 * Convert a terrain type into climate type.
	 *
	 * @param {String} terrain
	 * @public
	 * @returns {Boolean|Object}
	 */
	this.get_climate_from_terrain = function(terrain) {
		if (terrain === 'tropical_rain_forest' || terrain === 'tropical_seasonal_forest') {
			return {
				id: civitas.CLIMATE_TROPICAL,
				name: civitas.CLIMATES[civitas.CLIMATE_TROPICAL]
			};
		} else if (terrain === 'subtropical_desert' || terrain === 'temperate_desert') {
			return {
				id: civitas.CLIMATE_ARID,
				name: civitas.CLIMATES[civitas.CLIMATE_ARID]
			};
		} else if (terrain === 'mountains_ice' || terrain === 'snow') {
			return {
				id: civitas.CLIMATE_POLAR,
				name: civitas.CLIMATES[civitas.CLIMATE_POLAR]
			};
		} else if (terrain === 'grass' || terrain === 'temperate_deciduous_forest' || terrain === 'temperate_rain_forest' || terrain === 'hills' || terrain === 'mountains' || terrain === 'taiga' || terrain === 'shrubland' || terrain === 'beach' || terrain === 'scorched' || terrain === 'tundra' || terrain === 'bare') {
			return {
				id: civitas.CLIMATE_TEMPERATE,
				name: civitas.CLIMATES[civitas.CLIMATE_TEMPERATE]
			};
		} else {
			return false;
		}
	};

	/**
	 * Convert a climate type into terrain type.
	 *
	 * @param {Number} climate
	 * @public
	 * @returns {Boolean|Array}
	 */
	this.get_terrain_from_climate = function(climate) {
		if (climate === civitas.CLIMATE_TROPICAL) {
			return [
				'tropical_rain_forest',
				'tropical_seasonal_forest'
			];
		} else if (climate === civitas.CLIMATE_ARID) {
			return [
				'subtropical_desert',
				'temperate_desert'
			];
		} else if (climate === civitas.CLIMATE_POLAR) {
			return [
				'mountains_ice',
				'snow'
			];
		} else if (climate === civitas.CLIMATE_TEMPERATE) {
			return [
				'grass',
				'temperate_deciduous_forest',
				'temperate_rain_forest',
				'hills',
				'mountains',
				'taiga',
				'shrubland',
				'beach',
				'scorched',
				'tundra',
				'bare'
			];
		} else {
			return false;
		}
	};

	/**
	 * Get a random world location
	 * 
	 * @public
	 * @param {String} terrain
	 * @returns {Object}
	 */
	this.get_random_location = function(terrain) {
		const hex = {
			x: civitas.utils.get_random(0, civitas.WORLD_SIZE_WIDTH - 1),
			y: civitas.utils.get_random(0, civitas.WORLD_SIZE_HEIGHT - 1)
		}
		if (typeof terrain !== 'undefined') {
			if (!this.hex_is_water(hex) && !this.hex_is_locked(hex)) {
				//if ($.inArray(data[hex.y][hex.x].t, terrain) !== -1) {
					return hex;
				//}
			}
			return this.get_random_location(terrain);
		} else {
			if (!this.hex_is_water(hex) && !this.hex_is_locked(hex)) {
				return hex;
			}
			return this.get_random_location(terrain);
		}
	};

	/**
	 * Get the world properties.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.properties = function() {
		return this._properties;
	};

	/**
	 * Return the default terrain colors.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.colors = function() {
		return this._colors;
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
	 * Check if the specified hex is ocean.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {Boolean}
	 */
	this.hex_is_water = function(hex) {
		if (this.get_hex_terrain(hex) === 'ocean') {
			return true;
		}
		return false;
	};

	/**
	 * Lock the specified hex as being inside the borders of a settlement.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {String}
	 */
	this.lock_hex = function(hex, lid) {
		this.set_hex(hex, 'l', true);
		this.set_hex(hex, 'lid', lid);
	};

	/**
	 * Unlock the specified hex.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {String}
	 */
	this.unlock_hex = function(hex) {
		this.set_hex(hex, 'l', false);
		this.set_hex(hex, 'lid', null);
	};

	/**
	 * Check if the specified hex is locked.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {Boolean}
	 */
	this.hex_is_locked = function(hex) {
		return this.get_hex(hex.x, hex.y).l;
	};

	/**
	 * Lock the specified hex by the settlement id.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {Object}
	 */
	this.hex_locked_by = function(hex) {
		return this.get_hex(hex.x, hex.y).lid;
	};

	/**
	 * Return the moisture data for the specified hex.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {Number}
	 */
	this.get_hex_moisture = function(hex) {
		return this.get_hex(hex.x, hex.y).m;
	};

	/**
	 * Return the elevation data for the specified hex.
	 *
	 * @public
	 * @param {Object} hex
	 * @returns {Number}
	 */
	this.get_hex_elevation = function(hex) {
		return this.get_hex(hex.x, hex.y).e;
	};

	/**
	 * Return the specified hex raw data.
	 *
	 * @public
	 * @param {Number} x
	 * @param {Number} y
	 * @returns {Object}
	 */
	this.get_hex = function(x, y) {
		return this._data[y][x];
	};

	/**
	 * Set the specified hex data.
	 *
	 * @public
	 * @param {Object} hex
	 * @param {String} key
	 * @param {String|Number|Array|Object} value
	 * @returns {Object}
	 */
	this.set_hex = function(hex, key, value) {
		return this._data[hex.y][hex.x][key] = value;
	};

	/**
	 * Add a place into the world data.
	 *
	 * @public
	 * @param {civitas.objects.place} place
	 * @returns {civitas.objects.world}
	 */
	this.add_place = function(place) {
		const location = place.location();
		this.set_hex(location, 'p', place.id());
		if (place.is_claimed() === false) {
			this.lock_hex(location, place.id());
		} else {
			this.lock_hex(location, place.is_claimed());
		}
		return this;
	};

	/**
	 * Add a settlement into the world data.
	 *
	 * @public
	 * @param {civitas.objects.settlement} settlement
	 * @returns {civitas.objects.world}
	 */
	this.add_settlement = function(settlement) {
		const location = settlement.location();
		this.set_hex(location, 's', settlement.id());
		this.set_hex(location, 'n', settlement.name());
		this.lock_hex(location, settlement.id());
		this.calc_neighbours(settlement);
		return this;
	};

	/**
	 * Remove a settlement from the world data.
	 *
	 * @public
	 * @param {civitas.objects.settlement} settlement
	 * @returns {civitas.objects.world}
	 */
	this.remove_city = function(settlement) {
		const location = settlement.location();
		const id = settlement.id();
		this._data[location.y][location.x].s = null;
		this._data[location.y][location.x].n = null;
		for (let x = 0; x < civitas.WORLD_SIZE_WIDTH; x++) {
			for (let y = 0; y < civitas.WORLD_SIZE_HEIGHT; y++) {
				if (this._data[y][x].lid === id) {
					this._data[y][x].lid = null;
					this._data[y][x].l = false;
				}
			}
		}
		//$('#worldmap-city-image' + location.y + '-' + location.x).remove();
		return this;
	};

	/**
	 * Create the raw multidimensional array.
	 *
	 * @private
	 * @returns {civitas.objects.world}
	 */
	this._create_array = function() {
		this._data = new Array(civitas.WORLD_SIZE_WIDTH);
		for (let i = 0; i < civitas.WORLD_SIZE_WIDTH; i += 1) {
			this._data[i] = new Array(civitas.WORLD_SIZE_HEIGHT);
		}
		for (let i = 0; i < civitas.WORLD_SIZE_WIDTH; i += 1) {
			for (let j = 0; j < civitas.WORLD_SIZE_HEIGHT; j += 1) {
				this._data[i][j] = {
					/* Elevation */
					e: 0,
					/* Moisture */
					m: 0,
					/* Place id */
					p: null,
					/* Settlement id */
					s: null,
					/* Settlement name */
					n: null,
					/* Locked */
					l: false,
					/* Locked to settlement id */
					lid: null
				};
			}
		}
		return this;
	};

	/**
	 * Generate the elevation and moisture maps.
	 *
	 * @private
	 * @returns {civitas.objects.world}
	 */
	this._generate = function() {
		let rng1 = PM_PRNG.create(this._seeds.elevation);
		let rng2 = PM_PRNG.create(this._seeds.moisture);
		let gen1 = new SimplexNoise(rng1.nextDouble.bind(rng1));
		let gen2 = new SimplexNoise(rng2.nextDouble.bind(rng2));
		function noise1(nx, ny) {
			return gen1.noise2D(nx, ny) / 2 + 0.5;
		}
		function noise2(nx, ny) {
			return gen2.noise2D(nx, ny) / 2 + 0.5;
		}
		for (let x = 0; x < civitas.WORLD_SIZE_HEIGHT; x++) {
			for (let y = 0; y < civitas.WORLD_SIZE_WIDTH; y++) {      
				let nx = x / civitas.WORLD_SIZE_HEIGHT - 0.5;
				let ny = y / civitas.WORLD_SIZE_WIDTH - 0.5;
				let e = (1.00 * noise1(1 * nx,  1 * ny)
					+ 0.77 * noise1(2 * nx,  2 * ny)
					+ 0.00 * noise1(4 * nx,  4 * ny)
					+ 0.00 * noise1(8 * nx,  8 * ny)
					+ 0.00 * noise1(16 * nx, 16 * ny)
					+ 0.00 * noise1(32 * nx, 32 * ny));
				e /= (1.00 + 0.77 + 0.00 + 0.00 + 0.00 + 0.00);
				e = Math.pow(e, civitas.WORLD_EROSION);
				this._data[y][x].e = e;
				let m = (1.00 * noise2(1 * nx,  1 * ny)
					+ 0.75 * noise2(2 * nx,  2 * ny)
					+ 0.33 * noise2(4 * nx,  4 * ny)
					+ 0.33 * noise2(8 * nx,  8 * ny)
					+ 0.33 * noise2(16 * nx, 16 * ny)
					+ 0.50 * noise2(32 * nx, 32 * ny));
				m /= (1.00 + 0.75 + 0.33 + 0.33 + 0.33 + 0.50);
				this._data[y][x].m = m;
			}
		}
		return this;
	};

	/**
	 * Get the list of all the neighbouring hexes to the specified settlement.
	 *
	 * @returns {Array}
	 * @public
	 */
	this.get_neighbours = function(settlement) {
		const hexes = [];
		const location = settlement.location();
		const neighbours = this.get_neighbouring_hexes(location.y, location.x);
		if (settlement.is_city()) {
			for (let z = 0; z < neighbours.length; z++) {
				hexes.push(neighbours[z]);
			}
		} else if (settlement.is_metropolis()) {
			for (let z = 0; z < neighbours.length; z++) {
				hexes.push(neighbours[z]);
				const new_neighbours = this.get_neighbouring_hexes(neighbours[z].y, neighbours[z].x);
				for (let u = 0; u < new_neighbours.length; u++) {
					hexes.push(new_neighbours[u]);
				}
			}
		}
		return hexes;
	};

	/**
	 * Lock neighbouring hexes.
	 *
	 * @public
	 * @returns {civitas.objects.world}
	 */
	this.calc_neighbours = function(settlement) {
		let terrain;
		const neighbours = this.get_neighbours(settlement);
		for (let i = 0; i < neighbours.length; i++) {
			if ((neighbours[i].x >= 0 && neighbours[i].x < civitas.WORLD_SIZE_WIDTH) && (neighbours[i].y >= 0 && neighbours[i].y < civitas.WORLD_SIZE_HEIGHT)) {
				terrain = this.get_hex_terrain(neighbours[i]);
				this.lock_hex(neighbours[i], settlement.id());
				if (terrain === 'ocean') {
					settlement.waterside(true);
				}
			}
		}
		return this;
	};

	this.get_neighbouring_hexes = function(y, x) {
		if (x % 2 == 0) {
			return [
				{
					x: x+1,
					y: y
				}, {
					x: x+1,
					y: y-1
				}, {
					x: x,
					y: y-1
				}, {
					x: x-1,
					y: y
				}, {
					x: x-1,
					y: y-1
				}, {
					x: x,
					y: y+1
				}
			]
		} else {
			return [
				{
					x: x+1,
					y: y
				}, {
					x: x+1,
					y: y+1
				}, {
					x: x,
					y: y-1
				}, {
					x: x-1,
					y: y
				}, {
					x: x-1,
					y: y+1
				}, {
					x: x,
					y: y+1
				}
			]
		}
	};

	/**
	 * Get the distance between two points.
	 *
	 * @param {Number} source
	 * @param {Number} destination
	 * @returns {Number}
	 */
	this.get_distance = function(source, destination) {
		return Math.floor(Math.sqrt(Math.pow(destination.x - source.x, 2) + Math.pow(destination.y - source.y, 2))) * 100;
	};

	/**
	 * Get the distance between two points in days
	 *
	 * @param {Number} source
	 * @param {Number} destination
	 * @returns {Number}
	 */
	this.get_distance_in_days = function(source, destination) {
		return Math.floor((Math.sqrt(Math.pow(destination.x - source.x, 2) + Math.pow(destination.y - source.y, 2)) * 100) / 15);
	};

	/**
	 * Get/set the world data seeds.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {Array}
	 */
	this.seeds = function(value) {
		if (typeof value !== 'undefined') {
			this._seeds = value;
		}
		return this._seeds;
	};

	/**
	 * Get/set the world data array.
	 *
	 * @public
	 * @param {Array} value
	 * @returns {Array}
	 */
	this.data = function(value) {
		if (typeof value !== 'undefined') {
			this._data = value;
		}
		return this._data;
	};

	/**
	 * Draw the worldmap data to a HTML5 canvas.
	 *
	 * @public
	 * @returns {civitas.objects.world}
	 */
	this.draw = function() {
		let settlements = this.core().get_settlements();
		let data = this.data();
		let colors = this.colors();
		let scale = civitas.WORLD_HEX_SIZE / 24;
		let height = Math.sqrt(3) / 2 * civitas.WORLD_HEX_SIZE;
		let image_width = (1.5 * civitas.WORLD_SIZE_WIDTH +  0.5) * civitas.WORLD_HEX_SIZE;
		let image_height = (2 * civitas.WORLD_SIZE_HEIGHT  +  1) * height;
		$('.worldmap').empty().append('<canvas class="canvas-map"></canvas>');
		let canvas = $('.canvas-map').get(0);
		let currentHexX;
		let currentHexY;
		let offsetColumn = false;
		let __height = Math.sqrt(3) * civitas.WORLD_HEX_SIZE;
		let __width = 2 * civitas.WORLD_HEX_SIZE;
		let __side = (3 / 2) * civitas.WORLD_HEX_SIZE;
		canvas.width = image_width;
		canvas.height = image_height;
		let ctx = canvas.getContext('2d');
		ctx.fillStyle = colors.background;
		ctx.fillRect(0, 0, image_width, image_height);
		for (let i = 0; i < civitas.WORLD_SIZE_WIDTH; ++i) {
			for (let j = 0; j < civitas.WORLD_SIZE_HEIGHT; ++j) {
				if (!offsetColumn) {
					currentHexX = i * __side;
					currentHexY = j * __height;
				} else {
					currentHexX = i * __side;
					currentHexY = (j * __height) + (__height * 0.5);
				}
				let terrain = this.get_hex_terrain({
					x: i,
					y: j
				});
				let color = colors[terrain];
				let opacity = 0.6;
				if (data[j][i].l === true) {
					let lid = data[j][i].lid;
					let pid = data[j][i].p;
					if (lid !== null && pid === null) {
						if (typeof settlements[lid] !== 'undefined') {
							color = settlements[lid].color();
						}
					} else if (lid !== null && pid !== null) {
						let place = this.core().get_place(pid);
						if (place) {
							if (place.is_claimed() !== false) {
								color = settlements[lid].color();
							}
						}
					}
					opacity = 0.2;
				}
				ctx.beginPath();
				ctx.moveTo(currentHexX + __width - __side, currentHexY);
				ctx.lineTo(currentHexX + __side, currentHexY);
				ctx.lineTo(currentHexX + __width, currentHexY + (__height / 2));
				ctx.lineTo(currentHexX + __side, currentHexY + __height);
				ctx.lineTo(currentHexX + __width - __side, currentHexY + __height);
				ctx.lineTo(currentHexX, currentHexY + (__height / 2));
				ctx.closePath();
				if (civitas.WORLD_GRID === true) {
					ctx.strokeStyle = "#666";
				} else {
					ctx.strokeStyle = color;
				}
				ctx.lineWidth = 1;
				ctx.stroke();
				ctx.fillStyle = color;
				ctx.fill();
				if (civitas.WORLD_BEAUTIFY === true) {
					this._apply_terrain(currentHexX, currentHexY, canvas, terrain, opacity);
				}
			}
			offsetColumn = !offsetColumn;
		}
		return this;
	};

	/**
	 * Apply the terrain features.
	 *
	 * @private
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Object} canvas
	 * @param {String} terrain
	 * @param {Number} opacity
	 * @returns {civitas.objects.world}
	 */
	this._apply_terrain = function(x, y, canvas, terrain, opacity) {
		let scale = civitas.WORLD_HEX_SIZE / 24;
		let ctx = canvas.getContext('2d');
		let imageObject = new Image();
		let image_size = civitas.WORLD_HEX_SIZE * 36 / 24;
		imageObject.onload = function() {
			ctx.globalAlpha = opacity;
			ctx.drawImage(imageObject, x + 6, y + 2, image_size, image_size);
			ctx.globalAlpha = 1;
		}
		imageObject.src = civitas.ASSETS_URL + 'images/world/terrain/' + terrain + '.png';
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};

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

/**
 * Main Game place object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.place
 * @returns {civitas.objects.place}
 */
civitas.objects.place = function(params) {
	
	/**
	 * Settlement properties.
	 *
	 * @private
	 * @type {Object}
	 */
	this._properties = {
		id: null,
		sid: null,
		scouted: false,
		name: null
	};

	/**
	 * The current and needed resources of this place.
	 *
	 * @private
	 * @type {Object}
	 */
	this._resources = {
		current: {
			// Todo
		},
		required: {
			// Todo
		}
	};

	/**
	 * Location of the place.
	 *
	 * @private
	 * @type {Object}
	 */
	this._location = {
		x: 0,
		y: 0
	};

	/**
	 * Pointer to the game core.
	 * 
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.place}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this._core = params.core;
		this._properties.id = params.properties.id;
		this._properties.sid = params.properties.sid;
		this._properties.scouted = params.properties.scouted;
		this._properties.name = (typeof params.properties.name !== 'undefined') ? params.properties.name: civitas.utils.get_random_unique(civitas.PLACES_NAMES);
		this._location = params.location;
		this._resources = params.resources;
		this.core().world().add_place(this);
		return this;
	};

	/**
	 * Get/set the resources of the place.
	 *
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.resources = function(value) {
		if (typeof value !== 'undefined') {
			this._resources = value;
		}
		return this._resources;
	};

	/**
	 * Get/set the location of the place.
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
	 * Get/set the id of this place.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.id = function(value) {
		if (typeof value !== 'undefined') {
			this._properties.id = id;
		}
		return this._properties.id;
	};

	this.is_claimed = function() {
		if (this._properties.sid === null) {
			return false;
		} else {
			return this._properties.sid;
		}
	};

	this.is_scouted = function() {
		return this._properties.scouted;
	};

	this.scout = function() {
		this._properties.scouted = true;
	};

	this.claim = function(settlement) {
		if (this._properties.sid === null) {
			this._properties.sid = settlement.id();
			this.core().world().lock_hex(this.location(), settlement.id());
			return true;
		}
		return false;
	};

	this.unclaim = function(settlement) {
		if (settlement.id() === this._properties.sid) {
			this._properties.sid = null;
			this.core().world().unlock_hex(this.location());
			return true;
		}
		return false;
	};

	/**
	 * Get/set the name of this place.
	 * 
	 * @public
	 * @param {String} value
	 * @returns {String}
	 */
	this.name = function(value) {
		if (typeof value !== 'undefined') {
			this._properties.name = value;
		}
		return this._properties.name;
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
	 * Get the settlement properties.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.properties = function() {
		return this._properties;
	};

	/**
	 * Export place data.
	 *
	 * @returns {Object}
	 * @public
	 */
	this.export = function() {
		const data = {
			properties: this.properties(),
			location: this.location(),
			resources: this.resources()
		};
		return data;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game event object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.event
 * @returns {civitas.objects.event}
 */
civitas.objects.event = function (params) {

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Name of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this._name = null;

	/**
	 * Event's chance to occur.
	 *
	 * @private
	 * @type {Number}
	 */
	this._chance = 0;

	/**
	 * Event's effect.
	 *
	 * @private
	 * @type {Number}
	 */
	this._effect = null;

	/**
	 * Description of the event.
	 *
	 * @private
	 * @type {String}
	 */
	this._description = null;

	/**
	 * Event data for lowering stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this._lower = null;

	/**
	 * Event data for raising stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this._raise = null;

	/**
	 * Event data for destroying stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this._destroy = null;

	/**
	 * Event data for building stuff.
	 *
	 * @private
	 * @type {Object}
	 */
	this._build = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.event}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._name = params.name;
		this._chance = (typeof params.chance !== 'undefined') ? params.chance : 0.001;
		this._description = params.description;
		this._raise = typeof params.raise !== 'undefined' ? params.raise : null;
		this._lower = typeof params.lower !== 'undefined' ? params.lower : null;
		this._destroy = typeof params.destroy !== 'undefined' ? params.destroy : null;
		this._build = typeof params.build !== 'undefined' ? params.build : null;
		this.process();
		return this;
	};

	/**
	 * Process the event data.
	 * 
	 * @public
	 * @returns {civitas.objects.event}
	 */
	this.process = function () {
		const core = this.core();
		const random_s_id = civitas.utils.get_random(1, core.settlements.length);
		const with_settlement = core.get_settlement(random_s_id);
		const settlement = core.get_settlement();
		let description = '';
		if (with_settlement !== false) {
			description = this._description.replace(/SETTLEMENT/g, with_settlement.name());
			if (this._raise !== null) {
				for (let item in this._raise) {
					if (item === 'influence') {
						settlement.raise_influence(with_settlement.id(), this._raise[item]);
					} else {
						if (settlement.has_storage_space_for(item, this._raise[item])) {
							settlement.add_to_storage(item, this._raise[item]);
						}
					}
					let replace = new RegExp(item.toUpperCase(), 'g');
					description = description.replace(replace, this._raise[item]);
				}
			}
			if (this._lower !== null) {
				for (let item in this._lower) {
					if (item === 'influence') {
						settlement.lower_influence(with_settlement.id(), this._lower[item]);
					} else {
						settlement.remove_resource(item, this._lower[item]);
					}
					let replace = new RegExp(item.toUpperCase(), 'g');
					description = description.replace(replace, this._lower[item]);
				}
			}
		}
		if (this._destroy !== null) {
			let buildings = settlement.get_buildings();
			const building = civitas.utils.get_random(1, buildings.length);
			const _building = buildings[building];
			if (typeof _building !== 'undefined') {
				const name = _building.get_name();
				buildings[building].demolish();
				let replace = new RegExp('BUILDING', 'g');
				description = description.replace(replace, name);
			}
		}
		if (this._build !== null) {
			const buildings = settlement.get_buildings();
			// Todo
			let replace = new RegExp('BUILDING', 'g');
			description = description.replace(replace, name);
		}
		if (settlement.is_player()) {
			core.ui().notify(description, 'Event: ' + this._name, false, civitas.NOTIFY_EVENT);
		}
		core.ui().log('event', this._name);
		return this;
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

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game building object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.building
 * @returns {civitas.objects.building}
 */
civitas.objects.building = function(params) {

	/**
	 * The level of this building.
	 * 
	 * @type {Number}
	 * @private
	 */
	this.level = 1;

	/**
	 * Pointer to the settlement this building is located in.
	 * 
	 * @type {civitas.objects.settlement}
	 * @private
	 */
	this.settlement = null;

	/**
	 * The name of this building.
	 * 
	 * @type {String}
	 * @private
	 */
	this.name = null;

	/**
	 * The type of this building.
	 * 
	 * @type {String}
	 * @private
	 */
	this.type = null;

	/**
	 * Check if this building producing goods.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.stopped = false;

	/**
	 * Check if this is a production building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_production = false;

	/**
	 * Check if this is a municipal building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_municipal = false;

	/**
	 * Check if this is a housing building.
	 * 
	 * @type {Boolean}
	 * @private
	 */
	this.is_housing = false;

	/**
	 * The DOM handle of this building.
	 *
	 * @type {String}
	 * @private
	 */
	this.handle = null;

	/**
	 * Flag if this building has any problems producing its goods.
	 *
	 * @type {Boolean}
	 * @private
	 */
	this.problems = false;

	/*
	 * The position of this building.
	 *
	 * @type {Object}
	 * @private
	 */
	this._position = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.building}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		let self = this;
		this.settlement = params.settlement;
		this.type = params.type;
		this.name = params.data.name;
		this.is_production = (typeof params.data.production !== 'undefined') ? true : false;
		this.is_municipal = (typeof params.data.is_municipal !== 'undefined' && params.data.is_municipal === true) ? true : false;
		this.is_housing = (typeof params.data.tax !== 'undefined') ? true : false;
		this.level = (typeof params.data.level !== 'undefined') ? params.data.level : 1;
		this._position = (typeof params.data.position !== 'undefined') ? params.data.position : {
			x: 0,
			y: 0
		};
		this.stopped = (typeof params.stopped !== 'undefined') ? params.stopped : false;
		this.handle = params.data.handle;
		params.data.level = this.get_level();
		if (params.hidden !== true && this.settlement.is_player()) {
			$('section.game').append(self.core().ui().building_element(params)).on('click', '#building-' + this.get_handle(), function() {
				let panel = civitas['PANEL_' + self.get_handle().toUpperCase()];
				if (typeof panel !== 'undefined') {
					self.core().ui().open_panel(panel, params.data);
				} else {
					self.core().ui().open_panel(civitas.PANEL_BUILDING, params.data, true);
				}
				return false;
			});
			if (this.stopped === true) {
				this.notify(civitas.NOTIFICATION_PAUSED);
			} else {
				this.notify();
			}
			this.core().ui().refresh();
		}
		if (typeof params.data.storage !== 'undefined') {
			this.get_settlement().storage(this.get_settlement().storage().all + (params.data.storage * this.get_level()));
		}
		return this;
	};

	/**
	 * Check if the building can be upgraded.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_upgradable = function() {
		const building = this.get_building_data();
		if (this.get_level() < building.levels) {
			return true;
		}
		return false;
	};

	/**
	 * Check if the building can be downgraded.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_downgradable = function() {
		const building = this.get_building_data();
		if (this.get_level() > 1) {
			return true;
		}
		return false;
	};

	/**
	 * Calculate the upgrade costs according to the next level.
	 *
	 * @public
	 * @returns {Object|Boolean}
	 */
	this.get_upgrade_costs = function() {
		if (this.is_upgradable()) {
			const next_level = this.get_level() + 1;
			const costs = {};
			const data = this.get_building_data(this.get_type());
			for (let item in data.cost) {
				costs[item] = data.cost[item] * next_level;
			}
			return costs;
		}
		return false;
	};

	/**
	 * Upgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.upgrade = function() {
		const core = this.core();
		const settlement = this.get_settlement();
		const resources = settlement.get_resources();
		const next_level = this.get_level() + 1;
		let data = this.get_building_data(this.get_type());
		let building_image = this.get_type();
		const costs = this.get_upgrade_costs();
		if (data && this.is_upgradable() && settlement.is_building_built(this.get_type())) {
			if (costs && this.get_settlement().has_resources(costs)) {
				this.get_settlement().remove_resources(costs);
				this.set_level(next_level);
				if (settlement.is_player()) {
					if (this.get_type().slice(0, 5) === 'house') {
						building_image = this.get_type().slice(0, 5);
					}
					$('section.game .building[data-type=' + this.get_type() + ']').css({
						'background-image': 'url(' + civitas.ASSETS_URL + 'images/assets/buildings/' + ((typeof data.visible_upgrades === 'undefined' || data.visible_upgrades === false) ? building_image : building_image + this.get_level()) + '.png)'
					});
				}
				if (typeof data.storage !== 'undefined') {
					settlement.storage(settlement.storage().all + data.storage);
				}
				if (settlement.is_player()) {
					core.save_and_refresh();
					core.ui().notify(this.get_name() + ' upgraded to level ' + this.get_level());
				}
				return true;
			} else {
				if (settlement.is_player()) {
					core.ui().error('You don`t have enough resources to upgrade your ' + this.get_name() + '.');
				}
				return false;
			}
		}
		return false;
	};

	/**
	 * Downgrade this building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.downgrade = function() {
		const settlement = this.get_settlement();
		let data = this.get_building_data(this.get_type());
		const building_image = this.get_type();
		const next_level = this.get_level() - 1;
		if (data && this.is_downgradable() && settlement.is_building_built(this.get_type())) {
			this.set_level(next_level);
			if (settlement.is_player()) {
				if (this.get_type().slice(0, 5) === 'house') {
					building_image = this.get_type().slice(0, 5);
				}
				$('section.game .building[data-type=' + this.get_type() + ']').css({
					'background-image': 'url(' + civitas.ASSETS_URL + 'images/assets/buildings/' + ((typeof data.visible_upgrades === 'undefined' || data.visible_upgrades === false) ? building_image + '1' : building_image + this.get_level()) + '.png)'
				});
				if (typeof data.storage !== 'undefined') {
					settlement.storage(settlement.storage().all - data.storage);
				}
				this.core().save_and_refresh();
				this.core().ui().notify(this.get_name() + ' downgraded to level ' + this.get_level());
			}
			return true;
		}
		return false;
	};

	/**
	 * Check if this building is a housing building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_housing_building = function() {
		return this.is_housing;
	};

	/**
	 * Check if this building is a municipal building.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_municipal_building = function() {
		return this.is_municipal;
	};

	/**
	 * Check if this building is a production building (its production can be
	 * started and stopped).
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_production_building = function() {
		return this.is_production;
	};

	/**
	 * Check if this building's production is started or stopped.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_stopped = function() {
		return this.stopped;
	};

	/**
	 * Start this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.start_production = function() {
		if (this.get_settlement().is_building_built(this.get_type()) &&
			this.is_production_building()) {
			if (this.get_settlement().is_player()) {
				this.core().ui().notify(this.get_name() + '`s production started.');
			}
			this.notify();
			this.stopped = false;
			this.core().save_and_refresh();
			return true;
		}
		return false;
	};

	/**
	 * Stop this building's production
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.stop_production = function() {
		if (this.get_settlement().is_building_built(this.get_type()) &&
			this.is_production_building()) {
			if (this.get_settlement().is_player()) {
				this.core().ui().notify(this.get_name() + '`s production stopped.');
			}
			this.notify(civitas.NOTIFICATION_PAUSED);
			this.stopped = true;
			this.core().save_and_refresh();
			return true;
		}
		return false;
	};

	/**
	 * Demolish this building and remove it from the DOM.
	 * 
	 * @public
	 * @param {Boolean} notify
	 * @returns {Boolean}
	 */
	this.demolish = function(notify) {
		const settlement = this.get_settlement();
		if (this.get_type() !== 'marketplace') {
			for (let i = 0; i < settlement.buildings.length; i++) {
				if (settlement.buildings[i].get_type() === this.get_type()) {
					settlement.buildings.splice(i, 1);
				}
			}
			if (settlement.is_player()) {
				$('section.game > .building[data-type=' + this.get_type() + ']').remove();
				if (notify === true) {
					this.core().ui().notify(this.get_name() + ' demolished successfully!');
				}
			}
			return true;
		} else {
			if (settlement.is_player()) {
				if (notify === true) {
					this.core().ui().error('Unable to demolish the specified building `' + this.get_name() + '`!');
				}
			}
			return false;
		}
	};

	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_building_data = function(type) {
		if (typeof type === 'undefined') {
			type = this.type;
		}
		return this.core().get_building_config_data(type);
	};

	/**
	 * Get the settlement resources object
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.get_settlement_resources = function() {
		return this.get_settlement().get_resources();
	};

	/**
	 * Check if this building has all the buildings requirements.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.has_building_requirements = function() {
		let good = true;
		let parent;
		const building = this.get_building_data();
		if (typeof building.requires.buildings !== 'undefined') {
			const required = building.requires.buildings;
			for (let item in required) {
				if (this.get_settlement().is_building_built(item, required[item])) {
					parent = this.get_settlement().get_building(item);
					if (parent && !parent.is_stopped()) {
						good = parent.has_building_requirements() && parent.has_settlement_requirements()
						if (good === false) {
							return false;
						}
					} else {
						return false;
					}
				}
			}
		}
		return good;
	};

	/**
	 * Check if this building has all the research requirements.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.has_research_requirements = function() {
		const building = this.get_building_data();
		if (typeof building.requires.research !== 'undefined') {
			if (!this.core().has_research(building.requires.research)) {
				return false;
			}
		}
		return true;
	};

	/**
	 * Check if this building has all the settlement level requirements.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.has_settlement_requirements = function() {
		const building = this.get_building_data();
		if (typeof building.requires.settlement_level !== 'undefined') {
			if (building.requires.settlement_level > this.get_settlement().level()) {
				return false;
			}
		}
		return true;
	};

	/**
	 * Check if this building has all the requirements.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.has_requirements = function() {
		return this.has_building_requirements() && this.has_settlement_requirements() && this.has_research_requirements();
	};

	/**
	 * Tax this building.
	 *
	 * @public
	 * @param {Number} amount
	 * @returns {Boolean}
	 */
	this.tax = function(amount) {
		let _amount = this.get_tax_amount(amount);
		this.get_settlement().inc_coins(_amount);
		return this;
	};

	/**
	 * Return the amount of taxation based on the settlement research.
	 *
	 * @public
	 * @param {Number}
	 * @returns {Number}
	 */
	this.get_tax_amount = function(amount) {
		return amount * this.get_level() + this.core().get_tax_modifier(this.get_handle());
	};

	/**
	 * Produce the resources.
	 *
	 * @public
	 * @param {Object} materials
	 * @returns {Boolean}
	 */
	this.produce = function(materials) {
		if (!this.get_settlement().has_storage_space_for(materials)) {
			return false;
		}
		const settlement = this.get_settlement();
		let chance;
		let amount;
		const building = this.get_building_data();
		let random_amount;
		for (let item in materials) {
			amount = materials[item] * this.get_level();
			if (item === 'faith') {
				settlement.raise_faith(amount);
			} else if (item === 'research') {
				settlement.raise_research(amount);
			} else if (item === 'espionage') {
				settlement.raise_espionage(amount);
			} else if (item === 'fame') {
				settlement.raise_fame(amount);
			} else if (item === 'prestige') {
				settlement.raise_prestige(amount);
			} else {
				amount += this.core().get_prod_modifier(building);
				settlement.add_to_storage(item, amount);
				if (typeof building.chance !== 'undefined') {
					for (let itemo in building.chance) {
						chance = Math.random();
						if ((chance * this.get_level()) < building.chance[itemo]) {
							random_amount = civitas.utils.get_random(1, 5);
							settlement.add_to_storage(itemo, random_amount);
						}
					}
				}
			}
		}
		return true;
	};

	/**
	 * Main threading method for the building, this does the actual processing each turn.
	 * 
	 * @public
	 * @returns {civitas.objects.building}
	 */
	this.process = function() {
		const building = this.get_building_data();
		const materials = building.materials;
		const settlement = this.get_settlement();
		if (this.is_housing_building()) {
			if (typeof materials !== 'undefined') {
				if (settlement.has_resources(materials)) {
					settlement.remove_resources(materials);
					this.tax(building.tax);
					this.log_to_console();
				} else {
					this.notify(civitas.NOTIFICATION_MISSING_RES);
					return false;
				}
			}
		} else if (this.is_production_building()) {
			if (!this.is_stopped()) {
				let products = building.production;
				if (this.has_requirements()) {
					if (typeof materials !== 'undefined') {
						if (Array.isArray(materials)) {
							let all_good = true;
							let removable = {};
							for (let i = 0; i < materials.length; i++) {
								let res = settlement.has_any_resources(materials[i]);
								if (res !== false) {
									removable[res] = materials[i][res];
								} else {
									all_good = false;
								}
							}
							if (all_good === true) {
								if (settlement.has_storage_space_for(products)) {
									settlement.remove_resources(removable);
									if (this.produce(products)) {
										this.log_to_console();
									}
								} else {
									this.core().ui().log('game', 'There is no storage space in ' + settlement.name() + ' to accomodate the new goods.', true);
									this.problems = true;
									return false;
								}
							} else {
								this.notify(civitas.NOTIFICATION_MISSING_RES);
								this.problems = true;
								return false;
							}
						} else {
							if (settlement.has_resources(materials)) {
								if (settlement.has_storage_space_for(products)) {
									settlement.remove_resources(materials);
									if (this.produce(products)) {
										this.log_to_console();
									}
								} else {
									this.core().ui().log('game', 'There is no storage space in ' + settlement.name() + ' to accomodate the new goods.', true);
									this.problems = true;
									return false;
								}
							} else {
								this.notify(civitas.NOTIFICATION_MISSING_RES);
								return false;
							}
						}
					} else {
						if (settlement.has_storage_space_for(products)) {
							if (this.produce(products)) {
								this.log_to_console();
							}
						} else {
							this.core().ui().log('game', 'There is no storage space in ' + settlement.name() + ' to accomodate the new goods.', true);
							this.problems = true;
							return false;
						}
					}
				} else {
					this.notify(civitas.NOTIFICATION_MISSING_REQ);
					return false;
				}
			} else {
				this.notify(civitas.NOTIFICATION_PAUSED);
				return false;
			}
		}
		return true;
	};

	/**
	 * Check if this building is the marketplace.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.is_marketplace = function() {
		if (this.get_type() === 'marketplace') {
			return true;
		}
		return false;
	};

	/**
	 * Get the settlement this building is located into
	 * 
	 * @public
	 * @returns {civitas.objects.settlement}
	 */
	this.get_settlement = function() {
		return this.settlement;
	};

	/**
	 * Get a pointer to the game core
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.core = function() {
		return this.get_settlement().core();
	};

	/**
	 * Get the name of this building
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_name = function() {
		return this.name;
	};

	/**
	 * Check whether this building has problems producing its goods.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.has_problems = function() {
		return this.problems;
	};

	/**
	 * Set the level of this building
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {civitas.objects.building}
	 */
	this.set_level = function(value) {
		this.level = value;
		return this;
	};

	/**
	 * Get the level of this building
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_level = function() {
		return this.level;
	};

	/**
	 * Get the type of this building
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_type = function() {
		return this.type;
	};

	/**
	 * Return the DOM handle of this building.
	 *
	 * @public
	 * @returns {String}
	 */
	this.get_handle = function() {
		return this.handle;
	};

	/**
	 * Log production data to the game console.
	 *
	 * @public
	 * @returns {civitas.objects.building}
	 */
	this.log_to_console = function() {
		this.notify();
		const building = this.get_building_data();
		let _p = '';
		let _m = '';
		if (typeof building.production !== 'undefined') {
			for (let item in building.production) {
				_p += (building.production[item] * this.get_level() + this.core().get_prod_modifier(building)) + ' ' + item + ', ';
			}
			_p = _p.substring(0, _p.length - 2);
		}
		if (typeof building.materials !== 'undefined') {
			if (Array.isArray(building.materials)) {
				const removable = {};
				for (let i = 0; i < building.materials.length; i++) {
					const res = this.get_settlement().has_any_resources(building.materials[i]);
					if (res !== false) {
						removable[res] = building.materials[i][res];
					}
				}
				for (let item in removable) {
					_m += removable[item] + ' ' + item + ', ';
				}
				_m = _m.substring(0, _m.length - 2);
			} else {
				for (let item in building.materials) {
					_m += building.materials[item] + ' ' + item + ', ';
				}
				_m = _m.substring(0, _m.length - 2);
			}
		}
		if (typeof building.tax !== 'undefined') {
			this.core().ui().log('game', this.get_name() + ' used ' + _m + ' and got taxed for ' + this.get_tax_amount(building.tax) + ' coins.');
		} else if (typeof building.production !== 'undefined' && typeof building.materials === 'undefined') {
			this.core().ui().log('game', this.get_name() + ' produced ' + _p + '.');
		} else {
			this.core().ui().log('game', this.get_name() + ' used ' + _m + ' and produced ' + _p + '.');
		}
		return this;
	};

	/**
	 * Perform building notifications.
	 *
	 * @public
	 * @param {Number} notification_type
	 * @returns {civitas.objects.building}
	 */
	this.notify = function(notification_type) {
		if (typeof notification_type !== 'undefined') {
			this.problems = true;
			if (this.get_settlement().is_player()) {
				let handle = $('section.game > #building-' + this.get_handle());
				switch (notification_type) {
					case civitas.NOTIFICATION_MISSING_REQ:
						this.core().ui().log('game', this.get_name() + ' doesn`t have one of the buildings required to be operational.', true);
						handle.empty().append('<span class="notification requirements"></span>');
						break;
					case civitas.NOTIFICATION_PAUSED:
						this.core().ui().log('game', this.get_name() + '`s production is stopped.', true);
						handle.empty().append('<span class="notification paused"></span>');
						break;
					case civitas.NOTIFICATION_SETTLEMENT_LOW_LEVEL:
						this.core().ui().log('game', 'Your settlement level is too low for ' + this.get_name() + ' to be active.', true);
						handle.empty().append('<span class="notification lowlevel"></span>');
						break;
					case civitas.NOTIFICATION_MISSING_RES:
					default:
						this.core().ui().log('game', this.get_name() + ' is missing materials for production.', true);
						handle.empty().append('<span class="notification error"></span>');
						break;
				}
			}
		} else {
			this.problems = false;
			if (this.get_settlement().is_player()) {
				$('section.game > #building-' + this.get_handle()).empty();
			}
		}
		return this;
	};

	/**
	 * Get the city position of this building.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.position = function() {
		return this._position;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Battleground object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.battleground
 * @returns {civitas.objects.battleground}
 */
civitas.objects.battleground = function (params) {

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Battleground properties.
	 *
	 * @private
	 * @type {Object}
	 */
	this._properties = {
		width: 0,
		height: 0
	};

	/**
	* DOM elements for external output.
	*
	* @private
	* @type {Object}
	*/
	this._elements = {
		container: null,
		console: null,
		attack: null,
		defense: null
	};

	/**
	 * Callback when the user wins.
	 *
	 * public
	 */
	this.on_win = function() {};

	/**
	 * Callback when the user loses.
	 *
	 * public
	 */
	this.on_lose = function() {};

	/**
	 * Callback when the user selects a cell.
	 *
	 * public
	 */
	this.on_select = function() {};

	/**
	 * Callback when the user moves a cell.
	 *
	 * public
	 */
	this.on_move = function() {};

	/**
	 * Callback when the user attacks another cell.
	 *
	 * public
	 */
	this.on_attack = function() {};

	/**
	 * Callback when the turn ends.
	 *
	 * public
	 */
	this.on_end_turn = function() {};

	/**
	 * Grid containing info about all battleground units and their properties.
	 *
	 * @type {Array}
	 * @private
	 */
	this._grid = [];

	/**
	 * Object containing the attacking side.
	 *
	 * @private
	 * @type {Object}
	 */
	this._attack = null;

	/**
	 * Object containing the defending side.
	 *
	 * @private
	 * @type {Object}
	 */
	this._defense = null;

	/**
	 * Property that contains the coords of the currently clicked cell.
	 *
	 * @private
	 * @type {Object}
	 */
	this._from = null;

	/**
	 * Flag if the battleground is over.
	 *
	 * @private
	 * @type {Boolean}
	 */
	this.done = false;

	/**
	 * Battleground statistics.
	 *
	 * @private
	 * @type {Object}
	 */
	this._stats = {
		attacking: {
			attack: 0,
			defense: 0
		},
		defending: {
			attack: 0,
			defense: 0
		}
	};

	/**
	 * Current turn for this battleground.
	 *
	 * @private
	 * @type {Number}
	 */
	this._current_turn = 1;

	/**
	 * The side of the player (left attacking, right defending).
	 *
	 * @private
	 * @type {Number}
	 */
	this._player = null;

	/**
	 * The side of the computer (left attacking, right defending).
	 *
	 * @private
	 * @type {Number}
	 */
	this._computer = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.battleground}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._properties.width = params.width;
		this._properties.height = params.height;
		this._elements.container = params.elements.container;
		this._elements.console = params.elements.console;
		this._elements.attack = params.elements.attack;
		this._elements.defense = params.elements.defense;
		this._attack = params.attack;
		this._defense = params.defense;
		if (params.on_win instanceof Function) {
			this.on_win = params.on_win;
		}
		if (params.on_lose instanceof Function) {
			this.on_lose = params.on_lose;
		}
		if (params.on_select instanceof Function) {
			this.on_select = params.on_select;
		}
		if (params.on_move instanceof Function) {
			this.on_move = params.on_move;
		}
		if (params.on_attack instanceof Function) {
			this.on_attack = params.on_attack;
		}
		if (params.on_end_turn instanceof Function) {
			this.on_end_turn = params.on_end_turn;
		}
		if (this._attack.city === this.core().get_settlement().id()) {
			this._player = 1;
			this._computer = 2;
		} else {
			this._player = 2;
			this._computer = 1;
		}
		this._setup();
		this.show_stats();
		return this;
	};

	/**
	 * Attack a hex cell.
	 *
	 * @public
	 * @param {Object} cell
	 * @returns {Boolean}
	 */
	this.attack = function(cell) {
		let sx = this._from.x;
		let sy = this._from.y;
		let source = this._grid[sy][sx];
		let destination = this._grid[cell.y][cell.x];
		let is_ranged = civitas.SOLDIERS[source.item].ranged;
		let city = this.core().get_settlement(source.city);
		let city2 = this.core().get_settlement(destination.city);
		let remaining = 0;
		let _a;
		if (city && source.moved) {
			this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> already used up its turn.');
			return false;
		}
		if (source !== null && destination !== null && city && city2) {
			if (destination.side === civitas.BATTLEGROUND_DEFENSE) {
				_a = '_defense';
			} else {
				_a = '_attack';
			}
			if (is_ranged !== undefined) {
				if ((Math.abs(cell.y - sy) + Math.abs(cell.x - sx)) > is_ranged) {
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> is not close enough for a ranged attack.');
					return false;
				}
				let attack = Math.ceil(source.attack / 2);
				let defense = destination.defense;
				if (defense - attack < 0) {
					this[_a].army[destination.item] = 0;
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> attacked ' + city2.name() + '`s <strong>' + civitas.SOLDIERS[destination.item].name + '</strong> for ' + attack + ' damage from range and killed its opponent.');
					this._cell_empty(cell);
				} else {
					remaining = Math.ceil((defense - attack) / civitas.SOLDIERS[destination.item].defense);
					destination.total = remaining;
					this[_a].army[destination.item] = remaining;
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> attacked ' + city2.name() + '`s <strong>' + civitas.SOLDIERS[destination.item].name + '</strong> for ' + attack + ' damage from range.');
				}
				this._cell_under_attack(cell);
				source.moved = true;
				this.redraw();
			} else {
				let can_move = civitas.SOLDIERS[this._grid[sy][sx].item].moves;
				if ((Math.abs(cell.y - sy) + Math.abs(cell.x - sx)) > can_move) {
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> doesn`t have a ranged attack.');
					return false;
				}
				let attack = Math.ceil(source.attack / 2);
				let defense = destination.defense;
				if (defense - attack < 0) {
					this[_a].army[destination.item] = 0;
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> attacked ' + city2.name() + '`s <strong>' + civitas.SOLDIERS[destination.item].name + '</strong> for ' + attack + ' damage in melee and killed its opponent.');
					this._cell_empty(cell);
				} else {
					remaining = Math.ceil((defense - attack) / civitas.SOLDIERS[destination.item].defense);
					destination.total = remaining;
					this[_a].army[destination.item] = remaining;
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> attacked ' + city2.name() + '`s <strong>' + civitas.SOLDIERS[destination.item].name + '</strong> for ' + attack + ' damage in melee.');
				}
				this._cell_under_attack(cell);
				source.moved = true;
				this.redraw();
			}
		}
		this._from = null;
		return true;
	};

	/**
	 * End the current turn.
	 *
	 * @public
	 * @returns {civitas.objects.battleground}
	 */
	this.end_turn = function() {
		this._from = null;
		this._do_computer();
		for (let y = 0; y < this._grid.length; y++) {
			for (let x = 0; x < this._grid[y].length; x++) {
				if (this._grid[y][x] !== null) {
					this._grid[y][x].moved = false;
				}
			}
		}
		this._current_turn++;
		this.on_end_turn.call(self, this.num_turns());
		this.redraw();
		if (!this._done) {
			this.log('Turn <strong>' + this._current_turn + '</strong> started now.');
		}
		return this;
	};

	/**
	* Check the status of the current game.
	*
	* @private
	* @returns {Boolean}
	*/
	this._check_status = function() {
		let city;
		if (!this._done) {
			if (this._stats.attacking.attack <= 0 || this._stats.attacking.defense <= 0 ||
				this._stats.defending.attack <= 0 || this._stats.defending.defense <= 0) {
				this._done = true;
				this._reset();
			}
			if (this._stats.attacking.attack <= 0 || this._stats.attacking.defense <= 0) {
				if (this._defense.city === this.core().get_settlement().id()) {
					this._on_win.call(this, this._defense, this._attack);
					this.on_win.call(this, this._defense, this._attack);
				} else {
					this._on_lose.call(this, this._defense, this._attack);
					this.on_lose.call(this, this._defense, this._attack);
				}
				city = this.core().get_settlement(this._defense.city);
			} else if (this._stats.defending.attack <= 0 || this._stats.defending.defense <= 0) {
				if (this._attack.city === this.core().get_settlement().id()) {
					this._on_win.call(this, this._attack, this._defense);
					this.on_win.call(this, this._attack, this._defense);
				} else {
					this._on_lose.call(this, this._attack, this._defense);
					this.on_lose.call(this, this._attack, this._defense);
				}
				city = this.core().get_settlement(this._attack.city);
			}
			if (this._done) {
				this.log(city.name() + ' won this battle!');
				this.show_stats();
			}
		}
		return false;
	};

	/**
	 * Display the battleground stats.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.show_stats = function() {
		$(this._elements.attack).empty().append(this.core().get_settlement(this._attack.city).name() + ' ' + this._stats.attacking.attack + ' / ' + this._stats.attacking.defense);
		$(this._elements.defense).empty().append(this.core().get_settlement(this._defense.city).name() + ' ' + this._stats.defending.attack + ' / ' + this._stats.defending.defense);
		return {
			attack: this._attack,
			defense: this._defense
		}
	};

	/**
	 * Log a message to the battleground status.
	 *
	 * @public
	 * @param {String} message
	 * @returns {civitas.objects.battleground}
	 */
	this.log = function(message) {
		$(this._elements.console).prepend('<p>' + message + '</p>');
		return this;
	};

	/**
	 * Reset and rebuild the battleground hex cell grid.
	 *
	 * @private
	 * @returns {civitas.objects.battleground}
	 */
	this._reset = function() {
		let mode = 'even';
		let template = '';
		for (let y = 0; y <= this._properties.height - 1; y++) {
			this._grid[y] = [];
			template += '<ol class="' + mode + '">';
			for (let x = 0; x <= this._properties.width - 1; x++) {
				this._grid[y][x] = null;
				template += '<li data-pos="' + x + '-' + y + '" data-x="' + x + '" data-y="' + y + '" class="cell empty"></li>';
			}
			template += '</ol>';
			if (mode === 'even') {
				mode = 'odd';
			} else {
				mode = 'even';
			}
		}
		$(this._elements.container).empty().append(template);
		return this;
	};

	/**
	 * Return the current hex cell grid.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.grid = function() {
		return this._grid;
	};

	/**
	 * Get the current turn.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.num_turns = function() {
		return this._current_turn;
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
	* Get the properties of this battleground.
	*
	* @public
	* @returns {Object}
	*/
	this.properties = function() {
		return this._properties;
	};

	/**
	 * Move closer to the enemy.
	 *
	 * @private
	 * @param {Object} cell
	 * @returns {Boolean}
	 */
	this._move_to_enemy = function(cell) {
		/*
		let sx = cell.x;
		let sy = cell.y;
		let source = this._grid[sy][sx];
		let can_move = civitas.SOLDIERS[source.item].moves;
		if (this._computer === 2) {
			// TODO
		}
		*/
		return false;
	};

	this._do_computer = function() {
		for (let y = 0; y < this._grid.length; y++) {
			for (let x = 0; x < this._grid[y].length; x++) {
				if (this._grid[y][x] !== null && this._grid[y][x].side === this._computer) {
					let source = this._grid[y][x];
					this._from = {
						x: x,
						y: y
					};
					this._cell_select(this._from);
					if (civitas.SOLDIERS[source.item].ranged) {
						this._check_for_ranged_target(this._player);
					} else {
						this._check_for_melee_target(this._player);
					}
					this._move_to_enemy(this._from);
					this._from = null;
				}
			}
		}
		return true;
	};

	/**
	 * Computer check if there are any targets in melee.
	 *
	 * @private
	 * @param {Number} type
	 * @returns {Boolean}
	 */
	this._check_for_melee_target = function(type) {
		if (this._from !== null) {
			let source = this._grid[this._from.y][this._from.x];
			let can_move = civitas.SOLDIERS[source.item].moves;
			for (let y = 0; y < this._grid.length; y++) {
				for (let x = 0; x < this._grid[y].length; x++) {
					if (source !== null && !source.moved && can_move &&
						(Math.abs(y - this._from.y) + Math.abs(x - this._from.x)) <= can_move) {
						if (this._grid[y][x] !== null && this._grid[y][x].side === type) {
							this.attack({
								x: x,
								y: y
							});
							return true;
						}
					}
				}
			}
		}
		return false;
	};

	/**
	 * Check if there are any targets in range.
	 *
	 * @private
	 * @param {Number} type
	 * @returns {Boolean}
	 */
	this._check_for_ranged_target = function(type) {
		if (this._from !== null) {
			for (let y = 0; y < this._grid.length; y++) {
				for (let x = 0; x < this._grid[y].length; x++) {
					if (this._grid[y][x] !== null && this._grid[y][x].side === type) {
						this.attack({
							x: x,
							y: y
						});
						return true;
					}
				}
			}
		}
		return false;
	};
	/**
	 * Internal callback for when someone wins the battleground.
	 *
	 * @private
	 * @param {Object} winner
	 * @param {Object} winner
	 * @returns {civitas.objects.battleground}
	 */
	this._on_win = function(winner, loser) {
		let my_settlement = this.core().get_settlement(winner.city);
		let settlement = this.core().get_settlement(loser.city);
		if (this._attack.city === winner.city) {
			// player was attacking and won.
			settlement.army = settlement.load_army(loser.army);
			settlement.navy = settlement.load_navy(loser.navy);
			let spoils = settlement.get_spoils();
			this.core().queue_add(settlement, my_settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
				army: winner.army,
				navy: winner.navy,
				resources: spoils
			});
		} else if (this._defense.city === winner.city) {
			// player was defending and won.
			my_settlement.army = my_settlement.load_army(winner.army);
			my_settlement.navy = my_settlement.load_navy(winner.navy);
			let has_loser_army = settlement.num_soldiers(loser.army);
			let has_loser_navy = settlement.num_ships(loser.navy);
			if (has_loser_army > 0 || has_loser_navy > 0) {
				this.core().queue_add(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
					army: loser.army,
					navy: loser.navy,
					resources: {}
				});
			}
		}
		return this;
	};

	/**
	 * Internal callback for when someone loses the battleground.
	 *
	 * @private
	 * @param {Object} winner
	 * @param {Object} winner
	 * @returns {civitas.objects.battleground}
	 */
	this._on_lose = function(winner, loser) {
		let settlement = this.core().get_settlement(winner.city);
		let my_settlement = this.core().get_settlement(loser.city);
		if (this._attack.city === loser.city) {
			// player was attacking and lost.
			settlement.army = settlement.load_army(winner.army);
			settlement.navy = settlement.load_navy(winner.navy);
			let has_loser_army = settlement.num_soldiers(loser.army);
			let has_loser_navy = settlement.num_ships(loser.navy);
			if (has_loser_army > 0 || has_loser_navy > 0) {
				this.core().queue_add(settlement, my_settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
					army: loser.army,
					navy: loser.navy,
					resources: {}
				});
			}
		} else if (this._defense.city === loser.city) {
			// player was defending and lost.
			my_settlement.army = my_settlement.load_army(loser.army);
			my_settlement.navy = my_settlement.load_navy(loser.navy);
			let spoils = my_settlement.get_spoils();
			this.core().queue_add(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY_RETURN, {
				army: winner.army,
				navy: winner.navy,
				resources: spoils
			});
		}
		return this;
	};
	/**
	 * Get the distance between two cells.
	 *
	 * @public
	 * @param {Object} cell1
	 * @param {Object} cell2
	 * @returns {Number}
	 */
	this.distance = function(cell1, cell2) {
		let delta_x = cell1.x - cell2.x;  
	    let delta_y = cell1.y - cell2.y;  
	    return ((Math.abs(delta_x) + Math.abs(delta_y) + Math.abs(delta_x - delta_y)) / 2);
	};

	/**
	 * Move the contents of one cell to another cell.
	 *
	 * @public
	 * @param {Object} cell
	 * @returns {Boolean}
	 */
	this.move = function(cell) {
		let sx = this._from.x;
		let sy = this._from.y;
		if (this._from !== null && cell !== null) {
			let source = this._grid[sy][sx];
			let destination = this._grid[cell.y][cell.x];
			let city = this.core().get_settlement(source.city);
			if (source !== null && source.moved) {
				this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> already used up its turn.');
				return false;
			}
			if (source !== null && destination === null && city) {
				let can_move = civitas.SOLDIERS[this._grid[sy][sx].item].moves;
				if ((Math.abs(cell.y - sy) + Math.abs(cell.x - sx)) <= can_move) {
					this._grid[cell.y][cell.x] = this._grid[sy][sx];
					this._cell_empty(this._from);
					this._from = null;
					this._grid[cell.y][cell.x].moved = true;
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> moved to ' + (cell.x + 1) + 'x' + (cell.y + 1) + '.');
					this.redraw();
					return true;
				} else {
					this.log(city.name() + '`s <strong>' + civitas.SOLDIERS[source.item].name + '</strong> is unable to move to the specified location.');
					return false;
				}
			}
		}
	};

	/**
	 * Highlight the cells around the currently selected (or hovered) cell.
	 *
	 * @public
	 * @param {Object} cell
	 * @returns {civitas.objects.battleground}
	 */
	this.highlight_cells = function(cell) {
		this._cells_empty();
		let sx = cell.x;
		let sy = cell.y;
		let source = this._grid[sy][sx];
		if (source !== null) {
			let can_move = civitas.SOLDIERS[source.item].moves;
			for (let y = 0; y < this._grid.length; y++) {
				for (let x = 0; x < this._grid[y].length; x++) {
					if (!source.moved && can_move && (Math.abs(y - sy) +
						Math.abs(x - sx)) <= can_move) {
						if (this._grid[y][x] === null) {
							$(this._elements.container + ' .cell[data-pos=' + x + '-' + y + ']').addClass('canmove');
						}
					}
				}
			}
			let is_ranged = civitas.SOLDIERS[source.item].ranged;
			for (let y = 0; y < this._grid.length; y++) {
				for (let x = 0; x < this._grid[y].length; x++) {
					if (!source.moved && (Math.abs(y - sy) + Math.abs(x - sx)) <= is_ranged) {
						if (this._grid[y][x] === null) {
							$(this._elements.container + ' .cell[data-pos=' + x + '-' + y + ']').addClass('canattack');
						}
					}
				}
			}
		}
		return this;
	};

	/**
	 * Do a nice effect when a cell is under attack.
	 *
	 * @private
	 * @param {Object} cell
	 * @returns {civitas.objects.battleground}
	 */
	this._cell_under_attack = function(cell) {
		$(this._elements.container + ' .cell[data-pos=' + cell.x + '-' + cell.y + ']').addClass('scale').delay(1000).queue(function() {
			$(this).removeClass('scale').dequeue();
		});
		return this;
	};

	/**
	 * Empty all the cells that are already empty.
	 *
	 * @private
	 * @returns {civitas.objects.battleground}
	 */
	this._cells_empty = function() {
		for (let y = 0; y < this._grid.length; y++) {
			for (let x = 0; x < this._grid[y].length; x++) {
				if (this._grid[y][x] === null) {
					this._cell_empty({
						x: x,
						y: y
					});
				}
			}
		}
		return this;
	};

	/**
	 * Empty one cell.
	 *
	 * @private
	 * @param {Object} cell
	 * @returns {civitas.objects.battleground}
	 */
	this._cell_empty = function(cell) {
		this._grid[cell.y][cell.x] = null;
		$(this._elements.container + ' .cell[data-pos=' + cell.x + '-' + cell.y + ']')
			.removeData('side')
			.removeData('amount')
			.removeData('soldier')
			.addClass('empty')
			.removeClass('canmove canattack selected')
			.empty();
		return this;
	};

	/**
	 * Select a cell.
	 *
	 * @private
	 * @param {Object} cell
	 * @returns {civitas.objects.battleground}
	 */
	this._cell_select = function(cell) {
		$(this._elements.container + ' .cell').removeClass('selected canmove canattack');
		$(this._elements.container + ' .cell[data-pos=' + cell.x + '-' + cell.y + ']').addClass('selected');
		this._from = cell;
		this.highlight_cells(cell);
		return this;
	};

	/**
	 * Add a cell to the battleground grid.
	 *
	 * @private
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Object} army
	 * @returns {civitas.objects.battleground}
	 */
	this._cell_add = function(x, y, army) {
		this._grid[y][x] = army;
		$(this._elements.container + ' .cell[data-pos=' + x + '-' + y + ']')
			.removeData('side')
			.removeData('amount')
			.removeData('soldier')
			.attr('data-side', army.side)
			.attr('data-amount', army.total)
			.attr('data-soldier', army.item)
			.removeClass('empty canmove canattack selected')
			.empty()
			.append('<span class="moves' + (army.moved === false ? ' has' : '') + '"></span><img class="tips" title="' + civitas.SOLDIERS[army.item].name + '" src="' + civitas.ASSETS_URL + 'images/assets/army/' + army.item + '.png" />' + '<span class="amount">' + army.total + '</span>');
		return this;
	};

	/**
	 * Redraw the grid.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.redraw = function() {
		let a_attack = 0;
		let a_defense = 0;
		let d_attack = 0;
		let d_defense = 0;
		for (let y = 0; y < this._grid.length; y++) {
			for (let x = 0; x < this._grid[y].length; x++) {
				let army = this._grid[y][x];
				if (army !== null && army.total > 0) {
					army.attack = army.total * civitas.SOLDIERS[army.item].attack;
					army.defense = army.total * civitas.SOLDIERS[army.item].defense;
					if (army.side === civitas.BATTLEGROUND_ATTACK) {
						a_attack += army.attack;
						a_defense += army.defense;
					} else {
						d_attack += army.attack;
						d_defense += army.defense;
					}
					this._cell_add(x, y, army);
				} else {
					this._cell_empty({
						x: x,
						y: y
					});
				}
			}
		}
		this._stats.attacking.attack = a_attack;
		this._stats.attacking.defense = a_defense;
		this._stats.defending.attack = d_attack;
		this._stats.defending.defense = d_defense;
		this.show_stats();
		this._check_status();
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return true;
	};

	/**
	 * Setup the battleground hex grid.
	 *
	 * @private
	 * @returns {civitas.objects.battleground}
	 */
	this._setup = function() {
		let self = this;
		this._reset();
		let xx = 0;
		let xxx = 3;
		let yy;
		for (let item in this._attack.army) {
			if (this._attack.army[item] > 0) {
				if (civitas.SOLDIERS[item].siege === true) {
					yy = 0;
					xx = xxx;
					xxx++;
				} else {
					yy = 2;
				}
				this.add(xx, yy, 1, item, this._attack);
				xx++;
			}
		}
		xxx = 3;
		xx = 0;
		for (let item in this._defense.army) {
			if (this._defense.army[item] > 0) {
				if (civitas.SOLDIERS[item].siege === true) {
					yy = this._properties.width - 1;
					xx = xxx;
					xxx++;
				} else {
					yy = this._properties.width - 3;
				}
				this.add(xx, yy, 2, item, this._defense);
				xx++;
			}
		}
		$(this._elements.container).on('mouseover', '.cell', function () {
			if (self._from === null) {
				let from = {
					x: parseInt($(this).data('x')),
					y: parseInt($(this).data('y'))
				};
				self.highlight_cells(from);
			}
			return false;
		}).on('click', '.cell', function () {
			if ($(this).hasClass('empty')) {
				if (self._from !== null) {
					let to = {
						x: parseInt($(this).data('x')),
						y: parseInt($(this).data('y'))
					};
					self.move(to);
					self.on_move.call(self, self._from, to);
				}
			} else {
				if (parseInt($(this).data('side')) === self._player) {
					if (!$(this).hasClass('selected')) {
						let from = {
							x: parseInt($(this).data('x')),
							y: parseInt($(this).data('y'))
						};
						self._cell_select(from);
						self.on_select.call(self, from);
					} else {
						self._from = null;
						$(self._elements.container + ' .cell').removeClass('selected canmove canattack');
					}
				} else if (parseInt($(this).data('side')) === self._computer) {
					if (self._from !== null) {
						let to = {
							x: parseInt($(this).data('x')),
							y: parseInt($(this).data('y'))
						};
						self.attack(to);
						self.on_attack.call(self, self._from, to);
					}
				}
			}
			return false;
		});
		return this;
	};

	/**
	 * Add a hex cell to the battleground grid.
	 *
	 * @public
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} side
	 * @param {String} soldier
	 * @param {Object} settlement
	 * @returns {civitas.objects.battleground}
	 */
	this.add = function(x, y, side, soldier, settlement) {
		this._cell_add(y, x, {
			item: soldier,
			city: settlement.city,
			total: settlement.army[soldier],
			attack: civitas.SOLDIERS[soldier].attack * settlement.army[soldier],
			defense: civitas.SOLDIERS[soldier].defense * settlement.army[soldier],
			side: side,
			moved: false
		});
		return this;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Hero object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.objects.hero
 * @returns {civitas.objects.hero}
 */
civitas.objects.hero = function (params) {

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Name of the hero.
	 *
	 * @private
	 * @type {String}
	 */
	this._name = null;

	/**
	 * Description of the hero.
	 *
	 * @private
	 * @type {String}
	 */
	this._description = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.hero}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._name = params.name;
		this._description = params.description;
		return this;
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

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game window object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.controls.window
 * @returns {civitas.controls.window}
 */
civitas.controls.window = function (params) {

	/**
	 * DOM template of this window.
	 *
	 * @private
	 * @type {String}
	 */
	this.template = null;

	/**
	 * DOM handle of this window.
	 *
	 * @private
	 * @type {String}
	 */
	this._handle = null;

	/**
	 * Data passed to this window.
	 *
	 * @private
	 * @type {Object}
	 */
	this.params_data = null;

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * DOM id of this panel.
	 * 
	 * @type {String}
	 * @private
	 */
	this.id = null;

	/**
	 * Localized title of the window.
	 * 
	 * @private
	 * @type {String}
	 */
	this.title = null;

	/**
	 * Callback function when the window is created.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_create = null;

	/**
	 * Callback function when the window is shown.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_show = null;

	/**
	 * Callback function when the window is hidden (destroyed).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_hide = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
		this.core().ui().log('ui', 'Destroying window with id `' + this.id() + '`');
		$(this.handle()).remove();
		$('.tipsy').remove();
		this.on_hide.call(this);
		return false;
	};

	/**
	 * Method for destroying the window.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.controls.window}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		this._core = params.core;
		this._id = params.id;
		this._handle = '#window-' + this.id();
		this.params_data = params.data;
		this.template = typeof params.template !== 'undefined' ? params.template : '';
		if (params.on_create instanceof Function) {
			this.on_create = params.on_create;
		} else {
			this.on_create = function() {};
		}
		if (params.on_show instanceof Function) {
			this.on_show = params.on_show;
		} else {
			this.on_show = function() {};
		}
		if (params.on_hide instanceof Function) {
			this.on_hide = params.on_hide;
		} else {
			this.on_hide = function() {};
		}
		if (this.core().ui().window_exists(this.handle())) {
			this.destroy();
		}
		this.core().ui().log('ui', 'Creating window with id `' + this.id() + '`');
		this.on_create.call(this, params);
		$('body').append(this.template.replace(/{ID}/g, this.id()));
		this.on_show.call(this);
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return this;
	};

	/**
	 * Return a pointer to the window id.
	 *
	 * @public
	 * @returns {String}
	 */
	this.id = function() {
		return this._id;
	};

	/**
	 * Return a pointer to the window DOM handle.
	 *
	 * @public
	 * @returns {String}
	 */
	this.handle = function() {
		return this._handle;
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

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main modal object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.controls.modal
 * @returns {civitas.controls.modal}
 */
civitas.controls.modal = function (params) {

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Template of the modal window.
	 *
	 * @private
	 * @type {String}
	 */
	this._template = '<div class="modal-overlay">' +
						'<div class="modal">' +
							'<header></header>' +
							'<section></section>' +
							'<footer></footer>' +
						'</div>' +
					'</div>';

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.controls.modal}
	 * @param {Object} params
	 */
	this.__init = function(params) {
		this._core = params.core;
		let self = this;
		$('body').append(this._template);
		$(window).bind('resize', function() {
			self._resize();
		});
		return this;
	};

	/**
	 * Main method to show the modal window.
	 *
	 * @public
	 * @param {Object} options
	 * @returns {civitas.objects.modal}
	 */
	this.alert = function(options) {
		let self = this;
		let settlement = false;
		if (this.core().settlements.length > 0) {
			settlement = this.core().get_settlement();
		}
		if (this._is_open()) {
			return false;
		}
		this.core().ui().show_loader();
		$('.modal').css({
			width: '400px'
		});
		this._resize();
		$('.modal header').html(options.title);
		$('.modal footer').html('<a data-id="yes" href="#" class="btn float-right">Yes</a><a data-id="no" href="#" class="btn">No</a>');
		$('.modal section').html((settlement ? '<img class="avatar right" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + this.core().get_settlement().ruler().avatar + '.png" />' : '') + '<p>' + options.text + '</p>');
		$('.modal footer').on('click', 'a', function() {
			self._action($(this).data('id'));
			return false;
		});
		$('.modal-overlay, .modal').show();
		if (typeof options.on_click === 'function') {
			this.on_click = options.on_click;
		}
		return this;
	};

	/**
	 * Internal method to check out if the modal window is already open.
	 *
	 * @private
	 * @returns {Boolean}
	 */
	this._is_open = function() {
		return $('.modal').css('display') === "block";
	};

	/**
	 * Internal method for resetting the modal window.
	 *
	 * @private
	 * @returns {Boolean}
	 */
	this._clear = function() {
		$('.modal-overlay').remove();
		// $('body').append(this._template);
		this.core().ui().hide_loader();
		// this._resize();
		return true;
	};

	/**
	 * Internal method for triggering the click event on the buttons.
	 *
	 * @private
	 * @param {String} key
	 */
	this._action = function(key) {
		this._clear();
		this.on_click(key);
		$(window).unbind('resize');
	};

	/**
	 * Internal method for resizing the modal window.
	 *
	 * @private
	 * @returns {civitas.objects.modal}
	 */
	this._resize = function() {
		let lbox = $('.modal');
		if (lbox) {
			let height = parseInt((lbox.css('height')).replace('px', ''));
			let width = parseInt((lbox.css('width')).replace('px', ''));
			lbox.css({
				top: ($(window).height() / 2) - 100 + 'px',
				left: ($(window).width() - width) / 2 + 'px'
			});
		}
		return this;
	};

	/**
	 * Callback function.
	 *
	 * @public
	 */
	this.on_click = function() {
		// nothing here, move along.
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
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function() {
		$('.modal-overlay').remove();
		$(window).unbind('resize');
		return false;
	};

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game panel object.
 * 
 * @param {Object} params
 * @license GPLv3
 * @class civitas.controls.panel
 * @returns {civitas.controls.panel}
 */
civitas.controls.panel = function (params) {

	/**
	 * DOM template of this panel.
	 *
	 * @private
	 * @type {String}
	 */
	this.template = null;

	/**
	 * DOM handle of this panel.
	 *
	 * @private
	 * @type {String}
	 */
	this.handle = null;

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * DOM id of this panel.
	 *
	 * @private
	 * @type {String}
	 */
	this.id = null;

	/**
	 * Data passed to this panel.
	 *
	 * @private
	 * @type {Object}
	 */
	this.params_data = null;

	/**
	 * Localized title of the panel.
	 *
	 * @private
	 * @type {String}
	 */
	this.title = null;

	/**
	 * Callback function when the panel is created.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_create = null;

	/**
	 * Callback function when the panel is shown.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_show = null;

	/**
	 * Callback function when the panel is hidden (destroyed).
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_hide = null;

	/**
	 * Callback function when the panel is refreshed.
	 *
	 * @public
	 * @type {Function}
	 */
	this.on_refresh = null;

	/**
	 * Object destructor.
	 * 
	 * @private
	 * @returns {Boolean}
	 */
	this.__destroy = function () {
		this.core().ui().log('ui', 'Destroying panel with id `' + this.id + '`');
		$(this.handle).remove();
		let panels = this.core().ui().get_panels();
		for (let i = 0; i < panels.length; i++) {
			if (panels[i].id === this.id) {
				panels.splice(i, 1);
			}
		}
		$('.ui > .viewport').width($(window).width() - $('.ui > aside').width());
		$('.tipsy').remove();
		this.on_hide.call(this);
		return false;
	};

	/**
	 * Method for destroying the panel.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.destroy = function () {
		return this.__destroy();
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.controls.panel}
	 * @param {Object} params
	 */
	this.__init = function (params) {
		let self = this;
		this._core = params.core;
		this.id = params.id;
		this.handle = '#panel-' + this.id;
		this.params_data = params.data;
		this.template = typeof params.template !== 'undefined' ? params.template : '';
		if (params.on_create instanceof Function) {
			this.on_create = params.on_create;
		} else {
			this.on_create = function() {};
		}
		if (params.on_show instanceof Function) {
			this.on_show = params.on_show;
		} else {
			this.on_show = function() {};
		}
		if (params.on_hide instanceof Function) {
			this.on_hide = params.on_hide;
		} else {
			this.on_hide = function() {};
		}
		if (params.on_refresh instanceof Function) {
			this.on_refresh = params.on_refresh;
		} else {
			this.on_refresh = function() {};
		}
		if (this.core().ui().panel_exists(this.handle)) {
			this.destroy();
		}
		this.core().ui().log('ui', 'Creating panel with id `' + this.id + '`');
		this.on_create.call(this, params);
		let tpl = this.template.replace(/{ID}/g, params.id);
		if (typeof this.params_data !== 'undefined' && typeof this.params_data.name !== 'undefined' && typeof this.params_data.name !== 'function') {
			tpl = tpl.replace(/{BUILDING}/g, this.params_data.handle);
			if (this.params_data.sidebar === true) {
				$('.ui > aside').empty().append(tpl);
				$('.ui > .viewport').width($(window).width() - $('.ui > aside').width());
			} else {
				$('.ui').append(tpl);
			}
			$(this.handle + ' header').append(this.params_data.name);
		} else {
			$('.ui').append(tpl);
		}
		this.on_show.call(this, params);
		this.on_refresh.call(this, params);
		if (typeof params.data !== 'undefined') {
			let building = this.core().get_settlement().get_building(params.data.handle);
			if (building !== false) {
				if (!building.is_upgradable()) {
					$(this.handle + ' footer .upgrade').hide();
				}
				if (!building.is_downgradable()) {
					$(this.handle + ' footer .downgrade').hide();
				}
				if (building.is_marketplace()) {
					$(this.handle + ' footer .demolish').hide();
				}
				if (building.is_production_building()) {
					if (!building.is_stopped()) {
						$(this.handle + ' .pause').removeClass('start').attr('title', 'Stop production');
					} else {
						$(this.handle + ' .start').removeClass('pause').attr('title', 'Start production');
					}
				} else {
					$(this.handle + ' .start, ' + this.handle + ' .pause').hide();
				}
				$(this.handle).on('click', '.upgrade', function () {
					self.core().ui().open_modal(
						function(button) {
							if (button === 'yes') {
								if (building.upgrade()) {
									if (!building.is_upgradable()) {
										$(self.handle + ' footer .upgrade').hide();
									} else {
										$(self.handle + ' footer .downgrade').show();
									}
								}
							}
						},
						'Are you sure you want to upgrade this building?'
					);
					return false;
				}).on('click', '.downgrade', function () {
					self.core().ui().open_modal(
						function(button) {
							if (button === 'yes') {
								if (building.downgrade()) {
									if (!building.is_downgradable()) {
										$(self.handle + ' footer .downgrade').hide();
									} else {
										$(self.handle + ' footer .upgrade').show();
									}
								}
							}
						},
						'Are you sure you want to downgrade this building?'
					);
					return false;
				}).on('click', '.demolish', function () {
					self.core().ui().open_modal(
						function(button) {
							if (button === 'yes') {
								if (building.demolish(true)) {
									self.destroy();
									self.core().save_and_refresh();
								}
							}
						},
						'Are you sure you want to demolish this building?'
					);
					return false;
				}).on('click', '.pause', function () {
					if (building.stop_production()) {
						$(this).removeClass('pause').addClass('start');
						$(this).attr('title', 'Start production');
					}
					return false;
				}).on('click', '.start', function () {
					if (building.start_production()) {
						$(this).removeClass('start').addClass('pause');
						$(this).attr('title', 'Stop production');
					}
					return false;
				});
			}
		}
		$(this.handle).on('click', 'header', function () {
			$('.ui .panel').css({
				'z-index': 99996
			});
			$(self.handle).css({
				'z-index': 99997
			});
		}).on('click', '.close', function () {
			self.destroy();
			return false;
		});
		if ((typeof this.params_data === 'undefined') || (typeof this.params_data !== 'undefined' && this.params_data.sidebar !== true)) {
			$(this.handle).draggable({
				handle: 'header',
				containment: 'window',
				start: function() {
					$(this).css({
						height: 'auto'
					});
				},
				stop: function() {
					$(this).css({
						height: 'auto'
					});
				}
			});
		}
		$(this.handle + ' .tabs').tabs();
		$(this.handle).css({
			'left': ($(window).width() / 2) - ($(this.handle).width() / 2),
			'top': ($(window).height() / 2) - ($(this.handle).height() / 2)
		});
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return this;
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

	// Fire up the constructor
	return this.__init(params);
};

/**
 * Main Game UI object.
 * 
 * @param {Object} core
 * @license GPLv3
 * @class civitas.objects.ui
 * @returns {civitas.objects.ui}
 */
civitas.objects.ui = function (core) {

	/**
	 * Array containing the list of all open panels.
	 *
	 * @type {Array}
	 * @private
	 */
	this.panels = [];

	/**
	 * Reference to the core object.
	 *
	 * @private
	 * @type {civitas.game}
	 */
	this._core = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.objects.ui}
	 * @param {Object} core
	 */
	this.__init = function (core) {
		this._core = core;
		return this;
	};

	/**
	 * Show the application loading indicator.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.show_loader = function() {
		$('.loading').show().tipsy({
			gravity: 'e'
		});
		return this;
	};

	/**
	 * Hide the application loading indicator.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.hide_loader = function() {
		$('.loading').hide();
		return this;
	};

	/**
	 * Build the main DOM UI of the game.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.build_main = function() {
		let _t = '';
		let clicked = false;
		let clickY, clickX;
		let out = '<section class="ui">' +
					'<header>' +
						'<div class="resource-panel"></div>' +
						'<div class="top-panel">' +
							'<span title="City level" class="tips citylevel"></span>&nbsp;&nbsp;&nbsp;' +
							'<span title="City Council" class="tips cityavatar"></span>&nbsp;&nbsp;&nbsp;' +
							'<span class="cityname"></span>' +
						'</div>' +
					'</header>' +
					'<aside></aside>' +
					'<div class="viewport">' +
						'<section class="game"></section>' +
					'</div>' +
					'<footer>' +
						'<a href="#" data-action="panel" data-panel="buildings" class="tips" title="Buildings"></a>' +
						'<a href="#" data-action="panel" data-panel="storage" class="tips" title="Storage Space"></a>' +
						'<a href="#" data-action="panel" data-panel="trades" class="tips" title="Trades"></a>' +
						'<a href="#" data-action="panel" data-panel="council" class="tips" title="City Council"></a>' +
						'<a href="#" data-action="panel" data-panel="ranks" class="tips" title="Ranks"></a>' +
						'<a href="#" data-action="panel" data-panel="world" class="tips" title="World Map"></a>' +
						'<a href="#" data-action="panel" data-panel="debug" class="tips" title="Debug"></a>' +
						'<a href="#" data-action="panel" data-panel="help" class="tips" title="Help"></a>' +
					'</footer>' +
				'</section>' +
				'<audio id="music" loop>' +
					'<source src="music/track1.mp3" type="audio/mpeg">' +
				'</audio>' +
				'<div title="Game is doing stuff in the background." class="loading"></div>';
		$('body').empty().append(out);
		for (let item in civitas.RESOURCES) {
			if (civitas.RESOURCES[item].toolbar === true) {
				_t += '<div class="resource ' + item + '">' +
					'<span class="amount">0</span>' +
					'<img title="' + civitas.RESOURCES[item].name + '" class="tips small" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + item + '.png" />' +
				'</div>';
			}
		}
		$('.resource-panel').append(_t);
		$('.game').on({
			mousemove: function (event) {
				clicked && update_scroll_pos(event);
			},
			mousedown: function (event) {
				clicked = true;
				clickY = event.pageY;
				clickX = event.pageX;
				$('html').css('cursor', 'grab');
			},
			mouseup: function () {
				clicked = false;
				$('html').css('cursor', 'auto');
			}
		});
		let update_scroll_pos = function (event) {
			$('.viewport').scrollTop($('.viewport').scrollTop() + (clickY - event.pageY));
			$('.viewport').scrollLeft($('.viewport').scrollLeft() + (clickX - event.pageX));
			clickY = event.pageY;
			clickX = event.pageX;
		};
		return this;
	};

	/**
	 * Create an item tooltip.
	 *
	 * @public
	 * @param {Object} item
	 * @returns {String}
	 */
	this.item_tooltip = function(item) {
		let out = '<h4 style="color: ' + civitas.ITEM_QUALITY_COLORS[item.quality] + '">' + item.name + '</h4>';
		if (item.flavour) {
			out += '<span class="flavour">"' + item.flavour + '"</span>' + ' <br />';
		}
		out += 'Slot: ' + civitas.ITEM_SLOTS_LIST[item.slot] + ' <br />';
		if (item.type === civitas.ITEM_TYPE_WEAPON) {
			out += 'Damage: <span class="red">' + item.stats.damageMin + '-' + item.stats.damageMax + '</span><br />Speed: ' + item.stats.speed + '<br />';
		} else {
			out += 'Armor: ' + item.stats.armor + '<br />';
		}
		if (item.stats.strength) {
			out += 'Strength: <span class="green">+' + item.stats.strength + '</span><br />';
		}
		if (item.stats.stamina) {
			out += 'Stamina: <span class="green">+' + item.stats.stamina + '</span><br />';
		}
		if (item.stats.agility) {
			out += 'Agility: <span class="green">+' + item.stats.agility + '</span><br />';
		}
		if (item.stats.intellect) {
			out += 'Intellect: <span class="green">+' + item.stats.intellect + '</span><br />';
		}
		if (item.stats.spirit) {
			out += 'Spirit: <span class="green">+' + item.stats.spirit + '</span><br />';
		}
		out += 'Type: <span style="color: ' + civitas.ITEM_QUALITY_COLORS[item.quality] + '">' + civitas.ITEM_QUALITY_LIST[item.quality] + '</span>';
		return out;
	};

	/**
	 * Build the About section of the UI.
	 *
	 * @public
	 * @returns {String}
	 */
	this.window_about_section = function() {
		let out = '<a href="#" class="do-about button">About</a>' +
					'<div class="about-game">' +
						'<a class="github" target="_blank" href="https://github.com/sizeofcat/civitas"><img class="tips" title="Visit the project page on GitHub" src="' + civitas.ASSETS_URL + '/images/ui/github.png" /></a>' +
						'<p>Civitas is written by <a target="_blank" href="https://sizeof.cat">sizeof(cat)</a>.</p>' +
						'<p>Big thanks to:</p>' +
						'<ul>' +
							'<li><a target="_blank" href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
							'<li><a target="_blank" href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
						'</ul>' +
					'</div>';
		return out;
	};

	/**
	 * Generate a generic panel template.
	 *
	 * @public
	 * @param {String} title
	 * @returns {String}
	 */
	this.generic_panel_template = function(title) {
		if (typeof title === 'undefined') {
			title = '';
		}
		let out = '<div id="panel-{ID}" class="panel">' +
					'<header>' + title +
						'<a class="tips close" title="Close"></a>' +
					'</header>' +
					'<section></section>' +
				'</div>';
		return out;
	};

	/**
	 * Generate a building panel template.
	 *
	 * @public
	 * @param {String} title
	 * @returns {String}
	 */
	this.building_panel_template = function(title) {
		if (typeof title === 'undefined') {
			title = '';
		}
		let out = '<div id="panel-{ID}" class="panel">' +
					'<header>' + title +
						'<a class="tips close" title="Close"></a>' +
					'</header>' +
					'<section></section>' +
					'<footer>' +
						'<a class="tips demolish" title="Demolish this building" href="#"></a>' +
						'<a class="tips pause start" href="#"></a>' +
						'<a class="tips upgrade" title="Upgrade building" href="#"></a>' +
						'<a class="tips downgrade" title="Downgrade building" href="#"></a>' +
					'</footer>' +
				'</div>';
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} params
	 * @param {Number} level
	 * @returns {String}
	 */
	this.building_panel = function (params, level) {
		if (typeof params.levels === 'undefined') {
			params.levels = 1;
		}
		let building_image = params.handle;
		if (params.handle.slice(0, 5) === 'house') {
			building_image = params.handle.slice(0, 5);
		}
		let image = (typeof params.visible_upgrades === 'undefined' || params.visible_upgrades === false) ? building_image: building_image + params.level;
		let out = '<div class="column">' +
					'<img class="building" src="' + civitas.ASSETS_URL + 'images/assets/buildings/' + image + '.png" />' +
				'</div>' +
				'<div class="column">' +
					'<p>' + params.description + '</p>' +
					'<dl>' +
						this.level_panel(params.level, level, params.levels) +
						this.cost_panel(params.cost, level, params.levels) +
						this.materials_panel(params.materials) +
						this.production_panel(params.production, level) +
						this.requires_panel(params.requires) +
						this.chance_panel(params.chance, level) +
						this.tax_panel(params.tax, level) +
						this.storage_panel(params.storage, level) +
					'</dl>' +
				'</div>'; 
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} section
	 * @param {String} contents
	 * @returns {String}
	 */
	this.normal_panel = function (section, contents) {
		let out = '<fieldset>' +
					'<legend>' + section + '</legend>' +
					contents +
				'</fieldset>';
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Number} level
	 * @param {Number} new_level
	 * @param {Number} max_level
	 * @returns {String}
	 */
	this.level_panel = function (level, new_level, max_level) {
		let out = '<dt>Level</dt>' +
				'<dd>' +
					'<span title="Current building level" class="tips">' + new_level + '</span> / <span title="Maximum building level achievable through upgrades" class="tips">' + max_level + '</span>' +
				'</dd>';
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} conts
	 * @param {Number} level
	 * @param {Number} levels
	 * @returns {String}
	 */
	this.cost_panel = function (costs, level, levels) {
		let out = '';
		if (typeof costs !== 'undefined') {
			out += '<dt>Cost</dt>';
			for (let item in costs) {
				out += '<dd>' + civitas.utils.nice_numbers(costs[item]) + this.resource_small_img(item) + (typeof levels !== 'undefined' && level < levels ? ' / ' + civitas.utils.nice_numbers(costs[item] * (level + 1)) + this.resource_small_img(item) : '') + '</dd>';
			}
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Number} value
	 * @param {String} progress_type
	 * @param {Boolean} show_value
	 * @returns {String}
	 */
	this.progress = function(value, progress_type, show_value) {
		if (typeof progress_type === 'undefined') {
			progress_type = 'small';
		}
		let _e = '';
		if (value < 10) {
			_e = ' ubad';
		} else if (value >= 10 && value < 30) {
			_e = ' vbad';
		} else if (value >= 30 && value < 40) {
			_e = ' bad';
		} else if (value >= 40 && value < 60) {
			_e = ' good';
		} else if (value >= 60 && value < 90) {
			_e = ' vgood';
		} else if (value >= 90) {
			_e = ' ugood';
		}
		return '<div class="progress ' + progress_type + '">' +
				'<div class="bar' + _e + '" style="width:' + value + '%">' +
					'<p>' + (typeof show_value !== 'undefined' ? show_value : value) + '</p>' +
				'</div>' +
			'</div>';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} name
	 * @returns {String}
	 */
	this.navy_img = function (name) {
		return '<img class="tips small" title="' + civitas.SHIPS[name].name + '" src="' + civitas.ASSETS_URL + 'images/assets/army/' + name.toLowerCase().replace(/ /g,"_") + '.png" />';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} name
	 * @returns {String}
	 */
	this.army_img = function (name) {
		return '<img class="tips small" title="' + civitas.SOLDIERS[name].name + '" src="' + civitas.ASSETS_URL + 'images/assets/army/' + name.toLowerCase().replace(/ /g,"_") + '.png" />';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} army
	 * @param {Boolean} no_margin
	 * @returns {String}
	 */
	this.army_list = function (army, no_margin) {
		let out2 = '<p>There are no soldiers in this army.</p>';
		let out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		let total = 0;
		for (let soldier in army) {
			if (army[soldier] > 0) {
				out += '<dt>' + army[soldier] + '</dt>' + '<dd>' + this.army_img(soldier) + '</dd>';
				total += army[soldier];
			}
		}
		out += '<dt>' + total + '</dt>' +
				'<dd>Total</dd>' +
			'</dl>';
		if (total > 0) {
			return out;
		} else {
			return out2;
		}
	};

	/**
	 * Check if a window exists and is opened.
	 * 
	 * @param {String} id
	 * @returns {Boolean}
	 */
	this.window_exists = function (id) {
		if ($(id).length == 0) {
			return false;
		}
		return true;
	};

	/**
	 * Check if a panel exists and is opened.
	 * 
	 * @param {String} id
	 * @returns {Boolean}
	 */
	this.panel_exists = function (id) {
		if ($(id).length == 0) {
			return false;
		}
		return true;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} text
	 * @param {String} title
	 * @param {String} handle
	 * @param {String} class_name
	 * @param {Boolean} disabled
	 * @returns {String}
	 */
	this.panel_btn = function (text, title, handle, class_name, disabled) {
		return '<a title="' + title + '" data-handle="' + handle + '" class="tips ' + class_name + (disabled === true ? ' disabled' : '') + '" href="#">' + text + '</a></td>';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} trades
	 * @param {String} mode
	 * @returns {String}
	 */
	this.trades_list = function (trades, mode) {
		mode = (typeof mode === 'undefined' || mode === 'imports') ? 'imports' : 'exports';
		let out = '';
		if (trades !== null) {
			let trade = trades[mode];
			for (let item in trade) {
				if (trade[item] > 0) {
					out += this.resource_storage_small_el(item, trade[item]);
				}
			}
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} army
	 * @param {Boolean} no_margin
	 * @returns {String}
	 */
	this.navy_list = function (army, no_margin) {
		let out2 = '<p>There are no ships in this navy.</p>';
		let out = '<dl' + ((typeof no_margin !== 'undefined' && no_margin === true) ? ' class="nomg"' : '') + '>';
		let total = 0;
		for (let ship in army) {
			if (army[ship] > 0) {
				out += '<dt>' + army[ship] + '</dt>' + '<dd>' + this.navy_img(ship) + '</dd>';
				total += army[ship];
			}
		}
		out += '<dt>' + total + '</dt>' +
				'<dd>Total</dd>' +
			'</dl>';
		if (total > 0) {
			return out;
		} else {
			return out2;
		}
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} params
	 * @returns {String}
	 */
	this.building_element = function (params) {
		let building_image = params.type;
		let description = '<br /><span class="smalldesc">' + params.data.description + '</span>';
		if (params.type.slice(0, 5) === 'house') {
			building_image = params.type.slice(0, 5);
		}
		let image = (typeof params.data.visible_upgrades === 'undefined' || params.data.visible_upgrades === false) ? building_image : building_image + params.data.level;
		return '<div data-type="' + params.type + '" data-level="' + params.data.level + '" ' + 'style="background-image:url(' + civitas.ASSETS_URL + 'images/assets/buildings/' + image + '.png);left:' + params.data.position.x + 'px;top:' + params.data.position.y + 'px" title=\'' + params.data.name + '\' ' + 'id="building-' + params.data.handle + '"' + 'class="tips building' + (params.data.large === true ? ' large' : '') + '"></div>';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {String}
	 */
	this.resource_storage_small_el = function (resource, amount) {
		return '<div class="tips storage-item small" title="' + civitas.utils.get_resource_name(resource) + '"><img class="small" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + resource + '.png" /><span class="amount">' + amount + '</span></div>';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {String}
	 */
	this.resource_storage_el = function (resource, amount) {
		return '<div class="storage-item" data-resource="' + resource + '"><span class="title">' + civitas.utils.get_resource_name(resource) + '</span><img src="' + civitas.ASSETS_URL + 'images/assets/resources/' +  resource + '.png" /><span class="amount">' + amount + '</span></div>';
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Array} data
	 * @returns {String}
	 */
	this.tabs = function (data) {
		let out = '<div class="tabs">' +
				'<ul>';
		for (let i = 0; i < data.length; i++) {
			out += '<li><a href="#tab-' + data[i].toLowerCase().replace(/ /g, "-") + '">' + data[i].capitalize() + '</a></li>';
		}
		out += '</ul>';
		for (let i = 0; i < data.length; i++) {
			out += '<div id="tab-' + data[i].toLowerCase().replace(/ /g, "-") + '"></div>';
		}
		out += '</div>';
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object| Array} materials
	 * @returns {String}
	 */
	this.materials_panel = function (materials) {
		let out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>Uses</dt>';
			if (Array.isArray(materials)) {
				for (let i = 0; i < materials.length; i++) {
					for (let y in materials[i]) {
						out += '<dd>' + materials[i][y] + this.resource_small_img(y) + '</dd>';
					}
				}
			} else {
				for (let item in materials) {
					out += '<dd>' + materials[item] + this.resource_small_img(item) + '</dd>';
				}
			}
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} materials
	 * @param {Number} level
	 * @returns {String}
	 */
	this.chance_panel = function (materials, level) {
		let out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>Extra materials</dt>';
			for (let item in materials) {
				out += '<dd>' + (level * materials[item]).toFixed(4) * 100 + '%' + this.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} materials
	 * @param {Number} level
	 * @returns {String}
	 */
	this.production_panel = function (materials, level) {
		let out = '';
		if (typeof materials !== 'undefined') {
			out += '<dt>Produces</dt>';
			for (let item in materials) {
				out += '<dd>' + (level * materials[item]) + this.resource_small_img(item) + '</dd>';
			}
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Object} requires
	 * @returns {String}
	 */
	this.requires_panel = function (requires) {
		let out = '';
		if (typeof requires.buildings !== 'undefined' || typeof requires.settlement_level !== 'undefined') {
			out += '<dt>Requires</dt>';
			out += '<dd>';
			if (typeof requires.buildings !== 'undefined') {
				for (let item in requires.buildings) {
					let b = this.core().get_building_config_data(item);
					out += b.name + ' level ' + requires.buildings[item] + '<br />'
				}
			}
			if (typeof requires.research !== 'undefined') {
				let r = civitas.TECHNOLOGIES[civitas.TECHNOLOGIES.findIndexByHandle(requires.research)];
				out += 'Research: ' + r.name + '<br />';
			}
			if (typeof requires.settlement_level !== 'undefined') {
				out += 'Setlement: level ' + requires.settlement_level;
			}
			out += '</dd>';
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Number} tax
	 * @param {Number} level
	 * @returns {String}
	 */
	this.tax_panel = function (tax, level) {
		let out = '';
		if (typeof tax !== 'undefined') {
			out += '<dt>Tax</dt>';
			out += '<dd>' + (level * tax) + this.resource_small_img('coins') + '</dd>';
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {Number} storage
	 * @param {Number} level
	 * @returns {String}
	 */
	this.storage_panel = function (storage, level) {
		let out = '';
		if (typeof storage !== 'undefined') {
			out += '<dt>Storage</dt>' +
				'<dd>' +
					(level * storage) + '<img alt="Storage space" class="tips small" title="Storage Space" src="' + civitas.ASSETS_URL + 'images/assets/resources/storage.png" />' +
				'</dd>';
		}
		return out;
	};

	/**
	 * 
	 *
	 * @public
	 * @param {String} resource
	 * @returns {String}
	 */
	this.resource_small_img = function (resource) {
		return '<img alt="' + civitas.utils.get_resource_name(resource) + '" class="tips small" title="' + civitas.utils.get_resource_name(resource) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + resource + '.png" />';
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
	 * Perform a normal notification in the game.
	 * 
	 * @public
	 * @param {String} message
	 * @param {String} title
	 * @param {Number} timeout
	 * @returns {civitas.objects.ui}
	 */
	this.notify = function (message, title, timeout, mode) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : 'City Council',
			content: message,
			timeout: typeof timeout !== 'undefined' ? timeout : 15000,
			mode: typeof mode !== 'undefined' ? mode : civitas.NOTIFY_NORMAL
		});
		this.log('game', message);
		return this;
	};

	/**
	 * Internal function for performing an UI notification.
	 * 
	 * @param {Object} settings
	 * @returns {civitas.objects.ui}
	 * @private
	 */
	this._notify = function (settings) {
		let container, notty, hide, image, right, left, inner, _container;
		let notty_type = 'normal';
		settings = $.extend({
			title: undefined,
			content: undefined,
			timeout: 15000,
			img: undefined,
			mode: civitas.NOTIFY_NORMAL
		}, settings);
		if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
			_container = 'achievements-notifications';
		} else {
			_container = 'notifications';
		}
		container = $('.' + _container);
		if (!container.length) {
			container = $("<div>", {
				'class': _container
			}).appendTo(document.body);
		}
		$('.achievements-notifications').css({
			left: ($(window).width() / 2) - (container.width() / 2)
		});
		notty = $('<div>');
		notty.addClass('notty');
		hide = $("<div>", {
			click: function () {
				$(this).parent().delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			},
			touchstart: function () {
				$(this).parent().delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			}
		});
		hide.addClass('hide');
		if (settings.mode === civitas.NOTIFY_ERROR) {
			notty_type = 'error';
		} else if (settings.mode === civitas.NOTIFY_RESEARCH) {
			notty_type = 'research';
		} else if (settings.mode === civitas.NOTIFY_EVENT) {
			notty_type = 'event';
		} else if (settings.mode === civitas.NOTIFY_ACHIEVEMENT) {
			notty_type = 'achievement';
		} else if (settings.mode === civitas.NOTIFY_RELIGION) {
			notty_type = 'religion';
		} else if (settings.mode === civitas.NOTIFY_WAR) {
			notty_type = 'war';
		}
		notty.addClass(notty_type);
		settings.img = civitas.ASSETS_URL + 'images/assets/ui/icon_' + notty_type + '.png';
		image = $('<div>', {
			style: "background: url('" + settings.img + "')"
		});
		image.addClass('img');
		left = $("<div class='left'>");
		right = $("<div class='right'>");
		inner = $('<div>', {
			html: '<h2>' + settings.title + '</h2>' + settings.content
		});
		inner.addClass("inner");
		inner.appendTo(right);
		image.appendTo(left);
		left.appendTo(notty);
		right.appendTo(notty);
		hide.appendTo(notty);
		if (settings.mode !== civitas.NOTIFY_ACHIEVEMENT) {
			let timestamp = Number(new Date());
			let timeHTML = $('<div>', {
				html: civitas.utils.time_since(timestamp) + ' ago'
			});
			timeHTML.addClass('time-ago').attr('title', timestamp);
			timeHTML.appendTo(right);
			setInterval(function () {
				$('.time-ago').each(function () {
					let timing = $(this).attr('title');
					if (timing) {
						$(this).html(civitas.utils.time_since(timing) + ' ago');
					}
				});
			}, 4000);
		}
		notty.hover(function () {
			hide.show();
		}, function () {
			hide.hide();
		});
		notty.prependTo(container);
		notty.show();
		if (settings.timeout) {
			setTimeout(function () {
				notty.delay(300).queue(function () {
					$(this).clearQueue();
					$(this).remove();
				});
			}, settings.timeout);
		}
		return this;
	};

	/**
	 * Perform an error notification in the game.
	 * 
	 * @public
	 * @param {String} message
	 * @param {String} title
	 * @param {Boolean} no_console
	 * @returns {civitas.objects.ui}
	 */
	this.error = function (message, title, no_console) {
		this._notify({
			title: (typeof title !== 'undefined') ? title : 'City Council',
			mode: civitas.NOTIFY_ERROR,
			content: message
		});
		if (typeof no_console === 'undefined' || no_console === false) {
			this.log('game', message, true);
		}
		return this;
	};

	/**
	 * Resize the UI.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.resize = function() {
		const window_width = parseInt($(window).width());
		const window_height = parseInt($(window).height());
		const header_height = parseInt($('.ui > header').height());
		const sidebar_width = parseInt($('.ui > aside').width());
		const footer_width = parseInt($('.ui > footer').width());
		$('.ui > footer').css({
			left: (window_width / 2) - (footer_width / 2)
		});
		$('.ui > .viewport').width(window_width - sidebar_width);
		$('.ui > .viewport').height(window_height - header_height);
		return this;
	};

	/**
	 * Log data to the console.
	 * 
	 * @public
	 * @param {String} namespace
	 * @param {String} message
	 * @param {Boolean} error
	 * @returns {civitas.objects.ui}
	 */
	this.log = function (namespace, message, error) {
		if ($('#panel-debug .console p').length > civitas.MAX_CONSOLE_LINES) {
			$('#panel-debug .console').empty();
		}
		$('#panel-debug .console').prepend('<p><span class="date">' + civitas.utils.get_now() + '</span><span class="namespace game-' + namespace + '">' + namespace.toUpperCase() + '</span>' + (error === true ? '<span class="error">ERROR</span>' : '') + '<span' + (error === true ? ' class="error-message"' : ' class="log-message"') + '>' + message + '</span></p>');
		return this;
	};

	/**
	 * Open a UI panel.
	 *
	 * @public
	 * @param {Object} panel_data
	 * @param {Object} extra_data
	 * @param {Boolean} sidebar
	 * @returns {civitas.controls.panel}
	 */
	this.open_panel = function(panel_data, extra_data, sidebar) {
		panel_data.core = this.core();
		if (typeof extra_data !== 'undefined') {
			panel_data.data = extra_data;
		}
		if (typeof sidebar !== 'undefined') {
			panel_data.data.sidebar = sidebar;
		}
		const panel = new civitas.controls.panel(panel_data);
		this.panels.push(panel);
		return panel;
	};

	/**
	 * Open a UI window.
	 *
	 * @public
	 * @param {Object} window_data
	 * @param {Object} extra_data
	 * @returns {civitas.controls.window}
	 */
	this.open_window = function(window_data, extra_data) {
		window_data.core = this.core();
		if (typeof extra_data !== 'undefined') {
			window_data.data = extra_data;
		}
		return new civitas.controls.window(window_data);
	};

	/**
	 * Open a modal window (usually to ask for confirmations).
	 *
	 * @public
	 * @param {Function} callback
	 * @param {String} text
	 * @param {String} title
	 * @returns {civitas.objects.ui}
	 */
	this.open_modal = function(callback, text, title) {
		const modal = new civitas.controls.modal({
			core: this.core()
		});
		modal.alert({
			title: typeof title !== 'undefined' ? title : 'City Council',
			text: text,
			on_click: callback
		});
		return this;
	};

	/**
	 * Refresh all the UI information after a property change.
	 * 
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.refresh_ui = function () {
		const settlement = this.core().get_settlement();
		if (typeof settlement !== 'undefined') {
			$('.citylevel').html(settlement.level());
			if (settlement.fame() >= this.core().level_to_fame(settlement.level())) {
				this.core().level_up();
			}
		}
		return this;
	};

	/**
	 * Calculate and return the total and free storage space in the main settlement.
	 * 
	 * @public
	 * @returns {Object}
	 */
	this.check_storage = function () {
		const storage = this.core().get_settlement().storage();
		if (storage.occupied >= storage.all) {
			this.error('You ran out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'No storage space');
		} else if ((storage.all - storage.occupied) < 100) {
			this.error('You will soon run out of storage space and all goods produced will be lost. Upgrade your warehouse or marketplace.', 'Storage nearly full');
		}
		return storage;
	};

	/**
	 * Refresh the UI and panels.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.refresh = function() {
		this.refresh_panels();
		this.refresh_toolbar();
		this.refresh_ui();
		$('.tipsy').remove();
		$('.tips').tipsy({
			gravity: $.fn.tipsy.autoNS,
			html: true
		});
		return this;
	};

	/**
	 * Get the panels open in the game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_panels = function() {
		return this.panels;
	};

	/**
	 * Refresh the resources toolbar.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.refresh_toolbar = function() {
		const settlement = this.core().get_settlement();
		if (typeof settlement !== 'undefined') {
			const resources = settlement.get_resources();
			for (let item in civitas.RESOURCES) {
				if (civitas.RESOURCES[item].toolbar === true) {
					if (typeof resources[item] !== 'undefined') {
						if (resources[item] === 0) {
							$('.resource-panel .resource.' + item).hide();
						} else {
							$('.resource-panel .resource.' + item).show();
						}
						$('.resource-panel .resource.' + item + ' span').html(resources[item]);
					}
				}
			}
		}
		return this;
	};

	/**
	 * Return the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {civitas.controls.panel|Boolean}
	 */
	this.get_panel = function(id) {
		const panels = this.get_panels();
		for (let i = 0; i < panels.length; i++) {
			if (typeof panels[i] !== 'undefined') {
				if (panels[i].id === id) {
					return panels[i];
				}
			}
		}
		return false;
	};

	/**
	 * Close the UI panel specified by its id.
	 *
	 * @public
	 * @param {String} id
	 * @returns {Boolean}
	 */
	this.close_panel = function(id) {
		const panels = this.get_panels();
		for (let i = 0; i < panels.length; i++) {
			if (typeof panels[i] !== 'undefined') {
				if (panels[i].id === id) {
					panels.splice(i, 1);
					return true;
				}
			}
		}
		return false;
	};

	/**
	 * Force refresh of the UI panels open.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.refresh_panels = function() {
		const panels = this.get_panels();
		for (let i = 0; i < panels.length; i++) {
			if (typeof panels[i] !== 'undefined') {
				panels[i].on_refresh();
			}
		}
		return this;
	};

	/**
	 * Get the middle of a hex cell.
	 *
	 * @public
	 * @param {Number} row
	 * @param {Number} column
	 * @returns {Number}
	 */
	this.get_cell_middle = function(row, column) {
		let height = Math.sqrt(3) / 2 * civitas.WORLD_HEX_SIZE;
		let center = {
			x: Math.round(civitas.WORLD_HEX_SIZE), 
			y: Math.round(height)
		};
		return center;
	};

	/**
	 * Scroll the world map to the specified location.
	 *
	 * @param {Object} location
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.worldmap_scrollto = function(location) {
		const coords = this.get_cell_middle_coords(location.y, location.x);
		$('.worldmap').scrollTop(coords.y - (700 / 2));
		$('.worldmap').scrollLeft(coords.x - (1164 / 2));
		return this;
	};

	/**
	 * Scroll the city map to the specified building location.
	 *
	 * @param {Object} building
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.citymap_scrollto_building = function(building) {
		const location = building.position();
		const view_width = parseInt($('.ui > .viewport').width());
		const view_height = parseInt($('.ui > .viewport').height());
		$('.viewport').scrollTop(location.y - ((view_height - 260) / 2));
		$('.viewport').scrollLeft(location.x - ((view_width - 260) / 2));
		return this;
	};

	/**
	 * Get the middle coordonates of a hex cell.
	 *
	 * @public
	 * @param {Number} row
	 * @param {Number} column
	 * @returns {Object}
	 */
	this.get_cell_middle_coords = function(row, column) {
		const height = Math.sqrt(3) / 2 * civitas.WORLD_HEX_SIZE;
		return {
			x: Math.round((1.5 * column) * civitas.WORLD_HEX_SIZE),
			y: Math.round(height * (row * 2 + (column % 2)))
		}
	};

	/**
	 * Get a random HSL color.
	 *
	 * @public
	 * @returns {String}
	 */
	this.get_random_color = function() {
		let color = (Math.random() * 250) + 1;
		let colors = Math.random() * 255;
		return "hsl(" + (color * (360 / colors) % 360) + ", 50%, 50%)";
	};

	// Fire up the constructor
	return this.__init(core);
};

/**
 * Main Game core object, responsible with the game events.
 * 
 * @class civitas.game
 * @license GPLv3
 * @returns {civitas.game}
 */
civitas.game = function () {

	/**
	 * List of all the special places in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this._places = [];

	/**
	 * List of all the settlements in the game.
	 * 
	 * @type {Array}
	 * @private
	 */
	this.settlements = [];

	/**
	 * Game actions queue.
	 *
	 * @private
	 * @type {Array}
	 */
	this._queue = [];

	/**
	 * List of currently completed achievements.
	 *
	 * @private
	 * @type {Array}
	 */
	this._achievements = [];

	/**
	 * List of currently completed researches.
	 *
	 * @private
	 * @type {Array}
	 */
	this._research = [];

	/**
	 * Total number of achievement points
	 *
	 * @private
	 * @type {Number}
	 */
	this._achievement_points = 0;

	/**
	 * Pointer to the audio subsystem component.
	 * 
	 * @private
	 * @type {Object}
	 */
	this.music = null;

	/**
	 * Current game date.
	 *
	 * @private
	 * @type {Object}
	 */
	this._date = {
		day: 1,
		month: 1,
		year: 1,
		day_of_month: 1
	};

	/**
	 * Auctioneer data.
	 * 
	 * @private
	 * @type {Object}
	 */
	this._auctioneer = {};

	/**
	 * Black Market data.
	 * 
	 * @private
	 * @type {Object}
	 */
	this._black_market = {};

	/**
	 * Game settings
	 * 
	 * @type {Object}
	 * @private
	 */
	this.settings = {
		worldmap_beautify: civitas.WORLD_BEAUTIFY,
		worldmap_grid: civitas.WORLD_GRID,
		music: false
	};

	/**
	 * World map data.
	 *
	 * @type {civitas.objects.world}
	 * @private
	 */
	this._world = null;

	/**
	 * Encryption data, for now it's safe (famous last words) since we're only doing local storage.
	 *
	 * @private
	 * @type {Object}
	 */
	this.encryption = {
		key: null,
		key_size: 256,
		iv_size: 128,
		iterations: 100,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	};

	/**
	 * Game properties.
	 *
	 * @private
	 * @type {Object}
	 */
	this.properties = {
		difficulty: civitas.DIFFICULTY_EASY,
		mode: civitas.MODE_SINGLEPLAYER,
		paused: false
	};

	/**
	 * Pointer to the game UI object.
	 *
	 * @private
	 * @type {civitas.objects.ui}
	 */
	this._ui = null;

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {civitas.game}
	 */
	this.__init = function () {
		this._ui = new civitas.objects.ui(this);
		const ui = this.ui();
		ui.build_main();
		this._setup_audio();
		$(window).bind('resize', function() {
			ui.resize();
		});
		$('.ui').on('click', '.cityavatar', function () {
			ui.open_panel(civitas.PANEL_COUNCIL);
			return false;
		}).on('click', 'a[data-action=panel]', function () {
			let panel = $(this).data('panel').toUpperCase();
			if (typeof civitas['PANEL_' + panel] !== 'undefined') {
				ui.open_panel(civitas['PANEL_' + panel]);
			}
			return false;
		}).on('click', 'a[data-action=window]', function () {
			let _window = $(this).data('window').toUpperCase();
			if (typeof civitas['WINDOW_' + _window] !== 'undefined') {
				ui.open_window(civitas['WINDOW_' + _window]);
			}
			return false;
		});
		ui.resize();
		if (!this.has_storage_data()) {
			ui.open_window(civitas.WINDOW_SIGNUP);
		} else {
			if (civitas.ENCRYPTION === true) {
				ui.open_window(civitas.WINDOW_SIGNIN);
			} else {
				this.load_game_data();
			}
		}
		return this;
	};

	/* =================================== Storage =================================== */

	/**
	 * Reset (empty) game storage data.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {civitas.game}
	 */
	this.reset_storage_data = function(key) {
		if (typeof key === 'undefined') {
			key = 'live';
		}
		localStorage.removeItem(civitas.STORAGE_KEY + '.' + key);
		return this;
	};

	/**
	 * Encrypt data using AES encryption.
	 *
	 * @public
	 * @param {String} data
	 * @returns {String}
	 */
	this.encrypt = function(data) {
		const salt = CryptoJS.lib.WordArray.random(128 / 8);
		const key = CryptoJS.PBKDF2(this.encryption.key, salt, {
			keySize: this.encryption.key_size / 32,
			iterations: this.encryption.iterations
		});
		const iv = CryptoJS.lib.WordArray.random(128 / 8);
		const encrypted = CryptoJS.AES.encrypt(data, key, { 
			iv: iv,
			padding: this.encryption.padding,
			mode: this.encryption.mode
		});
		return salt.toString() + iv.toString() + encrypted.toString();
	};

	/**
	 * Decrypt data using AES encryption.
	 *
	 * @public
	 * @param {String} data
	 * @returns {String}
	 */
	this.decrypt = function(data) {
		const salt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
		const iv = CryptoJS.enc.Hex.parse(data.substr(32, 32))
		const encrypted = data.substring(64);
		const key = CryptoJS.PBKDF2(this.encryption.key, salt, {
			keySize: this.encryption.key_size / 32,
			iterations: this.encryption.iterations
		});
		let decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
			iv: iv, 
			padding: this.encryption.padding,
			mode: this.encryption.mode
		});
		try {
			decrypted = decrypted.toString(CryptoJS.enc.Utf8);
		} catch (err) {
			return false;
		}
		return decrypted;
	};

	/**
	 * Set game storage data.
	 * 
	 * @param {String} key
	 * @param {String|Number} value
	 * @param {Boolean} as_text
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_storage_data = function (key, value, as_text) {
		let data;
		if (as_text === true) {
			data = JSON.stringify(value);
		} else {
			data = value;
		}
		if (civitas.ENCRYPTION === true) {
			localStorage.setItem(civitas.STORAGE_KEY + '.' + key, this.encrypt(data));
		} else {
			localStorage.setItem(civitas.STORAGE_KEY + '.' + key, data);
		}
		return this;
	};

	/**
	 * Retrieve game storage data.
	 * 
	 * @param {String} key
	 * @param {Boolean} as_text
	 * @public
	 * @returns {String|Number}
	 */
	this.get_storage_data = function (key, as_text) {
		let decrypted;
		if (typeof key === 'undefined') {
			key = 'live';
		}
		if (this.has_storage_data(key)) {
			if (civitas.ENCRYPTION === true) {
				decrypted = this.decrypt(localStorage.getItem(civitas.STORAGE_KEY + '.' + key));
			} else {
				decrypted = localStorage.getItem(civitas.STORAGE_KEY + '.' + key);	
			}
			if (decrypted !== false) {
				if (as_text === true) {
					return decrypted;
				} else {
					return JSON.parse(decrypted);
				}
			}
		}
		return false;
	};

	/**
	 * Check if there is any stored data.
	 *
	 * @param {String} key
	 * @public
	 * @returns {Boolean}
	 */
	this.has_storage_data = function(key) {
		if (typeof key === 'undefined') {
			key = 'live';
		}
		if (localStorage.getItem(civitas.STORAGE_KEY + '.' + key) !== null) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Import game data.
	 *
	 * @public
	 * @param {Object} data
	 * @returns {Object}
	 */
	this.import = function(data) {
		if (data === false) {
			return false;
		}
		this.difficulty(data.difficulty);
		this.queue(data.queue);
		this.research(data.research);
		this.achievements(data.achievements);
		this.world().seeds(data.seeds);
		this.achievement_points(data.achievement_points);
		this.date(data.date);
		this.black_market(data.black_market);
		this.auctioneer(data.auctioneer);
		this.set_settings(data.settings);
		return data;
	};

	/**
	 * Export game data.
	 *
	 * @public
	 * @param {Boolean} to_local_storage
	 * @returns {Object}
	 */
	this.export = function(to_local_storage) {
		const settlement = this.get_settlement();
		const settlements_list = [];
		const places_list = [];
		for (let i = 0; i < this.settlements.length; i++) {
			if (typeof this.settlements[i] !== 'undefined') {
				settlements_list.push(this.settlements[i].export());
			}
		}
		for (let i = 0; i < this._places.length; i++) {
			if (typeof this._places[i] !== 'undefined') {
				places_list.push(this._places[i].export());
			}
		}
		const data = {
			settlements: settlements_list,
			places: places_list,
			difficulty: this.difficulty(),
			seeds: this.world().seeds(),
			achievements: this.achievements(),
			research: this.research(),
			achievement_points: this.achievement_points(),
			black_market: this.black_market(),
			auctioneer: this.auctioneer(),
			date: this.date(),
			queue: this.queue(),
			settings: this.get_settings(),
			info: {
				version: civitas.VERSION
			}
		};
		const hash = CryptoJS.SHA512(JSON.stringify(data));
		if (to_local_storage === true) {
			const new_data = {
				date: Number(new Date()),
				data: data,
				hash: hash.toString(CryptoJS.enc.Hex)
			}
			this.set_storage_data('live', new_data, true);
			return new_data;
		}
		return data;
	};

	/**
	 * Save the game data.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.save = function () {
		this.export(true);
		return this;
	};
	
	/* =================================== Date / Time =================================== */

	/**
	 * Method that gets called each 'day'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_daily = function () {
		this._date.day++;
		this.ui().log('world', this.format_date());
		this._process_settlements();
		this._check_for_events();
		this._queue_advance();
		this.auctioneer_process();
		this._date.day_of_month++;
		if (this._date.day_of_month > 30) {
			this._do_monthly();
		}
		if (this._date.day >= 361) {
			this._do_yearly();
			this._date.day = 1;
			this._date.month = 1;
		}
		this.ui().check_storage();
		this.save_and_refresh();
		return this;
	};

	/**
	 * Method that gets called each 'month'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_monthly = function () {
		this._date.day_of_month = 1;
		this._date.month++;
		if (this._date.month === 3 || this._date.month === 6 || this._date.month === 9 || this._date.month === 12) {
			this._do_quarterly();
		}
		if (this._date.month === 6 || this._date.month === 12) {
			this._do_biannually();
		}
		//this.auctioneer_process();
		this.black_market_reset();
		return this;
	};

	/**
	 * Method that gets called twice per year.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_biannually = function() {
		this.refresh_trades();
		return this;
	};

	/**
	 * Method that gets called four times every year.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_quarterly = function() {
		return this;
	};

	/**
	 * Method that gets called each 'year'.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._do_yearly = function () {
		this.get_settlement().release_mercenaries();
		this.ui().notify('At the end of the year, mercenaries from your city have been released.');
		this._refresh_influence();
		this._date.year++;
		this.ui().log('game', 'New year!');
		return this;
	};

	/**
	 * Return the game date in a more manageable form.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.format_date = function () {
		return 'day ' + this._date.day_of_month + ', month ' + this._date.month + ', year ' + this._date.year;
	};

	/**
	 * Return if the current season is spring.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_spring = function() {
		if (this._date.month >= 3 && this._date.month < 6) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is summer.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_summer = function() {
		if (this._date.month >= 6 && this._date.month < 9) {
			return true;
		}
		return false;
	};

	/**
	 * Get/set the current game date.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.date = function(value) {
		if (typeof value !== 'undefined') {
			this._date = value;
		}
		return this._date;
	};

	/**
	 * Return if the current season is autumn.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_autumn = function() {
		if (this._date.month >= 9 && this._date.month < 12) {
			return true;
		}
		return false;
	};

	/**
	 * Return if the current season is winter.
	 *
	 * @returns {Boolean}
	 * @public
	 */
	this.is_winter = function() {
		if (this._date.month >= 12 || this._date.month < 3) {
			return true;
		}
		return false;
	};

	/**
	 * Get the current season.
	 *
	 * @public
	 * @returns {Object}
	 */
	this.season = function() {
		let _season = {
			// Todo
		};
		if (this.is_spring()) {
			_season.id = civitas.SEASON_SPRING;
			_season.name = civitas.SEASONS[civitas.SEASON_SPRING].capitalize();
		} else if (this.is_summer()) {
			_season.id = civitas.SEASON_SUMMER;
			_season.name = civitas.SEASONS[civitas.SEASON_SUMMER].capitalize();
		} else if (this.is_autumn()) {
			_season.id = civitas.SEASON_AUTUMN;
			_season.name = civitas.SEASONS[civitas.SEASON_AUTUMN].capitalize();
		} else if (this.is_winter()) {
			_season.id = civitas.SEASON_WINTER;
			_season.name = civitas.SEASONS[civitas.SEASON_WINTER].capitalize();
		}
		return _season;
	};

	/* =================================== Auctioneer =================================== */

	/**
	 * Reset the Auctioneer goods.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.auctioneer_reset = function () {
		this._auctioneer = {};
		this.ui().refresh();
		return this;
	};

	/**
	 * Remove the specified item from the Auctioneer data.
	 *
	 * @public
	 * @param {String} item
	 * @returns {civitas.game}
	 */
	this.auctioneer_delete = function(item) {
		let auctions = this.auctioneer();
		delete auctions[item];
		return this;
	};

	/**
	 * Assign the auctioneer to check for the requested goods.
	 * 
	 * @public
	 * @returns {Boolean}
	 */
	this.auctioneer_process = function () {
		let settlements = this.get_settlements();
		let player_settlement = this.get_settlement();
		let auctions = this.auctioneer();
		let trades;
		let amount;
		if (!player_settlement.can_trade()) {
			this._auctioneer = {};
			return false;
		}
		for (let item in auctions) {
			if (auctions[item].amount > 0) {
				for (let i = 0; i < settlements.length; i++) {
					if (!settlements[i].is_player()) {
						if (settlements[i].is_urban()) {
							trades = settlements[i].get_trades();
							if (trades === null) {
								break;
							}
							if (typeof trades.exports === 'undefined') {
								break;
							}
							for (let trade in trades.exports) {
								if (trades.exports[trade] > 0) {
									if (trade === item) {
										if (auctions[item].amount >= trades.exports[trade]) {
											amount = trades.exports[trade];
										} else if (auctions[item].amount < trades.exports[trade]) {
											amount = auctions[item].amount;
										} else {
											amount = 0;
										}
										/*
										if ((auctions[item].amount >= trades.exports[trade]) && (auctions[item].amount - trades.exports[trade] > 0)) {
											amount = trades.exports[trade];
										} else if (auctions[item].amount < trades.exports[trade]) {
											amount = auctions[item].amount;
										} else {
											amount = 0;
										}
										*/
										console.log(settlements[i].name() + ' is selling ' + trades.exports[item] + ' ' + item + ' and we need ' + amount);
										if (auctions[item].amount - amount >= 0) {
											player_settlement.buy_from_settlement(settlements[i], item, amount, true);
											auctions[item].amount = auctions[item].amount - amount;
											if (auctions[item].amount <= 0) {
												this.auctioneer_delete(item);
											}
										}
									}
								}
							}
						}
					}
				}
			} else {
				this.auctioneer_delete(item);
			}
		}
		return true;
	};

	/**
	 * Get/set the Auctioneer goods list.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.auctioneer = function (value) {
		if (typeof value !== 'undefined') {
			this._auctioneer = value;
		}
		return this._auctioneer;
	};

	/**
	 * Use the Auctioneer to search for and buy the specified goods.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.auctioneer_add = function(resource, amount) {
		let settlement = this.get_settlement();
		if (settlement.can_trade()) {
			const resources = settlement.get_resources();
			let discount = Math.ceil(Math.ceil((civitas.RESOURCES[resource].price * civitas.TRADES_ADDITION) / 100) + Math.ceil((civitas.RESOURCES[resource].price * civitas.AUCTIONEER_DISCOUNT) / 100));
			const price = civitas.utils.calc_price_plus_discount(amount, resource, discount);
			if (typeof this._auctioneer[resource] !== 'undefined') {
				const old = this._auctioneer[resource];
				this._auctioneer[resource] = {
					resource: resource,
					amount: old.amount + amount,
					price: old.price + price
				};
			} else {
				this._auctioneer[resource] = {
					resource: resource,
					amount: amount,
					price: price
				};
			}
			this.ui().refresh();
			this.ui().notify(settlement.name() + ' placed an order for ' + amount + ' ' + civitas.utils.get_resource_name(resource) + ' on the Auctioneer.', 'Auctioneer');
			return {
				buyer: settlement.name(),
				amount: amount,
				goods: civitas.utils.get_resource_name(resource),
				price: price,
				discount: discount
			};
		}
		return false;
	};

	/* =================================== Black Market =================================== */

	/**
	 * Remove the specified item from the Black Market data.
	 *
	 * @public
	 * @param {String} item
	 * @returns {civitas.game}
	 */
	this.black_market_delete = function(item) {
		let goods = this.black_market();
		delete goods[item];
		return this;
	};

	/**
	 * List the specified goods onto the Black Market.
	 * 
	 * @public
	 * @param {String} resource
	 * @param {Number} amount
	 * @returns {Object|Boolean}
	 */
	this.black_market_add = function(resource, amount) {
		let settlement = this.get_settlement();
		if (!civitas.utils.resource_exists(resource)) {
			return false;
		}
		const resources = this.get_resources();
		if (!settlement.has_resource(resource, amount)) {
			this.ui().error(this.name() + ' doesn`t have enough resources of this type.');
			return false;
		}
		if (settlement.remove_resource(resource, amount)) {
			const discount = Math.ceil((civitas.RESOURCES[resource].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
			const price = civitas.utils.calc_price_minus_discount(amount, resource, discount);
			if (typeof this._black_market[resource] !== 'undefined') {
				const old = this._black_market[resource];
				this._black_market[resource] = {
					resource: resource,
					amount: old.amount + amount,
					price: old.price + price
				};
			} else {
				this._black_market[resource] = {
					resource: resource,
					amount: amount,
					price: price
				};
			}
			this.ui().refresh();
			this.ui().notify(settlement.name() + ' placed ' + amount + ' ' + civitas.utils.get_resource_name(resource) + ' on the Black Market and will receive ' + price + ' ' + civitas.utils.get_resource_name('coins') + ' next month.', 'Black Market');
			return {
				seller: settlement.name(),
				amount: amount,
				goods: civitas.utils.get_resource_name(resource),
				price: price,
				discount: discount
			};
		}
		return false;
	};

	/**
	 * Reset the Black Market goods.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.black_market_reset = function () {
		let t_coins = 0;
		for (let item in this._black_market) {
			this.get_settlement().inc_coins(this._black_market[item].price);
			t_coins += this._black_market[item].price;
		}
		this._black_market = {};
		this.ui().refresh();
		$('#tab-blackmarket > .contents > table > tbody').empty();
		if (t_coins > 0) {
			this.ui().notify(this.get_settlement().name() + ' received <strong>' + t_coins + '</strong> ' + civitas.utils.get_resource_name('coins') + ' from the Black Market for selling goods.', 'Black Market');
		}
		return t_coins;
	};

	/**
	 * Return the Black Market goods list.
	 * 
	 * @public
	 * @param {Object} value
	 * @returns {Object}
	 */
	this.black_market = function (value) {
		if (typeof value !== 'undefined') {
			this._black_market = value;
		}
		return this._black_market;
	};

	/* =================================== Achivements =================================== */

	/**
	 * Get achievement data from the main configuration array.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Object|Boolean}
	 */
	this.get_achievement_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.ACHIEVEMENTS[civitas.ACHIEVEMENTS.findIndexByHandle(handle)];
		}
		return false;
	};

	/**
	 * Set/get the achievements.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.achievements = function(value) {
		if (typeof value !== 'undefined') {
			this._achievements = value;
		}
		return this._achievements;
	};

	/**
	 * Set/get the achievement points.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.achievement_points = function(value) {
		if (typeof value !== 'undefined') {
			this._achievement_points = value;
		}
		return this._achievement_points;
	};

	/**
	 * Check for any achievements completion.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.achievements_process = function() {
		let condition;
		let good = false;
		let achievement;
		let id;
		const settlement = this.get_settlement();
		if (settlement.is_player()) {
		for (let i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			achievement = civitas.ACHIEVEMENTS[i];
			id = achievement.handle;
			if (!this.has_achievement(id)) {
				for (let cond_item in achievement.conditions) {
					condition = achievement.conditions[cond_item];
					if (cond_item === 'settlement_level') {
						if (settlement.level() === condition) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'soldiers') {
						let army = settlement.num_soldiers();
						if (army >= condition) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'ships') {
						let navy = settlement.num_ships();
						if (navy >= condition) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'population') {
						if (settlement.population() >= condition) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'buildings') {
						for (let item in condition) {
							good = true;
							if (!settlement.is_building_built(item, condition[item])) {
								good = false;
								break;
							}
						}
						if (good === true) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'resources') {
						good = true;
						for (let item in condition) {
							let amount = settlement.resources[item];
							if (amount < condition[item]) {
								good = false;
								break;
							}
						}
						if (good === true) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'storage') {
						if (condition === 0) {
							let storage = settlement.storage();
							if (storage.occupied >= storage.all) {
								this.do_achievement(id);
							}
						}
					}
					if (cond_item === 'achievements') {
						if (condition === this._achievements.length) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'mercenary') {
						let merc = settlement.mercenary();
						if (merc.length >= condition) {
							this.do_achievement(id);
						}
					}
					if (cond_item === 'religion') {
						let religion = settlement.religion();
						if (religion.name === condition.capitalize()) {
							this.do_achievement(id);
						}
					}
				}
			}
		}
	}
		return this;
	};

	/**
	 * Trigger an achievement notification in the game.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {civitas.game}
	 */
	this.do_achievement = function (handle) {
		if (!this.has_achievement(handle)) {
			const achievement = this.get_achievement_config_data(handle);
			if (achievement) {
				this._achievements.push({
					handle: handle,
					date: + new Date()
				});
				this._achievement_points += achievement.points;
				this.ui().notify(achievement.description, 'Achievement Completed', false, civitas.NOTIFY_ACHIEVEMENT);
				this.save_and_refresh();
			}
		}
		return this;
	};

	/**
	 * Check if the current player has the achievement specified by its handle.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {Object|Boolean}
	 */
	this.has_achievement = function(handle) {
		for (let i = 0; i < this._achievements.length; i++) {
			if (typeof this._achievements[i] !== 'undefined') {
				if (this._achievements[i].handle === handle) {
					return this._achievements[i];
				}
			}
		}
		return false;
	};

	/* =================================== Research =================================== */

	/**
	 * Get research data from the main configuration array.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Object|Boolean}
	 */
	this.get_research_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.TECHNOLOGIES[civitas.TECHNOLOGIES.findIndexByHandle(handle)];
		}
		return false;
	};

	/**
	 * Perform a research and trigger a notification in the game.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {civitas.game}
	 */
	this.do_research = function (handle) {
		if (!this.has_research(handle)) {
			const research = this.get_research_config_data(handle);
			if (research !== false) {
				this._research.push({
					handle: handle
				});
				this.ui().notify(research.description, 'Research: ' + research.name, false, civitas.NOTIFY_RESEARCH);
				this.save_and_refresh();
			}
		}
		return this;
	};

	/**
	 * Check if the player is already researching a technology.
	 *
	 * @public
	 * @returns {Object|Boolean}
	 */
	this.has_research_in_queue = function() {
		for (let i = 0; i < this._queue.length; i++) {
			if (this._queue[i].mode === civitas.ACTION_RESEARCH) {
				return this._queue[i];
			}
		}
		return false;
	};

	/**
	 * Check if the current player has the research specified by its handle.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {Object|Boolean}
	 */
	this.has_research = function(handle) {
		for (let i = 0; i < this._research.length; i++) {
			if (typeof this._research[i] !== 'undefined') {
				if (this._research[i].handle === handle) {
					return this._research[i];
				}
			}
		}
		return false;
	};

	/**
	 * Set/get the research.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.research = function(value) {
		if (typeof value !== 'undefined') {
			this._research = value;
		}
		return this._research;
	};

	/* =================================== Queue =================================== */

	/**
	 * Set/get the game queue.
	 *
	 * @public
	 * @returns {Array}
	 */
	this.queue = function(value) {
		if (typeof value !== 'undefined') {
			this._queue = value;
		}
		return this._queue;
	};

	/**
	 * Check if something is in the action queue.
	 *
	 * @public
	 * @param {String} handle
	 * @returns {Boolean}
	 */
	this.in_queue = function(handle) {
		for (let i = 0; i < this._queue.length; i++) {
			if (this._queue[i].data.handle === handle) {
				return this._queue[i];
			}
		}
		return false;
	};

	/**
	 * Advance the game queue.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._queue_advance = function() {
		for (let i = 0; i < this._queue.length; i++) {
			if (this._queue[i].passed === this._queue[i].duration - 1) {
				this.queue_process_action(i);
			} else {
				this._queue[i].passed++;
			}
		}
		return this;
	};

	/**
	 * Process an action from the game queue.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {civitas.game}
	 */
	this.queue_process_action = function(id) {
		let action = this._queue[id];
		let failed = true;
		let destination_settlement;
		let settlement = this.get_settlement(action.source.id);
		if (action.type === civitas.CAMPAIGN_SCOUT) {
			destination_settlement = this.get_place(action.destination.id);
			if (!destination_settlement) {
				this.queue_remove_action(id);
				return false;
			}
		} else {
			if (typeof action.destination !== 'undefined') {
				destination_settlement = this.get_settlement(action.destination.id);
				if (!destination_settlement) {
					this.queue_remove_action(id);
					return false;
				}
			}
		}
		if (action.mode === civitas.ACTION_CAMPAIGN) {
			let random = Math.ceil(Math.random() * 100);
			let amount = Math.floor(action.data.espionage / 100);
			if (settlement.is_player()) {
				if (action.type === civitas.CAMPAIGN_ARMY && !settlement.can_recruit_soldiers()) {
					this.queue_remove_action(id);
					return false;
				}
				if (action.type === civitas.CAMPAIGN_SPY && !settlement.can_diplomacy()) {
					this.queue_remove_action(id);
					return false;
				}
				if (action.type === civitas.CAMPAIGN_SCOUT && !settlement.can_diplomacy()) {
					this.queue_remove_action(id);
					return false;
				}
				if (action.type === civitas.CAMPAIGN_CARAVAN && !settlement.can_trade()) {
					this.queue_remove_action(id);
					return false;
				}
			}
			switch (action.type) {
				case civitas.CAMPAIGN_ARMY:
					this.ui().notify('The army sent from ' + settlement.name() + ' to ' + destination_settlement.name() + ' ' + action.duration + ' days ago reached its destination.');
					if (!this.ui().get_panel('battle')) {
						this.ui().open_window(civitas.WINDOW_BATTLE, {
							source: action,
							destination: destination_settlement
						});
					}
					break;
				case civitas.CAMPAIGN_ARMY_RETURN:
					this.ui().notify('The army sent from ' + destination_settlement.name() + ' to ' + settlement.name() + ' ' + (action.duration * 2) + ' days ago reached its home town.');
					destination_settlement.merge_army(action.data.army);
					destination_settlement.merge_navy(action.data.navy);
					destination_settlement.merge_resources(action.data.resources);
					break;
				case civitas.CAMPAIGN_SPY:
					if (typeof action.data.espionage !== 'undefined') {
						switch (action.data.mission) {
							case civitas.SPY_MISSION_RELIGION:
								if (random <= Math.ceil(action.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									if (action.source.id === settlement.id()) {
										destination_settlement.religion(action.data.religion);
										let religion = destination_settlement.religion();
										this.ui().notify('The spy you sent ' + action.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and managed to convince the settlement council to change the religion to ' + religion.name + '.');
									} else if (action.destination.id === settlement.id()) {
										destination_settlement = this.get_settlement(action.source.id);
										settlement.religion(action.data.religio);
										let religion = settlement.religion();
										this.ui().notify('The spy sent from ' + destination_settlement.name() + ' ' + action.duration + ' days ago to our city reached its destination and managed to convince your city council to change the religion to ' + religion.name + '.');
									}
									failed = false;
								}
								break;
							case civitas.SPY_MISSION_INFLUENCE:
								if (random <= Math.ceil(action.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									if (action.source.id === settlement.id()) {
										settlement.raise_influence(action.destination.id, amount);
										this.ui().notify('The spy you sent ' + action.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and increased your influence over this settlement.');
									} else if (action.destination.id === settlement.id()) {
										destination_settlement = this.get_settlement(action.source.id);
										// TODO
										// destination_settlement.raise_influence(action.destination.id, amount);
										this.ui().notify('The spy sent from ' + destination_settlement.name() + ' ' + action.duration + ' days ago to our city reached its destination and lowered your influence over this settlement.');
									}
									failed = false;
								}
								break;
							case civitas.SPY_MISSION_STEAL_RESOURCES:
								if (random <= Math.ceil(action.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									// TODO
									failed = false;
								}
								break;
							case civitas.SPY_MISSION_INSTIGATE:
								if (random <= Math.ceil(action.data.espionage / civitas.MAX_ESPIONAGE_SUCESS_RATE)) {
									if (action.source.id === settlement.id()) {
										destination_settlement.lower_prestige(amount);
										this.ui().notify('The spy you sent ' + action.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination and incited the population to revolt, therefore lowering the prestige of the city.');
									} else if (action.destination.id === settlement.id()) {
										destination_settlement = this.get_settlement(action.source.id);
										settlement.lower_prestige(amount);
										this.ui().notify('The spy sent from ' + destination_settlement.name() + ' ' + action.duration + ' days ago to our city reached its destination and incited our population to revolt, therefore lowering the prestige of our city.');
									}
									failed = false;
								}
								break;
						}
					}
					break;
				case civitas.CAMPAIGN_SCOUT:
					this.ui().notify('The spy you sent ' + action.duration + ' days ago to a specific place in the world reached its destination and scouted the area. You can now claim the place.');
					destination_settlement.scout();
					break;
				case civitas.CAMPAIGN_CARAVAN:
					let total = 0;
					if (typeof action.data.resources !== 'undefined') {
						for (let item in action.data.resources) {
							if (!civitas.utils.is_virtual_resource(item)) {
								total += civitas.utils.calc_price(action.data.resources[item], item);
							} else if (item === 'coins') {
								total += action.data.resources[item];
							}
							destination_settlement.add_to_storage(item, action.data.resources[item]);
						}
						settlement.raise_influence(action.destination.id, civitas.CARAVAN_INFLUENCE);
						this.ui().notify('The caravan sent from ' + settlement.name() + ' to ' + destination_settlement.name() + action.duration + ' days ago reached its destination.');
					}
					break;
			}
			/*
			if (failed === true) {
				if (action.destination.id === this.get_settlement().id()) {
					destination_settlement = this.get_settlement(action.source.id);
					this.ui().notify('The ' + class_name + ' sent by ' + destination_settlement.name() + ' ' + action.duration + ' days ago reached its destination.');
				} else {
					this.ui().notify('The ' + class_name + ' you sent ' + action.duration + ' days ago to ' + destination_settlement.name() + ' reached its destination.');
				}
			}
			*/
		} else if (action.mode === civitas.ACTION_DIPLOMACY) {
			if (settlement.is_player() && !settlement.can_diplomacy()) {
				this.queue_remove_action(id);
				return false;
			}
			switch (action.type) {
				case civitas.DIPLOMACY_PROPOSE_PACT:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_PACT);
					//failed = false;
					break;
				case civitas.DIPLOMACY_PROPOSE_ALLIANCE:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_ALLIANCE);
					//failed = false;
					break;
				case civitas.DIPLOMACY_PROPOSE_CEASE_FIRE:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_CEASE_FIRE);
					//failed = false;
					break;
				case civitas.DIPLOMACY_PROPOSE_JOIN:
					settlement.diplomacy(destination_settlement, civitas.DIPLOMACY_VASSAL);
					//failed = false;
					break;
			}
			if (failed === true) {
				if (action.source.id === settlement.id()) {
					this.ui().notify('The proposal you sent ' + action.duration + ' days ago to ' + destination_settlement.name() + ' was accepted.');
				}
			}
		} else if (action.mode === civitas.ACTION_RESEARCH) {
			if (settlement.is_player() && !settlement.can_research()) {
				this.queue_remove_action(id);
				return false;
			}
			this.do_research(action.data.handle);
		}
		this.queue_remove_action(id);
		return this;
	};

	/**
	 * Add a campaign to the game queue.
	 *
	 * @public
	 * @param {civitas.objects.settlement} source_settlement
	 * @param {civitas.objects.settlement} destination_settlement
	 * @param {Number} mode
	 * @param {Number} type
	 * @param {Object} data
	 * @returns {Object}
	 */
	this.queue_add = function(source_settlement, destination_settlement, mode, type, data) {
		let duration;
		let d_loc;
		let s_loc = source_settlement.location();
		if (destination_settlement !== null) {
			d_loc = destination_settlement.location();
			duration = this.world().get_distance_in_days(s_loc, d_loc);
		} else {
			d_loc = null;
			duration = data.duration;
		}
		let mission_costs;
		let action;
		if (mode === civitas.ACTION_CAMPAIGN) {
			if (type === civitas.CAMPAIGN_ARMY) {
				if (source_settlement.id() === this.get_settlement().id()) {
					if (!source_settlement.can_recruit_soldiers()) {
						return false;
					}
					mission_costs = source_settlement.adjust_campaign_cost(civitas.ARMY_COSTS, duration);
					if (!source_settlement.has_resources(mission_costs)) {
						return false;
					}
					if (!source_settlement.remove_resources(mission_costs)) {
						return false;
					}
					if (!source_settlement.split_army(data)) {
						return false;
					}
					if (!source_settlement.split_navy(data)) {
						return false;
					}
					if (typeof data.resources === 'undefined') {
						data.resources = {};
					}
					source_settlement.diplomacy(destination_settlement.id(), civitas.DIPLOMACY_WAR);
				}
				this.ui().notify('An army was sent from ' +  source_settlement.name() + ' to ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
			} else if (type === civitas.CAMPAIGN_ARMY_RETURN) {
				this.ui().notify('The army sent from ' + destination_settlement.name() + ' to ' + source_settlement.name() + ' ' + duration + ' days ago finished its campaign and will be returning home with the spoils of war.');
			} else if (type === civitas.CAMPAIGN_SPY) {
				if (source_settlement.id() === this.get_settlement().id()) {
					if (!source_settlement.can_diplomacy()) {
						return false;
					}
					if (data.espionage > source_settlement.espionage()) {
						return false;
					}
					mission_costs = source_settlement.adjust_campaign_cost(civitas.SPY_COSTS, duration);
					if (!source_settlement.has_resources(mission_costs)) {
						return false;
					}
					if (!source_settlement.remove_resources(mission_costs)) {
						return false;
					}
					source_settlement.lower_espionage(data.espionage);
					if (data.mission === civitas.SPY_MISSION_RELIGION) {
						source_settlement.reset_faith();
					}
				}
				this.ui().notify('A spy was dispatched from ' + source_settlement.name() + ' to ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
			} else if (type === civitas.CAMPAIGN_SCOUT) {
				if (source_settlement.id() === this.get_settlement().id()) {
					if (!source_settlement.can_diplomacy()) {
						return false;
					}
					mission_costs = source_settlement.adjust_campaign_cost(civitas.SCOUT_COSTS, duration);
					if (!source_settlement.has_resources(mission_costs)) {
						return false;
					}
					if (!source_settlement.remove_resources(mission_costs)) {
						return false;
					}
				}
				this.ui().notify('A scout was dispatched from ' + source_settlement.name() + ' to a specific place in the world and will reach its destination in ' + duration + ' days.');
			} else if (type === civitas.CAMPAIGN_CARAVAN) {
				if (source_settlement.id() === this.get_settlement().id()) {
					if (!source_settlement.can_trade()) {
						return false;
					}
					mission_costs = source_settlement.adjust_campaign_cost(civitas.CARAVAN_COSTS, duration, data.resources);
					if (!source_settlement.has_resources(mission_costs)) {
						return false;
					}
					if (!source_settlement.remove_resources(mission_costs)) {
						return false;
					}
				}
				this.ui().notify('A caravan was dispatched from ' + source_settlement.name() + ' to ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
			}
		} else if (mode === civitas.ACTION_DIPLOMACY) {
			duration = Math.ceil(duration / 2);
			if (source_settlement.id() === this.get_settlement().id()) {
				this.ui().notify('A diplomacy proposal was dispatched from ' + source_settlement.name() + ' to ' + destination_settlement.name() + ' and will reach its destination in ' + duration + ' days.');
			}
		} else if (mode === civitas.ACTION_RESEARCH) {
			// Todo
			this.ui().notify('Your city`s Academy started researching ' + data.name + ' and will finish it in ' + duration + ' days.');
		}
		action = {
			mode: mode,
			source: {
				x: s_loc.x,
				y: s_loc.y,
				id: source_settlement.id()
			},
			duration: duration,
			passed: 0,
			type: type,
			data: data
		};
		if (destination_settlement !== null) {
			action.destination = {
				x: d_loc.x,
				y: d_loc.y,
				id: destination_settlement.id()
			};
		}
		this._queue.push(action);
		this.save_and_refresh();
		return action;
	};

	/**
	 * Remove an action from the game queue.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {civitas.game}
	 */
	this.queue_remove_action = function(id) {
		const panel = this.ui().get_panel('campaign');
		if (panel) {
			panel.destroy();
		}
		this._queue.splice(id, 1);
		return this;
	};

	/* =================================== Others =================================== */

	/**
	 * Process each of the settlements in the world.
	 * 
	 * @private
	 * @param {String} name
	 * @returns {civitas.objects.settlement|Boolean}
	 */
	this._process_settlements = function() {
		const settlements = this.get_settlements();
		let buildings;
		for (let i = 0; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (!settlements[i].is_player()) {
					if (settlements[i].ai() !== null) {
						if (settlements[i].ai().process()) {
							// Todo
							this.ui().log('ai', 'Processed AI with id `' + i + '` for the ' + settlements[i].nice_name());
						}
					}
				}
				// For now, process just the player settlement.
				// TODO
				if (settlements[i].is_player()) {
					buildings = settlements[i].get_buildings();
					for (let x = 0; x < buildings.length; x++) {
						if (typeof buildings[x] !== 'undefined') {
							buildings[x].process();
						}
					}
				}
			}
		}
	};

	/**
	 * Get a pointer to a special place (har har).
	 * 
	 * @public
	 * @param {String|Number} name
	 * @returns {civitas.objects.place|Boolean}
	 */
	this.get_place = function (id) {
		const _places = this.places();
		if (typeof id === 'number') {
			for (let i = 0; i < _places.length; i++) {
				if (typeof _places[i] !== 'undefined') {
					if (_places[i].id() === id) {
						return _places[i];
					}
				}
			}
		}
		return false;
	};

	/**
	 * Get a pointer to the player's settlement.
	 * 
	 * @public
	 * @param {String|Number} name
	 * @returns {civitas.objects.settlement|Boolean}
	 */
	this.get_settlement = function (name) {
		const settlements = this.get_settlements();
		if (typeof name === 'undefined') {
			return settlements[0];
		}
		if (typeof name === 'string') {
			for (let i = 0; i < settlements.length; i++) {
				if (typeof settlements[i] !== 'undefined') {
					if (settlements[i].name() === name) {
						return settlements[i];
					}
				}
			}
		} else if (typeof name === 'number') {
			for (let i = 0; i < settlements.length; i++) {
				if (typeof settlements[i] !== 'undefined') {
					if (settlements[i].id() === name) {
						return settlements[i];
					}
				}
			}
		}
		return false;
	};

	/**
	 * Load the player settlement from specified data.
	 * 
	 * @private
	 * @param {Object} data
	 * @returns {Object|Boolean}
	 */
	this._load_player_settlement = function (data) {
		const player_s_data = data.settlements[0];
		if (player_s_data) {
			player_s_data.core = this;
			const new_settlement = new civitas.objects.settlement(player_s_data);
			this.settlements.push(new_settlement);
			new_settlement.setup_initial_buildings(player_s_data.buildings);
			return data;
		}
		return false;
	};

	/**
	 * Get the number of all the settlements in game.
	 * 
	 * @public
	 * @returns {Number}
	 */
	this.get_num_settlements = function () {
		return this.settlements.length;
	};

	/**
	 * Get the list of all the settlements in game.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.get_settlements = function () {
		return this.settlements;
	};

	/**
	 * Generate random army soldiers.
	 * 
	 * @public
	 * @param {Number} s_type
	 * @returns {Object}
	 */
	this.generate_random_army = function(s_type) {
		const army = {};
		for (let item in civitas.SOLDIERS) {
			if (s_type === civitas.CITY) {
				if (item === 'cannon' || item === 'catapult') {
					army[item] = civitas.utils.get_random(1, 2);
				} else {
					army[item] = civitas.utils.get_random(5, 10);
				}
			} else if (s_type === civitas.METROPOLIS) {
				if (item === 'cannon' || item === 'catapult') {
					army[item] = civitas.utils.get_random(3, 5);
				} else {
					army[item] = civitas.utils.get_random(20, 30);
				}
			} else if (s_type === civitas.VILLAGE) {
				if (item === 'cannon' || item === 'catapult') {
					// Todo
				} else {
					army[item] = civitas.utils.get_random(0, 2);
				}
			} else if (s_type === civitas.CAMP) {
				if (item === 'cannon' || item === 'catapult') {
					// Todo
				} else {
					army[item] = civitas.utils.get_random(3, 5);
				}
			}
		}
		return army;
	};

	/**
	 * Generate random navy ships.
	 * 
	 * @public
	 * @param {Number} s_type
	 * @returns {Object}
	 */
	this.generate_random_navy = function(s_type) {
		const navy = {};
		for (let item in civitas.SHIPS) {
			if (s_type === civitas.CITY) {
				navy[item] = civitas.utils.get_random(3, 5);
			} else if (s_type === civitas.METROPOLIS) {
				navy[item] = civitas.utils.get_random(10, 20);
			} else if (s_type === civitas.VILLAGE) {
				navy[item] = civitas.utils.get_random(0, 2);
			} else if (s_type === civitas.CAMP) {
				navy[item] = 0;
			}
		}
		return navy;
	};

	/**
	 * Generate random resources and trades.
	 * 
	 * @public
	 * @param {Boolean} full
	 * @param {Number} settlement
	 * @returns {Object}
	 */
	this.generate_random_resources = function(full, settlement) {
		const resources = {};
		let num_resources;
		let trades = {
			imports: {},
			exports: {}
		};
		let resource;
		if (full === true) {
			if (settlement === civitas.CITY) {
				resources.coins = civitas.utils.get_random(10000, 1000000);
				resources.fame = civitas.utils.get_random(50000, 100000);
				resources.prestige = civitas.utils.get_random(civitas.MIN_PRESTIGE_VALUE, civitas.MAX_PRESTIGE_VALUE);
				resources.espionage = civitas.utils.get_random(civitas.MIN_ESPIONAGE_VALUE, civitas.MAX_ESPIONAGE_VALUE);
				resources.research = civitas.utils.get_random(civitas.MIN_RESEARCH_VALUE, civitas.MAX_RESEARCH_VALUE);
				resources.faith = civitas.utils.get_random(civitas.MIN_FAITH_VALUE, civitas.MAX_FAITH_VALUE);
			} else if (settlement === civitas.METROPOLIS) {
				resources.coins = civitas.utils.get_random(100000, 10000000);
				resources.fame = civitas.utils.get_random(500000, 1000000);
				resources.prestige = civitas.utils.get_random(5000, civitas.MAX_PRESTIGE_VALUE);
				resources.espionage = civitas.utils.get_random(500, civitas.MAX_ESPIONAGE_VALUE);
				resources.research = civitas.utils.get_random(500, civitas.MAX_RESEARCH_VALUE);
				resources.faith = civitas.utils.get_random(500, civitas.MAX_FAITH_VALUE);
			} else if (settlement === civitas.VILLAGE) {
				resources.coins = civitas.utils.get_random(10000, 30000);
				resources.fame = civitas.utils.get_random(1, 50000);
				resources.prestige = civitas.utils.get_random(civitas.MIN_PRESTIGE_VALUE, 100);
				resources.espionage = civitas.utils.get_random(civitas.MIN_ESPIONAGE_VALUE, 2);
				resources.research = civitas.utils.get_random(civitas.MIN_RESEARCH_VALUE, 2);
				resources.faith = civitas.utils.get_random(civitas.MIN_FAITH_VALUE, civitas.MAX_FAITH_VALUE);
			} else if (settlement === civitas.CAMP) {
				resources.coins = civitas.utils.get_random(1000, 10000);
				resources.fame = civitas.MIN_FAME_VALUE;
				resources.prestige = civitas.MIN_PRESTIGE_VALUE;
				resources.espionage = civitas.MIN_ESPIONAGE_VALUE;
				resources.research = civitas.MIN_RESEARCH_VALUE;
				resources.faith = civitas.MIN_FAITH_VALUE;
			}
		}
		if (settlement === civitas.CITY) {
			num_resources = civitas.utils.get_random(5, 30);
		} else if (settlement === civitas.METROPOLIS) {
			num_resources = civitas.utils.get_random(15, 80);
		} else if (settlement === civitas.VILLAGE) {
			num_resources = civitas.utils.get_random(2, 10);
		} else if (settlement === civitas.CAMP) {
			num_resources = civitas.utils.get_random(2, 5);
		}
		for (let i = 0; i < num_resources; i++) {
			resource = this.get_random_resource();
			resources[resource] = civitas.utils.get_random(10, 500);
			if (settlement === civitas.CITY || settlement === civitas.METROPOLIS) {
				if (resources[resource] > 450) {
					trades.exports[resource] = civitas.IMPORTANCE_VITAL;
				} else if (resources[resource] > 300 && resources[resource] <= 450) {
					trades.exports[resource] = civitas.IMPORTANCE_HIGH;
				} else if (resources[resource] > 150 && resources[resource] <= 250) {
					trades.exports[resource] = civitas.IMPORTANCE_MEDIUM;
				}
			}
		}
		if (settlement === civitas.CITY || settlement === civitas.METROPOLIS) {
			for (let i = 0; i < num_resources; i++) {
				resource= this.get_random_resource();
				trades.imports[resource] = civitas.utils.get_random(civitas.IMPORTANCE_LOW, civitas.IMPORTANCE_VITAL);
			}
		}
		return {
			resources: resources,
			trades: trades
		};
	};

	/**
	 * Get a random resource key.
	 *
	 * @public
	 * @returns {String}
	 */
	this.get_random_resource = function() {
		const keys = Object.keys(civitas.RESOURCES);
		const resource = keys[keys.length * Math.random() << 0];
		if (!civitas.utils.is_virtual_resource(resource)) {
			return resource;
		} else {
			return this.get_random_resource();
		}
	};

	/**
	 * Generate random settlement data.
	 * 
	 * @public
	 * @param {Number} s_type
	 * @returns {Object}
	 */
	this.generate_random_settlement_data = function(s_type) {
		let level;
		if (typeof s_type === 'undefined') {
			s_type = civitas.utils.get_random(0, civitas.SETTLEMENTS.length - 1);
		}
		const resources = this.generate_random_resources(true, s_type);
		if (s_type === civitas.CITY) {
			level = civitas.utils.get_random(10, 30);
		} else if (s_type === civitas.METROPOLIS) {
			level = civitas.utils.get_random(30, civitas.MAX_SETTLEMENT_LEVEL);
		} else if (s_type === civitas.VILLAGE) {
			level = civitas.utils.get_random(1, 5);
		} else {
			level = 1;
		}
		const settlement = {
			icon: civitas.utils.get_random(1, civitas.MAX_SETTLEMENT_ICONS),
			type: s_type,
			player: false,
			name: civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
			religion: s_type === civitas.CAMP ? civitas.RELIGION_NONE : this.get_random_religion(),
			nationality: this.get_random_nationality(),
			level: level,
			resources: resources.resources,
			army: this.generate_random_army(s_type),
			navy: this.generate_random_navy(s_type)
		}
		if (s_type === civitas.CITY || s_type === civitas.METROPOLIS) {
			settlement.trades = resources.trades;
		}
		return settlement;
	};

	/**
	 * Generate a random nationality.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_random_nationality = function() {
		return civitas.utils.get_random(1, civitas.NATIONS.length - 1);
	};

	/**
	 * Generate a random religion.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_random_religion = function() {
		return civitas.utils.get_random(1, civitas.RELIGIONS.length - 1);
	};

	/**
	 * Generate a random personality.
	 *
	 * @public
	 * @returns {Number}
	 */
	this.get_random_personality = function() {
		return civitas.utils.get_random(1, civitas.PERSONALITIES.length - 1);
	};

	/**
	 * Create the player settlement.
	 * 
	 * @private
	 * @param {String} name
	 * @param {String} cityname
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @returns {civitas.game}
	 */
	this._create_player_settlement = function (name, cityname, nation, climate, avatar) {
		const difficulty = this.difficulty();
		this.add_settlement({
			name: cityname,
			climate: climate,
			avatar: avatar,
			religion: civitas.RELIGION_NONE,
			nationality: nation,
			army: civitas.INITIAL_SEED[difficulty - 1].military.army,
			navy: civitas.INITIAL_SEED[difficulty - 1].military.navy,
			resources: civitas.INITIAL_SEED[difficulty - 1].resources,
			core: this
		}, 0, {
			name: name,
			avatar: avatar
		}).setup_initial_buildings(civitas.INITIAL_SEED[difficulty - 1].buildings);
		return this;
	};

	/**
	 * Add a settlement into the world.
	 * 
	 * @public
	 * @param {Object} s_data
	 * @param {Number} id
	 * @param {Object} p_data
	 * @returns {civitas.objects.settlement|Boolean}
	 */
	this.add_settlement = function(s_data, id, p_data) {
		if (this.get_num_settlements() <= civitas.MAX_SETTLEMENTS) {
			let climate;
			let new_settlement;
			let ruler;
			let location;
			let player = false;
			if (typeof id === 'undefined') {
				id = this.get_num_settlements();
			}
			if (typeof p_data !== 'undefined') {
				player = true;
			}
			if (typeof s_data.climate !== 'undefined') {
				climate = s_data.climate;
			} else {
				climate = civitas.CLIMATE_TEMPERATE;
			}
			if (player === false) {
				location = this.world().get_random_location(this.world().get_terrain_from_climate());
				ruler = {
					title: (s_data.type === civitas.CAMP) ? 'Warlord' : 'Mayor',
					avatar: civitas.utils.get_random(1, civitas.AVATARS),
					personality: (s_data.type === civitas.CAMP) ? civitas.PERSONALITY_WARLORD : this.get_random_personality(),
					name: civitas.utils.get_random_unique(civitas.NAMES)
				};
			} else {
				location = this.world().get_random_location(this.world().get_terrain_from_climate(climate));
				id = 0;
				ruler = {
					name: p_data.name,
					title: '',
					avatar: p_data.avatar,
					personality: civitas.PERSONALITY_BALANCED
				}
			}
			new_settlement = new civitas.objects.settlement({
				core: this,
				properties: {
					id: id,
					type: typeof s_data.type !== 'undefined' ? s_data.type : civitas.CITY,
					name: typeof s_data.name !== 'undefined' ? s_data.name : civitas.utils.get_random_unique(civitas.SETTLEMENT_NAMES),
					player: player,
					level: typeof s_data.level !== 'undefined' ? s_data.level : 1,
					climate: climate,
					religion: typeof s_data.religion !== 'undefined' ? s_data.religion : civitas.RELIGION_CHRISTIANITY,
					ruler: ruler,
					nationality: s_data.nationality,
					icon: typeof s_data.icon !== 'undefined' ? s_data.icon : 1
				},
				resources: typeof s_data.resources !== 'undefined' ? s_data.resources : {},
				army: typeof s_data.army !== 'undefined' ? s_data.army : {},
				navy: typeof s_data.navy !== 'undefined' ? s_data.navy : {},
				trades: typeof s_data.trades !== 'undefined' ? s_data.trades : {},
				location: location
			});
			if (player === false) {
				this.get_settlement().status(id, {
					influence: (s_data.type === civitas.CAMP) ? civitas.MIN_INFLUENCE_VALUE : Math.floor(civitas.MAX_INFLUENCE_VALUE / 2),
					status: (s_data.type === civitas.CAMP) ? civitas.DIPLOMACY_WAR : civitas.DIPLOMACY_TRUCE
				});
			}
			this.settlements.push(new_settlement);
			return new_settlement;
		} else {
			return false;
		}
	};

	/**
	 * Remove a settlement from the world
	 * 
	 * @public
	 * @param {Number} id
	 * @returns {Boolean}
	 */
	this.disband_city = function(id) {
		// TODO
		if (id <= 0) {
			return false;
		}
		if (typeof this.settlements[id] === 'undefined') {
			return false;
		} else {
			this.world().remove_city(this.settlements[id]);
			this.settlements.splice(id, 1);
			return true;
		}
	};

	/**
	 * Create all the other settlements in the world.
	 * 
	 * @private
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this._setup_neighbours = function (data) {
		let new_settlement;
		let new_place;
		let s_data;
		const difficulty = this.difficulty();
		let num;
		let num_places;
		if (data !== null) {
			for (let i = 1; i < data.settlements.length; i++) {
				s_data = data.settlements[i];
				s_data.core = this;
				new_settlement = new civitas.objects.settlement(s_data);
				this.settlements.push(new_settlement);
			}
			for (let i = 0; i < data.places.length; i++) {
				s_data = data.places[i];
				s_data.core = this;
				new_place = new civitas.objects.place(s_data);
				this._places.push(new_place);
			}
		} else {
			for (let i = 0; i < civitas.SETTLEMENTS.length; i++) {
				num = civitas.INITIAL_SEED[difficulty - 1].settlements[i];
				for (let z = 0; z < num; z++) {
					this.add_random_settlement(i);
				}
			}
			num_places = civitas.INITIAL_SEED[difficulty - 1].places;
			for (let i = 0; i < num_places; i++) {
				this.add_random_place(i);
			}
		}
		return this;
	};

	/**
	 * Add a random settlement into the world.
	 * 
	 * @public
	 * @param {Number} s_type
	 * @returns {civitas.game}
	 */
	this.add_random_settlement = function(s_type) {
		const data = this.generate_random_settlement_data(s_type);
		this.add_settlement(data);
		return this;
	};

	/**
	 * Add a random place into the world.
	 *
	 * @public
	 * @param {Number} id
	 * @returns {civitas.objects.place}
	 */
	this.add_random_place = function(id) {
		let location = this.world().get_random_location();
		let place = new civitas.objects.place({
			core: this,
			properties: {
				id: id,
				sid: null,
				name: null,
				scouted: false
			},
			resources: {
				current: {
					// Todo
				},
				required: this.generate_random_place_resources()
			},
			location: location
		});
		this._places.push(place);
		return place;
	};

	this.generate_random_place_resources = function() {
		let resources = {};
		let plusminus;
		for (let item in civitas.PLACE_RESOURCES_REQ) {
			if (civitas.utils.is_virtual_resource(item)) {
				resources[item] = civitas.PLACE_RESOURCES_REQ[item];
			} else {
				plusminus = (civitas.PLACE_RESOURCES_REQ[item] * 10) / 100;
				resources[item] = civitas.utils.get_random(civitas.PLACE_RESOURCES_REQ[item] - plusminus, civitas.PLACE_RESOURCES_REQ[item] + plusminus);
			}
		}
		return resources;
	};

	/**
	 * Level up the user settlement.
	 *
	 * @public
	 * @return {civitas.game}
	 */
	this.level_up = function() {
		const settlement = this.get_settlement();
		settlement.level_up();
		this.ui().refresh().notify('Your settlement is now level ' + settlement.level() + '.');
	};

	/**
	 * Return a pointer to the game UI object.
	 *
	 * @public
	 * @returns {civitas.objects.ui}
	 */
	this.ui = function() {
		return this._ui;
	};

	/**
	 * Get a list of advice from the city council.
	 * 
	 * @public
	 * @returns {Array}
	 */
	this.advice = function() {
		const advices = [];
		const settlement = this.get_settlement();
		if (settlement.is_player()) {
			const resources = settlement.get_resources();
			const storage = settlement.storage();
			const army = settlement.num_soldiers();
			const navy = settlement.num_ships();
			const queue = this.queue();
			const buildings = settlement.get_buildings();
			const problem_buildings = [];
			if (army === 0) {
				advices.push('You have no army, this is an open invitation for attack.');
			}
			if (army < 10 && army > 0) {
				advices.push('You have a small army, try to recruit some more soldiers.');
			}
			if (navy === 0) {
				advices.push('You have no navy, this is an open invitation for attack.');
			}
			if (navy < 3 && navy > 0) {
				advices.push('You have a small navy, try to construct some more ships.');
			}
			if (storage.occupied >= storage.all) {
				advices.push('You have no storage space to store your new goods and they will be lost. Sell some goods or build a warehouse.');
			} else if ((storage.all - storage.occupied) < 100) {
				advices.push('You will soon run out of storage space and all goods produced will be lost. Sell some goods or build a warehouse.');
			}
			if (resources.coins < 1000) {
				advices.push('You seem to be losing coins fast, sell some goods or upgrade your houses to get better taxes.');
			}
			if (resources.wood < 100 || resources.stones < 100 || resources.woodplanks < 50) {
				advices.push('You are lacking construction materials, buy some stones, wood planks and/or wood off the World Trade Market.');
			}
			if (resources.prestige < 100) {
				advices.push('Your settlement`s prestige is too low, start doing trades with the other settlements to improve it.');
			}
			if (resources.faith < 100) {
				advices.push('Your settlement`s faith is too low, build a Church or upgrade it to be able to gather faith and choose/switch religions.');
			}
			if (resources.faith === civitas.MAX_FAITH_VALUE) {
				advices.push('You are at maximum faith, start using it from your settlement`s Church.');
			}
			if (resources.research < 100) {
				advices.push('Your settlement`s research is too low, build an Academy or upgrade it to be able to gather research and use it.');
			}
			if (resources.research === civitas.MAX_RESEARCH_VALUE) {
				advices.push('You are at maximum research, start using it for settlement researches, from your Academy.');
			}
			if (resources.espionage < 100) {
				advices.push('Your settlement`s espionage is too low, build an Embassy or upgrade it to be able to gather espionage.');
			}
			if (resources.espionage === civitas.MAX_ESPIONAGE_VALUE) {
				advices.push('You are at maximum espionage, start using it for espionage missiong from your Embassy.');
			}
			if (resources.coins > 100000) {
				advices.push('You have lots of coins, why not invest some in goods?');
			}
			for (let item in resources) {
				if (!civitas.utils.is_virtual_resource(item)) {
					if (resources[item] > 1000) {
						advices.push('You seem to have a surplus of ' + civitas.utils.get_resource_name(item) + '. You can sell some or place it on the Black Market and get coins instead.');
					}
				}
			}
			for (let i = 0; i < queue.length; i++) {
				if (queue[i].mode === civitas.ACTION_CAMPAIGN) {
					if (queue[i].destination.id === settlement.id()) {
						advices.push('There is an army from ' + this.get_settlement(queue[i].source.id).name() + ' marching towards your city!');
					}
					if (queue[i].source.id === settlement.id()) {
						advices.push('Your have an army marching towards ' + this.get_settlement(queue[i].destination.id).name() + '!');
					}
				}
			}
			for (let i = 0; i < buildings.length; i++) {
				if (typeof buildings[i] !== 'undefined') {
					if (buildings[i].has_problems()) {
						problem_buildings.push(buildings[i].get_name());
					}
				}
			}
			if (problem_buildings.length > 0) {
				advices.push((problem_buildings.length === 1 ? 'One' : 'Several') + ' of your buildings (' + problem_buildings.join(', ') + ') ' + (problem_buildings.length === 1 ? 'is' : 'are') + ' not working due to a shortage of materials. Buy more goods.');
			}
		}
		return advices;
	};
	
	/**
	 * Set game settings.
	 * 
	 * @param {String} key
	 * @param {String|Number} value
	 * @public
	 * @returns {civitas.game}
	 */
	this.set_settings = function (key, value) {
		if (typeof value === 'undefined') {
			this.settings = key;
		} else {
			this.settings[key] = value;
		}
		return this;
	};

	/**
	 * Retrieve game settings.
	 * 
	 * @param {String} key
	 * @public
	 * @returns {Object}
	 */
	this.get_settings = function (key) {
		if (typeof key === 'undefined') {
			return this.settings;
		} else {
			return this.settings[key];
		}
	};

	/**
	 * Internal method for starting up a game.
	 *
	 * @private
	 * @param {Object} data
	 * @returns {civitas.game}
	 */
	this._setup_game = function(data) {
		let self = this;
		const ui = this.ui();
		let seconds = 1;
		this._setup_neighbours(data);
		$('header .cityname').html(this.get_settlement().name());
		$('header .cityavatar').css({
			'background-image': 'url(' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + this.get_settlement().ruler().avatar + '.png)'
		});
		ui.refresh();
		setInterval(function () {
			if (!self.is_paused() && seconds === civitas.SECONDS_TO_DAY) {
				self._do_daily();
				seconds = 1;
			} else if (!self.is_paused()) {
				seconds++;
			}
		}, 1000);
		$(document).keyup(function(event) {
			if (event.keyCode == 27 && !ui.window_exists('#window-options')) {
				ui.show_loader();
				ui.open_window(civitas.WINDOW_OPTIONS);
			}
		});
		ui.hide_loader();
		this.save_and_refresh();
		this.ui().citymap_scrollto_building(this.get_settlement().get_building('marketplace'));
		return this;
	};

	/**
	 * Start a new game.
	 *
	 * @public
	 * @param {String} name
	 * @param {String} s_name
	 * @param {Number} nation
	 * @param {Number} climate
	 * @param {Number} avatar
	 * @param {Number} difficulty
	 * @param {String} password
	 * @returns {Boolean}
	 */
	this.new_game = function(name, s_name, nation, climate, avatar, difficulty, password) {
		let data = null;
		this.ui().show_loader();
		if (civitas.ENCRYPTION === true) {
			this.encryption.key = password;
		}
		this.properties.difficulty = parseInt(difficulty);
		this._world = new civitas.objects.world({
			core: this
		});
		this._create_player_settlement(name, s_name, nation, climate, avatar);
		this._setup_game(null);
		return true;
	};

	/**
	 * Load a game by decrypting it with the specified password.
	 *
	 * @public
	 * @param {String} password
	 * @returns {Boolean}
	 */
	this.load_game_data = function(password) {
		const ui = this.ui();
		let data = null;
		let game_data;
		let hash;
		if (civitas.ENCRYPTION === true) {
			this.encryption.key = password;
		}
		game_data = this.get_storage_data();
		hash = CryptoJS.SHA512(JSON.stringify(game_data.data));
		if (typeof game_data.hash === 'undefined') {
			ui.open_window(civitas.WINDOW_ERROR, {
				error: 'Missing game signature.',
				code: '0x01'
			});
			return false;
		}
		if (hash.toString(CryptoJS.enc.Hex) !== game_data.hash) {
			ui.open_window(civitas.WINDOW_ERROR, {
				error: 'Invalid game signature.',
				code: '0x02'
			});
			return false;
		}
		if (game_data) {
			ui.show_loader();
			this._world = new civitas.objects.world({
				core: this,
				elevation: game_data.data.seeds.elevation,
				moisture: game_data.data.seeds.moisture
			});
			let temp_game_data = this.import(game_data.data);
			if (temp_game_data !== false) {
				data = this._load_player_settlement(temp_game_data);
				if (data !== false) {
					this._setup_game(data);
					return true;
				} else {
					ui.open_window(civitas.WINDOW_ERROR, {
					error: 'Unable to process game data.',
					code: '0x05'
				});
				return false;
				}
			} else {
				ui.open_window(civitas.WINDOW_ERROR, {
					error: 'Invalid game data.',
					code: '0x03'
				});
				return false;
			}
		} else {
			return false;
		}
	};

	/**
	 * Pause the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.pause = function() {
		if (this.is_paused() === false) {
			this.properties.paused = true;
			this.ui().log('game', 'Game is paused.');
		}
		return this;
	};

	/**
	 * Resume the game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.unpause = function() {
		if (this.is_paused() === true) {
			this.properties.paused = false;
			this.ui().log('game', 'Game is resumed.');
		}
		return this;
	};

	/**
	 * Check if the game is paused.
	 *
	 * @public
	 * @returns {Boolean}
	 */
	this.is_paused = function() {
		return this.properties.paused;
	};

	/**
	 * Setup the audio part of the game.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._setup_audio = function () {
		this.music = $('#music').get(0);
		this.music.volume = 0.2;
		if (civitas.AUTOSTART_MUSIC === true) {
			this.music.play();
		}
		return this;
	};

	/**
	 * Get building data from the main configuration array.
	 * 
	 * @public
	 * @param {String|Number} handle
	 * @returns {Object|Boolean}
	 */
	this.get_building_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.BUILDINGS[civitas.BUILDINGS.findIndexByHandle(handle)];
		} else if (typeof handle === 'number') {
			return civitas.BUILDINGS[handle];
		}
		return false;
	};

	/**
	 * Check if any events occured on this day.
	 *
	 * @private
	 * @returns {civitas.game}
	 */
	this._check_for_events = function() {
		const random = Math.random().toFixed(5);
		let event;
		let _event;
		for (let i = 0; i < civitas.EVENTS.length; i++) {
			_event = civitas.EVENTS[i];
			if (random <= _event.chance) {
				event = _event;
				event.core = this;
				new civitas.objects.event(event);
				return this;
			}
		}
		return this;
	};

	/**
	 * Refresh the UI and save game.
	 *
	 * @public
	 * @returns {civitas.game}
	 */
	this.save_and_refresh = function() {
		this.achievements_process();
		this.save();
		this.ui().refresh();
		return this;
	};

	this.places = function() {
		return this._places;
	};

	/**
	 * Refresh the world trades.
	 * 
	 * @public
	 * @returns {civitas.game}
	 */
	this.refresh_trades = function() {
		const settlements = this.get_settlements();
		for (let i = 0; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_urban() && !settlements[i].is_player()) {
					settlements[i].reset_trades();
				}
			}
		}
		this.ui().notify('World Market trades have been refreshed, settlements are looking to make new purchases and sales.', 'World Market');
		return this;
	};

	/**
	 * Refresh the influence of each of the cities in the world.
	 * 
	 * @private
	 * @returns {civitas.game}
	 */
	this._refresh_influence = function() {
		const settlements = this.get_settlements();
		for (let i = 1; i < settlements.length; i++) {
			if (typeof settlements[i] !== 'undefined') {
				if (settlements[i].is_urban()) {
					if (this.get_settlement().religion().id === settlements[i].religion().id) {
						this.get_settlement().raise_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else if ((this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_VASSAL) || (this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_ALLIANCE)) {
						this.get_settlement().raise_influence(settlements[i].id());
					} else {
						this.get_settlement().lower_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_LOSS);
					}
				} else {
					if (this.get_settlement().religion().id === settlements[i].religion().id) {
						this.get_settlement().raise_influence(settlements[i].id(), civitas.YEARLY_INFLUENCE_GAIN);
					} else if ((this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_VASSAL) || (this.get_settlement().get_diplomacy_status(settlements[i].id()) === civitas.DIPLOMACY_ALLIANCE)) {
						this.get_settlement().raise_influence(settlements[i].id());
					}
				}
			}
		}
		return this;
	};

	/**
	 * Return the amount of taxes produced by a building if the required technology is
	 * researched.
	 *
	 * @public
	 * @param {Object} building
	 * @returns {Number}
	 */
	this.get_tax_modifier = function(building) {
		let amount = 0;
		for (let i = 0; i < this._research.length; i++) {
			if (typeof this._research[i] !== 'undefined') {
				let technology = this.get_research_config_data(this._research[i].handle);
				if (typeof technology.effect !== 'undefined') {
					for (let y in technology.effect) {
						if (typeof technology.effect[y] !== 'undefined') {
							if (y === 'tax') {
								amount = amount + technology.effect[y];
							}
						}
					}
				}
			}
		}
		return amount;
	};

	/**
	 * Return the amount of resources produced by a building if the required technology is
	 * researched.
	 *
	 * @public
	 * @param {Object} building
	 * @returns {Number}
	 */
	this.get_prod_modifier = function(building) {
		let amount = 0;
		for (let i = 0; i < this._research.length; i++) {
			if (typeof this._research[i] !== 'undefined') {
				let technology = this.get_research_config_data(this._research[i].handle);
				if (typeof technology.effect !== 'undefined') {
					for (let y in technology.effect) {
						if (typeof technology.effect[y] !== 'undefined') {
							if (y === 'buildings') {
								for (let item in technology.effect[y]) {
									if (building.handle === item) {
										amount = amount + technology.effect[y][item];
									}
								}
							}
						}
					}
				}
			}
		}
		return amount;
	};

	/**
	 * Get the version of the game.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.version = function() {
		return civitas.VERSION;
	};
	
	/**
	 * Get/set the difficulty level of the game.
	 * 
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.difficulty = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.difficulty = value;
		}
		return this.properties.difficulty;
	};

	/**
	 * Get/set the game mode.
	 *
	 * @public
	 * @param {Number} value
	 * @returns {Number}
	 */
	this.mode = function(value) {
		if (typeof value !== 'undefined') {
			this.properties.mode = value;
		}
		return this.properties.mode;
	};

	/**
	 * Get hero data from the main configuration array.
	 * 
	 * @public
	 * @param {String} handle
	 * @returns {Object|Boolean}
	 */
	this.get_hero_config_data = function (handle) {
		if (typeof handle === 'string') {
			return civitas.HEROES[civitas.HEROES.findIndexByHandle(handle)];
		}
		return false;
	};

	/**
	 * Get the world object.
	 *
	 * @public
	 * @returns {civitas.objects.world}
	 */
	this.world = function() {
		return this._world;
	};

	/**
	 * Method to calculate exponential fame required for the specified level.
	 *
	 * @public
	 * @param {Number} level
	 * @returns {Number}
	 */
	this.level_to_fame = function (level) {
		const base_fame = 100;
		let exp = 0.2;
		if (level <= 5) {
			exp = 1.2;
		} else if (level > 5 && level <= 10) {
			exp = 0.6;
		} else if (level > 10 && level <= 15) {
			exp = 0.5;
		} else if (level > 15 && level <= 20) {
			exp = 0.3;
		} else if (level > 20 && level <= 25) {
			exp = 0.3;
		} else if (level > 25 && level <= 30) {
			exp = 0.2;
		} else if (level > 30 && level <= 35) {
			exp = 0.24;
		} else if (level > 35 && level <= 40) {
			exp = 0.4;
		} else if (level > 40 && level <= 45) {
			exp = 0.5;
		} else if (level > 45 && level <= 50) {
			exp = 0.6;
		}
		if (level === 1) {
			return base_fame;
		} else {
			let prev = this.level_to_fame(level - 1);
			return Math.floor(prev + prev * exp);
		}
	};

	/**
	 * Get a list of all buildings available for a settlement if the settlement level and
	 * climate are appropriate.
	 *
	 * @public
	 * @param {civitas.objects.settlement} settlement
	 * @returns {Array}
	 */
	this.get_buildings_for_settlement = function(settlement) {
		let buildings = [];
		let building;
		for (let i = 0; i < civitas.BUILDINGS.length; i++) {
			building = civitas.BUILDINGS[i];
			if ((typeof building.requires.settlement_level !== 'undefined') && (settlement.level() < building.requires.settlement_level)) {
				break;
			}
			if ((typeof building.requires.climate !== 'undefined') && ($.inArray(settlement.climate().id, building.requires.climate) === -1)) {
				break;
			}
			buildings.push(building.handle);
		}
		return buildings;
	};

	// Fire up the constructor
	return this.__init();
};

/**
 * Utils object.
 * @license GPLv3
 * @mixin
 */
civitas.utils = {

	is_virtual_resource: function(resource) {
		if (typeof civitas.RESOURCES[resource] !== undefined) {
			if (civitas.RESOURCES[resource].category === 'virtual') {
 				return true;
			}
		}
		return false;
	},

	/**
	 * Get the total damage points of a hero, modified by the items
	 * he's using.
	 *
	 * @param {Object} hero
	 * @returns {Object}
	 */
	get_damage_points: function(hero) {
		let damage_val = (hero.stats.strength * 2) + hero.stats.agility;
		let damage_min = 0;
		let damage_max = 0;
		for (let i = 0; i < hero.items.length; i++) {
			if (hero.items[i]) {
				if (hero.items[i].stats.strength) {
					damage_val += hero.items[i].stats.strength * 2;
				}
				if (hero.items[i].stats.agility) {
					damage_val += hero.items[i].stats.agility;
				}
			}
		}
		for (let i = 0; i < hero.items.length; i++) {
			if (hero.items[i].type === civitas.ITEM_TYPE_WEAPON) {
				damage_min += hero.items[i].stats.damageMin + damage_val;
				damage_max += hero.items[i].stats.damageMax + damage_val;
			}
		}
		return {
			value: damage_val,
			min: damage_min !== 0 ? damage_min : 1,
			max: damage_max !== 0 ? damage_max : damage_val
		}
	},

	/**
	 * Get the total mana points of a hero, modified by the items
	 * he's using.
	 *
	 * @param {Object} hero
	 * @returns {Number}
	 */
	get_mana_points: function(hero) {
		let mana = hero.stats.intellect * 50 + hero.stats.spirit * 10;
		for (let i = 0; i < hero.items.length; i++) {
			if (hero.items[i]) {
				if (hero.items[i].stats.intellect) {
					mana += hero.items[i].stats.intellect * 50;
				}
				if (hero.items[i].stats.spirit) {
					mana += hero.items[i].stats.spirit * 10;
				}
			}
		}
		return mana;
	},

	/**
	 * Get the total health points of a hero, modified by the items
	 * he's using.
	 *
	 * @param {Object} hero
	 * @returns {Number}
	 */
	get_health_points: function(hero) {
		let health = hero.stats.stamina * 30 + hero.stats.strength * 5;
		for (let i = 0; i < hero.items.length; i++) {
			if (hero.items[i]) {
				if (hero.items[i].stats.stamina) {
					health += hero.items[i].stats.stamina * 30;
				}
				if (hero.items[i].stats.strength) {
					health += hero.items[i].stats.strength * 5;
				}
			}
		}
		return health;
	},

	/**
	 * Check if resource exists.
	 *
	 * @param {String} resource
	 * @returns {Boolean}
	 */
	resource_exists: function(resource) {
		for (let item in civitas.RESOURCES) {
			if (item === resource) {
				return true;
			}
		}
		return false;
	},

	/**
	 * Format a timestamp to a more human form (x ago).
	 *
	 * @param {Number} time
	 * @returns {Number}
	 */
	time_since: function(time) {
		let time_formats = [
			[
				2, 
				"One second", 
				"1 second from now"
			], [
				60, 
				"seconds", 
				1
			], [
				120, 
				"One minute", 
				"1 minute from now"
			], [
				3600, 
				"minutes", 
				60
			], [
				7200, 
				"One hour", 
				"1 hour from now"
			], [
				86400, 
				"hours", 
				3600
			], [
				172800, 
				"One day", 
				"tomorrow"
			], [
				604800, 
				"days", 
				86400
			], [
				1209600, 
				"One week", 
				"next week"
			], [
				2419200, 
				"weeks", 
				604800
			], [
				4838400, 
				"One month", 
				"next month"
			], [
				29030400, 
				"months", 
				2419200
			], [
				58060800, 
				"One year", 
				"next year"
			], [
				2903040000, 
				"years", 
				29030400
			], [
				5806080000, 
				"One century", 
				"next century"
			], [
				58060800000, 
				"centuries", 
				2903040000
			]
		];
		let seconds = (new Date - time) / 1000;
		let list_choice = 1;
		if (seconds < 0) {
			seconds = Math.abs(seconds);
			list_choice = 1;
		}
		let i = 0, format;
		while (format = time_formats[i++]) {
			if (seconds < format[0]) {
				if (typeof format[2] === "string") {
					return format[list_choice];
				} else {
					return Math.floor(seconds / format[2]) + " " + format[1];
				}
			}
		}
		return time;
	},

	/**
	 * Round the number to nearest 10.
	 *
	 * @param {Number} value
	 * @returns {Number}
	 */
	get_up_number: function(value) {
		return Math.floor(value / 10) * 10;
	},

	/**
	 * Return a random number between min and max.
	 *
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
	 */
	get_random: function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	/**
	 * Return a random number based on importance.
	 *
	 * @param {Number} importance
	 * @returns {Number}
	 */
	get_random_by_importance: function(importance) {
		return civitas.utils.get_up_number(
			civitas.utils.get_random(
				Math.floor(Math.random() * importance) * 10 + 10,
				Math.floor(Math.random() * importance) * 10 + 20
			)
		);
	},

	/**
	 * Return the resource name by handle.
	 *
	 * @param {String} handle
	 * @returns {String}
	 */
	get_resource_name: function(handle) {
		return civitas.RESOURCES[handle].name;
	},

	/**
	 * Calculate the resource price for the specified amount minus the discount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @param {Number} discount
	 * @returns {Number}
	 */
	calc_price_minus_discount: function (amount, resource, discount) {
		return Math.ceil(Math.ceil(civitas.RESOURCES[resource].price - discount) * amount);
	},

	/**
	 * Calculate the resource price for the specified amount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @returns {Number}
	 */
	calc_price: function (amount, resource) {
		return Math.ceil(amount * (civitas.RESOURCES[resource].price));
	},

	/**
	 * Calculate the resource price for the specified amount plus the discount.
	 * 
	 * @param {Number} amount
	 * @param {String} resource
	 * @param {Number} discount
	 * @returns {Number}
	 */
	calc_price_plus_discount: function (amount, resource, discount) {
		return Math.ceil(Math.ceil(civitas.RESOURCES[resource].price + discount) * amount);
	},

	/**
	 * Format the current time.
	 * 
	 * @returns {String}
	 */
	get_now: function () {
		let today = new Date();
		let hh = today.getHours();
		let mm = today.getMinutes();
		let ss = today.getSeconds();
		return hh + ':' + mm + ':' + ss;
	},

	/**
	 * Format a number so that it's more user-friendly.
	 *
	 * @returns {String}
	 */
	nice_numbers: function(num) {
		if (num >= 1000000000) {
			return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
		}
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		}
		return num;
	},

	/**
	 * Return a random unique array element.
	 *
	 * @param {Array} from
	 * @returns {String|Number}
	 */
	get_random_unique: function(from) {
		let id = civitas.utils.get_random(0, from.length - 1);
		let element = from[id];
		from.splice(id, 1);
		return element;
	},

	sanitize_string: function(string) {
		return string.replace(/[^a-z0-9+]-/gi, '-');
	}
};

/**
 * Place panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_PLACE = {
	
	/**
	 * Template of the panel.
	 *
	 * @type {String}
	 */
	template: '<div id="panel-{ID}" class="panel">' +
				'<header>' +
					'<a class="tips close" title="Close"></a>' +
				'</header>' +
				'<section></section>' +
				'<footer>' +
				'</footer>' +
			'</div>',

	/**
	 * Extra parameters passed to the panel.
	 *
	 * @type {Object}
	 */
	params_data: null,

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'place',

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let location = my_settlement.location();
		let place = params.data;
		this.params_data = params;
		$(this.handle + ' header').append('Place');
		let tabs = ['Info'];
		if (place.is_scouted()) {
			tabs.push('Resources', 'Construction');
		}
		$(this.handle + ' section').append(core.ui().tabs(tabs));
		let claimed_by = place.is_claimed();
		let claimed_by_settlement = core.get_settlement(claimed_by);
		let place_location = place.location();
		$(this.handle + ' #tab-info').empty().append(
			'<img class="avatar right" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar999.png" />' +
			'<dl>' +
				(place.is_scouted() || (claimed_by !== false && claimed_by_settlement.id() === my_settlement.id()) ?
				'<dt>Name</dt>' +
				'<dd>' + place.name() + '</dd>' +
				'<dt>Claimed by</dt>' +
				'<dd>' + (claimed_by !== false ? '<span data-id="' + claimed_by_settlement.id() + '" title="View info about this settlement" class="tips view">' + claimed_by_settlement.name() + '</span>' : 'nobody') + '</dd>'
				: '') +
				'<dt>Scouted</dt>' +
				'<dd>' + (place.is_scouted() ? 'yes': 'no') + '</dd>' +
				'<dt>Time to build</dt>' +
				'<dd>' + civitas.PLACE_TIME_TO_BUILD + ' days</dd>' +
				'<dt>Distance</dt>' +
				'<dd>' + core.world().get_distance(location, place.location()) + ' miles (' + core.world().get_distance_in_days(location, place.location()) + ' days)</dd>' +
			'</dl>'
		);
		if (place.is_scouted()) {
			$(this.handle + ' #tab-resources').empty().append(
				'<p>Stage 2: Gather the resources below and use caravans to send them to this place.</p>' +
				'<p><strong>Note!</strong> If the place is not claimed by anybody, do not send resources or they will be lost.</p>' +
				'<div class="required">' +
					'<p>This place has no required resources.</p>' +
				'</div>'
			);
			$(this.handle + ' #tab-construction').empty().append(
				'<p>Stage 3: Once the required resources have been stored you can start building the world wonder on this place. It will take a dozen of years to build it (around 20) and other settlements might attack so make sure you have an army to guard it.</p>'
			);
			if (claimed_by !== false && claimed_by === my_settlement.id()) {
				$(this.handle + ' footer').empty().append(
					'<a class="tips unclaim" title="Remove your settlement`s claim of this place." href="#"></a>' +
					'<a class="tips caravan" title="Send a caravan to this place." href="#"></a>'
				);
			} else if (claimed_by === false) {
				$(this.handle + ' footer').empty().append('<a class="tips claim" title="Claim this place for your settlement." href="#"></a>');
			}
		} else {
			$(this.handle + ' footer').empty().append('<a class="tips scout" title="Send a scout to this place." href="#"></a>');
		}
		$(this.handle).on('click', '.claim', function () {
			if (!my_settlement.can_diplomacy() || !my_settlement.can_research()) {
				core.ui().error('You will need to construct an Embassy and Academy before being able to claim world places.');
				return false;
			}
			if (place.is_claimed() !== false) {
				core.ui().error('This place has been claimed by another settlement.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						if (!place.claim(my_settlement)) {
							core.ui().error('There was an error claiming this world place, check the data you entered and try again.');
							return false;
						} else {
							core.ui().notify('A place in the world has been claimed by your settlement.');
							core.save_and_refresh();
							self.destroy();
						}
					}
				},
				'Are you sure you want to claim this world place?'
			);
			return false;
		}).on('click', '.unclaim', function () {
			if (!my_settlement.can_diplomacy() || !my_settlement.can_research()) {
				core.ui().error('You will need to construct an Embassy and Academy before being able to unclaim world places.');
				return false;
			}
			if (place.is_claimed() === false) {
				core.ui().error('This place is not claimed by your settlement.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						if (!place.unclaim(my_settlement)) {
							core.ui().error('There was an error unclaiming this world place, check the data you entered and try again.');
							return false;
						} else {
							core.ui().notify('A place in the world has been unclaimed by your settlement.');
							core.save_and_refresh();
							self.destroy();
						}
					}
				},
				'Are you sure you want to unclaim this world place?'
			);
			return false;
		}).on('click', '.caravan', function () {
			if (!my_settlement.can_trade()) {
				core.ui().error('You will need to construct a Trading Post before being able to send caravans to other places.');
				return false;
			}
			core.ui().open_panel(civitas.PANEL_NEW_CARAVAN, place);
			return false;
		}).on('click', '.view', function () {
			let _settlement_id = parseInt($(this).data('id'));
			let _settlement = core.get_settlement(_settlement_id);
			if (_settlement) {
				if (_settlement.id() === my_settlement.id()) {
					core.ui().open_panel(civitas.PANEL_COUNCIL);
				} else {
					core.ui().open_panel(civitas.PANEL_SETTLEMENT, _settlement);
				}
			}
			return false;
		}).on('click', '.scout', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to send scouts to other places.');
				return false;
			}
			core.ui().open_panel(civitas.PANEL_NEW_SCOUT, place);
			return false;
		});
	},

	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let self = this;
		let core = this.core();
		let place = this.params_data.data;
		if (place.is_scouted()) {
			let out = '';
			for (let item in place.resources().required) {
				if (!civitas.utils.is_virtual_resource(item)) {
					if (place._resources.required[item] > 0) {
						out += core.ui().resource_storage_small_el(item, place._resources.required[item]);
					}
				}
			}
			if (out !== '') {
				$(this.handle + ' #tab-resources .required').empty().append(out);
			}
		}
	}
};

/**
 * Settlement panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_SETTLEMENT = {
	
	/**
	 * Template of the panel.
	 *
	 * @type {String}
	 */
	template: '<div id="panel-{ID}" class="panel">' +
				'<header>' +
					'<a class="tips close" title="Close"></a>' +
				'</header>' +
				'<section></section>' +
				'<footer>' +
					'<a class="tips attack" title="Attack this settlement." href="#"></a>' +
					'<a class="tips caravan" title="Send a caravan to this settlement." href="#"></a>' +
					'<a class="tips spy" title="Send a spy to this settlement." href="#"></a>' +
					'<a class="tips alliance" title="Propose an alliance to this settlement." href="#"></a>' +
					'<a class="tips pact" title="Propose a pact to this settlement." href="#"></a>' +
					'<a class="tips ceasefire" title="Propose a cease fire to this settlement." href="#"></a>' +
					'<a class="tips join" title="Ask this settlement to join your city." href="#"></a>' +
					'<a class="tips war" title="Declare war to this settlement." href="#"></a>' +
				'</footer>' +
			'</div>',

	/**
	 * Extra parameters passed to the panel.
	 *
	 * @type {Object}
	 */
	params_data: null,

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'settlement',

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let settlement = params.data;
		this.params_data = params;
		let trades = settlement.get_trades();
		$(this.handle + ' header').append(settlement.name());
		let tabs = [];
		if (settlement.is_urban()) {
			tabs.push('Info');
			if (my_settlement.can_diplomacy()) {
				tabs.push('Army');
				if (settlement.waterside() === true) {
					tabs.push('Navy');
				}
			}
			tabs.push('Resources', 'Imports', 'Exports');
		} else {
			tabs.push('Info');
			if (my_settlement.can_diplomacy() || settlement.is_camp()) {
				tabs.push('Army');
				if (settlement.waterside() === true) {
					tabs.push('Navy');
				}
			}
			tabs.push('Resources');
		}
		$(this.handle + ' section').append(core.ui().tabs(tabs));
		$(this.handle).on('click', '.alliance', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to propose an alliance to other settlements.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.queue_add(my_settlement, settlement, civitas.ACTION_DIPLOMACY,
							civitas.DIPLOMACY_PROPOSE_ALLIANCE, {})) {
							core.ui().error('There was an error proposing an alliance to this settlement, check the data you entered and try again.');
							return false;
						}
						core.do_achievement('pacifist');
					}
				},
				'Are you sure you want to propose an alliance to this settlement?'
			);
			return false;
		}).on('click', '.join', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to ask other settlements to join your city.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.queue_add(my_settlement, settlement, civitas.ACTION_DIPLOMACY,
							civitas.DIPLOMACY_PROPOSE_JOIN, {})) {
							core.ui().error('There was an error proposing this settlement to join your city, check the data you entered and try again.');
							return false;
						}
						core.do_achievement('rulethemall');
					}
				},
				'Are you sure you want to propose this this settlement to join you?'
			);
			return false;
		}).on('click', '.pact', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to propose a pact to other settlements.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.queue_add(my_settlement, settlement, civitas.ACTION_DIPLOMACY,
							civitas.DIPLOMACY_PROPOSE_PACT, {})) {
							core.ui().error('There was an error proposing a pact to this settlement, check the data you entered and try again.');
							return false;
						}
						core.do_achievement('friendly');
					}
				},
				'Are you sure you want to propose a pact to this settlement?'
			);
			return false;
		}).on('click', '.ceasefire', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to propose a cease fire to other settlements.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						if (!core.queue_add(my_settlement, settlement, civitas.ACTION_DIPLOMACY,
							civitas.DIPLOMACY_PROPOSE_CEASE_FIRE, {})) {
							core.ui().error('There was an error proposing a cease fire to this settlement, check the data you entered and try again.');
							return false;
						}
					}
				},
				'Are you sure you want to propose a cease fire to this settlement?'
			);
			return false;
		}).on('click', '.war', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to declare war to other settlements.');
				return false;
			}
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						my_settlement.diplomacy(settlement.id(), civitas.DIPLOMACY_WAR);
					}
				},
				'Are you sure you want to declare war to this settlement?<br /><br />You will lose all influence over ' + settlement.name() + ' and the settlement might retaliate back!'
			);
			return false;
		}).on('click', '.caravan', function () {
			if (!my_settlement.can_trade()) {
				core.ui().error('You will need to construct a Trading Post before being able to trade resources with other settlements.');
				return false;
			}
			core.ui().open_panel(civitas.PANEL_NEW_CARAVAN, settlement);
			return false;
		}).on('click', '.spy', function () {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to send spies to other settlements.');
				return false;
			}
			core.ui().open_panel(civitas.PANEL_NEW_SPY, settlement);
			return false;
		}).on('click', '.attack', function () {
			if (!my_settlement.can_recruit_soldiers()) {
				core.ui().error('You will need to construct a Military Camp before being able to attack other settlements.');
				return false;
			}
			core.ui().open_panel(civitas.PANEL_NEW_ARMY, settlement);
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let settlement = this.params_data.data;
		let trades = settlement.get_trades();
		let _status = my_settlement.get_diplomacy_status(settlement.id());
		let sett_type_text = '';
		let location = my_settlement.location();
		if (settlement.is_city()) {
			sett_type_text = 'City';
		} else if (settlement.is_metropolis()) {
			sett_type_text = 'Metropolis';
		} else if (settlement.is_village()) {
			sett_type_text = 'Village';
		} else if (settlement.is_camp()) {
			sett_type_text = 'Raider Camp';
		}
		$(this.handle + ' #tab-info').empty().append('' +
			'<img class="avatar right" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + settlement.ruler().avatar + '.png" />' +
			'<dl>' +
				'<dt>' + settlement.ruler().title + '</dt><dd>' + settlement.ruler().name + '</dd>' +
				'<dt>Settlement Type</dt>' +
				'<dd>' + sett_type_text + '</dd>' +
				'<dt>Climate</dt>' +
				'<dd>' + settlement.climate().name + '</dd>' +
				(my_settlement.can_diplomacy() ?
				'<dt>Personality</dt>' +
				'<dd>' + settlement.personality().name + '</dd>'
				: '') +
				'<dt>Nationality</dt>' +
				'<dd>' + settlement.nationality().name + '</dd>' +
				(my_settlement.can_diplomacy() && (settlement.is_urban()) ? 
				'<dt>Level</dt>' +
				'<dd>' + settlement.level() + '</dd>' +
				'<dt>Prestige</dt>' +
				'<dd>' + core.ui().progress((settlement.prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.prestige()) + '</dd>'
				: '') + 
				'<dt>Population</dt>' +
				'<dd>' + civitas.utils.nice_numbers(settlement.population()) + '</dd>' +
				(my_settlement.can_diplomacy() ?
				'<dt>Coins</dt>' +
				'<dd>' + civitas.utils.nice_numbers(settlement.coins()) + '</dd>' +
				'<dt>Religion</dt>' +
				'<dd>' + settlement.religion().name + '</dd>' +
				'<dt>Influence</dt>' +
				'<dd>' + core.ui().progress(my_settlement.get_influence_with_settlement(settlement.id()), 'small') + '</dd>' +
				'<dt>Diplomatic Status</dt>' +
				'<dd>' + my_settlement.get_diplomacy_status(settlement.id()).name + '</dd>'
				: '') + 
				'<dt>Distance</dt>' +
				'<dd>' + core.world().get_distance(location, settlement.location()) + ' miles (' + core.world().get_distance_in_days(location, settlement.location()) + ' days)</dd>' +
			'</dl>');
		if (my_settlement.can_diplomacy() || settlement.is_camp()) {
			$(this.handle + ' #tab-army').empty().append(core.ui().army_list(settlement.get_army()));
			if (settlement.waterside() === true) {
				$(this.handle + ' #tab-navy').empty().append(core.ui().navy_list(settlement.get_navy()));
			}
		}
		if (settlement.is_urban()) {
			$(this.handle + ' #tab-imports').empty().append('<p>Below are the goods this city will be buying this year.</p>' + core.ui().trades_list(trades, 'imports'));
			$(this.handle + ' #tab-exports').empty().append('<p>Below are the goods this city will be selling this year.</p>' + core.ui().trades_list(trades, 'exports'));
		}
		let out = '';
		let _out = '<p>This settlement has the the following resources:</p>';
		for (let item in settlement.get_resources()) {
			if (!civitas.utils.is_virtual_resource(item)) {
				if (settlement.resources[item] > 0) {
					out += core.ui().resource_storage_small_el(item, settlement.resources[item]);
				}
			}
		}
		if (out !== '') {
			_out += out;
		} else {
			_out = '<p>This settlement has no resources.</p>';
		}
		$(this.handle + ' #tab-resources').empty().append(_out);
		if (_status.id === civitas.DIPLOMACY_VASSAL) {
			$(this.handle + ' footer .attack').css('display','none');
		} else {
			$(this.handle + ' footer .attack').css('display', 'inline-block');
		}
		if (my_settlement.can_diplomacy()) {
			if (settlement.is_camp()) {
				$(this.handle + ' footer .caravan, ' + this.handle + ' footer .spy').hide();
			} else {
				$(this.handle + ' footer .caravan, ' + this.handle + ' footer .spy').css('display', 'inline-block');
			}
			if (_status.id === civitas.DIPLOMACY_PACT && (settlement.is_urban())) {
				$(this.handle + ' footer .alliance').css('display', 'inline-block');
			} else if (!settlement.is_camp()) {
				$(this.handle + ' footer .alliance').css('display','none');
			}
			if ((_status.id === civitas.DIPLOMACY_TRUCE || _status.id === civitas.DIPLOMACY_CEASE_FIRE) && !settlement.is_camp()) {
				$(this.handle + ' footer .pact').css('display', 'inline-block');
			} else {
				$(this.handle + ' footer .pact').css('display','none');
			}
			if (_status.id === civitas.DIPLOMACY_WAR && !settlement.is_camp()) {
				$(this.handle + ' footer .ceasefire').css('display', 'inline-block');
			} else {
				$(this.handle + ' footer .ceasefire').css('display','none');
			}
			if ((_status.id !== civitas.DIPLOMACY_WAR && _status.id !== civitas.DIPLOMACY_VASSAL) && !settlement.is_camp()) {
				$(this.handle + ' footer .war').css('display', 'inline-block');
			} else {
				$(this.handle + ' footer .war').css('display','none');
			}
			if ((_status.id === civitas.DIPLOMACY_PACT && settlement.is_village()) && !settlement.is_camp()) {
				$(this.handle + ' footer .join').css('display', 'inline-block');
			} else {
				$(this.handle + ' footer .join').css('display','none');
			}
		}
	}
};

/**
 * Help panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_HELP = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'help',
		
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('Help');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		$(this.handle + ' section').append(core.ui().tabs([
			'About',
			'Buildings',
			'Settlements',
			'Religion',
			'Research'
		]));
		$(this.handle + ' #tab-buildings').empty().append(
			'<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Build</a></li>' +
					'<li><a href="#">Upgrade</a></li>' +
					'<li><a href="#">Demolish</a></li>' +
					'<li><a href="#">Production</a></li>' +
					'<li><a href="#">Housing</a></li>' +
					'<li><a href="#">Municipal</a></li>' +
					'<li><a href="#">Storage</a></li>' +
					'<li><a href="#">Coins</a></li>' +
				'</ul>' +
			'</fieldset>' +
			'<h3>Intro</h3>' +
			'<p>In Civitas, buildings are the backbone of your city, providing you with goods for export.</p>' +
			'<h3>Build</h3>' +
			'<p>Each building has some special requirements to build, whether a required city level or another existing building.</p>' +
			'<h3>Upgrade</h3>' +
			'<p>Upgrading one of your buildings has several benefits, besides the obvious estetic one.</p>' +
			'<img title="Level 1 house" class="help tips" src="' + civitas.ASSETS_URL + 'images/assets/buildings/house1.png" /> ' +
			'<img title="Level 3 house" class="help tips" src="' + civitas.ASSETS_URL + 'images/assets/buildings/house3.png" /> ' +
			'<img title="Maximum level house" class="help tips" src="' + civitas.ASSETS_URL + 'images/assets/buildings/house5.png" />' +
			'<p>Upgrading a building costs the initial building price multiplied by the level. So, if a building initially costs 100 ' + core.ui().resource_small_img('coins') + ' and 20 ' + core.ui().resource_small_img('wood') + ' to construct, upgrading it to level 2 will cost 200 ' + core.ui().resource_small_img('coins') + ' and 40 ' + core.ui().resource_small_img('wood') + ', so on.</p>' +
			'<p>When a building is upgraded, it produces the inital amount of goods multiplied by the level of the building. Keep in mind that the materials it uses for production are the same as for a building of level 1, so upgrading a building is an easy way of getting double (or triple) the production goods for the same materials as the previous level used.</p>' +
			'<h3>Demolish</h3>' +
			'<p>Demolishing a building has no actual benefits except it no longer used the production materials (a better way to adjust that will be to stop the production of the specific building, this way you can restart it when you want).</p>' +
			'<h3>Production</h3>' +
			'<p></p>' +
			'<h3>Housing</h3>' +
			'<p></p>' +
			'<h3>Municipal</h3>' +
			'<p></p>' +
			'<h3>Storage</h3>' +
			'<p>The goods you`re producing need a storage place inside your city, the initial Marketplace provides some storage space (100k <img class="small" src="' + civitas.ASSETS_URL + 'images/assets/resources/storage.png" /> ), and it can be increased even further with upgrading, but you will need to build Warehouses to store all the goods. If you have no free storage space, the produced goods will be lost.</p>' +
			'<h3>Coins</h3>' +
			'<p>Your city can only gain coins through trades and taxes.</p>');
		$(this.handle + ' #tab-religion').empty().append('<h2>Religion</h2>');
		$(this.handle + ' #tab-settlements').empty().append('<fieldset>' +
				'<legend>Table of Contents</legend>' +
				'<ul>' +
					'<li><a href="#">Intro</a></li>' +
					'<li><a href="#">Cities and villages</a></li>' +
					'<li><a href="#">Diplomacy</a></li>' +
					'<li><a href="#">Fame and levels</a></li>' +
					'<li><a href="#">Influence</a></li>' +
					'<li><a href="#">Espionage</a></li>' +
					'<li><a href="#">Prestige</a></li>' +
					'<li><a href="#">Pacts and alliances</a></li>' +
					'<li><a href="#">Wars</a></li>' +
					'<li><a href="#">Caravans</a></li>' +
				'</ul>' +
			'</fieldset>' +
			'<h3>Intro</h3>' +
			'<p></p>' +
			'<h3>Cities and villages</h3>' +
			'<p></p>' +
			'<h3>Diplomacy</h3>' +
			'<p></p>' +
			'<h3>Fame and levels</h3>' +
			'<p>Each time you reach a specific fame level, your city gets a new level, thus you never lose your initial fame. There are several ways of getting extra fame (besides your initial Marketplace), there are several municipal buildings that add a small amount of fame to your city each day (this amount can be increased by upgrading the buildings).</p>' +
			'<p>There is no fixed way in which you can lose fame, except the random events that occur from time to time, or if another city manages to incite your population to revolt.</p>' +
			'<h3>Influence</h3>' +
			'<p>All settlements in the game world have an influence rating with each of the other settlements. The influence drops over time (yearly) and needs to be kept above a certain level, else the other cities might attack your city.</p>' +
			'<p>Maximum influence a settlement can have is <strong>' + civitas.MAX_INFLUENCE_VALUE + '</strong>.</p>' +
			'<h3>Espionage</h3>' +
			'<p>After building your city Embassy, you can start assigning spies to other settlements using your accumulated espionage points. Depending on the amount of espionage you use for a spy mission, that mission has a rate of success. The most points you can assign are <strong>' + civitas.MAX_ESPIONAGE_VALUE + '</strong> ' + core.ui().resource_small_img('espionage') + ' (maximum espionage points a city can get) and this gives you approximately a <strong>' + (civitas.MAX_ESPIONAGE_VALUE / civitas.MAX_ESPIONAGE_SUCESS_RATE) + '%</strong> success rate.</p>' +
			'<h3>Prestige</h3>' +
			'<p>Prestige is a very important feature of your city because it influences the way other settlements see you and they will act upon that information. Low prestige might be good for your city if you plan to lay low and prepare (the other settlements won`t bother to go to war with a city with low prestige unless you manage somehow to piss them off) but usually, your city prestige should raise with the city level.</p>' +
			'<p>Prestige is gained through trading with other settlements, sending caravans with resources to help them when in need, etc. Random events can also affect your city prestige. The maximum prestige a settlement can get is <strong>' + civitas.MAX_PRESTIGE_VALUE + '</strong> ' + core.ui().resource_small_img('prestige') + '.</p>' +
			'<h3>Pacts and alliances</h3>' +
			'<p></p>' +
			'<h3>Wars</h3>' +
			'<p></p>' +
			'<h3>Caravans</h3>' +
			'<p></p>');
		$(this.handle + ' #tab-about').empty().append('<h2>About Civitas</h2>' +
			'<p>Civitas is an empire-building game written in Javascript with the help of the <a target="_blank" href="https://jquery.com">jQuery</a> library. All the development is done over <a target="_blank" href="https://github.com/sizeofcat/civitas">GitHub</a> and everybody can contribute.</p>' +
			'<p>Civitas is written by <a target="_blank" href="https://sizeof.cat">sizeof(cat)</a>, is free and distributed under the <a target="_blank" href="https://raw.githubusercontent.com/sizeofcat/civitas/master/LICENSE">GPLv3 license</a>.</p>' +
			'<p>Big thanks to:</p>' +
			'<ul>' +
				'<li><a target="_blank" href="https://soundcloud.com/shantifax">Shantifax</a> for the music (Glandula Pinealis).</li>' +
				'<li><a target="_blank" href="http://bluebyte.com">Blue Byte</a> for Anno 1404.</li>' +
			'</ul>');
		$(this.handle + ' #tab-research').empty().append('<h2>Research</h2>');
		$(this.handle + ' #tab-diplomacy').empty().append('<h2>Diplomacy</h2>');
	}
};

/**
 * Debug panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_DEBUG = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'debug',
		
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('Debugging');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		let handle = this.handle;
		$(this.handle + ' section').append(core.ui().tabs([
			'Data',
			'Console',
			'Cheats'
		]));
		$(this.handle + ' #tab-console').empty().append('<div class="console"></div>');
		$(this.handle + ' #tab-cheats').empty().append('<div class="toolbar">' +
					'<a href="#" class="btn iblock one">+1M coins</a> ' +
					'<a href="#" class="btn iblock two">+1000 cons. mats</a> ' +
					'<a href="#" class="btn iblock thirty">+1000 food / wine</a> ' +
					'<a href="#" class="btn iblock fifteen">+1000 prov./spyg.</a> <br /><br />' +
					'<a href="#" class="btn iblock five">level up</a> ' +
					'<a href="#" class="btn iblock fourteen">+900 faith/research/espionage</a> ' +
					'<a href="#" class="btn iblock six">+1000 fame</a> ' +
					'<a href="#" class="btn iblock seven">refresh trades</a> <br /><br />' +
					'<a href="#" class="btn iblock eleven">random soldiers</a> ' +
					'<a href="#" class="btn iblock twelve">random ships</a> ' +
					'<a href="#" class="btn iblock fourty">defend city</a> ' +
					'<a href="#" class="btn iblock fifty">battle-ready</a> <br /><br />' +
					'<a href="#" class="btn iblock ninety">add city</a> ' +
				'</div>');
		$(this.handle + ' #tab-data').empty().append(
			'<textarea class="storage-data"></textarea>' +
			'<div class="toolbar">' +
				'<a href="#" class="btn iblock refresh">Refresh</a> ' +
				'<a href="#" class="btn iblock load">Load</a> ' +
				'<a href="#" class="btn iblock save">Save</a> ' +
			'</div>');
		$(this.handle).on('click', '.fourty', function() {
			let city_index = civitas.utils.get_random(1, core.get_num_settlements() - 1);
			let _settlement = core.get_settlement(city_index);
			core.queue_add(_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY, {
				army: {
					militia: 40,
					axeman: 30,
					knight: 10,
					bowman: 20,
					cannon: 200,
					catapult: 300,
					crossbowman: 10,
					pikeman: 30
				}
			});
			return false;
		}).on('click', '.fifty', function() {
			for (let i = 0; i < 9; i++) {
				core.level_up();
			}
			settlement.add_to_storage('wood', 1000);
			settlement.add_to_storage('stones', 1000);
			settlement.add_to_storage('woodplanks', 1000);
			settlement.add_to_storage('provisions', 1000);
			settlement.add_to_storage('ropes', 50);
			settlement.add_to_storage('barrels', 50);
			settlement.add_to_storage('tools', 100);
			settlement.inc_coins(2000000);
			let army = settlement.get_army();
			for (let soldier in army) {
				army[soldier] = civitas.utils.get_random(1, 100);
			}
			settlement.build('provisions');
			settlement.build('barracks');
			settlement.build('shipyard');
			core.save_and_refresh();
			return false;
		}).on('click', '.eleven', function() {
			let army = settlement.get_army();
			for (let soldier in army) {
				army[soldier] = civitas.utils.get_random(1, 100);
			}
			core.save_and_refresh();
			return false;
		}).on('click', '.twelve', function() {
			let navy = settlement.get_navy();
			for (let ship in navy) {
				navy[ship] = civitas.utils.get_random(1, 10);
			}
			core.save_and_refresh();
			return false;
		}).on('click', '.fourteen', function() {
			settlement.raise_faith(900);
			settlement.raise_espionage(900);
			settlement.raise_research(900);
			core.save_and_refresh();
			return false;
		}).on('click', '.one', function() {
			settlement.inc_coins(1000000);
			core.save_and_refresh();
			return false;
		}).on('click', '.fifteen', function() {
			settlement.add_to_storage('provisions', 1000);
			settlement.add_to_storage('donkeys', 1000);
			settlement.add_to_storage('ropes', 1000);
			settlement.add_to_storage('spyglasses', 1000);
			core.save_and_refresh();
			return false;
		}).on('click', '.two', function() {
			settlement.add_to_storage('wood', 1000);
			settlement.add_to_storage('stones', 1000);
			settlement.add_to_storage('woodplanks', 1000);
			settlement.add_to_storage('clay', 1000);
			settlement.add_to_storage('bricks', 1000);
			settlement.add_to_storage('tools', 500);
			core.save_and_refresh();
			return false;
		}).on('click', '.thirty', function() {
			settlement.add_to_storage('bread', 1000);
			settlement.add_to_storage('meat', 1000);
			settlement.add_to_storage('wine', 1000);
			core.save_and_refresh();
			return false;
		}).on('click', '.five', function() {
			core.level_up();
			core.save_and_refresh();
			return false;
		}).on('click', '.six', function() {
			settlement.raise_fame(1000);
			core.save_and_refresh();
			return false;
		}).on('click', '.seven', function() {
			core.refresh_trades();
			core.save_and_refresh();
			return false;
		}).on('click', '.refresh', function() {
			$(handle + ' .storage-data').val(core.get_storage_data('live', true));
			return false;
		}).on('click', '.ninety', function() {
			core.add_random_settlement();
			return false;
		}).on('click', '.load', function() {
			let save_game = $(handle + ' .storage-data').val();
			if (save_game != '') {
				core.ui().open_modal(
					function(button) {
						if (button === 'yes') {
							core.set_storage_data('live', save_game, true);
							document.location.reload();
						}
					},
					'Are you sure you want to load a new game? You will lose all progress on the current game!',
					'Civitas'
				);
			} else {
				core.ui().error('Invalid save game.');
			}
			return false;
		}).on('click', '.save', function() {
			let save_game = $(handle + ' .storage-data').val();
			if (save_game == '') {
				save_game = core.get_storage_data('live', true);
			}
			let a = document.createElement("a");
			a.style.display = "none";
			document.body.appendChild(a);
			a.href = window.URL.createObjectURL(
				new Blob([save_game], {
					type: 'text/plain'
				})
			);
			a.setAttribute("download", 'civitas_savegame.json');
			a.click();
			window.URL.revokeObjectURL(a.href);
			document.body.removeChild(a);
			return false;
		});
	}
};

/**
 * Building panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_BUILDING = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'building',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' section').empty().append(core.ui().building_panel(this.params_data, building.get_level()));
		} else {
			this.destroy();
		}
	}
};

/**
 * Campaign panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_CAMPAIGN = {

	params_data: null,

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'campaign',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let campaign = params.data;
		let class_name = '';
		let tabs = ['Info'];
		this.params_data = params;
		if (campaign.type === civitas.CAMPAIGN_ARMY || campaign.type === civitas.CAMPAIGN_ARMY_RETURN) {
			class_name = 'army';
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			class_name = 'caravan';
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			class_name = 'spy';
		}
		$(this.handle + ' header').append(class_name.capitalize() + ' mission');
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			if (my_settlement.num_soldiers(campaign.data.army) > 0) {
				tabs.push('Soldiers');
			}
			if (my_settlement.num_ships(campaign.data.navy) > 0) {
				tabs.push('Ships');
			}
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			tabs.push('Resources');
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			tabs.push('Spy');
		} else if (campaign.type === civitas.CAMPAIGN_ARMY_RETURN) {
			if (my_settlement.num_soldiers(campaign.data.army) > 0) {
				tabs.push('Soldiers');
			}
			if (my_settlement.num_ships(campaign.data.navy) > 0) {
				tabs.push('Ships');
			}
			tabs.push('Resources');
		}
		$(this.handle + ' section').append(core.ui().tabs(tabs));
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let campaign = this.params_data.data;
		let out = '';
		let source = core.get_settlement(campaign.source.id);
		let destination = core.get_settlement(campaign.destination.id);
		let distance = core.world().get_distance(campaign.source, campaign.destination);
		let mission_type;
		let action = '';
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			mission_type = 'Army';
			action = 'Attacking';
		} else if (campaign.type === civitas.CAMPAIGN_ARMY_RETURN) {
			mission_type = 'Army';
			action = 'Returning';
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			mission_type = 'Spy';
			action = 'Sneaking in';
		} else if (campaign.type === civitas.CAMPAIGN_SCOUT) {
			mission_type = 'Scout';
			action = 'Scouting';
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			mission_type = 'Caravan';
			action = 'Going to';
		} else {
			mission_type = 'Misc';
			action = 'Going to';
		}
		$(this.handle + ' #tab-info').empty().append('' +
			'<img class="avatar right" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + (campaign.type === civitas.CAMPAIGN_ARMY_RETURN ? destination.ruler().avatar : source.ruler().avatar) + '.png" />' +
			'<dl>' +
				'<dt>Type</dt>' +
				'<dd>' + mission_type + '</dd>' +
				'<dt>Sent By</dt>' +
				'<dd>' + (campaign.type === civitas.CAMPAIGN_ARMY_RETURN ? destination.name() : source.name()) + '</dd>' +
				
				'<dt>Destination</dt>' +
				'<dd>' + (campaign.type === civitas.CAMPAIGN_ARMY_RETURN ? source.name() : destination.name()) + '</dd>' +
				'<dt>Action</dt>' +
				'<dd>' + action + '</dd>' +
				'<dt>Distance</dt>' +
				'<dd>' + distance + ' miles (' + campaign.duration + ' days)</dd>' +
				'<dt>Remaining</dt>' +
				'<dd>' + (10 * (campaign.duration - campaign.passed)) + ' miles (' + (campaign.duration - campaign.passed) + ' days)</dd>' +
			'</dl>');
		if (campaign.type === civitas.CAMPAIGN_ARMY) {
			if (my_settlement.num_soldiers(campaign.data.army) > 0) {
				$(this.handle + ' #tab-soldiers').empty().append(core.ui().army_list(campaign.data.army));
			}
			if (my_settlement.num_ships(campaign.data.navy) > 0) {
				$(this.handle + ' #tab-ships').empty().append(core.ui().navy_list(campaign.data.navy));
			}
		} else if (campaign.type === civitas.CAMPAIGN_CARAVAN) {
			if (typeof campaign.data.resources !== 'undefined' && !$.isEmptyObject(campaign.data.resources)) {
				out = '<p>This caravan has the the following resources:</p>' +
					'<dl>';
				for (let item in campaign.data.resources) {
					if (campaign.data.resources[item] > 0) {
						out += '<dt>' + campaign.data.resources[item] + '</dt>' +
							'<dd>' + core.ui().resource_small_img(item) + '</dd>';
					}
				}
				out += '</dl>';
			} else {
				out = '<p>This is an empty caravan with no resources.</p>';
			}
			$(this.handle + ' #tab-resources').empty().append(out);
		} else if (campaign.type === civitas.CAMPAIGN_SPY) {
			out = '<dl>' +
				'<dt>Mission</dt>' +
				'<dd>' + civitas.SPY_MISSIONS[campaign.data.mission].capitalize() + '</dd>' +
				(campaign.data.mission === civitas.SPY_MISSION_RELIGION ? '<dt>Religion</dt>' +
				'<dd>' + civitas.RELIGIONS[campaign.data.religion].capitalize() + '</dd>' : '') +
				'<dt>Espionage</dt>' +
				'<dd>' + campaign.data.espionage + ' ' + core.ui().resource_small_img('espionage') + '</dd>' +
				'<dt>Success chance</dt>' +
				'<dd>' + Math.ceil(campaign.data.espionage / 100) + '%</dd>' +
			'</dl>';
			$(this.handle + ' #tab-spy').empty().append(out);
		} else if (campaign.type === civitas.CAMPAIGN_ARMY_RETURN) {
			if (my_settlement.num_soldiers(campaign.data.army) > 0) {
				$(this.handle + ' #tab-soldiers').empty().append(core.ui().army_list(campaign.data.army));
			}
			if (my_settlement.num_ships(campaign.data.navy) > 0) {
				$(this.handle + ' #tab-ships').empty().append(core.ui().navy_list(campaign.data.navy));
			}
			if (typeof campaign.data.resources !== 'undefined' && !$.isEmptyObject(campaign.data.resources)) {
				out = '<p>This army is bringing back to its home city the following spoils of war:</p>' +
					'<dl>';
				for (let item in campaign.data.resources) {
					if (campaign.data.resources[item] > 0) {
						out += '<dt>' + campaign.data.resources[item] + '</dt>' +
							'<dd>' + core.ui().resource_small_img(item) + '</dd>';
					}
				}
				out += '</dl>';
			} else {
				out = '<p>This army is returning with no spoils of war.</p>';
			}
			$(this.handle + ' #tab-resources').empty().append(out);
		}
	}
};

/**
 * Storage panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_STORAGE = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'storage',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('City Storage');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		let storage_space = settlement.storage();
		let resources = settlement.get_resources();
		$(this.handle + ' section').append(core.ui().tabs(civitas.RESOURCE_CATEGORIES));
		$(this.handle + ' section').append('<p>Total storage space: <span class="total-storage">' + storage_space.all + '</span>, used: <span class="used-storage">' + storage_space.occupied + '</span></p>');
		for (let i = 0; i < civitas.RESOURCE_CATEGORIES.length; i++) {
			$(this.handle + ' #tab-' + civitas.RESOURCE_CATEGORIES[i]).append('<div class="storage-board"></div>');
		}
		for (let resource in resources) {
			if (!civitas.utils.is_virtual_resource(resource)) {
				$(this.handle + ' #tab-' + civitas.RESOURCES[resource].category + ' .storage-board').append(core.ui().resource_storage_el(resource, resources[resource]));
			}
		}
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let settlement = this.core().get_settlement();
		let resources = settlement.get_resources();
		let storage_space = settlement.storage();
		for (let resource in resources) {
			if (!civitas.utils.is_virtual_resource(resource)) {
				$(this.handle + ' #tab-' + civitas.RESOURCES[resource].category + ' .storage-board > .storage-item[data-resource="' + resource + '"] > .amount').empty().html(resources[resource]);
			}
		}
		$(this.handle + ' .total-storage').empty().append(storage_space.all);
		$(this.handle + ' .used-storage').empty().append(storage_space.occupied);
	}
};

/**
 * World panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_WORLD = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'world',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('World Map');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		$(this.handle + ' section').append('<div class="worldmap"></div>');
		core.world().draw();
		let clicked = false;
		let clickY, clickX;
		$('.worldmap').on({
			mousemove: function (event) {
				clicked && update_scroll_pos(event);
			},
			mousedown: function (event) {
				clicked = true;
				clickY = event.pageY;
				clickX = event.pageX;
				$('html').css('cursor', 'grab');
			},
			mouseup: function () {
				clicked = false;
				$('html').css('cursor', 'auto');
			}
		});
		let update_scroll_pos = function (event) {
			$('.worldmap').scrollTop($('.worldmap').scrollTop() + (clickY - event.pageY));
			$('.worldmap').scrollLeft($('.worldmap').scrollLeft() + (clickX - event.pageX));
			clickY = event.pageY;
			clickX = event.pageX;
		};
		$(this.handle).on('click', '.settlement', function () {
			let _settlement_name = $(this).data('name');
			if (_settlement_name === settlement.name()) {
				core.ui().open_panel(civitas.PANEL_COUNCIL);
			} else {
				core.ui().open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(_settlement_name));
			}
			return false;
		}).on('click', '.place', function () {
			let place_id = parseInt($(this).data('id'));
			core.ui().open_panel(civitas.PANEL_PLACE, core.get_place(place_id));
			return false;
		}).on('click', '.troop', function () {
			let _action_id = parseInt($(this).data('id'));
			if (core._queue[_action_id].mode === civitas.ACTION_CAMPAIGN) {
				core.ui().open_panel(civitas.PANEL_CAMPAIGN, core._queue[_action_id]);
			}
			return false;
		}).on('click', '.canvas-map', function() {
			// Todo
			return false;
		});
		core.ui().worldmap_scrollto(settlement.location());
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		let settlements = core.get_settlements();
		let places = core.places();
		let world = core.world();
		let colors = world.colors();
		let queue_actions = core.queue();
		let class_name = '';
		$('.troop, .settlement, .place').remove();
		for (let i = 0; i < settlements.length; i++) {
			let image = 'village';
			let color = settlements[i].color();
			let name = settlements[i].name();
			let location = settlements[i].location();
			let coords = core.ui().get_cell_middle_coords(location.y, location.x);
			if (typeof settlement !== 'undefined' && name === settlement.name()) {
				image = 'settlement';
			} else {
				if (settlements[i].is_metropolis()) {
					image = 'metropolis' + settlements[i].icon();
				} else if (settlements[i].is_city()) {
					image = 'city' + settlements[i].icon();
				} else if (settlements[i].is_village()) {
					image = 'village' + settlements[i].icon();
				} else if (settlements[i].is_camp()) {
					image = 'camp';
				}
			}
			$('.worldmap').append('<img data-x="' + location.x + '" data-y="' + location.y + '" title="' + settlements[i].nice_name() + '" style="left:' + (coords.x + 3) + 'px;top:' + coords.y + 'px" data-name="' + name + '" src="' + civitas.ASSETS_URL + 'images/assets/ui/world/' + image + '.png' + '" class="tips settlement" />');
		}
		//if (core.has_research('archeology')) {
			for (let i = 0; i < places.length; i++) {
				let location = places[i].location();
				let coords = core.ui().get_cell_middle_coords(location.y, location.x);
				$('.worldmap').append('<img data-x="' + location.x + '" data-y="' + location.y + '" title="Ruins of ' + places[i].name() + '" style="left:' + (coords.x + 3) + 'px;top:' + coords.y + 'px" data-id="' + places[i].id() + '" src="' + civitas.ASSETS_URL + 'images/assets/ui/world/place.png' + '" class="tips place" />');
			}
		//}
		for (let i = 0; i < queue_actions.length; i++) {
			let action = queue_actions[i];
			let source = action.source;
			let destination = action.destination;
			let distance_in_days = core.world().get_distance_in_days(source, destination);
			if (action.mode === civitas.ACTION_DIPLOMACY) {
				distance_in_days = distance_in_days / 2;
			}
			let title = '';
			let troop_type = 'troop';
			let _source = core.get_settlement(source.id);
			let _destination = core.get_settlement(destination.id)
			let x = source.x + Math.floor(((destination.x - source.x) / distance_in_days) * action.passed);
			let y = source.y - Math.floor(((source.y - destination.y) / distance_in_days) * action.passed);
			let prev_x = source.x + Math.floor(((destination.x - source.x) / distance_in_days) * (action.passed - 1));
			let prev_y = source.y - Math.floor(((source.y - destination.y) / distance_in_days) * (action.passed - 1));
			if (action.mode === civitas.ACTION_CAMPAIGN) {
				if (action.type === civitas.CAMPAIGN_CARAVAN) {
					troop_type = 'troop_caravan';
					title = 'Caravan from ' + _source.name() + ' sent to ' + _destination.name() + '.';
				} else if (action.type === civitas.CAMPAIGN_SCOUT) {
					troop_type = 'troop_scout';
					title = 'Scout from ' + _source.name() + ' going to a specific place.';
				} else if (action.type === civitas.CAMPAIGN_SPY) {
					troop_type = 'troop_spy';
					title = 'Spy from ' + _source.name() + ' sneaking into ' + _destination.name() + '.';
				} else if (action.type === civitas.CAMPAIGN_ARMY_RETURN) {
					troop_type = 'troop_return';
					title = _destination.name() + ' army returning from ' + _source.name() + '.';
				} else {
					troop_type = 'troop_attack';
					title = _source.name() + ' army marching to ' + _destination.name() + '.';
				}
			} else if (action.mode === civitas.ACTION_DIPLOMACY) {
				troop_type = 'troop_diplomatic';
				title = 'Diplomatic mission from ' + _source.name() + ' to ' + _destination.name() + '.';
			}
			let coords = core.ui().get_cell_middle_coords(y, x);
			$('.worldmap').append('<img data-name="' + troop_type + '" data-x="' + x + '" data-y="' + y + '" title="' + title + '" style="left:' + (coords.x + 3) + 'px;top:' + coords.y + 'px" data-id="' + i + '" src="' + civitas.ASSETS_URL + 'images/assets/ui/world/' + troop_type + '.png' + '" class="tips troop" />');
		}
	}
};

/**
 * Ranks panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_RANKS = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'ranks',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('World Ranks');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		$(this.handle + ' section').append('<div class="ranks-list"></div>');
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let ranking_list = [];
		let settlements = this.core().get_settlements();
		for (let i = 0; i < settlements.length; i++) {
			if (settlements[i].is_urban()) {
				ranking_list.push({
					name: settlements[i].name(),
					data: settlements[i].get_rank()
				});
			}
		}
		ranking_list.sort(function(a, b) {
			let keyA = new Date(a.data.score);
			let keyB = new Date(b.data.score);
			if (keyA > keyB) {
				return -1;
			}
			if (keyA < keyB) {
				return 1;
			}
			return 0;
		});
		let _t = '<table class="normal">';
		_t += '<thead>' +
				'<tr>' +
					'<td class="center">Rank</td>' +
					'<td>City</td>' +
					'<td class="center">Score</td>' +
				'</tr>' +
			'</thead>' +
			'<tbody>';
		for (let i = 0; i < ranking_list.length; i++) {
			_t += '<tr>' +
				'<td class="center">' + (i + 1) + '</td>' +
				'<td>' + ranking_list[i].name + '</td>' +
				'<td class="center">' + ranking_list[i].data.score + '</td>' +
			'</tr>';
		}
		_t += '</tbody>' +
			'</table>';
		$(this.handle + ' .ranks-list').empty().append(_t);
	}
};

/**
 * Create a new army panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_NEW_ARMY = {
	
	/**
	 * Template of the panel.
	 *
	 * @type {String}
	 */
	template: '<div id="panel-{ID}" class="panel">' +
				'<header>Create army' +
					'<a class="tips close" title="Close"></a>' +
				'</header>' +
				'<section></section>' +
				'<div class="toolbar">' +
					'<a class="dispatch btn iblock" href="#">Dispatch</a>' +
				'</div>' +
			'</div>',

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'new-army',
	
	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let settlement = params.data;
		let settlements = core.get_settlements();
		let army = my_settlement.get_army();
		let location = my_settlement.location();
		let distance = core.world().get_distance_in_days(location, settlement.location());
		this.assigned_army = {};
		this.assigned_navy = {};
		for (let item in army) {
			this.assigned_army[item] = army[item];
		}
		if (my_settlement.can_build_ships()) {
			let navy = my_settlement.get_navy();
			for (let item in navy) {
				this.assigned_navy[item] = navy[item];
			}
		}
		let _t = '<div class="column">' +
			'<fieldset>' +
				'<legend>Initial costs</legend>' +
				'<dl>';
		for (let item in civitas.ARMY_COSTS) {
			let _cost = 0;
			if (item === 'coins') {
				_cost = civitas.ARMY_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.ARMY_COSTS[item] * distance) / 4);
			} else {
				_cost = civitas.ARMY_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + core.ui().resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
			'</fieldset>';
		if (typeof army !== 'undefined') {
			_t += '<fieldset>' +
				'<legend>Soldiers</legend>';
			for (let item in army) {
				_t += '<div class="army-item">' +
					'<a href="#" data-max="' + army[item] + '" data-soldier="' + item + '" class="army-item-inc">+</a>' +
					'<a href="#" data-max="' + army[item] + '" data-soldier="' + item + '" class="army-item-dec">-</a>' +
					'<img class="tips" title="' + civitas.SOLDIERS[item].name + '" src="' + civitas.ASSETS_URL + 'images/assets/army/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
					'<span class="amount">' + army[item] + '</span>' +
				'</div>';
			}
			_t += '</fieldset>';
		}
		_t += '<fieldset>' +
			'<legend>Destination</legend>' +
			'<select class="army-destination">' +
				'<option value="0">-- select --</option>';
		for (let i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].id() === settlement.id()) ? 'selected ' : '') + 'value="' + settlements[i].id() + '">' + settlements[i].nice_name() + '</option>';
		}
		_t += '</select>' +
			'</fieldset>' +
		'</div>' +
		'<div class="column">';
		if (my_settlement.can_build_ships()) {
			if (typeof navy !== 'undefined') {
				_t += '<fieldset>' +
					'<legend>Ships</legend>';
				for (let item in navy) {
					_t += '<div class="navy-item">' +
							'<a href="#" data-max="' + navy[item] + '" data-ship="' + item + '" class="navy-item-inc">+</a>' +
							'<a href="#" data-max="' + navy[item] + '" data-ship="' + item + '" class="navy-item-dec">-</a>' +
							'<img class="tips" title="' + item + '" src="' + civitas.ASSETS_URL + 'images/assets/army/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
							'<span class="amount">' + navy[item] + '</span>' +
						'</div>';
				}
				_t += '</fieldset>';
			}
		}
		if (my_settlement.can_recruit_heroes()) {
			let heroes = my_settlement.heroes();
			_t += '<fieldset>' +
				'<legend>Hero</legend>' +
				'<select class="army-hero">';
			if ($.isEmptyObject(heroes)) {
				_t += '<option value="0">-- no heroes available --</option>';
			} else {
				_t += '<option value="0">-- select --</option>';
				for (let item in heroes) {
					_t += '<option value="' + item + '">' + heroes[item] + '</option>';
				}
			}
			_t += '</select>' +
			'</fieldset>';
		} else {
			_t += '<p><strong>Note!</strong> Build a Tavern to be able to recruit powerful heroes and assign them to your armies.</p>';		
		}
		_t += '</div>';
		$(this.handle + ' section').empty().append(_t);
		$(this.handle).on('click', '.navy-item-inc', function() {
			let max = parseInt($(this).data('max'));
			let ship = $(this).data('ship');
			let current = parseInt($(this).parent().children('.amount').html());
			if (current + 1 <= max) {
				self.assigned_navy[ship] = current + 1;
				$(this).parent().children('.amount').html(current + 1);
			}
			return false;
		}).on('click', '.navy-item-dec', function() {
			let max = parseInt($(this).data('max'));
			let ship = $(this).data('ship');
			let current = parseInt($(this).parent().children('.amount').html());
			if (current - 1 >= 0) {
				self.assigned_navy[ship] = current - 1;
				$(this).parent().children('.amount').html(current - 1);
			}
			return false;
		}).on('click', '.army-item-inc', function() {
			let max = parseInt($(this).data('max'));
			let soldier = $(this).data('soldier');
			let current = parseInt($(this).parent().children('.amount').html());
			if (current + 1 <= max) {
				self.assigned_army[soldier] = current + 1;
				$(this).parent().children('.amount').html(current + 1);
			}
			return false;
		}).on('click', '.army-item-dec', function() {
			let max = parseInt($(this).data('max'));
			let soldier = $(this).data('soldier');
			let current = parseInt($(this).parent().children('.amount').html());
			if (current - 1 >= 0) {
				self.assigned_army[soldier] = current - 1;
				$(this).parent().children('.amount').html(current - 1);
			}
			return false;
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_recruit_soldiers()) {
				core.ui().error('You will need to construct a Military Camp before being able to attack other settlements.');
				return false;
			}
			let destination = parseInt($(self.handle + ' .army-destination').val());
			if ((settlement && settlement.id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			// TODO there is an error here when there is no shipyard to send navy.
			if (destination === 0 || !settlement || (my_settlement.num_soldiers(self.assigned_army) === 0 && my_settlement.num_ships(self.assigned_navy) === 0)) {
				core.ui().error('There was an error creating and dispatching the army, check the data you entered and try again.');
				return false;
			}
			if (core.queue_add(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_ARMY, {
				army: self.assigned_army,
				navy: self.assigned_navy
			})) {
				core.do_achievement('sendarmy');
				self.destroy();
			} else {
				core.ui().error('There was an error creating and dispatching the army, check the data you entered and try again.');
			}
			return false;
		});
	}
};

/**
 * Create a new spy panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_NEW_SPY = {
	
	/**
	 * Template of the panel.
	 *
	 * @type {String}
	 */
	template: '<div id="panel-{ID}" class="panel">' +
				'<header>Create spy' +
					'<a class="tips close" title="Close"></a>' +
				'</header>' +
				'<section></section>' +
				'<div class="toolbar">' +
					'<a class="btn dispatch" href="#">Dispatch</a>' +
				'</div>' +
			'</div>',

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'new-spy',

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let settlement = params.data;
		let settlements = core.get_settlements();
		let espionage = my_settlement.espionage();
		let location = my_settlement.location();
		let distance = core.world().get_distance_in_days(location, settlement.location());
		let _t = '<fieldset>' +
			'<legend>Initial costs</legend>' +
			'<dl>';
		for (let item in civitas.SPY_COSTS) {
			let _cost = 0;
			if (item === 'coins') {
				_cost = civitas.SPY_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.SPY_COSTS[item] * distance) / 4);
			} else {
				_cost = civitas.SPY_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + core.ui().resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>Destination</legend>' +
			'<select class="espionage-destination">' +
				'<option value="0">-- select --</option>';
		for (let i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].id() === settlement.id()) ? 'selected ' : '') + 'value="' + settlements[i].id() + '">' + settlements[i].nice_name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="range-combo">' +
			'<legend>Espionage</legend>' +
			'<input type="range" value="' + espionage + '" min="1" max="' + espionage + '" class="espionage-range" />' +
			'<input type="text" readonly value="' + espionage + '" class="espionage-value tips" title="Total espionage assigned to this spy." />' +
			'<input type="text" readonly value="' + Math.ceil(espionage / 100) + '%" class="espionage-chance tips" title="Chance of mission success." />' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>Mission</legend>' +
			'<select class="espionage-mission">' +
				'<option value="0">-- select --</option>';
		for (let i = 1; i < civitas.SPY_MISSIONS.length; i++) {
			_t += '<option value="' + i + '">' + civitas.SPY_MISSIONS[i].capitalize() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="espionage-rel">' +
			'<legend>Religion' + (settlement ? ' (currently ' + settlement.religion().name + ')': '') + '</legend>' +
			'<select class="espionage-religion">';
		for (let i = 0; i < civitas.RELIGIONS.length; i++) {
			_t += '<option value="' + i + '">' + civitas.RELIGIONS[i].capitalize() + (i === my_settlement.religion().id ? ' (your religion)' : '') + '</option>';
		}
		_t += '</select>' +
			'<p><strong>Note!</strong> Attempting to change a settlement`s religion uses up all your accumulated faith.</p>' +
		'</fieldset>';
		$(this.handle + ' section').empty().append(_t);
		$(this.handle).on('change', '.espionage-range', function() {
			let value = parseInt($(this).val());
			$(self.handle + ' .espionage-value').val(value);
			$(self.handle + ' .espionage-chance').val(Math.ceil(value / 100) + '%');
		}).on('change', '.espionage-mission', function() {
			let value = parseInt($(this).val());
			if (value === civitas.SPY_MISSION_RELIGION) {
				$(self.handle + ' .espionage-rel').show();
			} else {
				$(self.handle + ' .espionage-rel').hide();
			}
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to send spies to other settlements.');
				return false;
			}
			let _espionage = parseInt($(self.handle + ' .espionage-value').val());
			let destination = parseInt($(self.handle + ' .espionage-destination').val());
			let mission = parseInt($(self.handle + ' .espionage-mission').val());
			if ((settlement && settlement.id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || _espionage > espionage || !settlement || mission <= 0) {
				core.ui().error('There was an error creating and dispatching the spy, check the data you entered and try again.');
				return false;
			}
			let data = {
				espionage: _espionage,
				mission: mission
			};
			if (mission === civitas.SPY_MISSION_RELIGION) {
				data.religion = parseInt($(self.handle + ' .espionage-religion').val());
			}
			if (core.queue_add(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_SPY, data)) {
				core.do_achievement('jamesbond');
				self.destroy();
			} else {
				core.ui().error('There was an error creating and dispatching the spy, check the data you entered and try again.');
			}
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let my_settlement = core.get_settlement();
		let espionage = my_settlement.espionage();
		$(this.handle + ' .espionage-range').attr('max', espionage);
	}
};

/**
 * Create a new scout panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_NEW_SCOUT = {
	
	/**
	 * Template of the panel.
	 *
	 * @type {String}
	 */
	template: '<div id="panel-{ID}" class="panel">' +
				'<header>Create scout' +
					'<a class="tips close" title="Close"></a>' +
				'</header>' +
				'<section></section>' +
				'<div class="toolbar">' +
					'<a class="btn dispatch" href="#">Dispatch</a>' +
				'</div>' +
			'</div>',

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'new-scout',

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let place = params.data;
		let location = my_settlement.location();
		let distance = core.world().get_distance_in_days(location, place.location());
		let _t = '<fieldset>' +
			'<legend>Initial costs</legend>' +
			'<dl>';
		for (let item in civitas.SCOUT_COSTS) {
			let _cost = 0;
			if (item === 'coins') {
				_cost = civitas.SCOUT_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.SCOUT_COSTS[item] * distance) / 4);
			} else {
				_cost = civitas.SCOUT_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + core.ui().resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>Destination</legend>' +
			'<input type="hidden" class="scout-destination" value="' + place.id() + '" />' +
		'</fieldset>';
		$(this.handle + ' section').empty().append(_t);
		$(this.handle).on('click', '.dispatch', function() {
			if (!my_settlement.can_diplomacy()) {
				core.ui().error('You will need to construct an Embassy before being able to send scouts to other settlements.');
				return false;
			}
			let destination = parseInt($(self.handle + ' .scout-destination').val());
			let data = {
				// Todo
			};
			if (core.queue_add(my_settlement, place, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_SCOUT, data)) {
				self.destroy();
			} else {
				core.ui().error('There was an error creating and dispatching the scout, check the data you entered and try again.');
			}
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		// Todo
	}
};

/**
 * Create a new caravan panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_NEW_CARAVAN = {
	
	/**
	 * Template of the panel.
	 *
	 * @type {String}
	 */
	template: '<div id="panel-{ID}" class="panel">' +
				'<header>Create caravan' +
					'<a class="tips close" title="Close"></a>' +
				'</header>' +
				'<section></section>' +
				'<div class="toolbar">' +
					'<a class="btn dispatch" href="#">Dispatch</a>' +
				'</div>' +
			'</div>',

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'new-caravan',
	
	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		this.resources = {};
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let settlement = params.data;
		let settlements = core.get_settlements();
		let location = my_settlement.location();
		let distance = core.world().get_distance_in_days(location, settlement.location());
		let _t = '<fieldset>' +
			'<legend>Initial costs</legend>' +
			'<dl>';
		for (let item in civitas.CARAVAN_COSTS) {
			let _cost = 0;
			if (item === 'coins') {
				_cost = civitas.CARAVAN_COSTS[item] * distance;
			} else if (item === 'provisions') {
				_cost = Math.ceil((civitas.CARAVAN_COSTS[item] * distance) / 4);
			} else {
				_cost = civitas.CARAVAN_COSTS[item];
			}
			_t += '<dt>' + civitas.utils.nice_numbers(_cost) + '</dt>' +
				'<dd>' + core.ui().resource_small_img(item) + '</dd>';
		}
		_t += '</dl>' +
		'</fieldset>' +
		'<fieldset>' +
			'<legend>Destination</legend>' +
			'<select class="caravan-destination">' +
				'<option value="0">-- select --</option>';
		for (let i = 1; i < settlements.length; i++) {
			_t += '<option ' + (settlement && (settlements[i].id() === settlement.id()) ? 'selected ' : '') + 'value="' + settlements[i].id() + '">' + settlements[i].nice_name() + '</option>';
		}
		_t += '</select>' +
		'</fieldset>' +
		'<fieldset class="select-combo">' +
			'<legend>Resources</legend>' +
			'<select class="caravan-resources-select">' +
				'<option value="0">-- select --</option>' +
				'<option value="coins">Coins</option>';
		let resources = my_settlement.get_resources();
		for (let item in resources) {
			if (!civitas.utils.is_virtual_resource(item)) {
				_t += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		_t += '</select>' +
			'<input title="Add the resources to the list." type="button" class="tips caravan-resources-add" value="+" />' +
			'<input title="Amount of selected resource to add to the caravan." type="number" value="1" class="tips caravan-resources-amount" min="1" max="999" />' +
			'<div class="caravan-resources clearfix"></div>' +
		'</fieldset>';
		$(this.handle + ' section').empty().append(_t);
		this.generate_table_data = function() {
			let _t = '<table class="caravan-resources clearfix">' +
				'<thead>' +
				'<tr>' +
					'<td>Amount</td>' +
					'<td>Resource</td>' +
					'<td></td>' +
				'</tr>' +
				'</thead>' +
				'<tbody>';
			for (let item in this.resources) {
				_t += '<tr>' +
					'<td>' + this.resources[item] + '</td>' +
					'<td>' + core.ui().resource_small_img(item) + '</td>' +
					'<td>' +
						'<a title="Remove this resource from the caravan." href="#" data-id="' + item + '" class="tips caravan-resources-delete">-</a>' +
					'</td>' +
				'</tr>';
			}
			_t += '</tbody>' +
			'</table>';
			$(this.handle + ' .caravan-resources').empty().append(_t);
		};
		$(this.handle).on('click', '.caravan-resources-add', function() {
			let amount = parseInt($(self.handle + ' .caravan-resources-amount').val());
			let resource = $(self.handle + ' .caravan-resources-select').val();
			if (resource !== '0') {
				if (typeof self.resources[resource] !== 'undefined' && !my_settlement.has_resource(resource, self.resources[resource] + amount)) {
					core.ui().error(my_settlement.name() + ' doesn`t have enough ' + civitas.utils.get_resource_name(resource) + '.');
					return false;
				} else if (typeof self.resources[resource] === 'undefined' && !my_settlement.has_resource(resource, amount)) {
					core.ui().error(my_settlement.name() + ' doesn`t have enough ' + civitas.utils.get_resource_name(resource) + '.');
					return false;
				}
				if (typeof self.resources[resource] !== 'undefined') {
					self.resources[resource] = self.resources[resource] + amount;
				} else {
					self.resources[resource] = amount;
				}
				self.generate_table_data();
			}
			return false;
		}).on('click', '.caravan-resources-delete', function() {
			let resource = $(this).data('id');
			delete self.resources[resource];
			self.generate_table_data();
			return false;
		}).on('click', '.dispatch', function() {
			if (!my_settlement.can_trade()) {
				core.ui().error('You will need to construct a Trading Post before being able to trade resources with other settlements.');
				return false;
			}
			let destination = parseInt($(self.handle + ' .caravan-destination').val());
			if ((settlement && settlement.id() !== destination) || !settlement) {
				settlement = core.get_settlement(destination);
			}
			if (destination === 0 || !settlement || $.isEmptyObject(self.resources)) {
				core.ui().error('There was an error creating and dispatching the caravan, check the data you entered and try again.');
				return false;
			}
			if (core.queue_add(my_settlement, settlement, civitas.ACTION_CAMPAIGN, civitas.CAMPAIGN_CARAVAN, {
				resources: self.resources
			})) {
				core.do_achievement('donkeylord');
				self.destroy();
			} else {
				core.ui().error('There was an error creating and dispatching the caravan, check the data you entered and try again.');
			}
			return false;
		});
	}
};

/**
 * City Council panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_COUNCIL = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'council',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('City Council');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let core = this.core();
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Tips',
			'Production',
			'Housing',
			'Municipal',
			'Mercenary',
			'Achievements'
		]));
		let _t = '<div class="achievements-list">';
		for (let i = 0; i < civitas.ACHIEVEMENTS.length; i++) {
			_t += '<div data-handle="' + civitas.ACHIEVEMENTS[i].handle + '" class="achievement">' +
				'<div class="left">' +
					'<div class="ach img"></div>' +
					'<div class="ach points">' + civitas.ACHIEVEMENTS[i].points + '</div>' +
				'</div>' +
				'<div class="right">' +
					'<div class="inner">' +
						'<h2>' + civitas.ACHIEVEMENTS[i].name + '</h2>' +
						civitas.ACHIEVEMENTS[i].description +
					'</div>' +
					'<div class="time-ago"></div>' +
				'</div>' +
			'</div>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-achievements').empty().append(_t);
		$(this.handle).on('click', '.view-merc', function () {
			let _army = parseInt($(this).data('id'));
			let data = civitas.MERCENARIES[_army];
			core.ui().open_panel(civitas.PANEL_ARMY, data);
			return false;
		}).on('click', '.raid-merc', function () {
			let _army = parseInt($(this).data('id'));
			core.ui().error('Not implemented yet.');
			return false;
		}).on('click', '.disband-merc', function () {
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						let _army = parseInt($(this).data('id'));
						core.get_settlement().release_mercenary(_army);
						core.save_and_refresh();
					}
				},
				'Are you sure you want to release this mercenary army? You won`t be able to use them anymore!'
			);
			return false;
		}).on('click', '.building-info', function() {
			let handle = $(this).data('handle');
			let panel = civitas['PANEL_' + handle.toUpperCase()];
			let building_data = core.get_building_config_data(handle);
			if (handle && building_data) {
				if (typeof panel !== 'undefined') {
					core.ui().open_panel(panel, building_data);
				} else {
					core.ui().open_panel(civitas.PANEL_BUILDING, building_data, true);
				}
			}
			return false;
		}).on('click', '.pause', function () {
			let handle = $(this).data('handle');
			let building = core.get_settlement().get_building(handle);
			if (building && building.stop_production()) {
				$(this).removeClass('pause').addClass('start');
				$(this).attr('title', 'Start production');
			}
			return false;
		}).on('click', '.start', function () {
			let handle = $(this).data('handle');
			let building = core.get_settlement().get_building(handle);
			if (building && building.start_production()) {
				$(this).removeClass('start').addClass('pause');
				$(this).attr('title', 'Stop production');
			}
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let settlement = core.get_settlement();
		let settlements = core.get_settlements();
		let buildings = settlement.get_buildings();
		let resources = settlement.get_resources();
		let achievements = core.achievements();
		let advices = core.advice();
		let total_costs = 0;
		let total_tax = 0;
		let army_data;
		let achievement_data;
		let building_data;
		let _z = '';
		let total_benefits = {
			fame: 0,
			espionage: 0,
			research: 0,
			faith: 0
		}
		let mercenary = settlement.mercenary();
		let _t = '<p>Mercenary armies are available to hire for a fixed price, they do not cost additional resources but they are only available for raiding and campaign missions, they do not participate in the defense of your city.</p>' +
			'<p>Also, keep in mind that once a mercenary army is hired, they are at your disposal until the end of the current year.</p>' +
			'<div class="hired-mercenaries-list">';
		if (mercenary.length > 0) {
			_t += '<table class="normal">';
			for (let i = 0; i < mercenary.length; i++) {
				army_data = civitas.MERCENARIES[mercenary[i].id];
				_t += '<tr>' +
						'<td class="icon">' +
							'<img src="' + civitas.ASSETS_URL + 'images/assets/emblems/' + 
								army_data.icon + '.png" />' +
						'</td>' +
						'<td>' +
							'<p class="title">' + army_data.name + '</p>' +
							'<p class="description">' + army_data.description + '</p>' +
						'</td>' +
						'<td class="large">' +
							'<a title="View info on this mercenary army." data-id="' + mercenary[i].id + '" class="tips view-merc" href="#">view</a> ' +
							'<a title="Send this mercenary army on a raiding mission towards a specific settlement." data-id="' + i + '" class="tips raid-merc" href="#">raid</a> ' +
							'<a title="Disband this mercenary army? They will be available for hire later when you need them." data-id="' + i + '" class="tips disband-merc" href="#">release</a>' +
						'</td>' +
					'</tr>';

			}
			_t += '</table>';
		} else {
			_t += '<p>You have no mercenary armies hired for your city. Go to the World Market Trades and hire one.</p>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-mercenary').empty().append(_t);
		for (let f = 0; f < achievements.length; f++) {
			if (typeof achievements[f] !== 'undefined') {
				$(this.handle + ' .achievement[data-handle=' + achievements[f].handle + ']').addClass('has');
				$(this.handle + ' .achievement[data-handle=' + achievements[f].handle + '] .time-ago')
					/*.attr("title", achievements[f].date)*/
					.html(civitas.utils.time_since(achievements[f].date) + ' ago');
			}
		}
		_t = '<img class="avatar right" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + settlement.ruler().avatar + '.png" />' +
			'<dl>' +
				'<dt>Current date</dt>' +
				'<dd class="citydate">' + core.format_date() + '</dd>' +
				'<dt>Ruler</dt>' +
				'<dd>' + settlement.ruler().name + '</dd>' +
				'<dt>Climate</dt>' +
				'<dd>' + settlement.climate().name + '</dd>' +
				'<dt>Season</dt>' +
				'<dd>' + core.season().name + '</dd>' +
				'<dt>Personality</dt>' +
				'<dd>' + settlement.personality().name + '</dd>' +
				'<dt>Nationality</dt>' +
				'<dd>' + settlement.nationality().name + '</dd>' +
				'<dt>Population</dt>' +
				'<dd>' + civitas.utils.nice_numbers(settlement.population()) + '</dd>' +
				'<dt>Achievement Points</dt>' +
				'<dd>' + core.achievement_points() + '</dd>' +
				'<dt>Religion</dt>' +
				'<dd>' + settlement.religion().name + '</dd>' +
				'<dt>Level</dt>' +
				'<dd>' + settlement.level() + '</dd>' +
				'<dt>Fame</dt>' +
				'<dd>' + core.ui().progress(settlement.fame() * 100 / core.level_to_fame(settlement.level()), 'small', civitas.utils.nice_numbers(settlement.fame()) + ' / ' + civitas.utils.nice_numbers(core.level_to_fame(settlement.level()))) + '</dd>' +
				'<dt>Prestige</dt>' +
				'<dd>' + core.ui().progress((settlement.prestige() * 100) / civitas.MAX_PRESTIGE_VALUE, 'small', settlement.prestige() + ' / ' + civitas.MAX_PRESTIGE_VALUE) + '</dd>' +
				'<dt>Espionage</dt>' +
				'<dd>' + core.ui().progress((settlement.espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'small', settlement.espionage() + ' / ' + civitas.MAX_ESPIONAGE_VALUE) + '</dd>' +
				'<dt>Faith</dt>' +
				'<dd>' + core.ui().progress((settlement.faith() * 100) / civitas.MAX_FAITH_VALUE, 'small', settlement.faith() + ' / ' + civitas.MAX_FAITH_VALUE) + '</dd>' +
				'<dt>Research</dt>' +
				'<dd>' + core.ui().progress((settlement.research() * 100) / civitas.MAX_RESEARCH_VALUE, 'small', settlement.research() + ' / ' + civitas.MAX_RESEARCH_VALUE) + '</dd>' +
			'</dl>';
		$(this.handle + ' #tab-info').empty().append(_t);
		_t = '';
		if (advices.length > 0) {
			_t += '<ul class="advices">';
			for (let z = 0; z < advices.length; z++) {
				_t += '<li>' + advices[z] + '</li>';
			}
			_t += '</ul>';
		}
		$(this.handle + ' #tab-tips').empty().append(_t);
		_t = '<table class="normal">' +
			'<thead>' +
				'<tr>' +
					'<td></td>' +
					'<td class="tips center" title="Current level / Maximum level">Level</td>' +
					'<td>Raises</td>' +
					'<td>Research</td>' +
					'<td>Uses</td>' +
				'</tr>' +
			'</thead>';
		for (let l = 0; l < buildings.length; l++) {
			if (buildings[l].is_municipal_building()) {
				building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td><a href="#" class="building-info" data-handle="' + buildings[l].get_handle() + '">' + buildings[l].get_name() + '</a></td>' +
					'<td class="center">' + buildings[l].get_level() + ' / ' + (typeof building_data.levels !== 'undefined' ? building_data.levels : 1) + '</td>' +
					'<td>';
					if (building_data.production) {
						for (let item in building_data.production) {
							total_benefits[item] += (buildings[l].has_problems() === false) ? (buildings[l].get_level() * building_data.production[item] + core.get_prod_modifier(building_data)) : 0;
							_t += ' +' + buildings[l].get_level() * building_data.production[item] + ' ' + core.ui().resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.production) {
						for (let item in building_data.production) {
							if (core.get_prod_modifier(building_data) > 0) {
								_t += ' +' + core.get_prod_modifier(building_data) + ' ' + core.ui().resource_small_img(item);
							}
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						if (Array.isArray(building_data.materials)) {
							for (let i = 0; i < building_data.materials.length; i++) {
								for (let y in building_data.materials[i]) {
									total_costs += (buildings[l].has_problems() === false) ? building_data.materials[i][y] : 0;
									_t += ' -' + building_data.materials[i][y] + ' ' + core.ui().resource_small_img(y);
								}
							}
						} else {
							for (let item in building_data.materials) {
								total_costs += (buildings[l].has_problems() === false) ? building_data.materials[item] : 0;
								_t += ' -' + building_data.materials[item] + ' ' + core.ui().resource_small_img(item);
							}
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		for (let item in total_benefits) {
			if (total_benefits[item] > 0) {
				_z += ' +' + total_benefits[item] + ' ' + core.ui().resource_small_img(item);
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td>Total</td>' +
						'<td></td>' +
						'<td colspan="2">' + _z + '</td>' +
						'<td>' + (total_costs > 0 ? '-' : '') + total_costs + ' ' + core.ui().resource_small_img('coins') + '</td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$(this.handle + ' #tab-municipal').empty().append(_t);
		_t = '<table class="normal">' +
			'<thead>' +
				'<tr>' +
					'<td></td>' +
					'<td class="tips center" title="Current level / Maximum level">Level</td>' +
					'<td>Tax</td>' +
					'<td>Research</td>' +
					'<td>Materials</td>' +
				'</tr>' +
			'</thead>';
		for (let l = 0; l < buildings.length; l++) {
			if (buildings[l].is_housing_building()) {
				building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td><a href="#" class="building-info" data-handle="' + buildings[l].get_handle() + '">' + buildings[l].get_name() + '</a></td>' +
					'<td class="center">' + buildings[l].get_level() + ' / ' + (typeof building_data.levels !== 'undefined' ? building_data.levels : 1) + '</td>' +
					'<td>';
					if (building_data.tax) {
						total_tax += (buildings[l].has_problems() === false) ? buildings[l].get_tax_amount(building_data.tax) : 0;
						_t += ' +' + buildings[l].get_level() * building_data.tax + ' ' + core.ui().resource_small_img('coins');
					}
				_t += '</td>' +
					'<td>';
					if (building_data.tax) {
						if (core.get_tax_modifier(building_data) > 0) {
							_t += ' +' + core.get_tax_modifier(building_data) + ' ' + core.ui().resource_small_img('coins');
						}
					}
				_t += '</td>' +
					'<td>';
					if (typeof building_data.materials !== 'undefined') {
						if (Array.isArray(building_data.materials)) {
							for (let i = 0; i < building_data.materials.length; i++) {
								for (let y in building_data.materials[i]) {
									_t += ' -' + building_data.materials[i][y] + ' ' + core.ui().resource_small_img(y);
								}
							}
						} else {
							for (let item in building_data.materials) {
								_t += ' -' + building_data.materials[item] + ' ' + core.ui().resource_small_img(item);
							}
						}
					}
				_t += '</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td>Income</td>' +
						'<td></td>' +
						'<td colspan="2">+' + total_tax + ' ' + core.ui().resource_small_img('coins') + '</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$(this.handle + ' #tab-housing').empty().append(_t);
		_t = '<table class="normal">' +
			'<thead>' +
				'<tr>' +
					'<td></td>' +
					'<td class="tips center" title="Current level / Maximum level">Level</td>' +
					'<td>Production</td>' +
					'<td>Research</td>' +
					'<td>Materials</td>' +
					'<td></td>' +
				'</tr>' +
			'</thead>';
		for (let l = 0; l < buildings.length; l++) {
			if (buildings[l].is_production_building() && buildings[l].is_municipal_building() === false) {
				building_data = buildings[l].get_building_data();
				_t += '<tr' + ((buildings[l].has_problems() === false) ? '' : ' class="notify"') +'>' +
					'<td><a href="#" class="building-info" data-handle="' + buildings[l].get_handle() + '">' + buildings[l].get_name() + '</a></td>' +
					'<td class="center">' + buildings[l].get_level() + ' / ' + (typeof building_data.levels !== 'undefined' ? building_data.levels : 1) + '</td>' +
					'<td>';
					if (building_data.production) {
						for (let item in building_data.production) {
							_t += ' +' + (buildings[l].get_level() * building_data.production[item]) + ' ' + core.ui().resource_small_img(item);
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.production) {
						for (let item in building_data.production) {
							if (core.get_prod_modifier(building_data) > 0) {
								_t += ' +' + core.get_prod_modifier(building_data) + ' ' + core.ui().resource_small_img(item);
							}
						}
					}
				_t += '</td>' +
					'<td>';
					if (building_data.materials) {
						if (Array.isArray(building_data.materials)) {
							for (let i = 0; i < building_data.materials.length; i++) {
								for (let y in building_data.materials[i]) {
									_t += ' -' + building_data.materials[i][y] + ' ' + core.ui().resource_small_img(y);
								}
							}
						} else {
							for (let item in building_data.materials) {
								_t += ' -' + building_data.materials[item] + ' ' + core.ui().resource_small_img(item);
							}
						}
					}
				_t += '</td>' +
					'<td class="center">' + 
						'<a title="' + (!buildings[l].is_stopped() ? 'Stop production' : 'Start production') + '" data-handle="' + buildings[l].get_handle() + '" class="tips ' + (!buildings[l].is_stopped() ? 'pause' : 'start') + ' btn" href="#"></a>' +
					'</td>' +
				'</tr>';
			}
		}
		_t += '<tfoot>' +
					'<tr>' +
						'<td></td>' +
						'<td class="center">Level</td>' +
						'<td>Production</td>' +
						'<td>Research</td>' +
						'<td>Materials</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$(this.handle + ' #tab-production').empty().append(_t);
	}
};

/**
 * Army panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_ARMY = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'army',
		
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		let army = params.data;
		$(this.handle + ' header').append(army.name);
		let tabs = ['Info'];
		if (my_settlement.num_soldiers(army.army) > 0) {
			tabs.push('Soldiers');
		}
		if (my_settlement.num_ships(army.navy) > 0) {
			tabs.push('Ships');
		}
		$(this.handle + ' section').append(core.ui().tabs(tabs));
		$(this.handle + ' #tab-info').append('<img class="avatar right" src="' + civitas.ASSETS_URL + 'images/assets/emblems/' + ((typeof army.icon !== 'undefined') ? army.icon : '22') + '.png" />' + '<p>' + army.description + '</p>');
		if (my_settlement.num_soldiers(army.army) > 0) {
			$(this.handle + ' #tab-soldiers').append(core.ui().army_list(army.army));
		}
		if (my_settlement.num_ships(army.navy) > 0) {
			$(this.handle + ' #tab-ships').append(core.ui().navy_list(army.navy));
		}
	}
};

/**
 * Buildings panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_BUILDINGS = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'buildings',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('City Buildings');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		let resources = settlement.get_resources();
		let el = this.handle;
		let building;
		let building_data;
		let building_image;
		let _t = '<div class="left buildings">';
		_t += '<div class="tabs">' +
				'<ul>';
		for (let category in civitas.BUILDINGS_CATEGORIES) {
			_t += '<li><a href="#tab-' + category.toLowerCase() + '">' + category + '</a></li>';
		}
		_t += '</ul>';
		for (let category in civitas.BUILDINGS_CATEGORIES) {
			_t += '<div id="tab-' + category.toLowerCase() + '" class="bldg-tabs">';
			for (let i = 0; i < civitas.BUILDINGS_CATEGORIES[category].length; i++) {
				building = civitas.BUILDINGS_CATEGORIES[category][i];
				if ($.inArray(building, civitas['BUILDINGS_ALL']) !== -1) {
					building_data = core.get_building_config_data(building);
					if (building_data) {
						let _i = settlement.is_building_built(building_data.handle);
						building_image = building_data.handle;
						if (typeof building_data.tax !== 'undefined') {
							building_image = building_data.handle.slice(0, 5);
						}
						let _image = (typeof building_data.visible_upgrades === 'undefined' || building_data.visible_upgrades === false) ? building_image : building_image + '1';
						_t += '<div data-handle="' + building_data.handle + '" class="building-item' + ((_i === true) ? ' disabled' : '') + '">' +
								'<span class="title">' + building_data.name + '</span>' +
								'<img class="building" src="' + civitas.ASSETS_URL + 'images/assets/buildings/' + _image + '.png" />' +
							'</div>';
					}
				}
			}
			_t += '</div>';
		}
		_t += '</div>' +
			'</div>' +
			'<div class="buildings-info right">' +
				'<div class="b-desc"></div>' +
				'<div class="column-small">' +
					'<fieldset class="levels">' +
						'<legend>Levels</legend>' +
						'<div class="b-levels"></div>' +
					'</fieldset>' +
					'<fieldset>' +
						'<legend>Cost</legend>' +
						'<div class="b-cost"></div>' +
					'</fieldset>' +
				'</div>' +
				'<div class="column-small">' +
					'<fieldset class="materials">' +
						'<legend>Materials</legend>' +
						'<div class="b-mats"></div>' +
					'</fieldset>' +
					'<fieldset class="production">' +
						'<legend>Production</legend>' +
						'<div class="b-prod"></div>' +
					'</fieldset>' +
					'<fieldset class="extra">' +
						'<legend>Extra materials</legend>' +
						'<div class="b-chance"></div>' +
					'</fieldset>' +
					'<fieldset class="storage">' +
						'<legend>Storage</legend>' +
						'<div class="b-store"></div>' +
					'</fieldset>' +
					'<fieldset class="taxes">' +
						'<legend>Taxes</legend>' +
						'<div class="b-tax"></div>' +
					'</fieldset>' +
				'</div>' +
				'<div class="column-full">' +
					'<fieldset>' +
						'<legend>Requirements</legend>' +
						'<div class="b-req"></div>' +
					'</fieldset>' +
				'</div>' +
				'<div class="toolbar"></div>' +
			'</div>';
		$(el + ' section').append(_t);
		$(el).on('click', '.building-item', function () {
			$(el).addClass('expanded');
			$(el + ' .building-item').removeClass('active');
			$(this).addClass('active');
			$(el + ' .b-chance, ' + el + ' .b-tax, ' + el + ' .b-store, ' + el + ' .b-req, ' + el + ' .b-cost, ' + el + ' .b-name, ' + el + ' .b-desc, ' + el + ' .b-mats, ' + el + ' .b-prod, ' + el + ' .toolbar').empty();
			let handle = $(this).data('handle');
			let building = core.get_building_config_data(handle);
			if (building) {
				$(el + ' header span').empty().html('City Buildings - ' + building.name);
				$(el + ' .b-desc').html(building.description);
				let _z = '<dl class="nomg">';
				for (let y in building.cost) {
					_z += '<dt>' + civitas.utils.nice_numbers(building.cost[y]) + '</dt>' +
						'<dd><img class="small tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + y + '.png" /></dd>';
				}
				_z += '</dl>';
				$(el + ' .b-cost').append(_z);
				if (typeof building.levels !== 'undefined') {
					$(el + ' .b-levels').empty().append('<dl class="nomg">' +
						'<dt>Upgrades</dt>' +
							'<dd>' + building.levels + '</dd>' +
					'</dl>');
					$('fieldset.levels').show();
				} else {
					$('fieldset.levels').hide();
				}
				if (typeof building.requires !== 'undefined') {
					_z = '<dl class="nomg">';
					if (typeof building.requires.buildings !== 'undefined') {
						for (let item in building.requires.buildings) {
							_z += '<dt>Building</dt>' +
								'<dd>' + core.get_building_config_data(item).name + ' (level ' + building.requires.buildings[item] + ')</dd>';
						}
					}
					if (typeof building.requires.research !== 'undefined') {
						_z += '<dt>Research</dt>' +
							'<dd>' + core.get_research_config_data(building.requires.research).name + '</dd>';
					}
					if (typeof building.requires.climate !== 'undefined') {
						let climates = [];
						for (let i = 0; i < building.requires.climate.length; i++) {
							climates.push(civitas.CLIMATES[building.requires.climate[i]].capitalize());
						}
						_z += '<dt>Climate</dt>' +
							'<dd>' + climates.join(', ') + '</dd>';
					}
					_z += '<dt>City level</dt>' +
						'<dd>' + building.requires.settlement_level + '</dd>' +
					'</dl>';
					$(el + ' .b-req').append(_z);
				}
				if (typeof building.chance !== 'undefined') {
					_z = '<dl class="nomg">';
					for (let chance in building.chance) {
						_z += '<dt>' + building.chance[chance] * 100 + '%</dt>' +
							'<dd><img class="small tips" title="' + civitas.utils.get_resource_name(chance) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + chance + '.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-chance').append(_z);
					$('fieldset.extra').show();
				} else {
					$('fieldset.extra').hide();
				}
				if (typeof building.production !== 'undefined') {
					_z = '<dl class="nomg">';
					for (let y in building.production) {
						_z += '<dt>' + building.production[y] + '</dt>' +
							'<dd><img class="small tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + y + '.png" /></dd>';
					}
					_z += '</dl>';
					$(el + ' .b-prod').append(_z);
					$('fieldset.production').show();
				} else {
					$('fieldset.production').hide();
				}
				if (typeof building.materials !== 'undefined') {
					_z = '<dl class="nomg">';
					if (Array.isArray(building.materials)) {
						for (let i = 0; i < building.materials.length; i++) {
							for (let y in building.materials[i]) {
								_z += '<dt>' + building.materials[i][y] + '</dt>' +
									'<dd><img class="small tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + y + '.png" /></dd>';
							}
						}
					} else {
						for (let y in building.materials) {
							_z += '<dt>' + building.materials[y] + '</dt>' +
								'<dd><img class="small tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + y + '.png" /></dd>';
						}
					}
					_z += '</dl>';
					$(el + ' .b-mats').append(_z);
					$('fieldset.materials').show();
				} else {
					$('fieldset.materials').hide();
				}
				if (typeof building.tax !== 'undefined') {
					_z = '<dl class="nomg">' +
							'<dt>Tax</dt>' +
							'<dd>' + building.tax + '<img class="small tips" title="Coins" src="' + civitas.ASSETS_URL + 'images/assets/resources/coins.png" /></dd>' +
						'</dl>';
					$(el + ' .b-tax').append(_z);
					$('fieldset.taxes').show();
				} else {
					$('fieldset.taxes').hide();
				}
				if (typeof building.storage !== 'undefined') {
					$('fieldset.taxes, fieldset.materials').hide();
					_z = '<dl class="nomg">' +
							'<dt>' + building.storage + '</dt>' +
							'<dd><img class="small tips" title="Storage Space" src="' + civitas.ASSETS_URL + 'images/assets/resources/storage.png" /></dd>' +
						'</dl>';
					$(el + ' .b-store').append(_z);
					$('fieldset.storage').show();
				} else {
					$('fieldset.storage').hide();
				}
				let _i = settlement.is_building_built(building.handle);
				if (_i !== true) {
					$(el + ' .toolbar').append('<a href="#" class="btn build" data-handle="' + building.handle + '">Build</a>');
				} else {
					//$(el + ' .toolbar').append('You already constructed this building.');
				}
				$(el + ' .right').show();
			}
			return false;
		}).on('click', '.btn.build', function () {
			let handle = $(this).data('handle');
			if (settlement.build(handle) !== false) {
				$(el + ' .building-item[data-handle=' + handle + ']').addClass('disabled');
				$(el + ' .toolbar').empty();//.append('You already constructed this building.');
			}
			return false;
		});
	}
};

/**
 * Trades panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_TRADES = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'trades',
	
	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().generic_panel_template('World Market');
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		let auctions = core.auctioneer();
		let el = this.handle;
		let _t = '';
		let tabs = [
			'Export',
			'Import',
			'Mercenaries',
			'BlackMarket',
			'Prices'
		];
		if (settlement.can_trade()) {
			tabs.push('Auctioneer');
		}
		$(el + ' section').append(core.ui().tabs(tabs));
		$(el + ' #tab-import').append('<p>Below is a list of goods that the other cities in the world are looking to sell. The goods replenish every six months, so plan accordingly. You will need to build a Trading Post before being able to sell goods.</p>' +
			'<div class="contents"></div>');
		$(el + ' #tab-export').append('<p>Below is a list of goods that the other cities in the world are looking to buy. The goods replenish every six months, so plan accordingly. You will need to build a Trading Post before being able to buy goods.</p>' +
			'<div class="contents"></div>');
		$(el + ' #tab-mercenaries').append('<p>Below is a list of mercenary armies that are looking for hire. Mercenaries are available only for raiding and conquest missions, they do not join your city so they will not participate in defense.</p>' +
			'<div class="contents"></div>');
		$(el + ' #tab-blackmarket').append('<p>The Black Market is a way to dump your excess materials when you`re in need of emptying your warehouses, but expect a steep price drop (taxes for all Black Market trades are <strong>' + civitas.BLACK_MARKET_DISCOUNT + '%</strong>). The goods will be taken immediately from your warehouses but you will receive the coins at the <strong>start of the next month</strong>. Also, you get <strong>no prestige</strong> from Black Market trades.</p>' +
			'<div class="contents"></div>');
		$(el + ' #tab-auctioneer').append('<p>The Auctioneer is an automated way to purchase goods from the world trade market. When the requested goods become available, the Auctioneer purchases them automatically, taking an extra <strong>' + civitas.AUCTIONEER_DISCOUNT + '%</strong> tax on the total amount of coins paid for the goods.</p>' +
			'<div class="contents"></div>');
		$(el + ' #tab-prices').append('<div class="contents"></div>');
		$(el + ' #tab-blackmarket > .contents').append('' +
			'<table class="normal">' +
				'<thead>' +
					'<tr>' +
						'<td>Resources: <select class="bm-materials"></select></td>' +
						'<td>Quantity&nbsp;&nbsp;&nbsp;&nbsp;' +
							'<select class="bm-quantity">' +
								'<option value="0">-- select --</option>' +
								'<option value="10">10</option>' +
								'<option value="100">100</option>' +
								'<option value="1000">1000</option>' +
								'<option value="10000">10000</option>' +
							'</select>&nbsp;&nbsp;&nbsp;&nbsp;or enter manually&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" min="1" max="100000" placeholder="amount" class="small bm-qty-manual" />' +
						'</td>' +
						'<td>' +
							'<a title="List goods on Black Market" class="tips bmarket" href="#">List</a>' +
						'</td>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
				'</tbody>' +
			'</table>');
		if (settlement.can_trade()) {
			$(el + ' #tab-auctioneer > .contents').append('' +
				'<table class="normal">' +
					'<thead>' +
						'<tr>' +
							'<td>Resources: <select class="auc-materials"></select></td>' +
							'<td>Quantity&nbsp;&nbsp;&nbsp;&nbsp;' +
								'<select class="auc-quantity">' +
									'<option value="0">-- select --</option>' +
									'<option value="10">10</option>' +
									'<option value="100">100</option>' +
									'<option value="1000">1000</option>' +
									'<option value="10000">10000</option>' +
								'</select>&nbsp;&nbsp;&nbsp;&nbsp;or enter manually&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" min="1" max="100000" placeholder="amount" class="small auc-qty-manual" />' +
							'</td>' +
							'<td>' +
								'<a title="Search for the goods" class="tips auction" href="#">Search</a>' +
							'</td>' +
						'</tr>' +
					'</thead>' +
					'<tbody>' +
					'</tbody>' +
				'</table>');
		}
		let out = '<option value="0">-- select --</option>';
		let resources = settlement.get_resources();
		for (let item in resources) {
			if (!civitas.utils.is_virtual_resource(item)) {
				out += '<option value="' + item + '"> ' + civitas.utils.get_resource_name(item) + '</option>';
			}
		}
		$(el + ' .bm-materials, ' + el + ' .auc-materials').empty().append(out);
		$(el).on('click', '.settlement-info', function () {
			let _settlement_name = $(this).data('settlement');
			core.ui().open_panel(civitas.PANEL_SETTLEMENT, core.get_settlement(_settlement_name));
			return false;
		}).on('click', '.buy:not(.disabled)', function () {
			if (!settlement.can_trade()) {
				core.ui().error('You will need to construct a Trading Post before being able to trade resources with other settlements.');
				return false;
			}
			let handle = $(this).data('settlement');
			let resource = $(this).data('resource');
			if (settlement.buy_from_settlement(handle, resource) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.sell:not(.disabled)', function () {
			if (!settlement.can_trade()) {
				core.ui().error('You will need to construct a Trading Post before being able to trade resources with other settlements.');
				return false;
			}
			let handle = $(this).data('settlement');
			let resource = $(this).data('resource');
			if (settlement.sell_to_settlement(handle, resource) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.auction', function () {
			if (!settlement.can_trade()) {
				core.ui().error('You will need to construct a Trading Post before being able to assign an Auctioneer to buy items.');
				return false;
			}
			let resource = $('.auc-materials').val();
			let auto_amount = $('.auc-quantity').val();
			let manual_amount = $('.auc-qty-manual').val();
			let amount = manual_amount === '' ? parseInt(auto_amount) : parseInt(manual_amount);
			if (resource !== '0' && amount > 0 && amount <= 10000) {
				if (core.auctioneer_add(resource, amount)) {
					self.on_refresh();
					$('.auc-qty-manual').val('');
				}
			} else {
				core.ui().error('Select a resource and the amount you want the Auctioneer to search for.');
			}
			return false;
		}).on('click', '.bmarket', function () {
			let resource = $('.bm-materials').val();
			let auto_amount = $('.bm-quantity').val();
			let manual_amount = $('.bm-qty-manual').val();
			let amount = manual_amount === '' ? parseInt(auto_amount) : parseInt(manual_amount);
			if (resource !== '0' && amount > 0) {
				if (core.black_market_add(resource, amount)) {
					self.on_refresh();
					$('.bm-qty-manual').val('');
				}
			} else {
				core.ui().error('Select a resource and the amount of it you want to place on the Black Market.');
			}
			return false;
		}).on('click', '.auc-resources-delete', function() {
			let resource = $(this).data('id');
			delete auctions[resource];
			self.generate_table_data();
			return false;
		}).on('click', '.recruit:not(.disabled)', function () {
			let handle = $(this).data('handle');
			if (settlement.recruit_mercenary_army(handle) !== false) {
				self.on_refresh();
			}
			return false;
		}).on('click', '.view-army:not(.disabled)', function () {
			let army = parseInt($(this).data('id'));
			let army_data = civitas.MERCENARIES[army];
			core.ui().open_panel(civitas.PANEL_ARMY, army_data);
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let my_settlement = core.get_settlement();
		let settlement = core.get_settlement();
		let settlements = core.get_settlements();
		let out = '';
		let bm = core.black_market();
		for (let item in bm) {
			out += '<tr>' +
					'<td>Amount: ' + bm[item].amount + ' ' + core.ui().resource_small_img(item) + '</td>' +
					'<td>Total price: ' + bm[item].price + ' ' + core.ui().resource_small_img('coins') + '</td>' +
					'<td>&nbsp;</td>' +
				'</tr>';
		}
		$('#tab-blackmarket > .contents > table > tbody').empty().append(out);
		if (settlement.can_trade()) {
			this.generate_table_data = function() {
				let out = '';
				let auctions = core.auctioneer();
				for (let item in auctions) {
					out += '<tr>' +
							'<td>Amount: ' + auctions[item].amount + ' ' + core.ui().resource_small_img(item) + '</td>' +
							'<td>Total price: ' + auctions[item].price + ' ' + core.ui().resource_small_img('coins') + '</td>' +
							'<td>' +
								'<a title="Remove this resource from the Auctioneer." href="#" data-id="' + item + '" class="tips auc-resources-delete">-</a>' +
							'</td>' +
						'</tr>';
				}
				$('#tab-auctioneer > .contents > table > tbody').empty().append(out);
			};
			this.generate_table_data();
		}
		out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Discount</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (let z = 1; z < settlements.length; z++) {
			let settlement = settlements[z];
			if (my_settlement.status()[settlements[z].id()].influence < 20) {
				break;
			}
			let trades = settlements[z].get_trades();
			let resources = settlement.get_resources();
			if (trades !== null) {
				let imports = trades.imports;
				for (let item in imports) {
					let discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
					let discount_price = Math.ceil(civitas.RESOURCES[item].price - discount);
					out += '<tr>' +
							'<td><a href="#" class="settlement-info tips" data-settlement="' + settlements[z].name() + '" title="View info about this settlement.">' + settlements[z].name() + '</a></td>' +
							'<td class="center">' + core.ui().resource_small_img(item) + '</td>' +
							'<td class="center">' + imports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * imports[item]) + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' +
								'<a title="Sell those goods" data-resource="' + item + '" data-settlement="' + settlements[z].name() + '" class="tips sell' + (imports[item] === 0 ? ' disabled' : '') + '" href="#">sell</a>' +
							'</td>' +
						'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Discount</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-export > .contents').empty().append(out);
		out = '<table class="mercenaries">';
		for (let i = 0; i < civitas.MERCENARIES.length; i++) {
			out += '<tr>' +
					'<td class="icon">' +
						'<img src="' + civitas.ASSETS_URL + 'images/assets/emblems/' + civitas.MERCENARIES[i].icon + '.png" />' +
					'</td>' +
					'<td>' +
						'<p class="title">' + civitas.MERCENARIES[i].name + '</p>' +
						'<p class="description">' + civitas.MERCENARIES[i].description + '</p>' +
					'</td>' +
					'<td>' + 
						civitas.utils.nice_numbers(civitas.MERCENARIES[i].cost) + core.ui().resource_small_img('coins') + 
					'</td>' +
					'<td class="medium">' +
						'<a title="View info on this mercenary army" data-id="' + i + '" class="tips view-army" href="#">view</a> ' + core.ui().panel_btn('recruit', 'Recruit this mercenary army', civitas.MERCENARIES[i].handle, 'recruit', core.get_settlement().is_mercenary_recruited(civitas.MERCENARIES[i].handle)) +
					'</td>' +
				'</tr>';
		}
		out += '</table>';
		$('#tab-mercenaries > .contents').empty().append(out);
		out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Tax</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
					'</thead>';
		for (let z = 1; z < settlements.length; z++) {
			let settlement = settlements[z];
			if (my_settlement.status()[settlements[z].id()].influence < 20) {
				break;
			}
			let trades = settlements[z].get_trades();
			let resources = settlement.get_resources();
			if (trades !== null) {
				let exports = trades.exports;
				for (let item in exports) {
					let discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
					let discount_price = Math.ceil(civitas.RESOURCES[item].price + discount);
					out += '<tr>' +
							'<td>' + settlements[z].name() + '</td>' +
							'<td class="center">' + core.ui().resource_small_img(item) + '</td>' +
							'<td class="center">' + exports[item] + '</td>' +
							'<td class="center">' + civitas.RESOURCES[item].price + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' + discount_price + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' + Math.ceil(discount_price * exports[item]) + core.ui().resource_small_img('coins') + '</td>' +
							'<td class="center">' +
								'<a title="Buy those goods" data-resource="' + item + '" data-settlement="' + settlements[z].name() + '" class="tips buy' + (exports[item] === 0 ? ' disabled' : '') + '" href="#">buy</a>' +
							'</td>' +
						'</tr>';
				}
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>City</td>' +
						'<td class="center">Goods</td>' +
						'<td class="center">Amount</td>' +
						'<td class="center">Price</td>' +
						'<td class="center">Tax</td>' +
						'<td class="center">City Price</td>' +
						'<td class="center">Total price</td>' +
						'<td></td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-import > .contents').empty().append(out);
		out = '<table class="normal">' +
					'<thead>' +
					'<tr>' +
						'<td>Resource</td>' +
						'<td class="center">Icon</td>' +
						'<td class="center">Base Price</td>' +
						'<td class="center tips" title="This is the price you get for selling one unit of the resource to another settlement, base price minus the <strong>' + civitas.TRADES_DISCOUNT + '%</strong> export taxes.">Sell Price</td>' +
						'<td class="center tips" title="This is the price you get for buying one unit of the resource from another settlement, base price plus the <strong>' + civitas.TRADES_ADDITION + '%</strong> import taxes.">Buy Price</td>' +
						'<td class="center tips" title="This is the price you get for placing one unit of the resource on the Black Market, base price minus the <strong>' + civitas.BLACK_MARKET_DISCOUNT + '%</strong> taxes.">Black Market</td>' +
						'<td class="center tips" title="This is the price you get for buying one unit of the resource via the Auctioneer, base price plus the <strong>' + civitas.TRADES_ADDITION + '%</strong> import taxes and plus the <strong>' + civitas.AUCTIONEER_DISCOUNT + '%</strong> Auctioneer taxes.">Auctioneer</td>' +
						'<td class="center tips" title="If the resource is listed as produced, that possibility depends on the location and climate of your settlement (ex. tropical settlements can build <strong>Sugar Farms</strong> and produce <strong>Sugar</strong>).">Type</td>' +
					'</tr>' +
					'</thead>';
		for (let item in civitas.RESOURCES) {
			if (!civitas.utils.is_virtual_resource(item)) {
				let discount = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_ADDITION) / 100);
				let tax = Math.ceil((civitas.RESOURCES[item].price * civitas.TRADES_DISCOUNT) / 100);
				let bm_tax = Math.ceil((civitas.RESOURCES[item].price * civitas.BLACK_MARKET_DISCOUNT) / 100);
				let auc_tax = Math.ceil((civitas.RESOURCES[item].price * civitas.AUCTIONEER_DISCOUNT) / 100);
				out += '<tr>' +
					'<td>' + civitas.RESOURCES[item].name + '</td>' +
					'<td class="center">' + core.ui().resource_small_img(item) + '</td>' +
					'<td class="center">' + civitas.RESOURCES[item].price + core.ui().resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price - tax) + core.ui().resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price + discount) + core.ui().resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price - bm_tax) + core.ui().resource_small_img('coins') + '</td>' +
					'<td class="center">' + (civitas.RESOURCES[item].price + Math.ceil(discount + auc_tax)) + core.ui().resource_small_img('coins') + '</td>' +
					'<td class="center">' + ((civitas.RESOURCES[item].imported === true) ? 'imported' : 'produced') + '</td>' +
				'</tr>';
			}
		}
		out += '<tfoot>' +
					'<tr>' +
						'<td>Resource</td>' +
						'<td class="center">Icon</td>' +
						'<td class="center">Base Price</td>' +
						'<td class="center">Sell Price</td>' +
						'<td class="center">Buy Price</td>' +
						'<td class="center">Black Market</td>' +
						'<td class="center">Auctioneer</td>' +
						'<td class="center">Type</td>' +
					'</tr>' +
				'</tfoot>' +
			'</table>';
		$('#tab-prices > .contents').empty().append(out);
	}
};

/**
 * Barracks panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_BARRACKS = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'barracks',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Army'
		]));
		let _t = '<div class="army-list"></div>' +
				'<div class="army-recruiter">';
		for (let item in civitas.SOLDIERS) {
			_t += '<fieldset>' +
					'<legend>' + civitas.SOLDIERS[item].name + '</legend>' +
					'<div class="cost">' +
						'<dl class="nomg">';
			for (let res in civitas.SOLDIERS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SOLDIERS[item].cost[res]) + '</dt><dd>' + core.ui().resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
						'<dl class="nomg">' +
							'<dt>Attack</dt><dd>' + civitas.SOLDIERS[item].attack + '</dd>' +
							'<dt>Defense</dt><dd>' + civitas.SOLDIERS[item].defense + '</dd>' +
						'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="Recruit ' + civitas.SOLDIERS[item].name + '" class="tips recruit-soldier" src="' + civitas.ASSETS_URL + 'images/assets/army/' + item.toLowerCase() + '.png" />' +
				'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-army').empty().append(_t);
		$(this.handle).on('click', '.recruit-soldier', function () {
			let soldier = $(this).data('handle');
			let costs = civitas.SOLDIERS[soldier].cost;
			if (settlement.has_resources(costs)) {
				if (settlement.remove_resources(costs)) {
					if (settlement.recruit_soldier(soldier)) {
						core.ui().notify('A new ' + civitas.SOLDIERS[soldier].name + ' has been recruited.');
						self.on_refresh();
						return false;
					}
				}
			}
			core.ui().error('You don`t have enough resources to recruit a ' + civitas.SOLDIERS[soldier].name + '.');
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let settlement = core.get_settlement();
		let building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty().append(core.ui().building_panel(this.params_data, building.get_level()));
			$(this.handle + ' .army-list').empty().append('<fieldset>' +
					'<legend>Current Army</legend>' + core.ui().army_list(settlement.get_army(), true) +
				'</fieldset>');
		} else {
			this.destroy();
		}
	}
};

/**
 * Shipyard panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_SHIPYARD = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'shipyard',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let core = this.core();
		let settlement = core.get_settlement();
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Navy'
		]));
		let _t = '<div class="navy-list"></div>' +
				'<div class="navy-recruiter">';
		for (let item in civitas.SHIPS) {
			_t += '<fieldset>' +
					'<legend>' + civitas.SHIPS[item].name + '</legend>' +
					'<div class="cost">' +
						'<dl class="nomg">';
			for (let res in civitas.SHIPS[item].cost) {
				_t += '<dt>' + civitas.utils.nice_numbers(civitas.SHIPS[item].cost[res]) + 
					'</dt><dd>' + core.ui().resource_small_img(res) + '</dd>';
			}
			_t += '</dl>' +
					'</div>' +
					'<div class="info">' +
						'<dl class="nomg">' +
							'<dt>Attack</dt><dd>' + civitas.SHIPS[item].attack + '</dd>' +
							'<dt>Defense</dt><dd>' + civitas.SHIPS[item].defense + '</dd>' +
						'</dl>' +
					'</div>' +
					'<img data-handle="' + item + '" title="Recruit ' + civitas.SHIPS[item].name + '" class="tips recruit-ship" src="' + civitas.ASSETS_URL + 'images/assets/army/' + item.toLowerCase().replace(/ /g,"_") + '.png" />' +
				'</fieldset>';
		}
		_t += '</div>';
		$(this.handle + ' #tab-navy').empty().append(_t);
		$(this.handle).on('click', '.recruit-ship', function () {
			let ship = $(this).data('handle');
			let costs = civitas.SHIPS[ship].cost;
			if (settlement.has_resources(costs)) {
				if (settlement.remove_resources(costs)) {
					if (settlement.recruit_ship(ship)) {
						core.ui().notify('A new ' + civitas.SHIPS[ship].name + ' has been recruited.');
						self.on_refresh();
						return false;
					}
				}
			}
			core.ui().error('You don`t have enough resources to recruit a ' + civitas.SHIPS[ship].name + '.');
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let settlement = core.get_settlement();
		let building = settlement.get_building(this.params_data.handle);
		if (building) {
			let level = building.get_level();
			$(this.handle + ' #tab-info').empty().append(core.ui().building_panel(this.params_data, level));
			$(this.handle + ' .navy-list').empty().append('<fieldset>' +
					'<legend>Current Navy</legend>' + core.ui().navy_list(settlement.get_navy(), true) +
				'</fieldset>');
		} else {
			this.destroy();
		}
	}
};

/**
 * Church panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_CHURCH = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'church',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Faith',
			'Religion'
		]));
		$(this.handle).on('click', '.religion', function() {
			let id = parseInt($(this).data('id'));
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						settlement.change_religion(id);
					}
				},
				'Are you sure you want to switch religions? You will lose all your city`s faith!'
			);
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let settlement = core.get_settlement();
		let building = core.get_settlement().get_building(this.params_data.handle);
		let _t = '';
		if (building) {
			$(this.handle + ' #tab-info').empty().append(core.ui().building_panel(this.params_data, building.get_level()));
			_t = '<h2>Faith</h2>' + 
				'<div class="section">' + 
					core.ui().progress((settlement.faith() * 100) / civitas.MAX_FAITH_VALUE, 'large', settlement.faith() + ' / ' + civitas.MAX_FAITH_VALUE) +
				'</div>';
			$(this.handle + ' #tab-faith').empty().append(_t);
			_t = '<p>Changing your settlement`s religion requires <strong>' + civitas.MAX_FAITH_VALUE + '</strong> faith, each religion gives you access to different heroes in your Tavern and gives you a boost to the influence with the cities sharing the same religion.</p>' +
				'<div class="religion-list">';
			for (let i = 0; i < civitas.RELIGIONS.length; i++) {
				_t += '<div data-handle="' + civitas.RELIGIONS[i] + '" data-id="' + i + '" class="religion' + (settlement.religion().id === i ? ' selected' : '') + '"><span>' + civitas.RELIGIONS[i].capitalize() + '</span></div>';
			}
			_t += '</div>';
			$(this.handle + ' #tab-religion').empty().append(_t);
		} else {
			this.destroy();
		}
	}
};

/**
 * Embassy panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_EMBASSY = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'embassy',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let settlement = core.get_settlement();
		let settlements = core.get_settlements();
		let status = settlement.status();
		let building = core.get_settlement().get_building(this.params_data.handle);
		let level = building.get_level();
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Espionage',
			'Diplomacy'
		]));
		$(this.handle + ' #tab-diplomacy').empty().append('<div class="settlements-list"></div>');
		$(this.handle).on('click', '.view', function () {
			let _settlement_id = parseInt($(this).data('id'));
			let _settlement = core.get_settlement(_settlement_id);
			if (_settlement) {
				core.ui().open_panel(civitas.PANEL_SETTLEMENT, _settlement);
			}
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let settlement = core.get_settlement();
		let settlements = core.get_settlements();
		let status = settlement.status();
		let building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			let level = building.get_level();
			$(this.handle + ' #tab-info').empty().append(core.ui().building_panel(this.params_data, level));
			$(this.handle + ' #tab-espionage').empty().append(
				'<h2>Espionage points</h2>' +
				'<div class="section">' + 
					core.ui().progress((settlement.espionage() * 100) / civitas.MAX_ESPIONAGE_VALUE, 'large', settlement.espionage() + ' / ' + civitas.MAX_ESPIONAGE_VALUE) + 
				'</div>'
			);
			let _t = '<table class="normal">' +
				'<thead>' +
				'<tr>' +
					'<td>Settlement</td>' +
					'<td>Ruler</td>' +
					'<td>Influence</td>' +
					'<td>Religion</td>' +
					'<td>Status</td>' +
					'<td>Personality</td>' +
				'</tr>' +
				'</thead>';
			for (let i = 1; i < settlements.length; i++) {
				let _status = settlement.get_diplomacy_status(settlements[i].id());
				_t += '<tr>' +
						'<td>' +
							'<a data-id="' + settlements[i].id() + '" title="View info about this settlement." class="tips view" href="#">' + settlements[i].name() + '</a> ' +
						'</td>' +
						'<td class="icon">' +
							'<img class="avatar small" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + settlements[i].ruler().avatar + '.png" />' +
						'</td>' +
						'<td>' +
							'<div data-id="' + settlements[i].id() + '" >' + core.ui().progress(status[settlements[i].id()].influence, 'small') + '</div>' +
						'</td>' +
						'<td>' +
							'<p>' + settlements[i].religion().name + '</p>' +
						'</td>' +
						'<td>' +
							'<p>' + settlement.get_diplomacy_status(settlements[i].id()).name + '</p>' +
						'</td>' +
						'<td>' +
							'<p>' + settlements[i].personality().name + '</p>' +
						'</td>' +
					'</tr>';
			}
			_t += '<tfoot>' +
				'<tr>' +
					'<td>Settlement</td>' +
					'<td>Ruler</td>' +
					'<td>Influence</td>' +
					'<td>Religion</td>' +
					'<td>Status</td>' +
					'<td>Personality</td>' +
				'</tr>' +
				'</tfoot>' +
				'</table>';
			$(this.handle + ' .settlements-list').empty().append(_t);
		} else {
			this.destroy();
		}
	}
};

/**
 * Tavern panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_TAVERN = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'tavern',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = self.core();
		let _t = '';
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Heroes',
			'Items',
			'Quests'
		]));
		let building = core.get_settlement().get_building(self.params_data.handle);
		if (building) {
			$(self.handle + ' #tab-items').empty().append('<p>Not implemented yet.</p>');
			$(self.handle + ' #tab-quests').empty().append('<p>Not implemented yet.</p>');
			$(self.handle + ' #tab-heroes').empty().append(
				'<div class="column hero-list"></div>' +
				'<div class="column hero-info"></div>' +
				'<div class="column hero-items"></div>'
			);
			$(self.handle + ' #tab-info').empty().append(core.ui().building_panel(self.params_data, building.get_level()));
			self.empty_items = function() {
				$(self.handle + ' .hero-items').empty().append('<h3>Equipment</h3>');
				for (let i = 1; i < civitas.ITEM_SLOTS_NUM; i++) {
					$(self.handle + ' .hero-items').append('<div class="slot" data-slot="' + i + '"></div>');
				}
				$(self.handle + ' .hero-items').append('<br class="clearfix" />').append('<h3>Bags</h3>');
				for (let i = 0; i < civitas.ITEM_BACKPACK_NUM; i++) {
					$(self.handle + ' .hero-items').append('<div class="slot" data-backpack-slot="' + i + '"></div>');
				}
			}
			self.empty_items();
			for (let i = 0; i < civitas.HEROES.length; i++) {
				_t += '<p><a href="#" data-hero="' + civitas.HEROES[i].handle + '">' + civitas.HEROES[i].name + '</a></p>';
			}
			$(self.handle + ' .hero-list').empty().append(_t);
			$(self.handle).on('click', '.hero-list a', function() {
				let hero = $(this).data('hero');
				let hero_data = core.get_hero_config_data(hero);
				if (hero_data) {
					$(self.handle + ' .hero-info').empty().append(
						'<h3>Info <a title="Information provided by Wikipedia." href="' + hero_data.link + '" class="tips external-link wikipedia"></a></h3>' +
						hero_data.description + 
						'<br /><br />' +
						'<h3>Class</h3>' +
						civitas.HERO_CLASS_LIST[hero_data.class] + '' +
						'<br /><br />' +
						'<h3>Attributes</h3>' +
						'Strength: <span class="green">' + hero_data.stats.strength + '</span><br />' +
						'Stamina: <span class="green">' + hero_data.stats.stamina + '</span><br />' +
						'Agility: <span class="green">' + hero_data.stats.agility + '</span><br />' +
						'Intellect: <span class="green">' + hero_data.stats.intellect + '</span><br />' +
						'Spirit: <span class="green">' + hero_data.stats.spirit + '</span><br />' +
						'Health Points: <span class="blue">' + civitas.utils.get_health_points(hero_data) + '</span><br />' +
						'Mana Points: <span class="blue">' + civitas.utils.get_mana_points(hero_data) + '</span><br />' +
						'Damage: <span class="red">' + civitas.utils.get_damage_points(hero_data).min + '-' + civitas.utils.get_damage_points(hero_data).max + '</span>'
					);
					self.empty_items();
					for (let x = 0; x < hero_data.items.length; x++) {
						let slot = hero_data.items[x].slot;
						$(self.handle + ' .hero-items > div.slot[data-slot="' + slot + '"]')
							.empty()
							.append('X')
							.attr('title', core.ui().item_tooltip(hero_data.items[x]))
							.tipsy({
								className: 'item',
								html: true
							});
					}
					for (let x = 0; x < hero_data.backpack.length; x++) {
						$(self.handle + ' .hero-items > div.slot[data-backpack-slot="' + x + '"]')
							.empty()
							.append('X')
							.attr('title', core.ui().item_tooltip(hero_data.backpack[x]))
							.tipsy({
								className: 'item',
								html: true
							});
					}
				}
				return false;
			});
		} else {
			self.destroy();
		}
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		// TODO
	}
};

/**
 * Academy panel data.
 *
 * @type {Object}
 * @mixin
 */
civitas.PANEL_ACADEMY = {

	/**
	 * Internal id of the panel.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'academy',

	/**
	 * Callback function for creating the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = this.core().ui().building_panel_template();
	},

	/**
	 * Callback function for showing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let _t = '';
		let self = this;
		let core = this.core();
		let my_settlement = core.get_settlement();
		$(this.handle + ' section').append(core.ui().tabs([
			'Info',
			'Research',
			'Technologies',
			'Projects'
		]));
		_t += '<div class="column-left">' +
			'</div>' +
			'<div class="column-right">' +
				'<h2>Technology Tree</h2>' +
				'<p>Select a technology from the left panel to view information about it.</p>'
			'</div>';
		$(this.handle + ' #tab-technologies').empty().append(_t);
		_t = '';
		for (let i = 0; i < civitas.TECHNOLOGIES.length; i++) {
			_t += '<div data-technology="' + civitas.TECHNOLOGIES[i].handle + '" class="technology"><img src="' + civitas.ASSETS_URL + 'images/assets/research/' + civitas.TECHNOLOGIES[i].handle + '.png" /></div>';
		}
		$(this.handle + ' .column-left').empty().append(_t);
		$(self.handle + ' #tab-projects').empty().append('<p>Not implemented yet.</p>');
		$(this.handle).on('click', '.technology', function() {
			$(self.handle + ' .technology').removeClass('selected');
			$(this).addClass('selected');
			let technology_name = $(this).data('technology');
			let technology = core.get_research_config_data(technology_name);
			if (technology) {
				_t = '<h2>' + technology.name + '</h2>' +
				'<p>' + technology.description + '</p>' +
				'<dl>' +
					'<dt>Duration</dt>' +
					'<dd>' + technology.duration + ' days</dd>' +
					'<dt>Cost</dt>';
				for (let y in technology.cost) {
					_t += '<dd>' + civitas.utils.nice_numbers(technology.cost[y]) + ' <img class="small tips" title="' + civitas.utils.get_resource_name(y) + '" src="' + civitas.ASSETS_URL + 'images/assets/resources/' + y + '.png" /></dd>';
				}
				_t += '<dt>Effect</dt>';
				for (let y in technology.effect) {
					if (y === 'buildings') {
						for (let b in technology.effect[y]) {
							let _z = core.get_building_config_data(b);
							_t += '<dd>' + _z.name + ' +' + technology.effect[y][b] + '</dd>';
						}
					} else if (y === 'tax') {
						_t += '<dd>+' + technology.effect[y] + core.ui().resource_small_img('coins') + ' each house</dd>';
					} else if (y === 'distance') {
						_t += '<dd>Faster world map travel</dd>';
					}
				}
				_t += '<div class="toolbar"></div>';
				$(self.handle + ' .column-right').empty().append(_t);
				if (core.has_research(technology.handle)) {
					$(self.handle + ' .toolbar').empty().append('You already researched this technology.');
				} else if (core.in_queue(technology.handle) !== false) {
					$(self.handle + ' .toolbar').empty().append('You are currently researching this technology.');
				} else {
					$(self.handle + ' .toolbar').empty().append('<a href="#" class="btn do-research" data-technology="' + technology.handle + '">Research</a>');
				}
			}
			return false;
		}).on('click', '.do-research', function() {
			let technology_name = $(this).data('technology');
			let technology = core.get_research_config_data(technology_name);
			if (technology) {
				if (core.has_research_in_queue() === false) {
					if (core.get_settlement().has_resources(technology.cost)) {
						if (core.queue_add(my_settlement, null, civitas.ACTION_RESEARCH, null, {
							handle: technology.handle,
							name: technology.name,
							duration: technology.duration
						})) {
							my_settlement.remove_resources(technology.cost);
							$(self.handle + ' .toolbar').empty();
							core.save_and_refresh();
						}
					} else {
						core.ui().error('You don`t have enough resources to research this technology.');
					}
				} else {
					core.ui().error('You can research only one technology at a time. Wait for the current research to finish.');
				}
			}
			return false;
		});
	},
	
	/**
	 * Callback function for refreshing the panel.
	 *
	 * @type {Function}
	 * @public
	 */
	on_refresh: function() {
		let core = this.core();
		let settlement = core.get_settlement();
		let research = settlement.research();
		let technologies = core.research();
		let _t = '';
		let building = core.get_settlement().get_building(this.params_data.handle);
		if (building) {
			$(this.handle + ' #tab-info').empty().append(core.ui().building_panel(this.params_data, building.get_level()));
			_t = '<h2>Research points</h2>' +
				'<div class="section">' +
					core.ui().progress((research * 100) / civitas.MAX_RESEARCH_VALUE, 'large', research + ' / ' + civitas.MAX_RESEARCH_VALUE) +
				'</div>';
			let queue_action = core.has_research_in_queue();
			if (queue_action !== false) {
				_t += '<h2>Currently researching `' + queue_action.data.name + '`</h2>' +
				'<div class="section">' +
					core.ui().progress((queue_action.passed * 100) / queue_action.duration, 'large', queue_action.passed + ' / ' + queue_action.duration + ' days') +
				'</div>';
			}
			$(this.handle + ' #tab-research').empty().append(_t);
		} else {
			this.destroy();
		}
		for (let f = 0; f < technologies.length; f++) {
			if (typeof technologies[f] !== 'undefined') {
				$(this.handle + ' .technology[data-technology=' + technologies[f].handle + ']').addClass('has');
			}
		}
	}
};

/**
 * Login window data.
 *
 * @type {Object}
 * @mixin
 */
civitas.WINDOW_SIGNIN = {

	/**
	 * Internal id of the window.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'signin',

	/**
	 * Callback function for creating the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = '<section id="window-{ID}" class="window">' +
							'<div class="logo">Civitas</div>' +
							'<fieldset>' +
								'<div class="new-game">' +
									'<p>Enter the city password to decrypt the game data.</p>' +
									'<dl>' +
										'<dt class="clearfix">Password:</dt>' +
										'<dd>' +
											'<input type="password" class="password text-input" />' +
										'</dd>' +
									'</dl>' +
									'<a href="#" class="do-start highlight button">Load Game</a>' +
								'</div>' +
								'<a href="#" class="do-restart button">Restart</a>' +
								this.core().ui().window_about_section() +
							'</fieldset>' +
						'</section>';
	},

	/**
	 * Callback function for showing the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function() {
		let self = this;
		let handle = this.handle();
		let core = this.core();
		$(handle).on('click', '.do-start', function () {
			let password = $(handle + ' .password').val();
			if (password === '') {
				core.ui().error('Enter your city password.', 'Error', true);
				return false;
			}
			if (!core.load_game_data(password)) {
				$(handle + ' .password').val('');
				core.ui().error('Error decrypting the game data with the specified password. Try again.', 'Error', true);
			} else {
				self.destroy();
			}
			return false;
		}).on('click', '.do-restart', function () {
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						core.reset_storage_data();
						document.location.reload();
					}
				},
				'Are you sure you want to restart the game? You will lose all progress on the current game!',
				'Civitas'
			);
			return false;
		}).on('click', '.do-about', function () {
			$(handle + ' .about-game').slideToggle();
			return false;
		});
	},

	/**
	 * Callback function for hiding the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_hide: function() {
		this.core().ui().hide_loader();
	}
};

/**
 * Battle window data.
 *
 * @type {Object}
 * @mixin
 */
civitas.WINDOW_BATTLE = {
	/**
	 * Template of the window.
	 *
	 * @type {String}
	 */
	template: '<section id="window-{ID}" class="window">' +
				'<div class="container">' +
					'<div title="Attack and defense rating for the attacking army." class="tips attack"></div>' +
					'<div title="Attack and defense rating for the defending army." class="tips defense"></div>' +
					'<div class="battleground"></div>' +
					'<div title="Current turn." class="tips turns">1</div>' +
					'<div class="status"></div>' +	
					'<div class="toolbar">' +
						'<a title="End current turn." class="tips button end" href="#">End turn</a> ' +
						'<a title="Close the window." class="tips button close" href="#">Close</a>' +
					'</div>' +
				'</div>' +
			'</section>',

	/**
	 * Internal id of the window.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'battle',

	/**
	 * Callback function for showing the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function(params) {
		let self = this;
		let core = this.core();
		let handle = this.handle();
		core.pause();
		this.battleground = new civitas.objects.battleground({
			core: core,
			width: 15,
			height: 9,
			elements: {
				container: handle + ' .battleground',
				attack: handle + ' .attack',
				defense: handle + ' .defense',
				console: handle + ' .status',
			},
			attack: {
				city: this.params_data.source.source.id,
				army: this.params_data.source.data.army,
				navy: this.params_data.source.data.navy
			},
			defense: {
				city: this.params_data.destination.id(),
				army: this.params_data.destination.army,
				navy: this.params_data.destination.navy
			},
			on_win: function(winner, loser) {
				core.do_achievement('conqueror');
				$(handle + ' .end').hide();
				$(handle + ' .close').show();
			},
			on_lose: function(winner, loser) {
				core.do_achievement('foolish');
				$(handle + ' .end').hide();
				$(handle + ' .close').show();
			},
			on_end_turn: function(turn) {
				$(handle + ' .turns').html(turn);
			}
		});
		$(handle + ' .close').hide();
		$(handle).on('click', '.close', function () {
			core.unpause();
			self.destroy();
			return false;
		}).on('click', '.end', function () {
			self.battleground.end_turn();
			return false;
		});
	}
};

/**
 * Sign Up window data.
 *
 * @type {Object}
 * @mixin
 */
civitas.WINDOW_SIGNUP = {

	/**
	 * Internal id of the window.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'signup',

	/**
	 * Callback function for creating the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = '<section id="window-{ID}" class="window">' +
							'<div class="logo">Civitas</div>' +
							'<fieldset>' +
								'<div class="new-game">' +
									'<p>Choose your city details well, climate changes and game difficulty affects your building options and resources.</p>' +
									'<dl>' +
										'<dt class="clearfix">Your Name:</dt>' +
										'<dd>' +
											'<input type="text" maxlength="12" title="Maximum of 12 characters." class="tips name text-input" />' +
										'</dd>' +
										((civitas.ENCRYPTION === true) ?
										'<dt class="clearfix">Password:</dt>' +
										'<dd>' +
											'<input type="password" class="password text-input" />' +
										'</dd>' +
										'<dt class="clearfix">Confirm Password:</dt>' +
										'<dd>' +
											'<input type="password" class="password2 text-input" />' +
										'</dd>'
										: '') +
										'<div class="hr"></div>' +
										'<dt class="clearfix">City Name:</dt>' +
										'<dd>' +
											'<input type="text" maxlength="12" title="Maximum of 12 characters." class="tips cityname text-input" />' +
										'</dd>' +
										'<dt class="clearfix">Nationality:</dt>' +
										'<dd>' +
											'<select class="nation text-input"></select>' +
										'</dd>' +
										'<dt class="clearfix">Climate:</dt>' +
										'<dd>' +
											'<select class="climate text-input"></select>' +
										'</dd>' +
										'<dt class="clearfix">Difficulty:</dt>' +
										'<dd>' +
											'<select class="difficulty text-input">' +
												'<option value="1">Easy</option>' +
												'<option value="2">Medium</option>' +
												'<option value="3">Hard</option>' +
												'<option value="4">Hardcore</option>' +
											'</select>' +
										'</dd>' +
										'<div class="avatar-select"></div>' +
									'</dl>' +
									'<a href="#" class="do-start highlight button">Start Playing</a>' +
								'</div>' +
								this.core().ui().window_about_section() +
							'</fieldset>' +
						'</section>';
	},

	/**
	 * Callback function for showing the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function() {
		let self = this;
		let avatar = 1;
		let password = '';
		let password2 = '';
		let core = this.core();
		let handle = this.handle();
		for (let i = 1; i < civitas.CLIMATES.length; i++) {
			$(handle + ' .climate').append('<option value="' + civitas['CLIMATE_' + civitas.CLIMATES[i].toUpperCase()] + '">' + civitas.CLIMATES[i].capitalize() + '</option>');
		}
		for (let i = 1; i < civitas.NATIONS.length; i++) {
			$(handle + ' .nation').append('<option value="' + civitas['NATION_' + civitas.NATIONS[i].toUpperCase()] + '">' + civitas.NATIONS[i].capitalize() + '</option>');
		}
		for (let i = 1; i <= civitas.AVATARS; i++) {
			$(handle + ' .avatar-select').append('<img class="avatar' + (i === avatar ? ' selected' : '') + '" data-avatar="' + i + '" src="' + civitas.ASSETS_URL + 'images/assets/avatars/avatar' + i + '.png" />');
		}
		$(handle).on('click', '.do-start', function () {
			if (civitas.ENCRYPTION === true) {
				password = $(handle + ' .password').val();
				password2 = $(handle + ' .password2').val();
			}
			let name = $(handle + ' .name').val();
			let cityname = $(handle + ' .cityname').val();
			let nation = parseInt($(handle + ' .nation').val());
			let climate = parseInt($(handle + ' .climate').val());
			let difficulty = parseInt($(handle + ' .difficulty').val());
			if (name.length > 12) {
				name = name.substring(0, 12);
			}
			if (cityname.length > 12) {
				cityname = cityname.substring(0, 12);
			}
			if (name === '') {
				core.ui().error('Enter your ruler name, for example <strong>Ramses</strong>.', 'Error', true);
				return false;
			}
			if (cityname === '') {
				core.ui().error('Enter your city name, for example <strong>Alexandria</strong>.', 'Error', true);
				return false;
			}
			if (civitas.ENCRYPTION === true) {
				if (password === '') {
					core.ui().error('Enter a strong password for your city.', 'Error', true);
					return false;
				}
				if (password !== password2) {
					core.ui().error('Your passwords do not match.', 'Error', true);
					return false;
				}
			}
			core.new_game(name, cityname, nation, climate, avatar, difficulty, password);
			self.destroy();
			return false;
		}).on('click', '.avatar', function () {
			$(handle + ' img.avatar').removeClass('selected');
			$(this).addClass('selected');
			let new_avatar = parseInt($(this).data('avatar'));
			if (new_avatar >= 1 && new_avatar <= civitas.AVATARS) {
				avatar = new_avatar;
			}
			return false;
		}).on('click', '.do-about', function () {
			$(handle + ' .about-game').slideToggle();
			return false;
		});
	},

	/**
	 * Callback function for hiding the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_hide: function() {
		this.core().ui().hide_loader();
	}
};

/**
 * Options window data.
 *
 * @type {Object}
 * @mixin
 */
civitas.WINDOW_ERROR = {
	/**
	 * Template of the window.
	 *
	 * @type {String}
	 */
	template: '<section id="window-{ID}" class="window">' +
				'<div class="logo">Civitas</div>' +
				'<fieldset>' +
					'An error has occured in Civitas and the game is unable to resume.' +
					'<br /><br />' +
					'<span class="error-message"></span>' +
					'<br />' +
					'<span class="error-code"></span>' +
					'<br /><br />' +
					'<a href="#" class="do-restart button">Restart</a>' +
				'</fieldset>' +
			'</section>',

	/**
	 * Internal id of the window.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'error',

	/**
	 * Callback function for showing the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function() {
		let self = this;
		let core = this.core();
		let handle = this.handle();
		$(handle + ' .error-message').html('Message: ' + this.params_data.error);
		$(handle + ' .error-code').html('Code: ' + this.params_data.code);
		$(handle).on('click', '.do-restart', function () {
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						core.reset_storage_data();
						document.location.reload();
					}
				},
				'Are you sure you want to restart the game? You will lose all progress on the current game!',
				'Civitas'
			);
			return false;
		});
	},

	/**
	 * Callback function for hiding the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_hide: function() {
		this.core().ui().hide_loader();
	}
};

/**
 * Options window data.
 *
 * @type {Object}
 * @mixin
 */
civitas.WINDOW_OPTIONS = {

	/**
	 * Internal id of the window.
	 *
	 * @type {String}
	 * @constant
	 * @default
	 */
	id: 'options',
	
	/**
	 * Callback function for creating the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_create: function(params) {
		this.template = '<section id="window-{ID}" class="window">' +
							'<div class="logo">Civitas</div>' +
							'<fieldset>' +
								'<a href="#" class="do-pause button">Pause</a>' +
								'<a href="#" class="do-restart button">Restart</a>' +
								'<a href="#" class="do-options button">Options</a>' +
								'<div class="options-game"></div>' +
								this.core().ui().window_about_section() +
								'<br />' +
								'<a href="#" class="do-resume button">Resume Playing</a>' +
							'</fieldset>' +
						'</section>';
	},

	/**
	 * Callback function for showing the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_show: function() {
		let _game_data = null;
		let self = this;
		let handle = this.handle();
		let core = this.core();
		$(handle + ' .options-game').append(core.ui().tabs([
			'Sounds',
			'UI',
			'Gameplay'
		]));
		$(handle + ' #tab-sounds').append('<div>' +
			'<a href="#" class="music-control ui-control ' + ((core.get_settings('music') === true) ? 'on' : 'off') + '">music</a>' +
			'<input class="music-volume" type="range" min="0" max="1" step="0.1" ' + ((core.get_settings('music') !== true) ? 'disabled' : '') + ' />' +
			'</div>');
		$(handle + ' #tab-ui').append('<div>' +
			'<a href="#" class="worldmap-grid-control ui-control ' + ((core.get_settings('worldmap_grid') === true) ? 'on' : 'off') + '">worldmap grid</a> ' +
			'<a href="#" class="worldmap-beautify-control ui-control ' + ((core.get_settings('worldmap_beautify') === true) ? 'on' : 'off') + '">worldmap beautify</a>' +
			'</div>');
		$(handle + ' .tabs').tabs();
		$(handle).on('click', '.do-resume', function () {
			core.ui().hide_loader();
			core.unpause();
			self.destroy();
			return false;
		}).on('click', '.do-pause', function () {
			if (core.is_paused() === true) {
				$(this).removeClass('highlight').html('Pause');
				core.ui().show_loader();
				core.unpause();
			} else {
				$(this).addClass('highlight').html('Resume');
				core.ui().hide_loader();
				core.pause();
			}
			return false;
		}).on('click', '.do-options', function () {
			$(handle + ' .options-game').slideToggle();
			return false;
		}).on('click', '.do-about', function () {
			$(handle + ' .about-game').slideToggle();
			return false;
		}).on('click', '.do-restart', function () {
			core.ui().open_modal(
				function(button) {
					if (button === 'yes') {
						core.reset_storage_data();
						document.location.reload();
					}
				},
				'Are you sure you want to restart the game? You will lose all progress on the current game!',
				'Civitas'
			);
			return false;
		}).on('click', '.music-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				$('.music-volume').attr('disabled', true);
				core.set_settings('music', false);
			} else {
				$(this).removeClass('off').addClass('on');
				$('.music-volume').attr('disabled', false);
				core.set_settings('music', true);
			}
			core.save();
			return false;
		}).on('click', '.worldmap-grid-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				core.set_settings('worldmap_grid', false);
			} else {
				$(this).removeClass('off').addClass('on');
				core.set_settings('worldmap_grid', true);
			}
			core.save();
			return false;
		}).on('click', '.worldmap-beautify-control', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				core.set_settings('worldmap_beautify', false);
			} else {
				$(this).removeClass('off').addClass('on');
				core.set_settings('worldmap_beautify', true);
			}
			core.save();
			return false;
		}).on('change', '.music-volume', function () {
			let value = parseInt($(this).val());
			core.music.volume = value;
			core.save();
			return false;
		});
	},

	/**
	 * Callback function for hiding the window.
	 *
	 * @type {Function}
	 * @public
	 */
	on_hide: function() {
		this.core().ui().hide_loader();
	}
};
