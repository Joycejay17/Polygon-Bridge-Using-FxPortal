// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract JayNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("JayNFT", "JNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://bafybeieiwxjzepw3z4vfveh7qvpp3i7umqxknovpfqtr56yum7f5rwe4cy.ipfs.dweb.link/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Beautifully decorated cakes, featuring a smooth, elegant frosting in soft pastel colors";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}