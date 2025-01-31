import {useState} from 'react'
import Hero from './components/hero_section'
import Navbar from './components/navigation_bar.jsx'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <Hero/>
            <Navbar/>
        </>
    )
}

export default App
