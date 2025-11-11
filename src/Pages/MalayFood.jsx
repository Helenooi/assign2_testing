import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import FoodList from "../components/foodList";
import NavbarLanding from "../components/navbarLanding";
import Footer from "../components/footer.jsx";
import "../css/FoodPage.css";

const MalayFood = () => {
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
    fetch("Food/MalayFood/MalayFood.csv")
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
          src="/Food/MalayFood/MalayFoodBackground.jpg"
          alt="Malay Food Background"
        />
        <div className="FoodTextInImage">
          <h1 className="FoodText">Malay Cuisine</h1>
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

export default MalayFood;
