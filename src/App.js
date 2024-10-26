// src/App.js
import React from 'react';
import DigitalCard from './DigitalCard';
import logo from './assets/logo.jpg';

function App() {
  const companyInfo = {
    logoUrl: logo, // Replace with actual path
    companyName: "Deepak & Company",
    phoneNumber: "011 - 41020515, 9911117718",
    whatsappNumber: "+91 9911117718", // No "+" sign
    email: "deepak17718@gmail.com",
    locationUrl: "https://maps.google.com/?q=3564/24+Ravi+Raj+Market,+Gali+Hakim+Baqa,+Chawri+Bazar,+Delhi-110006",
    websiteUrl: "https://deepakandcompany.netlify.app/",
    shopUrl: "https://deepakandcompany.netlify.app/",
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
