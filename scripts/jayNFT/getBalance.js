const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, BRIDGE_ADDRESS } = process.env;

async function main() {
  const JayNFT = await hre.ethers.getContractFactory("JayNFT");
  const jayNFT = JayNFT.attach(BRIDGE_ADDRESS);

  const balance = await jayNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});