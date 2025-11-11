import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { HashLink } from 'react-router-hash-link';
import "../css/App.css";

import { Link } from "react-router-dom";

import penanghill_1 from "./image_attraction/penanghill_1.jpg";
import penanghill_2 from "./image_attraction/penanghill_2.jpg";
import penanghill_3 from "./image_attraction/penanghill_3.jpg";

import escape1 from "./image_attraction/escape1.jpg";
import escape2 from "./image_attraction/escape2.jpg";
import escape3 from "./image_attraction/escape3.jpg";

import penangnaturalpark1 from "./image_attraction/penangnaturalpark1.jpg";
import penangnaturalpark2 from "./image_attraction/penangnaturalpark2.jpg";
import penangnaturalpark3 from "./image_attraction/penangnaturalpark3.jpg";

import entopia1 from "./image_attraction/entopia1.jpg";
import entopia2 from "./image_attraction/entopia2.jpg";
import entopia3 from "./image_attraction/entopia3.jpg";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

// Chok part start
import EventSection from "../Pages/EventSection.jsx";
// Chok part end

function App() {
  const penangHillImages = [penanghill_1, penanghill_2, penanghill_3];
  const escapeImages = [escape1, escape2, escape3];
  const penangNaturalParkImages = [
    penangnaturalpark1,
    penangnaturalpark2,
    penangnaturalpark3,
  ];
  const entopiaImages = [entopia1, entopia2, entopia3];

  const [penangHillIndex, setPenangHillIndex] = useState(0);
  const [escapeIndex, setEscapeIndex] = useState(0);
  const [penangNaturalParkIndex, setPenangNaturalParkIndex] = useState(0);
  const [entopiaIndex, setentopiaIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPenangHillIndex(
        (prevIndex) => (prevIndex + 1) % penangHillImages.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [penangHillImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEscapeIndex((prevIndex) => (prevIndex + 1) % escapeImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [escapeImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPenangNaturalParkIndex(
        (prevIndex) => (prevIndex + 1) % penangNaturalParkImages.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [penangNaturalParkImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setentopiaIndex((prevIndex) => (prevIndex + 1) % entopiaImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [penangNaturalParkImages.length]);

  const foodData = [
    {
      id: 1,
      title: "Chinese Cuisine",
      description: "Savory, umami-rich, light yet flavorful, with a balance of sweet, sour, and soy-based flavors.",
      image: "/homepage/chinese food preview in main page.jpg",
      link: "/ChineseFood",
    },
    {
      id: 2,
      title: "Malay Cuisine",
      description: "Spicy, aromatic, creamy, and rich, with bold flavors from coconut milk, chili, and local herbs.",
      image: "/homepage/malay food preview in main page.jpg",
      link: "/MalayFood",
    },
    {
      id: 3,
      title: "Indian Cuisine",
      description: "Spicy, aromatic, hearty, and bold, with deep flavors from a variety of spices and rich curries.",
      image: "/homepage/indian food preview in main page.jpg",
      link: "/IndianFood",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="section">
        <section id="intro">
          <img class="hero" src="homepage/mainbg.jpg" />
          <h2 className="herotitle">Unlock The Secrets Of Penang</h2>
        </section>

        <section id="about">
          <img className="abt" src = "homepage/aboutbg.jpg"/> 
          <div className = "abtdiv">
            <h1>About Penang</h1>
            <article className="aboutarticle">
              Penang, Malaysia's "Pearl of the Orient," blends history, culture, and nature. George Town, a UNESCO World Heritage Site, showcases colonial architecture and vibrant street art. The island is famed for its world-class cuisine, including char kway teow and Penang laksa. Visitors enjoy serene beaches, lush Penang Hill, and a rich cultural tapestry that makes Penang truly unforgettable.
            </article>
          </div>
          <div className = "buttonpage">
            <Link to="/AboutPenang">
              <button className="aboutbutton">Explore More</button>
            </Link>
          </div>
          <div id="video"> 
            <video width="640" height="360" controls>
              <source src="homepage/penang.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section id="attraction">
          {/* <h1 className="title">Penang Attraction</h1> */}
          {/* Chok modify h1 start */}
          <h1>Penang Attraction</h1> 
          {/* Chok modify h1 end */}
          <div className="boxright">
            <div className="box">
              <img
                src={penangHillImages[penangHillIndex]}
                className="imgactive"
                alt="Penang Hill"
              />
              <div className="whiteboardtext">
                <p>Penang Hill</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/place/Penang+Hill"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>

                <a>
                  <FaPhone title="+604 828 8880" />
                </a>

                <a href="mailto:inquiries@penanghill.gov.my" target="_blank">
                  <MdOutlineMailOutline />
                </a>
              </div>
            </div>

            <div className="box">
              <img
                src={escapeImages[escapeIndex]}
                className="imgactive"
                alt="Escape Theme Park"
              />
              <div className="whiteboardtext">
                <p>Escape Theme Park</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/place/ESCAPE+Penang/@5.4497458,100.2114577,963m/data=!3m2!1e3!4b1!4m6!3m5!1s0x304ac3a45d25df75:0xe55b46784fbcb260!8m2!3d5.4497405!4d100.214038!16s%2Fg%2F1w3sx3lr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                  <FaPhone title="+017-797 7529" />
                </a>
                <a href="mailto:sales@escape.my" target="_blank">
                  <MdOutlineMailOutline />
                </a>
              </div>
            </div>

            <div className="box">
              <img
                src={penangNaturalParkImages[penangNaturalParkIndex]}
                className="imgactive"
                alt="Penang National Park"
              />
              <div className="whiteboardtext">
                <p>Penang National Park</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps/dir//Pejabat+Taman+Negara+P.+Pinang+jalan+Hassan+Abbas,+11050+George+Town,+Penang/@5.4471367,100.1115903,30821m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x304aebcd109625ed:0xe48f33317fbd27c1!2m2!1d100.1939923!2d5.4471423?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                  <FaPhone title="+04-881 3530" />
                </a>
                <a href="mailto:tnpp@wildlife.gov.my" target="_blank">
                  <MdOutlineMailOutline />
                </a>
              </div>
            </div>

            <div className="box">
              <img
                src={entopiaImages[entopiaIndex]}
                className="imgactive"
                alt="Entopia Butterfly Farm"
              />
              <div className="whiteboardtext">
                <p>Entopia Butterfly Farm</p>
              </div>

              <div className="iconbox">
                <a
                  href="https://www.google.com/maps?rlz=1C1CHBF_enMY982MY982&um=1&ie=UTF-8&fb=1&gl=my&sa=X&geocode=KfN4HKVY6EowMR-L41XkY8x4&daddr=830,+Jalan+Teluk+Bahang,+Teluk+Bahang,+11050+Tanjung+Bungah,+Pulau+Pinang"
                  target="_blank"
                >
                  <FaMapMarkerAlt />
                </a>
                <a>
                  <FaPhone title="+604-88 8888" />
                </a>
                <a href="mailto:info@entopia.com" target="_blank">
                  <MdOutlineMailOutline />
                </a>
              </div>
            </div>
          </div>

          <center>
            <div class="buttoncontainer">
              <Link to="/attraction">
                <button className="btnattraction">
                  <span>View More</span>
                </button>
              </Link>
            </div>
          </center>
        </section>

        <section id="Food">
          <h1>Food and Cuisine</h1>
          <br />
          <div className="MainPageFoodContainer">
            {foodData.map((food) => (
              <article className="foodarticle" key={food.id}>
                <HashLink smooth to={food.link} className="article-link">
                  <div className="article-wrapper">
                    <figure class="food-figure">
                      <img src={food.image} alt={food.title} />
                    </figure>
                    <div className="article-body">
                      <h2 className="foodTitle">{food.title}</h2>
                      <p className="foodDescInMain">{food.description}</p>
                    </div>
                  </div>
                </HashLink>
              </article>
            ))}
          </div>
        </section>

        <section id="Event">
          <h1>Events & Festivals</h1>
          <EventSection />
        </section>

        <section id="cultureHeritage">
          <h1>Culture & Heritage</h1>
          <br></br>
          <div class="container-culture">
            <div class="card" href="">
              <HashLink smooth to="/Multiracial">
                <img src="homepage/multiracial.jpg"></img>
              </HashLink>
              <div class="card__head">Multi-Racial</div>
            </div>
            <div class="card">
              <Link to="/Arts">
                <img src="homepage/art1.avif" alt="Description of image" />
              </Link>
              <div class="card__head">Traditional Arts</div>
            </div>
            <div class="card">
              <Link to="/HeritageSites">
                <img src="homepage/HeritageSites.avif"></img>
              </Link>
              <div class="card__head">Heritage Sites</div>
            </div>
            <div class="card">
              <Link to="/HeritageConservation">
                <img src="homepage/HeritageConservation3.jpg"></img>
              </Link>
              <div class="card__head">Heritage Conservation</div>
            </div>
            <div class="card">
              <Link to="/SacredSpace">
                <img src="homepage/sacredSpace.webp"></img>
              </Link>
              <div class="card__head">Sacred Spaces</div>
            </div>
          </div>
        </section>

        
      </div>

      <div class="space-box"></div>
      
      <Footer />
    </>
  );
}

export default App;
