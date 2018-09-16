/**
 * Node Modules
 */
const gpio = require('rpi-gpio');
const gpiop = gpio.promise;

/**
 * Local Modules
 */
const configService = require('./configService');
const logService = require('./logService');

const parameters = configService.getParameters();

const unlock = (err) => {
    gpiop.setup(parameters.lock, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(parameters.lock, true)
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(parameters.lock, false)
            }, 1000);
        })
        .catch((err) => {
            logService.logError(err.toString())
        })
}

module.exports = { unlock };