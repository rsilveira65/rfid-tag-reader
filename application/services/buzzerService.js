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

const sound = (err) => {
    gpiop.setup(pins.buzzer, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(pins.buzzer, true)
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(pins.buzzer, false)
            }, 500);
        })
        .catch((err) => {
            logService.logError(err.toString())
        })
}

module.exports = { sound };