const gpio = require('rpi-gpio');
var gpiop = gpio.promise;

gpio.setup(7, gpio.DIR_OUT, on);

const on = (err) => {
    gpiop.setup(7, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(7, true)
        })
        .catch((err) => {
            console.log('Error: ', err.toString())
        })
}

const off = async (err) => {
    gpiop.setup(7, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(7, false)
        })
        .catch((err) => {
            console.log('Error: ', err.toString())
        })
}

module.exports = {
    on,
    off
};