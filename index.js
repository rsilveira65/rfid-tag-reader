/**
 * Node Modules
 */
const cron = require('node-cron');

/**
 * Local Modules
 */
const app = require('./application/bin/app');

cron.schedule('* * * * * * *', () => {
    app.run()
});