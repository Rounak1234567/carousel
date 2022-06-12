import { useState } from 'react'
import './App.css'
import { Slider } from './components/slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Slider/>
    </div>
  )
}

export default App
