// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Связаться с нами
        </h2>
        {/* md:grid-cols-2 */}
        <div className="grid grid-cols-1 gap-8">
          {/* Contact Form */}
          {/* <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Ism</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Ismingiz" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">E-mail</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Elektron pochtangiz" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Xabar</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Xabaringizni kiriting"></textarea>
            </div>
            
            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              Xabarni yuboring
            </button>
          </form>
           */}
          {/* Contact Information */}
          <div className="flex flex-col justify-center items-center text-center bg-primary text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Телефон: +998 99 957 71 17</p>
            <p className="mb-2">E-mail: info@touragency.com</p>
            <div className="mt-4">
              {/* Добавьте реальные ссылки на социальные сети */}
              <a href="#" className="text-white hover:text-orange-200 mx-2">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-orange-200 mx-2">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-orange-200 mx-2">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
