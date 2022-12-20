const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Player.sol", () => {
  let playerFactory;
  let playerContract;

  let rpcFactory;
  let rpcContract;

  beforeEach(async () => {
    rpcFactory = await ethers.getContractFactory("RockPaperScissors");
    rpcContract = await rpcFactory.deploy(1, 2);

    playerFactory = await ethers.getContractFactory("Player");
    playerContract = await playerFactory.deploy(rpcContract.address);
  });

  describe("Correct setup", () => {
    it("happy", async () => {
      await playerContract.doCommit(
        ethers.BigNumber.from("1"),
        ethers.utils.formatBytes32String("7"),
        { value: BigNumber.from("2") }
      );

      expect(await rpcContract.stage()).to.equal(1);
    });
  });
});
