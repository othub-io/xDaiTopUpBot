const { checkXDAIBalance } = require('./src/services/web3Service');
const { sendMessage } = require('./src/services/telegramService');
const { walletAddresses, balanceThreshold } = require('./src/config');

async function monitorBalanceAndNotify() {
    for (let address of walletAddresses) {
        const balance = await checkXDAIBalance(address);
        console.log(`Current xDai Balance for ${address}: ${balance} xDai`);

        if (balance < balanceThreshold) {
            await sendMessage(`Alert: Wallet ${address} xDai balance is low (${balance} xDai). Please add funds.`);
        }
    }
}

monitorBalanceAndNotify().then(() => console.log('Monitoring job completed.'));
