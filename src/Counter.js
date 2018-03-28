import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0}
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleDecrement(){

    }

    handleIncrement(){

    }

    render() {
        return(
            <div className="Counter-container">
                <button id="decrement">-</button>
                {this.state.count}
                <button id="increment">+</button>
            </div>
        );
    }
}
export default Counter;