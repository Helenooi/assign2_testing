import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../css/attraction.css';
import NavbarLanding from "../components/navbarLanding.jsx";
import Footer from "../components/footer.jsx";

export const Attraction = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch("image_attraction/Attraction.csv")
      .then((response) => response.text())
      .then((text) => {
        console.log("Fetched CSV Text:", text); 
        const data = Papa.parse(text, { header: true }).data;
        console.log("Parsed Attraction Data:", data); 
  
        const attractionsData = data.map(attraction => ({
          ...attraction,
          slides: attraction.slides ? attraction.slides.split(';') : [],
          currentSlide: 0
        }));
  
        setAttractions(attractionsData);
      })
      .catch((error) => {
        console.error("Error fetching CSV:", error);
      });
  }, []);
  

  const changeSlide = (index, direction) => {
    setAttractions((prevAttractions) => {
      const updatedAttractions = [...prevAttractions];
      const attraction = updatedAttractions[index];
      attraction.currentSlide =
        (attraction.currentSlide + direction + attraction.slides.length) % attraction.slides.length;
      return updatedAttractions;
    });
  };

  const [animate, setAnimate] = useState(false);

  const handleSearch = (e) => {
    setAnimate(false); 
    setSearchTerm(e.target.value);

    setTimeout(() => {
      setAnimate(true); 
    }, 100);
  };

  return (
    <div>
      <NavbarLanding />
      <div style={{ marginTop: "100px" }}>
        <input
          type="text"
          id="myInput"
          placeholder="Search for names..."
          title="Type in a name"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <ul id="myUL" className={animate ? 'fade-in' : ''}>
        {attractions.filter((attraction) =>
          attraction.name && attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) // Add check to ensure name is not undefined
        ).length === 0 ? (
          <div className="sectionresultnofound">
            <div className="no-results-message">
              <a
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "18px",
                  textAlign: "center",
                  display: "block",
                  padding: "12px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                No Results Found
              </a>
            </div>
            <div className="available-attractions">
              <span style={{ fontWeight: "bold", color: "black", fontSize: "16px" }}>
                Available Attractions:
              </span>
              <ul style={{ padding: "0px", listStyleType: "none" }}>
                {attractions.map((attraction, index) => (
                  <li key={index} className="attraction-item">
                    <a
                      style={{
                        color: "blue",
                        cursor: "pointer",
                      }}
                      onClick={() => setSearchTerm(attraction.name)}
                    >
                      {attraction.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          attractions
            .filter((attraction) =>
              attraction.name && attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check if name exists
            )
            .map((attraction, index) => (
              <li key={index}>
                <a>{attraction.name}</a>
                <section className="attraction-banners">
                  <div className="attraction-banner-manage slide-in">
                    <div className="attraction-container16 fade-in">
                      <div className="home-left2">
                        <span className="attraction-text">
                          <br />
                          <strong>Address: </strong>
                          {attraction.address}
                          <br />
                          <strong>Email: </strong>
                          {attraction.email}
                          <br />
                          <strong>Tel: </strong>
                          {attraction.tel}
                          <br />
                          <strong>Description: </strong>
                          {attraction.description}
                        </span>
                      </div>
                      <div className="attraction-image-container1">
                        <div className="slideshow-container">
                          <img
                            src={attraction.slides[attraction.currentSlide]}
                            alt={`Slide ${attraction.currentSlide + 1}`}
                            style={{ width: "100%" }}
                          />
                          <button
                            className="prev"
                            onClick={() => changeSlide(index, -1)}
                          >
                            &#10094;
                          </button>
                          <button
                            className="next"
                            onClick={() => changeSlide(index, 1)}
                          >
                            &#10095;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </li>
            ))
        )}
      </ul>

      <div class="space-box"></div>
      <Footer />
    </div>
  );
};

export default Attraction;
