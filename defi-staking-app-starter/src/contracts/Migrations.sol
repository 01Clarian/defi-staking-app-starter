pragma solidity "^0.5.0";

contract Migrations {
    address public owner;
    uint public last_completed_migration ;

    constructor() public{
        owner = msg.sender;
    }
    
    modifier restricted() {
        // If the person calling the address is the owner of the contract, then we continue with the function
        // If it is not true it will send out an error
        if (msg.sender == owner) _;
    }

    function set_completed(uint completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address new_address) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.set_completed(last_completed_migration);
    }
}