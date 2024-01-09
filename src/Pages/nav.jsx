import { useState } from "react";
import { Link } from "react-scroll";

export default function Navmenu() {
  const [navActive, setNavActive] = useState(false);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="nav--container">
    {/* <div>
        <img src="#" alt="LK" />
      </div> */}
    <nav className= {`nav ${navActive ? "active" : "notActive"}`}>
      <div
        className={`nav__hamburger ${navActive ? "active" : "notActive"}`}
        onClick={toggleMenu}
      >
        {navActive ? (
            // If nav is active, show "X" to close the menu
            <span onClick={toggleMenu}> &times; </span>
          ) : (
            // If nav is not active, show the lines for hamburger icon
            <>
              <span className="nav__link"></span>
              <span className="nav__link"></span>
              <span className="nav__link"></span>
            </>
          )}        
      </div>
      <div className={`nav--items ${navActive ? "active" : "notActive"}`}>
        <ul>
          <li>
            <Link
              onClick={toggleMenu}
              activeClass="nav--active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              /*The to prop in your Link components should match the id of the target section */
              to="HeroSection"
              className="nav--content"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              onClick={toggleMenu}
              activeClass="nav--active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MainSection"
              className="nav--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
          <Link
              onClick={toggleMenu}
              activeClass="nav--active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutSection"
              className="nav--content"
            >
              About Me
            </Link>
          </li>
        </ul>
        <div>
          <Link
            onClick={toggleMenu}
            activeClass="nav--active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="ContactSection"
            className="btn btn__"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
    </div>
    
  );
}
