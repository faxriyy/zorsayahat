// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://meros.uz/upload/2017/02/d604857632277e1a95f51aabd1094180-large.jpg')`,
      }}
    >
      <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded-md">
        <h1 className="text-4xl font-bold mb-4">
          Добро пожаловать в наше агентство
        </h1>
        <p className="text-lg mb-6">
          Мы здесь, чтобы предложить вам незабываемые путешествия. Откройте для
          себя удивительные места и новые приключения с нашими турпакетами!
        </p>
        <a
          href="#tours"
          className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Посмотреть наши направления
        </a>
      </div>
    </section>
  );
}

export default Home;
