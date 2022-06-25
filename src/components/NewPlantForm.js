import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0.0);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.name.value);
    const plantData = {
      name: name,
      image: image,
      price: parseFloat(price)
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantData)
    })
      .then((response) => response.json())
      .then((newPlant) => onAddPlant(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
