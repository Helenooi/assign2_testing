import React, { useState, useEffect, useRef } from "react";
import NavbarLanding from "../components/navbarLanding.jsx";
import Footer from "../components/footer.jsx";
import "../css/arts.css";
import Papa from "papaparse"; // Ensure Papa is imported if you are parsing CSV
import { useNavigate } from 'react-router-dom';

function Arts() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [artData, setArtData] = useState([]); // Moved to Arts2
  const [selectedPlace, setSelectedPlace] = useState(null); // Added state for selected place
  const dialogRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();

  const openDialog = (place) => {
    setSelectedPlace(place); // Set the selected place when clicked
    dialogRef.current.showModal(); // Opens the dialog
    setIsDialogOpen(true); // Optional: Set state if you want to track it
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Closes the dialog
    setIsDialogOpen(false); // Optional: Update state
  };

  useEffect(() => {
    fetch("Culture/Arts.csv")
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
          <h1 className="grays">Traditional Arts</h1>
          <figure className="first-box-figure">
            <img
              className="first-box-img"
              src="homepage/art2.jpg"
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
              data-page="/HeritageConservation"
            />
            <img
              src="homepage/HeritageSites.avif"
              alt="a house on a mountain"
              data-page="/HeritageSites"
            />
            <img
              src="homepage/art1.avif"
              alt="sime pink flowers"
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
        <h2 className="categories__title">Preserving Culture Through Art</h2>
        <div className="carousel__container">
          {artData.length > 0 ? (
            artData.map((place, index) => {
              console.log("Rendering place:", place); // Log each item being rendered
              return (
                <div
                  className="carousel-item"
                  onClick={() => openDialog(place)}
                  key={index}
                >
                  <img
                    className="carousel-item__img"
                    src={place.Images}
                    alt={place.name}
                  />
                  <div className="carousel-item__details">
                    <div className="controls">
                      <button class="carousel-item__label">{place.Tag1}</button>
                      <button class="carousel-item__label1">
                        {place.Tag2}
                      </button>
                    </div>
                    <h5 className="carousel-item__details--title">
                      {place.name}
                    </h5>
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
      <Footer />

      <dialog id="dialog" className="custom-dialog" ref={dialogRef}>
        <div className="places-container">
          {selectedPlace ? (
            <div className="place-card">
              <h2 className="place-card__name">{selectedPlace.name}</h2>
              <div className="place-card__details">
                <img
                  src={selectedPlace.Images}
                  alt={selectedPlace.name}
                  className="place-image"
                />
                <div>
                  <div className="try-cards">
                    <div className="try-card">
                      <strong className="card-label location-label">
                        <i className="fas fa-map-marker-alt"></i> Location:{" "}
                      </strong>
                      <a
                        href={selectedPlace.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-link"
                      >
                        {selectedPlace.Location}
                      </a>
                    </div>
                    <div className="try-card">
                      <strong className="card-label operating-hour-label">
                        <i className="fas fa-clock"></i> Operating hour:{" "}
                      </strong>
                      <div className="operate-hour-container">
                        <div className="operate-hour-item">
                          <p className="operate-hour">Weekend →</p>
                          <span>{selectedPlace.Weekend}</span>
                        </div>
                        <div className="operate-hour-item">
                          <p className="operate-hour">Weekday →</p>
                          <span>{selectedPlace.Weekday}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong>
                  <u>Description:</u>
                </strong>
              </p>
              <p>{selectedPlace.Description}</p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
        <button onClick={closeDialog} aria-label="close" className="close-btn">
          ❌
        </button>
      </dialog>
      </div>
    </>
  );
}

export default Arts;