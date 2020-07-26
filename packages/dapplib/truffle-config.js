require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rate noise concert grace globe equal genius'; 
let testAccounts = [
"0x0250f40e34c2c71181b433fbdd0230ba5e342bedc4c41cc447f066b9eccd5388",
"0x4bc1e97f8dcc965c7eda269fa8492d394a478a07a51853b00a8c8aef48f2429b",
"0x749ec81ca273d348c8df5b566d37d17b0d89c6c62907e52ea5172f724fa4b832",
"0xb263e577b17d3a051af44ef82e034453d86cbeb076f7f2dc54972031e40c12b0",
"0x9350516223eca563a99bac1ac5e5d2f58c41ccf288a3d8ff2f2a31f90528ad77",
"0x9eca66a5d46c486eba79765c82b9ba590b1bea349ab8f54bb2492c401886f133",
"0x1fb277b4650867dcd521d97755448d7af33410d55f5d984e404368379ea3f715",
"0xf8e81125c8f7d4b4ad2a32acd028dc820bf0788839b47d0f3ee2973d23973eda",
"0x897f52547f7dd903ede8bcf184cea06d5e48d3f0c122572fb65a09d7a0ba215c",
"0x6ee02bbd4759d1e63bca36a128a1069eb7db35a45990f16b31e3316301bf99bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
