pragma solidity ^0.5.0;

import './RWD.sol';
import './Tether.sol';

contract DecentralBank {
    /*
    Notes:
        The DecentralBank contract
    */
    address public owner;
    string public name = 'Decentral Bank';
    Tether public tether; // INHERITANCE:: setting the contracts and their functionality public as variables
    RWD public rwd;

    address[] public stakers;

    mapping(address =>uint) public stakingBalance; //allows us to update the staking balance as they change
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(RWD _rwd, Tether _tether) public {
        /*
        Notes:
            Setting our constructer parameters equal to the tether and reward contracts
            which have to be statically typed as shown above^^^
        */
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender; 
    }

    function depositTokens(uint _amount) public {
        /*
        Notes:
            This function exits for transfering tether tokens to this contract address for staking
            transfering from a third party so we're going to need to use the transferFrom tether function 

            Also, Require the staking amount to be greater than 0
        */

        require(_amount > 0, 'Amount Cannot be 0');
        tether.transferFrom(msg.sender, address(this), _amount);

        //Update The Staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] +_amount;

        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        //Update Staking Balance
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    function unstakeTokens() public {
        /*
        NOTES:
            This is the function that allows people to unstake their tokens from the 
            yield farming liquidity pool
        */
        //Require the amount to be greater than 0
        uint balance = stakingBalance[msg.sender];
        require(balance > 0, 'Balance Must be Greater than 0');

        //Transfer the tokens to the specified contract address from our bank
        tether.transfer(msg.sender ,balance);

        // Reset Staking Balance
        stakingBalance[msg.sender] = 0;

        //Reset Staking Status
        isStaking[msg.sender] = false; 
    }

    function issueToken() public {
        require(msg.sender == owner, 'Caller must be the owner');
        for(uint i =0; i<stakers.length; i++) { //iterating for the full length of stakers
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient]/9; // divide by 9 to create percentage incentives for staking quantity
            if(balance >0) {
            rwd.transfer(recipient, balance);
            }
        }     
    }

        
}