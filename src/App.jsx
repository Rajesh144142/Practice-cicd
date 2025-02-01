// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero_section';
// import Navbar from './components/navigation_bar';
// import Education from './components/education-section';
import './App.css';

function App() {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Hero />} />
        //         {/* <Route path="/education" element={<Education />} /> */}
        //     </Routes>
        //     {/* <Navbar /> */}
        // </Router>
        <>
            <Hero/>
        </>
    );
}

export default App;
