const Tether = artifacts.require('Tether')

module.exports = async function(deployer) {
    await deployer.deploy(Tether)
}