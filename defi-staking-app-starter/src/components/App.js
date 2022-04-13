// The main file where we will be creating the mothership output for ui
import React, {Component} from "react";
import './App.css'
import Navbar from './Navbar.js';


class App extends Component {
    //All React code Goes in here
    render() { //renders to the web page
    return ( 
        //Divs are containers that allow us to put html, and css
        <div>
            <Navbar/>
            <div className="text-center" > 
                <h> Hello, World!</h>
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