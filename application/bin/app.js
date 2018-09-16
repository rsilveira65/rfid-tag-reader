/**
 * Local Modules
 */
const rfidService = require('../services/rfidService');
const ledService = require('../services/ledService');
const telegramService = require('../services/telegramService');

const run = () => {
    let response = rfidService.scan();

    if (!response.status) return;
    
    response = rfidService.read();

    const uid = response.data;
    const uidFormated = `${uid[0].toString(16)}${uid[1].toString(16)}${uid[2].toString(16)}${uid[0].toString(16)}`
    
    console.log(`UID: ${uidFormated}`);
    ledService.blink();
    telegramService.sendMessage(`Your ID is: ${uidFormated}, please click here to unlock the door: `, false);

    rfidService.stop();
};

module.exports = { run };