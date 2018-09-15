/**
 * Node Modules
 */

const mfrc522 = require("mfrc522-rpi");

const scan = async => {
    mfrc522.initWiringPi(0);
    mfrc522.reset();

    console.log("scanning...");

    return await mfrc522.findCard();
};

const read = async message => mfrc522.getUid();

const stop = async => await mfrc522.stopCrypto();

module.exports = {
    scan,
    read,
    stop
};