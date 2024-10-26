// src/App.js
import React from 'react';
import DigitalCard from './DigitalCard';

function App() {
  const companyInfo = {
    logoUrl: "/path/to/logo.png", // Replace with actual path
    companyName: "Deepak & Company",
    phoneNumber: "011 - 41020515, 9911117718",
    whatsappNumber: "9911117718", // No "+" sign
    email: "deepak17718@gmail.com",
    locationUrl: "https://maps.google.com/?q=3564/24+Ravi+Raj+Market,+Gali+Hakim+Baqa,+Chawri+Bazar,+Delhi-110006",
    websiteUrl: "https://www.deepakcompany.com",
    shopUrl: "https://www.deepakcompany.com/shop",
    address: "3564/24, Ravi Raj Market, Gali Hakim Baqa, Chawri Bazar, Delhi-110006",
    aboutText: "We at Deepak & Company specialize in providing top-quality products, including a wide range of hardware materials and fittings for both commercial and residential needs. Our dedication to quality and customer satisfaction has made us a trusted name in the market. Visit us to explore our extensive product range and experience unparalleled service."
  };

  return (
    <div className="App">
      <DigitalCard {...companyInfo} />
    </div>
  );
}

export default App;
