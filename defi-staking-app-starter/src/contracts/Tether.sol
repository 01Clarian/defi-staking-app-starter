pragma solidity ^0.5.0;


contract Tether{
    string public name = 'Mock Tether Token';
    string public symbol = 'mUSDT';
    uint256 public totalSupply = 1000000000000000000000000; // 1 Million Tokens
    uint8 public decimals = 18;

    //
    event Transfer (
        address _from,
        address _to,
        uint _value
    );
    
    event Approval (
        address indexed _owner,
        address indexed _spender,
        uint _value
    );

    mapping (address => uint256) public balanceOf;
    // Mapping of mapping to allow us to keep track of iterations for our allowance
    // Nested Mapping (why did we have to do this tho )
    mapping (address => mapping (address => uint256)) public allowance; 

    constructor() public {
        balanceOf[msg.sender] = totalSupply;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        /*
        Notes:
            The approve function checks for the spender address be equal to the value?? 
            Then emits approval for front end..
            Once again idk whats the purpose of the allowance function  
        */
        //We want to approve that the perosn who 
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        /* 
        Notes: 
            Meant to send tokens from one address to another, 
            performs logical checks on whether senders have sufficient balance for transer
            then transfers the tokens from senders address to receiver
        */ 
        //require that the initial value is greater than or equal to the value being transfered
        require(balanceOf[msg.sender] >= _value);
        //remove transfer amount from balance of sender
        balanceOf[msg.sender] -= _value;
        //add the transfer amount to receiver value
        balanceOf[_to] += _value;
        // I need to do a deeper review of the emit keyword
        emit Transfer(msg.sender, _to, _value); 

        return true;
    }

    function transferFrom(address _from,address _to, uint256 _value) public returns (bool success) {
        /*
        Notes:
            transferFrom contains very similar logic to transer, except this is third party transfer
            Which brings up the purpose of the allowance (which is yet to truly be seen)
        */
        require(_value <= balanceOf[_from]);
        // What the heck does allowance even mean??
        require(_value <= allowance[_from][msg.sender]);
        //add the balance for transferFrom
        balanceOf[_to] += _value;
        // subtract the balance for transferFrom
        balanceOf[_from] -= _value;
        allowance[msg.sender][_from] -= _value;
        //Store the transfer information on the front end application
        emit Transfer(_from, _to, _value);

        return true;
    }
}