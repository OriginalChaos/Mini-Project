import React from 'react';
import './ProductCard.css'

const ProductCard = ({ name, image, description, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <div className="product-details">
                <h2>{name}</h2>
                <p><i>{description}</i></p>
                <p className="price">{price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
