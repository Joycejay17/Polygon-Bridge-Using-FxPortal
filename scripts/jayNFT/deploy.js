const hre = require("hardhat");

async function main() {
  const jayNFT = await hre.ethers.deployContract("JayNFT");

  console.log("JayNFT address:", await jayNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});