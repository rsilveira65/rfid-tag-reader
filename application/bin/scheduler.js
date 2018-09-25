/**
 * Node Modules
 */
const cron = require('node-cron');

/**
 * Local Modules
 */
const configService = require('../services/configService');
const app = require('./app');

const run = async () => {
    const parameters = await configService.getParameters();

    cron.schedule(parameters.periodicity, () => {
        app.run();
    });
};

module.exports = { run }