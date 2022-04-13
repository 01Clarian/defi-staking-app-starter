import React, {Component} from "react";

class Navbar extends Component {
    //All React code Goes in here
    render() { //renders to the web page
    return ( 
        //Nav is the js version of div, but customized specifically for navbars (beneficially)
        <nav className="navbar navbar-dark fix-top shadow p-0"
        style={{backgroundColor:'black', height:'50px'}}>
            <a style={{color:'white'}}> DAPP Yield Farming (Decentralized Banking)</a>
            <ul>
                <li>
                    <small style={{color:'white'}}> Account Number

                    </small>
                </li>
            </ul>        
         
        </nav>
        )
    }    
}

export default Navbar