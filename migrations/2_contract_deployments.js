const AccountContract = artifacts.require("./Accounts.sol");
const KuodsContract = artifacts.require("./Kudos.sol");
const HavenContract = artifacts.require("./Havens.sol");
const WalletContract = artifacts.require("./Wallets.sol")

module.exports = function(deployer) {
  deployer.then( async() => {
    await deployer.deploy(HavenContract);
    const havenContractInstance = await HavenContract.deployed()
  }
};