import { useEffect, useState } from "react";

// Mounting
/**const LifecycleTesting = () => {
    useEffect(() => {
        console.log("mount or update")
    });

    useEffect(() => {
        console.log("mount")
    }, []);
    return <h1>Testing LifeCycles</h1>
}*/

// Updating
/**const LifecycleTesting = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("mount yoki count\'da o\'zgarish yuz berdi");
    }, [count]);

    const handleIncrement= () => {
        setCount(count => count + 1);
    }

    return <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Count: {count}</h1>
    </div>
}*/

// Unmounting
const LifecycleTesting = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("mount amalga oshdi");
        return () => {
            console.log("unmount amalga oshdi");
        }
    }, []);

    const handleIncrement= () => {
        setCount(count => count + 1);
    }

    return <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Count: {count}</h1>
    </div>
}

export default LifecycleTesting