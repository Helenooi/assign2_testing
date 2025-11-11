import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import FoodList from "../components/foodList";
import NavbarLanding from "../components/navbarLanding";
import Footer from "../components/footer.jsx";
import "../css/FoodPage.css";

const IndianFood = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    // Add specific styles to body and html
    document.body.classList.add("foodPage");
    document.documentElement.classList.add("foodPage");

    // Cleanup styles when component is unmounted
    return () => {
      document.body.classList.remove("foodPage");
      document.documentElement.classList.remove("foodPage");
    };
  }, []);

  useEffect(() => {
    fetch("Food/IndianFood/IndianFood.csv")
      .then((response) => response.text())
      .then((text) => {
        const data = Papa.parse(text, { header: true }).data;
        setFoodData(data);
      });
  }, []);

  return (
    <>
      <NavbarLanding />
      <div className="FoodPageImageContainerWrapper">
        <img
          className="FoodPageImageContainer"
          src="/Food/IndianFood/IndianFoodBackground.jpg"
          alt="Chinese Food Background"
        />
        <div className="FoodTextInImage">
          <h1 className="FoodText">Indian Cuisine</h1>
        </div>
      </div>

      <div className="food-page">
        <FoodList foods={foodData} />
      </div>

      <div class="space-box"></div>
      
      <Footer />
    </>
  );
};

export default IndianFood;
