require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet radar situate comic hockey enter oil gas'; 
let testAccounts = [
"0x29c00b1b1e50a143522efcd8502f32ad0f51ae9b4fc9a754761c9aeadc21f07f",
"0x315c8ed0c667171e0fcd6b6feb76b6ff72731632b79f17cca041b71acd39ceb1",
"0xc2e620fac3b2aa2af6531b47a8c91b306fb80bccfd39765eba250c0020c278d7",
"0x0bff5233a9aabf7dd600e7bee9cafcf0ec9038dfbd95cd1a2f748062d18b4583",
"0xf921327d3aeaddd53a8805eb3972f0685d403bd61b153d970ca0bdbf002ef809",
"0xac3efa3190e5e66373017372d5e34ef740cc11c51cdfa970f74e6d33aec9388b",
"0x26e291758ff4d23a0590e368a8088b702f19743be03db0dbcdea31464336caf3",
"0xefd1dfd939c29a0d5f3ee48f8ab2a95b6b41906223973003b21642d0630e9574",
"0x470370a933afeae41fbd577f3d9eeae26f58a906067b3aaf49b39477cb7c5c1e",
"0x4f509507eb5ebce0887bde3387b7acea710b1e80ee573770460ad70464dda34d"
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
            version: '^0.8.0'
        }
    }
};

