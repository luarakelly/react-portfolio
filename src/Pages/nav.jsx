import { useState } from "react";
import { Link } from "react-scroll";

export default function Navmenu() {
  const [navActive, setNavActive] = useState(false);

  const openMenu = () => {
    setNavActive(true);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <div className="nav--container">
    {/* <div>
        <img src="#" alt="LK" />
      </div> */}
    <nav className= {`nav ${navActive ? "active" : "notActive"}`}>
      <Link
        className={`nav__hamburger ${navActive ? "active" : "notActive"}`}
        onClick={openMenu}
      >
        <span className="nav__link"></span>
        <span className="nav__link"></span>
        <span className="nav__link"></span>        
      </Link>
      <div className={`nav--items ${navActive ? "active" : "notActive"}`}>
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
          </li>
          <li>
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
          </li>
          <li>
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
