/**
 * Local Modules
 */
const mfrc522 = require("mfrc522-rpi");
mfrc522.initWiringPi(0);

console.log("scanning...");

const run = () => {

    mfrc522.reset();

    let response = mfrc522.findCard();

    if (!response.status) {
        return;
    }

    response = mfrc522.getUid();

    if (!response.status) {
        console.log("UID Scan Error");
        return;
    }

    const uid = response.data;
    console.log("Card read UID: %s %s %s %s", uid[0].toString(16), uid[1].toString(16), uid[2].toString(16), uid[3].toString(16));

    mfrc522.stopCrypto();

};

module.exports = { run };