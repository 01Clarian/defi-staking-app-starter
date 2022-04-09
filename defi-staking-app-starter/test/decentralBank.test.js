const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')

require('chai')
.use(require('chai-as-promised'))
.should()


//Writing Tests for the Tether Token
contract('DecentralBank', ([owner, customer]) => {
    //all of the code goes here for testing

    function tokens(number) {
        /*
        this is a helper function to help us translate ether (10^18) into numbers we're used to
        EXAMPLE 1000 =  One thousand 
        */
       return web3.utils.toWei(number, 'ether')
    }

    let tether, rwd, decentralBank
    before(async () => {
        // Load Contracts 
        tether = await Tether.new()
        rwd = await RWD.new()
        decentralBank = await DecentralBank.new(rwd.address, tether.address)

        //Transfer all tokens to Decentral Bank (1 Million)
        await rwd.transfer(decentralBank.address, tokens('1000000'))

        //Transfer 100 Mock Tethers to investor 
        await tether.transfer(customer, tokens('1000'), {from: owner})
    })

    describe('Mock Tether Deployment', async () => {
        it('matches name successfully', async () => {
            const name = await tether.name()
            assert.equal(name, 'Mock Tether Token') 
        })
    })

    describe('Mock RWD Deployment', async () => {
        it('matches name successfully', async () => {
            const name = await rwd.name()
            assert.equal(name, 'Mock Rewards Token') 
        })
    })
})
