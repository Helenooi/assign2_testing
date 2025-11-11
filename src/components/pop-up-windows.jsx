import React from "react";
import "../css/Pop-up-window.css";

const PopUpWindow = ({ isOpen, onClose, food }) => {
  if (!isOpen) return null;

  return (
    <div className={`pop-up-backdrop ${isOpen ? "active" : "inactive"}`}>
      <div className="pop-up-window" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="closeButton">
          ❌
        </button>
        <div className="pop-up-content">
          {/* Image and Details Section */}
          <div className="pop-up-top">
            <img src={food.image} alt={food.title} className="pop-up-image" />
            <div className="pop-up-details">
              <p>
                Dish Name: {food.title}
              </p>
              <p>
                Spiciness Level: {food.spiciness}
              </p>
              <p>
                Halal: {food.halal}
              </p>
              <p>
                Price Range: {food.priceRange}
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="pop-up-description">
            <h3>Description:</h3>
            <p>{food.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpWindow;
