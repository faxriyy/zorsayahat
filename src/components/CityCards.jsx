// src/components/CityCards.js
import React, { useState } from 'react';
import axios from 'axios';

const cities = [
  { name: "Aral", description: "Go'zal manzaralardan bahramand bo'ling.", image: "https://image.cnbcfm.com/api/v1/image/107171852-1672249559106-gettyimages-723524843-kijf01387.jpeg?v=1675405015" },
  { name: "Shilpiq", description: "Tarixiy joylarni o'rganing.", image: "https://image.cnbcfm.com/api/v1/image/107171852-1672249559106-gettyimages-723524843-kijf01387.jpeg?v=1675405015" },
  { name: "Qarateren`", description: "Sokin plyajlarda dam oling.", image: "https://image.cnbcfm.com/api/v1/image/107171852-1672249559106-gettyimages-723524843-kijf01387.jpeg?v=1675405015" },
  { name: "Samarqand", description: "Jo'shqin tungi hayotga sho'ng'ing.", image: "https://image.cnbcfm.com/api/v1/image/107171852-1672249559106-gettyimages-723524843-kijf01387.jpeg?v=1675405015" },
  { name: "Buxoro", description: "Madaniy xazinalarni kashf eting.", image: "https://image.cnbcfm.com/api/v1/image/107171852-1672249559106-gettyimages-723524843-kijf01387.jpeg?v=1675405015" },
];

function CityCards() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    peopleCount: '',
    travelDate: '',
  });

  const openModal = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      peopleCount: '',
      travelDate: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Telegram bot token va chat ID
    const TELEGRAM_BOT_TOKEN = '7726896839:AAGr-32uVDu4Flu77wQLSe6ce9jM61-lTi0';
    const TELEGRAM_CHAT_ID = '1793142607';

    const message = `
    📝 Yangi Bron:
    👤 Ism, Familiya: ${formData.fullName}
    📞 Telefon: ${formData.phoneNumber}
    👥 Odamlar soni: ${formData.peopleCount}
    📅 Sayohat vaqti: ${formData.travelDate}
    📍 Shahar: ${selectedCity.name}
  `;

    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      });
      alert("Bronlash ma'lumotlari yuborildi!");
    } catch (error) {
      console.error("Xabar yuborishda xatolik yuz berdi:", error);
      alert("Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }

    closeModal();
  };

  return (
    <section id="tours" className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Bizning Yo'nalishlarimiz</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
        {cities.map((city, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{city.name}</h3>
              <p className="text-gray-600 mb-4">{city.description}</p>
              <button 
                onClick={() => openModal(city)} 
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Bron qilish
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Bron qilish - {selectedCity.name}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Ism, Familiya:</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full border-gray-300 rounded-md p-2 mt-1" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Telefon Raqami:</label>
                <input 
                  type="tel" 
                  name="phoneNumber" 
                  value={formData.phoneNumber} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full border-gray-300 rounded-md p-2 mt-1" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Odamlar soni:</label>
                <input 
                  type="number" 
                  name="peopleCount" 
                  value={formData.peopleCount} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full border-gray-300 rounded-md p-2 mt-1" 
                  min="1" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Sayohat sanasi:</label>
                <input 
                  type="date" 
                  name="travelDate" 
                  value={formData.travelDate} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full border-gray-300 rounded-md p-2 mt-1" 
                />
              </div>
              <div className="flex justify-end space-x-4 mt-4">
                <button 
                  type="button" 
                  onClick={closeModal} 
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Bekor qilish
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-orange-600"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CityCards;
