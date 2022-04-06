const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')


module.exports = async function(deployer, network, accounts) {
    //Deploy Mock Tether contract
    await deployer.deploy(Tether)
    const tether = await Tether.deployed()

    //Deploy Mock Tether contract
    await deployer.deploy(RWD)
    const rwd = await RWD.deployed()

    //Deploy Mock Tether contract
    await deployer.deploy(DecentralBank, rwd.address, tether.address)
    const decentralBank = await DecentralBank.deployed()
    
    //Transfer all RWD tokens to the central bank
    await rwd.transfer(decentralBank.address, '1000000000000000000000000')

    //Distribute 100 tether toekns to investor
    await tether.transfer(accounts[1], '1000000000000000000')

}