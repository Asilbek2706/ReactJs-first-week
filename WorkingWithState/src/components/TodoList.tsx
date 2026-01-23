import {useState} from "react";

const TodoList = () => {
    const [items, setItems] = useState(["olma", "banan"])

    const addItem = () => {
        const meva = "gilos";
        setItems([
            ...items,
            meva
        ]);
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;