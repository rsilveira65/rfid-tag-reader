/**
 * Local Modules
 */
const app = require('./application/bin/app');

setInterval(() => {app.run()}, 500);