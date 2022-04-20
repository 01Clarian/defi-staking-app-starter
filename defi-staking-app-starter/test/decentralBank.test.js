const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')

require('chai')
.use(require('chai-as-promised'))
.should()


//Writing Tests for the Tether Token
contract('DecentralBank', ([owner, customer]) => { 
    //Owner is address 1 and customer is address 2 of our fake ganache addresses
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
        await tether.transfer(customer, tokens('100'), {from: owner})
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

    describe('Decentral Bank Deployment', async () => {
        it('matches name successfully', async () => {
            const name = await decentralBank.name()
            assert.equal(name, 'Decentral Bank') 
        })
        it('Contract has tokens', async () => {
            let balance = await rwd.balanceOf(decentralBank.address)
            assert.equal(balance, tokens('1000000'))
        })
    

    describe('Yield Farming', async () => {
        it('rewards tokens for staking', async () => {

        let result 
        //Check Investor Balance 
        result = await tether.balanceOf(customer)
        assert.equal(result.toString(), tokens('100'), 'customer mock wallet balance before staking')

        //Check Staking for Customer 100 Tokens  
        await tether.approve(decentralBank.address, tokens('100'), {from: customer})
        await decentralBank.depositTokens(tokens('100'), {from: customer})

        // Check Updated Balance of Customer
        result = await tether.balanceOf(customer)
        assert.equal(result.toString(), tokens('0'), ' Customer Mock Wallet Balance after transfer')

        //Check Updated Balance of the decentralBank
        result = await tether.balanceOf(decentralBank.address)
        assert.equal(result.toString(), tokens('100'), 'Decentralized Bank Balance after staking from customer')

        // IsStaking Update
        result = await decentralBank.isStaking(customer) 
        //remember, is staking is a mapping and customer is the address of the customer and bool value
        assert.equal(result.toString(), 'true', 'Customer Staking Status after staking 100 coins')
        
        // Issue Tokens
        await decentralBank.issueToken({from: owner})

        // Ensure that only the owner can issue tokens
        await decentralBank.issueToken({from: customer}).should.be.rejected;

        //Unstake Tokens
        await decentralBank.unstakeTokens({from: customer})

        // Check Unstaking balances
        result = await tether.balanceOf(customer)
        assert.equal(result.toString(), tokens('100'), ' Customer Mock Wallet Balance after Unstaking Tokens')

        result = await tether.balanceOf(decentralBank.address)
        assert.equal(result.toString(), tokens('0'), 'Decentralized Bank Balance after customer Unstakes')

        result = await decentralBank.isStaking(customer)
        assert.equal(result.toString(), 'false', 'customer is no longer staking after unstaking')

        })

    })
    })
})