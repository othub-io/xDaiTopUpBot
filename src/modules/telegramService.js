const axios = require('axios');
const { telegramBotToken, telegramChatId } = require('../config');

async function sendMessage(message) {
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    try {
        await axios.post(url, {
            chat_id: telegramChatId,
            text: message,
        });
        console.log('Message sent to Telegram successfully.');
    } catch (error) {
        console.error('Failed to send message to Telegram:', error);
    }
}

module.exports = { sendMessage };
