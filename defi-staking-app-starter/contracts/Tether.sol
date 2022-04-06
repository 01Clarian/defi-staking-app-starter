pragma solidity >=0.4.22 <0.9.0;


contract Tether {
    string public name = "Mock Tether Coin";
    string public symbol = "USDT";
    uint256 public totalSupply = 1000000000000000000;
    uint8 public decimals = 18; 

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint _value

    );

    mapping(address => uint256) public balanceOf; // Keeping track of the balance of each person
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    function approve(address _spender, uint _value) public returns (bool success){
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    //Writing out the logic for the function transfer of monies #tOkEnoMICS
    function transfer(address _to, uint _value) public returns (bool success) {
        // Require that the value is greater than or equal to the transfer
        require(balanceOf[msg.sender] >= _value);
        //Subtract Balance from initial account
        balanceOf[msg.sender] -= _value;
        //Add Balance to receiver 
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to,_value);
        return true;
    }

    function transerFrom(address _from, address _to, uint _value) public returns (bool success) {
        // Since this is a third party transaction we're going to need some requirements
        require(_value <= balanceOf[_from]);
        //The value we want to be less than or equal to the allowance of the sender
        require(_value <= allowance[_from][msg.sender]);

        //Add to balance 
        balanceOf[_to] += _value;
        // Subtract the balance for transferFrom
        balanceOf[_from] -= _value;
        // Our allowance comes from the msg sender and the allowance called is reduced from the amount
        allowance[msg.sender][_from] -= _value;

        emit Transfer(_from, _to, _value);

        return true;

    }
}