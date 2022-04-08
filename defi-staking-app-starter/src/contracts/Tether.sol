pragma solidity ^0.5.0;


contract Tether{
    string public name = 'Mock Tether Token';
    string public symbol = 'mUSDT';
    uint256 public totalSupply = 1000000000000000000; // 1 Million Tokens
    uint8 public decimals = 18;

    event Transfer (
        address _from,
        address _to,
        uint _value
    );
    
    event Approve (
        address indexed _owner,
        address indexed _spender,
        uint _value
    );

    mapping (address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint _value) public returns (bool success) {
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        // I need to do a deeper review of the emit keyword
        emit Transfer(_from, _to, _value); 

        return true;
    }
    
}