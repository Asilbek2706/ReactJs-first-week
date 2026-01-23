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

     useEffect(() => {
        if (searchTerm) {
            searchFromDatabase(searchTerm);
        }
     }, [searchTerm]);

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

    const [text, setText] = useState("");

    useEffect(() => {
        if (text.length > 0) {
            document.title = `Yozilmoqda: ${text}`;
        } else {
            document.title = "React App";
        }

        console.log("tab sarlavhasi o'zgardi!")
    }, [text]);

    useEffect(() => {
        return () => {
            document.title = "React App";
            console.log("document o'chdi sarlavha tiklandi!")
        }
    }, []);

    const handleIncrement= () => {
        setCount(count => count + 1);
    }

    // useEffect(() => {
    //     const chatConnection = connectToChat();
    //
    //     return () => {
    //         chatConnection.disconnect();
    //         console.log("Chat ulanishi uzildi.");
    //     };
    // }, []);

    return <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Count: {count}</h1>

        <hr />

        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <p>Tepadagi brawser tabiga qarang!</p>
        </div>
    </div>
}

// const WindowWidthTracker = () => {
//     const [width, setWidth] = useState(window.innerWidth);
//
//     useEffect(() => {
//         const handleResize = () => setWidth(window.innerWidth);
//
//
//         // Mounting
//         window.addEventListener('resize', handleResize)
//         console.log("Oynani kuzatish boshlandi!")
//
//         //Unmounting
//         return () => {
//             window.removeEventListener('resize', handleResize)
//             console.log("Oynani kuzatish to\'xtatildi!")
//         }
//     }, []);
//
//     return <div>Oyna kengligi: {width}px</div>
// }

// export { WindowWidthTracker };
export default LifecycleTesting