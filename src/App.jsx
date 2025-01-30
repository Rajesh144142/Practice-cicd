import { useState } from 'react'
import Hero from './components/hero_section'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
  <Hero/>
    </>
  )
}

export default App
