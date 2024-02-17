require('dotenv').config();

module.exports = {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    gnosisRpcUrl: process.env.GNOSIS_RPC_URL,
    walletAddresses: JSON.parse(process.env.WALLET_ADDRESS || '[]'),
    balanceThreshold: process.env.BALANCE_THRESHOLD,
    senderPrivateKey: process.env.SENDER_PRIVATE_KEY,
    senderWalletAddress: process.env.SENDER_WALLET_ADDRESS
};
