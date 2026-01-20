import { Component } from 'react';

interface Props {
    name: string;
}

class Greeting extends Component<Props> {

    componentDidMount() {
        return "componentDidMount called";
    }

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1 style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "50px",
                    fontWeight: "bold",
                    padding: "0 10px",
                    color: "red",
                }}>Hello {this.props.name}</h1>

                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "40px",
                    fontWeight: "bold",
                    padding: "0 20px",

                }}>{this.componentDidMount()}</p>
            </>
        )
            }
}

export default Greeting;