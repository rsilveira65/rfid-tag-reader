const mfrc522 = require("mfrc522-rpi");
//# Init WiringPi with SPI Channel 0
mfrc522.initWiringPi(0);

console.log("scanning...");

setInterval(() => {

    //# reset card
    mfrc522.reset();

    //# Scan for cards
    let response = mfrc522.findCard();

    if (!response.status) {
        return;
    }
    //# Get the UID of the card
    response = mfrc522.getUid();

    if (!response.status) {
        console.log("UID Scan Error");
        return;
    }

    //# If we have the UID, continue
    const uid = response.data;
    console.log("Card read UID: %s %s %s %s", uid[0].toString(16), uid[1].toString(16), uid[2].toString(16), uid[3].toString(16));
    
    //# Stop
    mfrc522.stopCrypto();

}, 500);