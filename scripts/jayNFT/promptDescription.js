const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const JayNFT = await hre.ethers.getContractFactory("JayNFT");
  const jayNFT = JayNFT.attach(CONTRACT_ADDRESS);

  console.log(await jayNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});