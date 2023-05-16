import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/pages/Navbar'
import Home from "./assets/Components/pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
