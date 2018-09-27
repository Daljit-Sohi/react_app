import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
// import { robots } from './robots';
import 'tachyons';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [], 
      searchfield: ''
    }
  }

  componentDidMount(){
    // console.log('componentDidMount Check')

    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json(); //convert the response into a json object
    }).then(users => {
      this.setState({robots: users}); //get the robots from the JSON
    })
  }

  onSearchChange = (event) => {
    //everytime an input changes, we get an event;
    this.setState({searchfield: event.target.value}); //Changing the value of an state element.
    
    /** 
    const filteredRobots = this.state.robots.filter(robot =>{
      return(
        robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
    });
    console.log(filteredRobots);
    */
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return(
        robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
    });
    return(
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>   
        <Scroll>   
          <CardList robots={filteredRobots}/>
        </Scroll>      
      </div>
    )
  }
}

export default App;