import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const navigateHome = ()=>{
        navigate('/');
    }
  return (
    <nav className="navbar container">
      <div className="logo">Fresh Cuts</div>
      <ul className="nav-links">
        <li onClick={navigateHome}>Home</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <button className="cta-button">Book an Appointment</button>
    </nav>
  );
}

export default Navbar;
