/**
 * Node Modules
 */
const gpio = require('rpi-gpio');
const gpiop = gpio.promise;

/**
 * Local Modules
 */
const pinService = require('./pinService');
const logService = require('./logService');

const pins = pinService.getPins();

const unlock = (err) => {
    gpiop.setup(pins.lock, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(pins.lock, true);
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(pins.lock, false);
            }, 1000);
        })
        .catch((err) => {
            logService.logError(err.toString());
        })
};

module.exports = { unlock };