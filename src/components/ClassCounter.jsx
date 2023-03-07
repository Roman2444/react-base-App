import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

   render() {
        return (
            <div>
                <p> this it class-counter </p> 
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>increment</button>
                <button onClick={() => this.decrement()}>decrement</button>   
            </div>
        );
   }
};

export default ClassCounter;