import {Component} from 'react';

interface IState {
    age: number;
}

class Counter extends Component<IState> {
    state = {
        age: 19,
    }

    ageIncrementChange = () => {
        this.setState({
            age: this.state.age + 1
        });
    };

    ageDecrementChange = () => {
        this.setState({
            age: this.state.age - 1
        });
    };

    render() {
        return (
            <>
                <button style={{
                    border: "2px solid green",
                    borderRadius: "10px",
                    cursor: "pointer",
                    margin: "10px",
                    fontSize: "20px"
                }} onClick={this.ageIncrementChange}>
                    Age increment
                </button>
                <button style={{
                    border: "2px solid green",
                    borderRadius: "10px",
                    cursor: "pointer",
                    margin: "10px",
                    fontSize: "20px",
                }} onClick={this.ageDecrementChange}>
                    Age decrement
                </button>
                <p style={{
                    border: "2px solid green",
                    borderRadius: "10px",
                    cursor: "pointer",
                    margin: "10px",
                    fontSize: "20px",
                    padding: "10px",
                    color: "red",
                }}>You are <span style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "10px",
                    color: "palegreen",
                }}>{this.state.age} years</span> old</p>
            </>
        )
    }
}

export default Counter;