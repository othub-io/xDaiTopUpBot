require('dotenv').config();

module.exports = {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    gnosisRpcUrl: process.env.GNOSIS_RPC_URL,
    walletAddresses: process.env.WALLET_ADDRESSES.split(','),
    balanceThreshold: process.env.BALANCE_THRESHOLD
};
