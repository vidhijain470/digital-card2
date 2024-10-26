// src/DigitalCard.js
import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaStore } from 'react-icons/fa';

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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CompanyName = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
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

const DigitalCard = ({ logoUrl, companyName, phoneNumber, whatsappNumber, email, locationUrl, websiteUrl, shopUrl, address, aboutText }) => {
  return (
    <CardContainer>
      <Logo src={logoUrl} alt="Company Logo" />
      <CompanyName>{companyName}</CompanyName>
      <ButtonGrid>
        <RoundButton href={`tel:${whatsappNumber}`} title="Call Us">
          <FaPhone />
        </RoundButton>
        <RoundButton href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" title="WhatsApp Us">
          <FaWhatsapp />
        </RoundButton>
        <RoundButton href={`mailto:${email}`} title="Email Us">
          <FaEnvelope />
        </RoundButton>
        <RoundButton href={locationUrl} target="_blank" rel="noopener noreferrer" title="View Location">
          <FaMapMarkerAlt />
        </RoundButton>
        <RoundButton href={websiteUrl} target="_blank" rel="noopener noreferrer" title="Visit Website">
          <FaGlobe />
        </RoundButton>
        <RoundButton href={shopUrl} target="_blank" rel="noopener noreferrer" title="Visit Shop">
          <FaStore />
        </RoundButton>
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
    </CardContainer>
  );
};

export default DigitalCard;
