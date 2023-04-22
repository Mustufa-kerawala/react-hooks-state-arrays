import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
  }

  function handleLiClick(id) {
    // Logic to remove the food from the list
    // const newFoods = foods.filter((food) => food.id !== id);
    // setFoods(newFoods);

    // Logic to increase the heat level of the food
    const newFoods = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      }
      else{
        return food;
      }
    });
    setFoods(newFoods);
    
    
  }

  // Creating a functiong to handle the click event and increase heat level

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)} >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
