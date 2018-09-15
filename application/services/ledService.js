const gpio = require('rpi-gpio');
var gpiop = gpio.promise;

const on = (err) => {
    gpiop.setup(7, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(7, true)
        })
        .catch((err) => {
            console.log('Error: ', err.toString())
        })
}

const off = (err) => {
    gpiop.setup(7, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(7, false)
        })
        .catch((err) => {
            console.log('Error: ', err.toString())
        })
}

const blink = (err) => {
    gpiop.setup(7, gpio.DIR_OUT)
        .then(() => {
            return gpiop.write(7, true)
        })
        .then(() => {
            setInterval(() => {
                return gpiop.write(7, off)
            }, 500);
        })
        .catch((err) => {
            console.log('Error: ', err.toString())
        })
}

module.exports = {
    on,
    off,
    blink
};