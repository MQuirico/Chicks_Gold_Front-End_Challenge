import React, { useState } from 'react';
import './DLC-card.css';

export default function ProductCard({product}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div id="card" class="hvr-shrink">
      <div id="status">
        <span id="on-sale">ON SALE</span>
        <span id="in-stock">In stock</span>
      </div>

      <div id="quantity">
        <button onClick={decreaseQuantity}>▼</button>
        <span id="digit">{quantity}</span>
        <button onClick={increaseQuantity}>▲</button>
      </div>

      <img 
        src="/placeholder.svg?height=80&width=80" 
        alt="Blue Partyhat" 
        id="product-image"
      />

      <h2 id="title">
        Blue Partyhat
        <span id="certified-badge">CERTIFIED</span>
      </h2>

      <div id="price-container">
        <span id="current-price">$450.00</span>
        <span id="original-price">$522.50</span>
      </div>

      <p id="description">
        Lorem ipsum dolor sit amet consectetur adipiscing elitr.
      </p>

      <div id="actions">
        <button id="details-btn">DETAILS</button>
        <button id="add-btn">
          ADD
          <span>🛒</span>
        </button>
      </div>
    </div>
  );
}

