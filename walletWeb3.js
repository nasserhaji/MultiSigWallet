const Web3 = require('web3');

// Create an instance of the web3.js library using the network address
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/YOUR-PROJECT-ID"));

// Connect to wallet
async function connectToWallet(privateKey) {
   const account = web3.eth.accounts.privateKeyToAccount(privateKey);
   web3.eth.accounts.wallet.add(account);
   web3.eth.defaultAccount = account.address;
   return account.address;
}
