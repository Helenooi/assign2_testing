import React from "react";
import FoodCard from "./foodCard"; // Correct relative path to FoodCard

const FoodList = ({ foods }) => {
  return (
    <div className="food-container">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
