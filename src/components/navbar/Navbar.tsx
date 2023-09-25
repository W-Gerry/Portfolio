import "./Navbar.scss"

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar-wrapper">
      <ul className="Navbar">
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