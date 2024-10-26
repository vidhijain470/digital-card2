// src/App.js
import React from 'react';
import DigitalCard from './DigitalCard';
import logo from './assets/logo.png';

function App() {
  const companyInfo = {
    logoUrl: logo, // Replace with actual path
    companyName: "Deepak & Company",
    phoneNumber: "011 - 41020515, 9911117718",
    whatsappNumber: "+91 9911117718", 
    email: "deepak17718@gmail.com",
    locationUrl: "https://maps.app.goo.gl/H4zwkjuymGxMwLxa9",
    websiteUrl: "https://deepakandcompany.netlify.app/",
    shopUrl: "https://deepakandcompany.netlify.app/",
    address: "3564/24, Ravi Raj Market, Gali Hakim Baqa, Chawri Bazar, Delhi-110006",
    aboutText: "At Deepak & Company, we specialize in providing top-quality industrial supplies and equipment. As trusted dealers and stockists, we offer a wide range of products, including rubber sheets, hose pipes, and cutting tools from renowned brands such as Addison, Miranda, Todem, and Widia. Our product line also includes welding accessories, safety equipment, hardware, aluminum sheets and coils, and grinding wheels. With a commitment to quality and customer satisfaction, we are your reliable partner for industrial needs."
  };

  return (
    <div className="App">
      <DigitalCard {...companyInfo} />
    </div>
  );
}

export default App;
