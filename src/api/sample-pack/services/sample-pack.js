'use strict';

/**
 * sample-pack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-pack.sample-pack');
