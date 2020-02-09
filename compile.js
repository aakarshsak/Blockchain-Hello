const path = require('path');
const fs = require('fs');
const solc = require('solc');

const bcPath = path.resolve(__dirname, 'contracts', 'blockchain.sol');
const contract = fs.readFileSync(bcPath, 'utf8');

module.exports = solc.compile(contract, 1).contracts[':Inbox'];