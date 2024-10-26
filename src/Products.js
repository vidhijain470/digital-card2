// src/Products.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const ProductsContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  //background-color: #e9e9e9;
  border-radius: 5px;
`;

const SearchBar = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const ProductName = styled.h4`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const EnquireButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #128C7E;
  }
`;

const Products = ({ products, whatsappNumber }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProductsContainer>
      <h3>Our Products</h3>
      <SearchBar
        type="text"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ProductGrid>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <EnquireButton
              href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(`Hello, I am interested in the ${product.name}.`)}
`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ marginRight: '5px' }} />
              Enquire
            </EnquireButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products;
