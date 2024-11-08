// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CityCards from './components/CityCards';
import Contact from './components/Contact';
import Foot from './components/foot';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <CityCards />
      <Contact />
      <Foot />
      
    </div>
  );
}

export default App;
