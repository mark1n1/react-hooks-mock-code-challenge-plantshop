import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsData, filter }) {

  function handlePlantsData() {
    if(filter) return plantsData.filter((plant) => plant.name.toLowerCase().includes(filter.toLowerCase()));

    return plantsData;
  }

  return (
    <ul className="cards">
      { handlePlantsData().map((plant) => (
        <PlantCard key={ plant.id } plant={ plant }/>
      ))
      }
    </ul>
  );
}

export default PlantList;
