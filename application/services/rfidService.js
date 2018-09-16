/**
 * Node Modules
 */

const mfrc522 = require("mfrc522-rpi");

const scan = async => {
    mfrc522.initWiringPi(0);
    mfrc522.reset();

    return mfrc522.findCard();
};

const read = async => mfrc522.getUid();

const stop = async => mfrc522.stopCrypto();

module.exports = {
    scan,
    read,
    stop
};