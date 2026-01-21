import Greeting from "./components/Greeting.tsx";
import Counter from "./components/Counter.tsx";
import './App.css'

function App() {
  return (
      <div className="App">
          <Greeting name={"Asilbek"}/>

          <Counter />
      </div>
  )
}

export default App
