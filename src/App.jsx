// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CityCards from './components/cityCards';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      {/* Boshqa komponentlar keyinroq bu yerda qo‘shiladi */}
      <Home />
      <CityCards />
      <Contact />
    </div>
  );
}

export default App;
