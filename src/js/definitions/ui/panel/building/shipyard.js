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
