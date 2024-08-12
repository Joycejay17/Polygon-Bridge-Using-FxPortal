const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const JayNFT = await hre.ethers.getContractFactory("JayNFT");
  const jayNFT = JayNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await jayNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await jayNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} JayNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});