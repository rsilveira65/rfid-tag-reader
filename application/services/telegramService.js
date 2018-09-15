/**
 * Node Modules
 */
const {TelegramClient} = require('messaging-api-telegram');

/**
 * Local Modules
 */
const configService = require('./configService');
const loggerService = require('./logService');

/*
 * Sends message through Telegram API
 * @message - String
 * @disableNotification - bool
 */
const sendMessage = async (message, disableNotification = true) => {
    try {
        const parameters = await configService.getParameters();
        const client = await TelegramClient.connect(parameters.token);

        client.sendMessage(parameters.chat_id, message, {
            disable_web_page_preview: true,
            disable_notification: disableNotification,
        });
    } catch(error) {
        loggerService.logError(error)
    }
};

module.exports = {
    sendMessage,
    sendScreenShot
};