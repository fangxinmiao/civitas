/**
 * Game API version to connect to.
 *
 * @constant
 * @type {String}
 * @default
 */
civitas.API_VERSION = '0.3';

/**
 * URL of the main Game API entry point.
 * 
 * @constant
 * @default
 * @type {String}
 */
civitas.API_ENTRY_POINT = 'https://civitas-api.test/api/';

/**
 * Main Game API entry point + the API version
 *
 * @constant
 * @type {String}
 */
civitas.API_URL = civitas.API_ENTRY_POINT + civitas.API_VERSION + '/';
