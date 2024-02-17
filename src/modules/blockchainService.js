const { ethers } = require('ethers');
const { gnosisRpcUrl } = require('../config/index.js');

// Initialize ethers provider
const provider = new ethers.providers.JsonRpcProvider(gnosisRpcUrl);

// Function to check balance using ethers.js
async function checkXDAIBalance(address) {
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
}

// Function to send xDai using ethers.js
async function sendXDAIIfNeeded(senderPrivateKey, toAddress, amountInEther) {
    const wallet = new ethers.Wallet(senderPrivateKey, provider);
    const tx = {
        to: toAddress,
        value: ethers.utils.parseEther(amountInEther.toString())
    };

    const transaction = await wallet.sendTransaction(tx);
    await transaction.wait(); // Wait for the transaction to be mined
    return transaction;
}

module.exports = { checkXDAIBalance, sendXDAIIfNeeded };
