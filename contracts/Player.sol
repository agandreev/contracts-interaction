pragma solidity >=0.8.0 <0.9.0;

import "./RockPaperScissors.sol";

contract Player {
    RockPaperScissors public rpc;

    constructor(RockPaperScissors addr) public {
        rpc = addr;
    }
    
    function doCommit(RockPaperScissors.Choice choice, bytes32 blindingFactor) public payable {
        rpc.commit{value: msg.value}(keccak256(abi.encodePacked(msg.sender, choice, blindingFactor)));
    }
}