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
    const parameters = await configService.getParameters();

    gpiop.setup(parameters.pins.led, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(parameters.pins.led, true)
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(parameters.pins.led, false)
            }, 500);
        })
        .catch((err) => {
            logService.logError(err.toString())
        })
}

module.exports = { blink };