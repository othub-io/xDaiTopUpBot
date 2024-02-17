# xDaiAutoTopUp

## Overview

`xDaiAutoTopUp` is an automated balance monitoring and top-up system designed for xDai wallets. It ensures that multiple wallets maintain a minimum xDai balance by automatically topping them up when their balance falls below a predefined threshold. Integrated with Telegram, `xDaiAutoTopUp` sends instant notifications for balance alerts and top-up transactions, providing users with up-to-date information on their wallet status.

## Features

- **Multi-Wallet Monitoring**: Keep track of multiple xDai wallets and their balances simultaneously.
- **Automated Top-Up**: Automatically sends xDai to wallets when their balance drops below a specified threshold.
- **Telegram Notifications**: Sends real-time alerts and transaction confirmations directly to a Telegram bot.
- **Secure and Private**: Uses environment variables to securely manage sensitive information such as private keys and Telegram bot tokens.
- **Easy to Configure**: Customize wallet addresses, balance thresholds, and notification preferences through a simple configuration.

## Getting Started

### Prerequisites

- Node.js (version 12.x or higher recommended)
- A Telegram bot token and chat ID for notifications
- An xDai wallet with sufficient funds for top-ups

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/xDaiAutoTopUp.git
cd xDaiAutoTopUp

2. Install dependencies:

npm install

3. Configure your environment variables:

cp .env-example .env && nano .env

### Usage

Run the script to start monitoring and automatically top up your wallets:

node index.js