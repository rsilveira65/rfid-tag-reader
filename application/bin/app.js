/**
 * Local Modules
 */
const rfidService = require('../services/rfidService');
const ledService = require('../services/ledService');

const run = () => {

    let response = rfidService.scan();

    if (!response.status) return;
    
    response = rfidService.read();

    if (!response.status) return;

    const uid = response.data;

    console.log("Card read UID: %s %s %s %s", uid[0].toString(16), uid[1].toString(16), uid[2].toString(16), uid[3].toString(16));
    ledService.blink();

    rfidService.stop();
};

module.exports = { run };