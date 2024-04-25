import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import './ProductPage.css'

function ProductsPage() {
  const imageSrc1 = require('./sysmac.jpg');
  const imageSrc2 = require('./nx1.jpg');
  const imageSrc3 = require('./nj1.jpg');
  const imageSrc4 = require('./img4.jpg');
  const imageSrc5 = require('./img5.jpg');
  const imageSrc6 = require('./img6.jpg');
  const imageSrc7 = require('./img7.jpg');
  const imageSrc8 = require('./img8.jpg');
  const imageSrc9 = require('./img9.jpg');
  const imageSrc10 = require('./img10.jpg');
  const products = [
    {
      id: 1,
      name: 'Sysmac Automation Platform',
      image: imageSrc1,
      description: 'The Sysmac Automation Platform integrates the entire machine automation process.',
      price: 'Contact for pricing',
    },
    {
      id: 2,
      name: 'NX1 Machine Automation Controller',
      image: imageSrc2,
      description: 'The NX1 is an entry-level machine automation controller that provides advanced motion, sequence, and networking capabilities.',
      price: 'Contact for pricing',
    },
    {
      id: 3,
      name: 'NJ501 Machine Automation Controller',
      image: imageSrc3,
      description: 'The NJ501 is a high-performance machine automation controller with synchronized motion, advanced logic, and safety features.',
      price: 'Contact for pricing',
    },
    {
    id: 101,
      name: 'Programmable Logic Controller (PLC)',
      image: imageSrc4,
      description: 'Selec PLCs offer versatile automation solutions with advanced programming capabilities.',
      price: 'Contact for pricing',
    },
    {
      id: 102,
      name: 'Temperature Controller',
      image: imageSrc5,
      description: 'Selec temperature controllers provide precise temperature control for various industrial applications.',
      price: 'Contact for pricing',
    },
    {
      id: 103,
      name: 'Digital Panel Meter',
      image: imageSrc6,
      description: 'Selec digital panel meters offer accurate measurement and display of various parameters.',
      price: 'Contact for pricing',
    },
    {
        id: 201,
        name: 'BL Compact IO Modules',
        image: imageSrc7,
        description: 'TURCK BL Compact IO modules offer flexible and compact solutions for decentralized automation applications.',
        price: 'Contact for pricing',
      },
      {
        id: 202,
        name: 'Field Logic Controllers (FLCs)',
        image: imageSrc8,
        description: 'TURCK Field Logic Controllers (FLCs) provide distributed control and data processing capabilities in industrial networks.',
        price: 'Contact for pricing',
      },
      {
        id: 203,
        name: 'Ethernet/IP Modules',
        image: imageSrc9,
        description: 'TURCK Ethernet/IP modules enable seamless integration of devices into Ethernet/IP networks for real-time data exchange.',
        price: 'Contact for pricing',
      },
      {
        id: 204,
        name: 'Compact RFID Read/Write Heads',
        image: imageSrc10,
        description: 'TURCK compact RFID read/write heads offer high-speed and high-accuracy identification for industrial automation applications.',
        price: 'Contact for pricing',
      },
  ];

  return (
    <div>
      <div className="product-list">
        {/* Map over the products array and render a ProductCard for each product */}
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
