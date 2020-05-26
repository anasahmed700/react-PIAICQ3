import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';

// embedding expression in JSX
const name = "Anas";
const jsxGreetings = <p className="jsx-greet">Hello, {name} to the JSX</p>;
// another representation of above element
// const jsxGreetings = React.createElement(
//   'h1',
//   {className: 'jsx-greet'},
//   'Hello, to the JSX'
// );

function formatName(user) {
  return user.fname + " " + user.lname;
}
const user1 = {
  fname: "Anas",
  lname: "Ahmed",
};

const element = (
  <h1>
    Hello, {formatName(user1)} {jsxGreetings}
  </h1>
);

// JSX is an Expression Too
function getGreeting(user) {
  if (user) {
    return <div>
      Hello, {element}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>;
    
  } else {
    return <div>Hello, stranger {jsxGreetings}!</div>;
  }
}

ReactDOM.render(getGreeting(user1), document.getElementById("root"));

setInterval(getGreeting, 1000);
