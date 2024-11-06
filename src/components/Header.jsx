// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ZorSayahat</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-200">Bas bet</a></li>
            <li><a href="#tours" className="hover:text-gray-200">Tourlar</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
