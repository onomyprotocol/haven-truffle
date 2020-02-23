var HavenHavenContract = artifacts.require("./HavenHavenContract.sol");

module.exports = function(deployer) {
  deployer.deploy(HavenHavenContract);
};