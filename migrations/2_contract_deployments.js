const AccountContract = artifacts.require("./Accounts.sol");
const HavenContract = artifacts.require("./Havens.sol");
const KudosContract = artifacts.require("./Kudos.sol");
const WalletContract = artifacts.require("./Wallets.sol");
const DocumentContract = artifacts.require("./Documents.sol")


module.exports = function(deployer) {
  deployer.then( async() => {
    await deployer.deploy(AccountContract);
    const accountContractInstance = await AccountContract.deployed()
    console.log('\n*************************************************************************\n')
    console.log(`Account Contract Address: ${accountContractInstance.address}`)
    console.log('\n*************************************************************************\n')
    await deployer.deploy(
      HavenContract, 
      accountContractInstance.address
    )
    const havenContractInstance = await HavenContract.deployed()
    console.log('\n*************************************************************************\n')
    console.log(`Haven Contract Address: ${havenContractInstance.address}`)
    console.log('\n*************************************************************************\n')
    await deployer.deploy(KudosContract)
    const kudosContractInstance = await KudosContract.deployed()
    console.log('\n*************************************************************************\n')
    console.log(`Kudos Contract Address: ${kudosContractInstance.address}`)
    console.log('\n*************************************************************************\n')
    await deployer.deploy(
      WalletContract, 
      accountContractInstance.address, 
      kudosContractInstance.address
    )
    const walletContractInstance = await WalletContract.deployed()
    console.log('\n*************************************************************************\n')
    console.log(`Wallet Contract Address: ${walletContractInstance.address}`)
    console.log('\n*************************************************************************\n')
    await deployer.deploy(
      DocumentContract, 
      accountContractInstance.address, 
      walletContractInstance.address
    )
    const documentContractInstance = await DocumentContract.deployed()
    console.log('\n*************************************************************************\n')
    console.log(`Document Contract Address: ${documentContractInstance.address}`)
    console.log('\n*************************************************************************\n')
    
    const tx1 = await walletContractInstance.setDocContract(documentContractInstance.address)
    console.log('\n\n*************************************************************************\n')
    console.log(`Set document contract address on wallet contract`)
    console.log('\n*************************************************************************\n')
    console.log(tx1)
    console.log('\n*************************************************************************\n')
  })
};