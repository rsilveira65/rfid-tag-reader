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

const blink = async (err) => {
    const pins = await pinService.getPins();

    gpiop.setup(pins.led, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(pins.led, true);
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(pins.led, false);
            }, 1000);
        })
        .catch((err) => {
            logService.logError(err.toString());
        })
};

module.exports = { blink };