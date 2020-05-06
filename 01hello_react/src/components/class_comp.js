import React,{Component} from 'react';

class FirstClass extends Component{
    render(){
        return (
            <div>
                <h1>Hello first class {this.props.name}</h1>
                <p>company is {this.props.company}</p>
            </div>
        )
    }
}
export default FirstClass