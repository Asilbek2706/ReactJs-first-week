import {useEffect} from "react";
interface IProps {
    name?: string;
}

const Greeting = (props: IProps) => {
    useEffect(() => {
        console.log("componentDidMount");
    }, []);
    return (
        <>
            <h1>Hello {props.name}!</h1>
        </>
    )

}

export default Greeting