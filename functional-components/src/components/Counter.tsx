import {useState} from "react";

export default function Counter ()  {
    const [age, setAge] = useState(19);

    const ageIncrement = () => {
        setAge(age => age + 1);
    };

    return (
        <>
            <button onClick={ageIncrement}>
                Age increment
            </button>
            <p>You are {age} old</p>
        </>
    );
};