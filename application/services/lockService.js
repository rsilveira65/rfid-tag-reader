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

const pins = configService.getParameters()['pins'];


const unlock = (err) => {
    gpiop.setup(pins.lock, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(pins.lock, true)
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(pins.lock, false)
            }, 1000);
        })
        .catch((err) => {
            logService.logError(err.toString())
        })
}

module.exports = {
    on,
    off,
    blink
};