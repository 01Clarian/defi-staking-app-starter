import React, {Component} from "react";
import bank from '../bank.png'

class Navbar extends Component {

    render() { //renders to the web page
    return ( 
        //Nav is the js version of div, but customized specifically for navbars (beneficially)
        //We're already using bootstrap with these classes
        <nav className="navbar navbar-dark fix-top shadow p-0"
        style={{backgroundColor:'black', height:'50px'}}>
            <a className="navbar-brand col-sm-3 col-md-2 mr-0"
            style={{color:'white'}}> 
            <img src={bank} width='50' height='30' className='d-inline-block aligh-top'
            alt='bank'/>
            &nbsp; DAPP Yield Farming (Decentralized Banking)
            </a>
            <ul className="navbar-nav px-3">
                <li className="text-nowrap d-none nav-item d-sm-none d-sm-block">
                    <small style={{color:'white'}}> Account Number :{this.props.account}

                    </small>
                </li>
            </ul>        
         
        </nav>
        )
    }    
}

export default Navbar