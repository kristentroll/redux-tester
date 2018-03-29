import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0}
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleDecrement(){
        console.log("in decrement");
        this.setState((prevState)=>{
            return {count: prevState.count-1};
        });
    }

    handleIncrement(){
        console.log("in increment");
        this.setState((prevState)=>{
            return {count: prevState.count+1};
        });
    }

    render() {
        return(
            <div className="Counter-container">
                <button id="decrement" onClick={this.handleDecrement}>-</button>
                {this.state.count}
                <button id="increment" onClick={this.handleIncrement}>+</button>
            </div>
        );
    }
}
export default Counter;