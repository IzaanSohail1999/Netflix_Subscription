const Netflix = artifacts.require("Netflix.sol");

module.exports = function(deployer){
    deployer.deploy(Netflix);
}