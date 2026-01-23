import './App.css'
import LifecycleTesting /*{WindowWidthTracker}*/  from "./components/LifecycleTesting.tsx";
import {useState} from "react";

function App() {
    const [showComponent, setShowComponent] = useState(true);

    const handleToggle = () => setShowComponent(showComponent => !showComponent);

  return (
    <div>
        <button onClick={handleToggle}>Toggle Component</button>
        {showComponent && <LifecycleTesting />}

        <hr/>


        {/*<WindowWidthTracker/>*/}
    </div>


  )
}

export default App
