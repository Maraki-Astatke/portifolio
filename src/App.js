import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Service from './component/Service';
import Skills from './component/Skills';
import ContactPage from './component/Contact';
import Project from './component/Project';





function App() {
  return (
    <div className="App bg-black text-white">
  <Header/>
  <Hero/>
  <Service/>
  <Skills/>
  <div className='flex justify-center pl-10'>
  <Project/>
  </div>
 
 <ContactPage/>
  <div className='flex justify-around text-2xl '>
  <Header/>
  </div>


 
  
 
    </div>
  );
}

export default App;