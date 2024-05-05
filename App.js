import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Languages from './components/Languages';
import TechnicalSkills from './components/TechnicalSkills';
import Interests from './components/Interests';
import CareerObjective from './components/CareerObjective';
import Education from './components/Education';
import Socials from './components/Socials';
import './App.css';

function App() {
  return (
    <div className="app">
    
      <Header />
  
      <div className="header-row">
      <CareerObjective />
      <Contact />
      </div>
      
      <div className="header-row"> 
      <Education />
      <Languages />
      </div>
      
      <div className="header-row"> 
      <Skills />
      <TechnicalSkills />
      </div>
      
      <div className="header-row"> 
      <Interests />
      <Socials/>
      </div>
      
      
    </div>
  );
}

export default App;