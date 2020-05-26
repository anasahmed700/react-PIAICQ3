import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Comment from "./components/extract_component";

// Component 1
class Hello extends React.Component {
  // class component
  render() {
    return <h1>Hello</h1>;
  }
}
// Component 2
class World extends React.Component {
  render() {
    return <p>World!</p>;
  }
}
// function component 3
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}
// setting props.name
const welcome = <Welcome name="Anas" />;

// Main Component 4
class HelloWorld extends React.Component {
  // defining functions
  getName() {
    return "Anas Ahmed";
  }

  constructor() {
    super();
    this.family = "Ansari";
  }

  render() {
    return (
      // each component can only return a single element or multiple tags wrap in a single tag
      <section className="foo">
        {/* component 3 custom Hello jsx element */}
        <Hello />
        {/* component 3 custom world jsx element */}
        <World />
        {/* to use javascript we can use {Only JS expressions} */}
        {2 + 2} <br />
        {/* calling functions  */}
        {this.getName()} <br />
        {/* accessing constructor element  */}
        {this.family}
        {/* component 3 custom welcome jsx element*/}
        {welcome}
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </section>
    );
  }
}
// assigning extracted components values
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
// component to render
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
// ReactDOM.render(
//   greetJSX, document.getElementById('root')
// );

// --------- extracting components -------

// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );
