import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      {!isOutOfStock ? (
        <button className="primary" onClick={() => setIsOutOfStock(!isOutOfStock)}>In Stock</button>
      ) : (
        <button onClick={() => setIsOutOfStock(!isOutOfStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
