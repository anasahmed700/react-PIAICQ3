import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      fname: "Anas",
      count: 0
    };
    this.incCounter = this.incCounter.bind(this);
  }

  incCounter(){
    let count = this.state.count;

    this.setState({
      count: ++count
    });
  }
  render(){
    return (
      <div className="App">
        {this.state.fname} <br />
        {this.state.count}
        <button onClick={this.incCounter}>incrementer</button>
      </div>
    );
  }
}

export default App;
