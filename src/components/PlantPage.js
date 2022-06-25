import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((plantsData) => setPlants(plantsData));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleFilter(filterWord) {
    setFilter(filterWord);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={ handleAddPlant }/>
      <Search onFilter={ handleFilter }/>
      <PlantList plantsData={ plants } filter={ filter }/>
    </main>
  );
}

export default PlantPage;
