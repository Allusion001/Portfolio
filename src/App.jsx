import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './components/HeroSection' ;
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import MyPortfolio from './components/MyPortfolio';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {

  return (
    <div className='App'>
      <Navbar/>
      <HeroSection />
      <Skills/>
      <MyPortfolio/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
