import { useState } from "react";

export default function InputMirror() {
    const [text, setText] = useState("");

    return (
        <div style={{ padding: "20px" }}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                   placeholder="Enter Your Name" />
            <p>Siz yozyapsiz: <strong>{text}</strong></p>
            <button onClick={() => setText("")}>Tozalash</button>
        </div>
    )
}