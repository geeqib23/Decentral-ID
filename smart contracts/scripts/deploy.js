const hre = require("hardhat");

const main = async () => {
  const SmartContract = await hre.ethers.getContractFactory("SmartContract");
  const smartContract = await SmartContract.deploy();

  await smartContract.deployed();
  console.log(`SmartContract deployed to ${smartContract.address}`);
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
