// // src/DigitalCard.js
// import React from 'react';
// import styled from 'styled-components';
// import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import Products from './Products';
// import { Link } from 'react-scroll';  // Import from react-scroll
// import rubbersheet from './assets/rubbersheet.jpg';
// import hosepipe from './assets/hosepipe.jpg';
// import cuttingtools from './assets/cuttingtools.jpg';

// // Add your product data here (e.g., product images and names)
// const productData = [
//   { imageUrl: rubbersheet, name: 'Rubber Sheet' },
//   { imageUrl: hosepipe, name: 'Hose Pipe' },
//   { imageUrl: cuttingtools, name: 'Cutting Tool' },
//   // Add more products as needed
// ];

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   background-color: #f5f5f5;
//   max-width: 400px;
//   margin: auto;
//   text-align: center;
// `;

// const Logo = styled.img`
//   width: 100px;
//   height: auto;
//   margin-bottom: 10px;
// `;

// const CompanyName = styled.h1`
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const ButtonGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
//   width: 100%;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const RoundButton = styled.a`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-color: #007bff;
//   color: white;
//   font-size: 24px;
//   text-decoration: none;
//   transition: background-color 0.3s ease;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ButtonLabel = styled.span`
//   margin-top: 5px;
//   font-size: 14px;
//   color: #555;
// `;

// const ContactInfo = styled.div`
//   text-align: left;
//   margin-top: 20px;
//   font-size: 16px;
//   color: #555;
// `;

// const AboutSection = styled.div`
//   margin-top: 20px;
//   padding: 10px;
//   background-color: #e9e9e9; 
//   border-radius: 5px;
//   text-align: left;
// `;

// const DigitalCard = ({ logoUrl, companyName, phoneNumber, whatsappNumber, email, locationUrl, address, aboutText }) => {
//   const whatsappMessage = "Hello Deepak & Company, I would like to inquire about your products.";
//   const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

//   return (
//     <CardContainer>
//       <Logo src={logoUrl} alt="Company Logo" />
//       <CompanyName>{companyName}</CompanyName>
//       <ButtonGrid>
//         <ButtonWrapper>
//           <RoundButton href={`tel:${whatsappNumber}`} title="Call Us">
//             <FaPhone />
//           </RoundButton>
//           <ButtonLabel>Call</ButtonLabel>
//         </ButtonWrapper>
//         <ButtonWrapper>
//           <RoundButton href={whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp Us">
//             <FaWhatsapp />
//           </RoundButton>
//           <ButtonLabel>WhatsApp</ButtonLabel>
//         </ButtonWrapper>
//         <ButtonWrapper>
//           <RoundButton href={`mailto:${email}`} title="Email Us">
//             <FaEnvelope />
//           </RoundButton>
//           <ButtonLabel>Email</ButtonLabel>
//         </ButtonWrapper>
//         <ButtonWrapper>
//           <RoundButton href={locationUrl} target="_blank" rel="noopener noreferrer" title="View Location">
//             <FaMapMarkerAlt />
//           </RoundButton>
//           <ButtonLabel>Location</ButtonLabel>
//         </ButtonWrapper>
//       </ButtonGrid>
//       <ContactInfo>
//         <p><FaMapMarkerAlt /> {address}</p>
//         <p><FaPhone /> {phoneNumber}</p>
//         <p><FaEnvelope /> {email}</p>
//       </ContactInfo>
//       <AboutSection>
//         <h3>About Us</h3>
//         <p>{aboutText}</p>
//       </AboutSection>
//       <Products products={productData} whatsappNumber={whatsappNumber} />
//     </CardContainer>
//   );
// };

// export default DigitalCard;


// src/DigitalCard.js
import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import Products from './Products';
import { Link } from 'react-scroll';
import rubbersheet from './assets/rubbersheet.jpg';
import hosepipe from './assets/hosepipe.jpg';
import cuttingtools from './assets/cuttingtools.png';
import cumi from './assets/cumi.png';
// Add your product data here (e.g., product images and names)
const productData = [
  { imageUrl: rubbersheet, name: 'Rubber Sheet' },
  { imageUrl: hosepipe, name: 'Hose Pipe' },
  { imageUrl: cuttingtools, name: 'Cutting Tool' },
  { imageUrl: cumi, name: 'Grinding Wheel & Emery Cloth' },
  // Add more products as needed
];

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const CompanyName = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const RoundButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const ScrollButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonLabel = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: #555;
`;

const ContactInfo = styled.div`
  text-align: left;
  margin-top: 20px;
  font-size: 16px;
  color: #555;
`;

const AboutSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #e9e9e9; 
  border-radius: 5px;
  text-align: left;
`;

const DigitalCard = ({ logoUrl, companyName, phoneNumber, whatsappNumber, email, locationUrl, address, aboutText }) => {
  const whatsappMessage = "Hello Deepak & Company, I would like to inquire about your products.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <CardContainer>
      <Logo src={logoUrl} alt="Company Logo" />
      <CompanyName>{companyName}</CompanyName>
      <ButtonGrid>
        {/* First row: Call, WhatsApp, and Shop */}
        <ButtonWrapper>
          <RoundButton href={`tel:${whatsappNumber}`} title="Call Us">
            <FaPhone />
          </RoundButton>
          <ButtonLabel>Call</ButtonLabel>
        </ButtonWrapper>
        <ButtonWrapper>
          <RoundButton href={whatsappLink} target="_blank" rel="noopener noreferrer" title="WhatsApp Us">
            <FaWhatsapp />
          </RoundButton>
          <ButtonLabel>WhatsApp</ButtonLabel>
        </ButtonWrapper>
        <ButtonWrapper>
          <ScrollButton to="products-section" smooth={true} duration={500} title="Shop Products">
            <FaShoppingCart/>
          </ScrollButton>
          <ButtonLabel>Shop</ButtonLabel>
        </ButtonWrapper>
        
        {/* Second row: Location and Email */}
        <ButtonWrapper>
          <RoundButton href={locationUrl} target="_blank" rel="noopener noreferrer" title="View Location">
            <FaMapMarkerAlt />
          </RoundButton>
          <ButtonLabel>Location</ButtonLabel>
        </ButtonWrapper>
        <ButtonWrapper>
          <RoundButton href={`mailto:${email}`} title="Email Us">
            <FaEnvelope />
          </RoundButton>
          <ButtonLabel>Email</ButtonLabel>
        </ButtonWrapper>
      </ButtonGrid>
      
      <ContactInfo>
        <p><FaMapMarkerAlt /> {address}</p>
        <p><FaPhone /> {phoneNumber}</p>
        <p><FaEnvelope /> {email}</p>
      </ContactInfo>
      
      <AboutSection>
        <h3>About Us</h3>
        <p>{aboutText}</p>
      </AboutSection>

      {/* Products Section */}
      <Products products={productData} whatsappNumber={whatsappNumber} />
    </CardContainer>
  );
};

export default DigitalCard;
