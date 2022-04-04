const { prototype } = require('events');

require('babel-register');
require('babel-polyfill');

// Setting up the project???
// Maybe this is just the full stack development aspect of it

module.exports = {
    networks: {
        host: '//127.0.0.1:',
        port: '7545',
        network_id: '*' //Connect To Any Network

    },
    contracts_directory: './src/contracts/',
    contracts_build_directory:'./src/truffle_abis',
    compilers: {
        solc: {
            version: '^0.5.0',
            optimizer: {
                enables: true,
                runs:200
            },

        }
    }
}