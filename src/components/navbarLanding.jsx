import "../css/menu.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';




const NavbarLanding = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <HashLink smooth to="/app" className="logo"><img src='homepage/logo.png' class='logo-size'></img></HashLink>
            </div>

            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <HashLink smooth to="/app#about" className="navbar-button">About</HashLink>
              </li>
              <li>
                <HashLink smooth to="/app#attraction" className="navbar-button">Penang Attractions</HashLink>
              </li>
              <li>
                <HashLink smooth to="/app#Food" className="navbar-button">Food & Cuisine</HashLink>
              </li>
              <li>
                <HashLink smooth to="/app#Event" className="navbar-button">Events & Festivals</HashLink>
              </li>
              <li>
                <HashLink smooth to="/app#cultureHeritage" className="navbar-button">Culture & Heritage</HashLink>
              </li>
            </ul>

            <div class="penang-tag">
                <p># penangonebetter</p>
            </div>
            <div className="icon" onClick={toggleMenu}>
              <IoMenu />
            </div>
          </nav>
        </div>
      </header>

      <div className="header2"></div>
    </>
  );
};

export default NavbarLanding;
