import { Component } from 'react';

interface Props {
    name: string;
}

class Greeting extends Component<Props> {

    componentDidMount() {
        console.log("Component mounted.");
    }

    constructor(props: Props) {
        super(props)
    }

    render() {
        return <h1 style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "50px",
                    fontWeight: "bold",
                    padding: "0 10px",
                    color: "red",
                }}>Hello {this.props.name}</h1>
    }
}

export default Greeting;