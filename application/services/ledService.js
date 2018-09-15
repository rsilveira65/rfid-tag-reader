const gpio = require('rpi-gpio');

const on = async (err) => {
    gpio.setup(7, gpio.DIR_OUT, write);

    if (err) throw err;
    gpio.write(7, true, (err) => {
        if (err) throw err;
        console.log('Written to pin');
    });
}

const off = async (err) => {
    gpio.setup(7, gpio.DIR_OUT, write);

    if (err) throw err;
    gpio.write(7, false, (err) => {
        if (err) throw err;
        console.log('Written to pin');
    });
}

module.exports = {
    on,
    off
};