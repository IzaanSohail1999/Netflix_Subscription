// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Netflix {
    
    address private owner;
    uint total_value;
    
    constructor() payable{
        owner = msg.sender;
        total_value = msg.value;  
    }
    
    function charge() payable public{
        total_value += msg.value;
    }
    
    function withdraw(address payable receiverAddr, uint receiverAmnt) public {
        receiverAddr.transfer(receiverAmnt);
    }
    
}