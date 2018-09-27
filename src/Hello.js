import React, { Component } from 'react';
import './Hello.css'

//THis is just a function
/**
class Hello extends Component{
    render(){
        return(
            <div className="f1 tc">
                <h1>Hello World</h1>
                // <p>Welcome to React App</p>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}
*/

const Hello = (props) => {
    return(
        <div className="f1 tc">
        <h1>Hello World</h1>
        {/* <p>Welcome to React App</p> */}
        <p>{props.greeting}</p>
    </div>
    );
}

export default Hello;