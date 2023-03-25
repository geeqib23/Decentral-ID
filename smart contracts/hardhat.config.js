require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.5.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/fpTT-XxC9Ojyijp8foTsW4gGLqVIrcSF',
      accounts: ['e3c3d049612ba7f46bdf533bfa550e438b4c3b66de6251fe895222bcffc1c41e']
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/2d2whPkBbxPF6YcrY1BBqpVc2oOwHGDY',
      accounts: ['e3c3d049612ba7f46bdf533bfa550e438b4c3b66de6251fe895222bcffc1c41e']
    }
  }
};
