import React from 'react';
// import { render } from 'react-dom';

function HelloComponent(props){
    return(
    <p>Hello first component! {props.name} {props.company}</p>
    )
}
export default HelloComponent