const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface , bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'reason pair crew pledge toy water trigger enrich orbit worry slice other',
    'https://rinkeby.infura.io/v3/42d235c7d6304509a63bec8b043c9bc2'
);

const web3 = new Web3(provider);

const deploy = async () => {

    accounts = await web3.eth.getAccounts();


    contracts = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data : '0x' + bytecode, arguments : ['Hello']})
        .send({ from : accounts[0]});

    console.log('COntarac address : ', contracts.options.address);

};

deploy();