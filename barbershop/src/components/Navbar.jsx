import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">Fresh Cuts</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <button className="cta-button">Book an Appointment</button>
    </nav>
  );
}

export default Navbar;
