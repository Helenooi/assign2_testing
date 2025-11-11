import React, { useState, useEffect, useRef } from "react";
import NavbarLanding from "../components/navbarLanding.jsx";
import Footer from "../components/footer.jsx";
import "../css/arts.css";
import Papa from "papaparse"; // Ensure Papa is imported if you are parsing CSV
import { useNavigate } from 'react-router-dom';

function HeritageConservation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [artData, setArtData] = useState([]); // Moved to Arts2
  const [selectedPlace, setSelectedPlace] = useState(null); // Added state for selected place
  const dialogRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    fetch("Culture/HeritageConservation.csv")
      .then((response) => response.text())
      .then((text) => {
        const data = Papa.parse(text, { header: true }).data;
        setArtData(data); // Set the data correctly
      })
      .catch((error) => {
        console.error("Error fetching the CSV file:", error);
      });
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      const imgSrc = imgRef.current.src;
      const figure = imgRef.current.closest('.first-box-figure');
      if (figure) {
        figure.style.setProperty('--bg-image', `url(${imgSrc})`);
      }
    }
  }, []);

  const handleImageClick = (event) => {
    const targetPage = event.target.getAttribute("data-page");
    if (targetPage) {
      navigate(targetPage); // Navigate to the target page
    }
  };

  return (
    <>
      <NavbarLanding />
      <div id="my-page">
      <div className="first-box">
        <div className="left-content">
          <h1 className="grays1">Heritage Conservation</h1>
          <figure className="first-box-figure">
            <img
              className="first-box-img"
              src="homepage/HeritageConservation4.jpg"
              alt=""
              ref={imgRef}
            />
          </figure>
        </div>
        <div className="right-content">
          <div className="gallery" onClick={handleImageClick}>
            <input type="checkbox" />
            <img
              src="homepage/sacredSpace.webp"
              alt="a forest after an apocalypse"
              data-page="/SacredSpace"
            />
            <img
              src="homepage/HeritageConservation3.jpg"
              alt="a waterfall and many rocks"
            />
            <img
              src="homepage/HeritageSites.avif"
              alt="a house on a mountain"
              data-page="/HeritageSites"
            />
            <img
              src="homepage/art1.avif"
              alt="sime pink flowers"
              data-page="/Arts"
            />
            <img
              src="homepage/multiracial.jpg"
              alt="big rocks with some trees"
              data-page="/Multiracial"
            />
          </div>
        </div>
      </div>

      <div className="carousel">
        <h2 className="categories__title">Defenders of our roots</h2>
        <br/>
        <div className="horizontal-container">
          {artData.length > 0 ? (
            artData.map((place, index) => {
              console.log("Rendering place:", place); // Log each item being rendered
              return (
                <div class="hori-cont">
                  <div class="hori-cont-left">
                    <img src={place.Images} class="hori-cont-left-img"/>
                  </div>
                  <div class="hori-cont-right">
                    <div class="hori-cont-right-Name">{place.Name}</div>
                    <div class="hori-cont-right-Pos"><i class="fa-solid fa-person"></i><strong>Position: </strong>{place.Position}</div>
                    <div class="hori-cont-right-Contribution">{place.Contribution}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
      <div class="space-box"></div>
      </div>


      <Footer />
    </>
  );
}

export default HeritageConservation;