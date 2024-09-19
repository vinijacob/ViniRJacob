import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import ContactMe from './Pages/ContactMe'; 
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/journey' element={<Experience />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  )
}
