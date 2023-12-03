import { useState } from "react";
import { Link } from "react-scroll";

export default function Navmenu() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <div className="container">
    {/* <div>
        <img src="#" alt="LK" />
    </div> */}
    <nav className={`nav ${navActive ? "active" : ""}`}>
      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__link"></span>
        <span className="nav__link"></span>
        <span className="nav__link"></span>        
      </div>
      <div className={`nav--active ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="nav--active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="HeroSection"
              className="nav--content"
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
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
            <Link
              onClick={closeMenu}
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
            onClick={closeMenu}
            activeClass="nav--active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="ContactSection"
            className="btn"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
    </div>
    
  );
}
