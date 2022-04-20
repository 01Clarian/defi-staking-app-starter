// The main file where we will be creating the mothership output for ui
import React, {Component} from "react";
import './App.css'
import Navbar from './Navbar.js';
import Web3 from "web3";
import Tether from '../truffle_abis/Tether.json'
import RWD from '../truffle_abis/RWD.json'
import DecentralBank from '../truffle_abis/DecentralBank.json'
import Main from "./Main.js";
import ParticleSettings from "./ParticleSettings.js"

class App extends Component {

    async UNSAFE_componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }


    async loadWeb3(){ // This function connects the app to the blockchain, these steps are provided by metamask
        if (window.ethereum){
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.ethereum) {
                window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('No Eth browser detected, check metamask')
        }   
    }

    async loadBlockchainData() {
        const web3 = window.web3
        const account = await web3.eth.getAccounts()
        this.setState({account:account[0]})
        const newtworkId = await web3.eth.net.getId()

        //Load Tether Contract
        const tetherData = Tether.networks[newtworkId]
        if(tetherData){
            const tether = new web3.eth.Contract(Tether.abi, tetherData.address)
            this.setState({tether})
            let tetherBalance = await tether.methods.balanceOf(this.state.account).call()
            this.setState({tetherBalance: tetherBalance.toString()})
            console.log({balance:tetherBalance})
        } else {
            window.alert('Error! Tether contract not deployed - no detect network!')
        }

        //Load RWD Data
        const rwdData = RWD.networks[newtworkId]
        if(rwdData){
            const rwd = new web3.eth.Contract(RWD.abi, rwdData.address)
            this.setState({rwd})
            let rwdBalance = await rwd.methods.balanceOf(this.state.account).call() 
            // I need to read web3 docs
            this.setState({rwdBalance: rwdBalance.toString()})
            console.log({rwdbalance:rwdBalance.toString()})
        } else { 
            window.alert('Error! Reward Token CONTRACT NOT DEPLOYED')
        }

        //Load DecentralBank Data
        const decentralBankData = DecentralBank.networks[newtworkId]
        if(decentralBankData){
            const decentralBank = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)
            this.setState({decentralBank})
            let stakingBalance = await decentralBank.methods.stakingBalance(this.state.account).call() 
            // I need to read web3 docs
            this.setState({stakingBalance: stakingBalance.toString()})
            console.log({stakingBalance: stakingBalance.toString()})
        } else {
            window.alert('Error! DECENTRAL BANK CONTRACT NOT DEPLOYED')
        }


        this.setState({loading:false}) 
        //Change the state of loading data once we've loaded all data
    } //End Async for loading blockchain data 
    
    
    //Staking Functionality Pre-face
    //twoFunctions, One that stakes and one that unstakes
    //Leveraging two tokens in our decentral bank contract, deposit and unstaking tokens
    //Staking Function, access decentral bank, deposit tokens and access the transaction hash
    //function to approve transaction
    //deposit tokens is TransferFrom functionality 
    stakeTokens = (amount) => {
        this.setState({loading:true})
        this.state.tether.methods.approve(this.state.decentralBank._address, amount).send({from: this.state.account}).on('transactionHash', (hash) => {
        this.state.decentralBank.methods.depositTokens(amount).send({from: this.state.account}).on('transactionHash', (hash) =>{
            this.setState({loading: false})
        })
    })
    }
    
    //Unstake Token function
    unstakeTokens = () => {
        this.setState({loading:true})
        this.state.decentralBank.methods.unstakeTokens().send({from: this.state.account}).on('transactionHash', (hash) =>{
            this.setState({loading: false})
        })
    }

    //Issue Reward Tokens 
    issueRWDTokens = () => {
        this.setState({loading:true})
        this.state.decentralBank.methods.issueToken().send({from:this.state.account}).on('transactionHash', (hash) => {
            this.setState({loading:false})
        })
    } 

    //Props is a special feature in react where we cna pass through special proterties,
    //In our case we want to begin to integrate metamask with the web application
    constructor(props){
        super(props)
        this.state = {
            account: '0x0', //we're initializing our state that is changing (the account numbers)
            tether: {},
            rwd: {},
            decentralBank:{},
            tetherBalance: '0',
            rwdBalance: '0',
            stakingBalance: '0',
            loading: true
        }
    }



    //All React code Goes in here
    render() { //renders to the web page
        let content
        {this.state.loading ? content = 
        <p 
        id='loader' 
        className="text-center" 
        style ={{margin:'30px'}}>
             LOADING...
        </p> : content=
        <
            Main
            tetherBalance = {this.state.tetherBalance}
            rwdBalance = {this.state.rwdBalance}
            stakingBalance = {this.state.stakingBalance}
            stakeTokens={this.stakeTokens}
            unstakeTokens = {this.unstakeTokens}
            issueRWDTokens = {this.issueRWDTokens}
            />}
        
    return ( 
        //Divs are containers that allow us to put html, and css
        <div className="App" style={{position: 'relative'}}>
            <div style={{position:'absolute'}}>
            <ParticleSettings/>
            </div>

            <Navbar account = {this.state.account}/>
            <div className="container-fluid mt-5"> 
                <div className="row">
                    <main role='main' className="col-lg-12 ml-auto mr-auto" style ={{maxWidth:'600px', minHeight:'100vm'}}>
                        <div>
                            {content}
                        </div>

                    </main>
                </div>
                {console.log(this.state.loading)}
            </div>
        </div>
        )
    }    
}
/*
What is CSS? 
    - Cascading Style Sheets, it Styles the websites (colors, fonts)
    - className and boostrap are CSS
What is HTML?
    - HTML is the markup language for writing basic text and website things
How does JS play into all this?

    - JS allows the websites to be dynamic 
*/
export default App;