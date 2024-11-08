import React from "react";

const Foot = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">ZOR SAYAHAT Rekvizitlar</h3>
          <p>
            Pochta manzili: Nukus shahri, Hakim-ata MFY, Tilevbergen Jumamuratov
            ko?chasi, 4 A-uy
          </p>
          <p>MFO: 01037</p>
          <p>H/R: 20208000807163834001</p>
          <p>H/R: 20208000807163834001</p>
          <p>INN: 311707125</p>
          <p>“Бизнесни ривожлантириш банки» АТБ Нукус банк хизматлари офиси</p>
        </div>
      </div>

      <div className="bg-gray-700 text-center py-4 mt-8">
        <p className="text-sm">© 2024 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Foot;
