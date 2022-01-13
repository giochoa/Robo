import React, {Component} from "react";
import CardList from "./CardList";
import {Robots} from './Robots';
import SearchBox from './SearchBox.js';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: Robots,
            searchField: ''
        }
    }
    onInput =(input) => {
        this.setState({searchField : input.target.value})
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(rob =>{
            return rob.name.toLowerCase().includes( this.state.searchField.toLowerCase())
        })
        return(
            <div className = 'tc'>
                <h1>Sheyda And Friends</h1>
                <SearchBox inputSearch={this.onInput}/>
                <CardList robots = {filteredRobots}/>
            </div>
        )
    }
}
export default App
