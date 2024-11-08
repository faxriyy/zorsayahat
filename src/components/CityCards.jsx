// src/components/CityCards.js
import React, { useState } from "react";
import axios from "axios";

const cities = [
  {
    name: "🕌 -- САМАРКАНД и БУХАРА — 🕌",
    description:
      "🚙 Туда и обратно транспорт\n🕴 Гит\n🏛 Проходные билеты\n 🏪 Проживания ( 1 ночь в Гостинице)\n🍽 Питание ( завтрак )\n🕴 Сопровождающий из агентство\n📹 Мобилогроф\n💰 590 000 сумм\n",
    image:
      "https://images.squarespace-cdn.com/content/v1/620b705876b230130e2b3710/f970992d-d3ba-4abf-913f-d95a61fef64c/shutterstock_289139663.jpg?format=2500w",
  },
  {
    name: "🕌 -- САМАРКАНД — 🕌",
    description:
      "🚙 Туда и обратно транспорт\n🕴 Гит\n🏛 Проходные билеты\n🕴 Сопровождающий из агентство\n📹 Мобилогроф\n💰 530 000 сумм",
    image:
      "https://images.squarespace-cdn.com/content/v1/620b705876b230130e2b3710/af89886c-68c8-4b54-abbb-d54d877a3275/registan.jpg?format=2500w",
  },
  {
    name: "🕌 -- БУХАРА — 🕌`",
    description:
      "🚙 Туда и обратно транспорт\n🕴 Гит\n🏛 Проходные билеты\n🕴 Сопровождающий из агентство\n📹 Мобилогроф\n💰 430 000 сумм",
    image:
      "https://i.ytimg.com/vi/r8dC9XmKP8I/maxresdefault.jpg",
  },
  {
    name: "🕌 -- ХИВА — 🕌",
    description:
      "🚙 Туда и обратно транспорт\n🕴 Гит\n🏛 Проходные билеты\n🕴 Сопровождающий из агентство\n💰 150 000 сумм",
    image:
      "https://kalpak-travel.com/wp-content/uploads/2017/05/khiva-uzbekistan-travel.jpg",
  },
];
function CityCards() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    peopleCount: "",
    travelDate: "",
  });

  const openModal = (city) => {
    setSelectedCity(city);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      peopleCount: "",
      travelDate: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Telegram bot token va chat ID
    const TELEGRAM_BOT_TOKEN = "7726896839:AAGr-32uVDu4Flu77wQLSe6ce9jM61-lTi0";
    const TELEGRAM_CHAT_ID = 790699339;

    const message = `
    📝 Новый бронь:
    👤 Имя, Фамилия: ${formData.fullName}
    📞 Телефон: ${formData.phoneNumber}
    👥 Количество человек: ${formData.peopleCount}
    📅 Дата путешествия: ${formData.travelDate}
    📍 Город:\n ${selectedCity.name}
  `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }
      );
      alert("Данные бронирования отправлены!");
    } catch (error) {
      console.error("Произошла ошибка при отправке сообщения:", error);
      alert(
        "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова."
      );
    }

    closeModal();
  };

  return (
    <section id="tours" className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
      Наши направления
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col ">
              <h3 className="text-2xl font-semibold mb-2">{city.name}</h3>
              <p className="text-gray-600 mb-4">
                {city.description.split("\n").map((line, index) => (
                  <>
                    {line}
                    <br />
                  </>
                ))}
              </p>
              <button
                onClick={() => openModal(city)}
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Бронировать
              </button>
            </div>
          </div>
        ))}
      </div>
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">
        Бронирование - {selectedCity.name}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Имя, Фамилия:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Телефонный номер:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Количество людей:</label>
          <input
            type="number"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleInputChange}
            required 
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            min="1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Дата путешествия:</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-orange-600"
          >
            Подтвердить
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
