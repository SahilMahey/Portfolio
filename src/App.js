import './App.css'
import React,{useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Navbar from './Pages/Navbar/Navbar'
import ErrorPage from './Pages/Error/Error'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills';
import Project from './Pages/Project/Project';
import Experience from './Pages/Experience/Experience'
import Contact from './Pages/Contact/Contact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    document.body.classList.toggle('open', isMenuOpen);
  }, [isMenuOpen]);
  return (
   <>
    <BrowserRouter>
    <Navbar isMenuOpen = {isMenuOpen} toggleMobileMenu = {toggleMobileMenu}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Projects" element={<Project />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App; 