#!/usr/bin/env node

const { checkXDAIBalance, sendXDAIIfNeeded } = require('./src/modules/blockchainService.js');
const { sendMessage } = require('./src/modules/telegramService.js');
const { walletAddresses, balanceThreshold, senderPrivateKey, senderWalletAddress } = require('./src/config');

// async function monitorBalanceAndNotify() {
//     for (let address of walletAddresses) {
//         const balance = await checkXDAIBalance(address);
//         console.log(`Current xDai Balance for ${address}: ${balance} xDai`);

//         if (balance < balanceThreshold) {
//             await sendMessage(`Alert: Wallet ${address} xDai balance is low (${balance} xDai). Please add funds.`);
//         }
//     }
// }

// monitorBalanceAndNotify().then(() => console.log('Monitoring job completed.'));

async function monitorAndTopUpWallets() {
    const senderBalance = await checkXDAIBalance(senderWalletAddress);
    console.log(`Faucet balance: ${senderBalance} xDai`);

    if (parseFloat(senderBalance) < parseFloat(balanceThreshold)) {
        console.log(`Faucet balance is below threshold: ${senderBalance} xDai`);
        await sendMessage(`Alert: Faucet balance is low (${senderBalance} xDai). Please top up.`);
    }
    
    for (let address of walletAddresses) {
        const balance = await checkXDAIBalance(address);
        console.log(`Checking balance for ${address}: ${balance} xDai`);

        if (parseFloat(balance) < parseFloat(balanceThreshold)) {
            console.log(`Balance below threshold for ${address}. Initiating top-up.`);
            await sendMessage(`Initiating top-up for ${address}. Current balance: ${balance} xDai.`);
            try {
                await sendXDAIIfNeeded(senderPrivateKey, address, 1); // Sends 1 xDai, adjust as needed
                console.log(`Top-up successful for ${address}`);
                await sendMessage(`Top-up successful for ${address}`);
            } catch (error) {
                console.error(`Failed to send xDai to ${address}:`, error);
                await sendMessage(`Failed to send xDai to ${address}: ${error.message}`);
            }
        } else {
            // await sendMessage(`Balance check for ${address}: Balance is sufficient (${balance} xDai).`);
        }
    }
}

monitorAndTopUpWallets().then(() => console.log('Monitoring and top-up process completed.'));