import React, { useState } from "react";
import PopUpWindow from "./pop-up-windows.jsx"; // Ensure this matches the file name
import "../css/FoodCard.css"; // Your custom card styles

const FoodCard = ({ food }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={`food-wrapper ${isModalOpen ? "modal-active" : ""}`}>
      <div className={`food ${isModalOpen ? "no-hover" : ""}`}>
        <div className="food_image" onClick={handleOpenModal}>
          <img src={food.image} alt={food.title} />
        </div>
      </div>

      {/* Normal Title (no hover, no modal trigger) */}
      <div className="food_title">
        <p>{food.title}</p>
      </div>

      <PopUpWindow isOpen={isModalOpen} onClose={handleCloseModal} food={food} />
    </div>
  );
};

export default FoodCard;
