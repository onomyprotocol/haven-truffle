const { readFileSync } = require('fs')
const LoomTruffleProvider  = require ('loom-truffle-provider')
const { mnemonicToSeedSync } = require ('bip39')
const { sha256 } = require ('js-sha256')
const { CryptoUtils } = require ('loom-js')


module.exports = {
    getLoomProviderWithPrivateKey: function(privateKeyPath, chainId, writeUrl, readUrl) {
        const privateKey = readFileSync(privateKeyPath, 'utf-8')
        return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
    },
    getLoomProviderWithMnemonic: function(mnemonicPath, chainId, writeUrl, readUrl) {
        const mnemonic = readFileSync(mnemonicPath, 'utf-8').toString().trim()
        const seed = mnemonicToSeedSync(mnemonic)
        const privateKeyUint8ArrayFromSeed = CryptoUtils.generatePrivateKeyFromSeed(new Uint8Array(sha256.array(seed)))
        const privateKeyB64 = CryptoUtils.Uint8ArrayToB64(privateKeyUint8ArrayFromSeed)
        return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKeyB64)
    }
}