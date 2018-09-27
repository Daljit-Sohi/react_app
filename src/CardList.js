import React from 'react';
import Card from './Card';
// import {robots} from './robots'

const CardList = ({robots}) => {

    /** 
    const cardComponent = robots.map((user, index) =>{
        return (
            <Card 
                key={index} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email} 
            />
        );
        //React wants us to give each one of the array element a unique 'key'. 
        //So in our case we just give it the index of each element in the array.
    })
    */

    return (
        // <div>
        //     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        //     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        //     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        // </div>
        <div>
            {/* {cardComponent} --> Prefered Way of doing this (My) */}
            {
                robots.map((user, index) =>{
                    return (
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email} 
                        />
                    );
                    //React wants us to give each one of the array element a unique 'key'. 
                    //So in our case we just give it the index of each element in the array.
                })
            }
        </div>
    );
}

export default CardList;