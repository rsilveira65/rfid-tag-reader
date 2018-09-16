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

const blink = async (err) => {
    const pins = await configService.getParameters()['pins'];

    gpiop.setup(pins.led, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(pins.led, true)
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(pins.led, false)
            }, 500);
        })
        .catch((err) => {
            logService.logError(err.toString())
        })
}

module.exports = { blink };