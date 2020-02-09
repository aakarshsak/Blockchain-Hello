const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require("../compile");

let accounts, contracts;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();


    contracts = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data : bytecode, arguments : ['Hi teherer']})
        .send({ from : accounts[0], gas : 1000000})
});

describe("TESTING : ", () => {
    it("First test ... ", () => {
        assert.ok(contracts.options.address);
    });

    it('checking the msg', async () => {
        const msg = await contracts.methods.message().call();
        assert.equal(msg, 'Hi teherer');
    });

    it('setting the msg', async () => {
        await contracts.methods.setMessage('bye').send({ from : accounts[0]});
        const msg = await contracts.methods.message().call();
        assert.equal(msg, 'bye');
    });
});