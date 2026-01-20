import './App.css'
import Greeting from './components/Greeting.tsx';
import Counter from './components/Counter.tsx';

function App() {
    return (
        <>
            <div className="App" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: "10px",
                border: "2px solid red",
                borderRadius: "15px",
                backgroundColor: "#181218",
            }}>
                <Greeting name="Asilbek"/>
                <Counter />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: "30px",
                padding: "10px",
                border: "2px solid red",
                borderRadius: "15px",
                backgroundColor: "#181218",
            }}>
                <Greeting name="Asilbek"/>
                <Counter />
            </div>
        </>
)
}

export default App
