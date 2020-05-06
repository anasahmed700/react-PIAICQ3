import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component 1 
class Hello extends React.Component {
  render(){
    return (
      <h1>Hello</h1>
    )
  }
}
// Component 2
class World extends React.Component {
  render() { return <p>World!</p> }
}

// Component 3
class HelloWorld extends React.Component{
  // defining functions 
  getName(){
    return "Anas Ahmed";
  }

  // constructor defining 
  constructor(){
    super();
    this.family = "Ansari";
  }

  render(){
    return (
      // each component can only return a single element or multiple tags wrap in a single tag
      <section className="foo">
        <Hello /> 
        <World />
        
        {/* to use javascript we can use {Only JS expressions} */}
        { 2 + 2 } <br /> 
        
        {/* calling functions  */}
        {this.getName()} <br />

        {/* accessing constructor element  */}
        { this.family }
      </section>
    )
  }
}

              // component to render 
ReactDOM.render(<HelloWorld />, document.getElementById('root'));