const voter = artifacts.require("Voter");

module.exports = function (deployer) {
  deployer.deploy(voter);
};