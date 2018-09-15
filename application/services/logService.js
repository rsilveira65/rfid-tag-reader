/**
 * Node Modules
 */
const log4js = require('log4js');

log4js.configure({
    appenders: { application: { type: 'file', filename: __dirname + '/../logs/application.log' } },
    categories: { default: { appenders: ['application'], level: 'info' } }
});

const logInfo = async message => {
    const logger = await log4js.getLogger('application');
    logger.info(message);
};

const logError = async message => {
    const logger = await log4js.getLogger('application');
    logger.error(message);
};

module.exports = {
    logInfo,
    logError,
};