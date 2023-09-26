import "./Navbar.scss"

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(true)
  const setNavbarVisibility = () => {
    if (scrollY > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setNavbarVisibility)
    return () => {
      window.removeEventListener("scroll", setNavbarVisibility)
    }
  }, [])

  return (
    <div className={`Navbar-wrapper ${visible && `Visible`} `}>
      <ul className={`Navbar ${visible && `Visible`} `}>
        <li><NavLink to="/" className={({ isActive }) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Home</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Profile</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}>Contact</NavLink></li>
        {/* <li><NavLink to="">Home</NavLink></li> */}
        {/* <li><NavLink to="">Home</NavLink></li>
          <li><NavLink to="">Home</NavLink></li> */}
      </ul>
    </div>
  )

};

export default Navbar;