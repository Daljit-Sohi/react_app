// import React, { Component } from 'react';
import React from 'react';

/** 
class Card extends Component{
    render(){
        return(
            <div>
                <img src=""/>
                <div>
                    <h2>Jane Doe</h2>
                    <p>jane.doe@gmail.com</p>
                </div>
            </div>
        );
    }
}
*/

const Card = ({ name, email, id }) =>{
    // const { name, email, id } = props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                {/* <h2>{props.name}</h2>
                <p>{props.email}</p> */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
