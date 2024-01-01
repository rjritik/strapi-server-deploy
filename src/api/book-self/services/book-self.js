'use strict';

/**
 * book-self service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-self.book-self');
