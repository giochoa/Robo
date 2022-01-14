import React, {Component} from "react";
import CardList from "./CardList";
// import {Robots} from './Robots';
import SearchBox from './SearchBox.js';
import './App.css'
import Scroll from './Scroll.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({robots: data}))
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
                <h1 className='f1'>Sheyda And Friends</h1>
                <SearchBox inputSearch={this.onInput}/>
                <Scroll>
                   <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}
export default App
