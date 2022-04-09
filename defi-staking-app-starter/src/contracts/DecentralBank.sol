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

    constructor(RWD _rwd, Tether _tether) public {
        /*
        Notes:
            Setting our constructer parameters equal to the tether and reward contracts
            which have to be statically typed as shown above^^^
        */
        rwd = _rwd;
        tether = _tether;

    }
        
}