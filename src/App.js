import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact'
import Pricing from './components/Pricing';
import Home from './components/Home';
import Faq from './components/Faq';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/faq' element={<Faq />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    
      
    </>
  );
}

export default App;
