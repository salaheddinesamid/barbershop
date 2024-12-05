import React from "react";
import "./Main.css";
import { Booking } from "../booking/Booking";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  function handleBooking(){
    navigate('/booking');
  }
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Fresh Haircuts</h1>
        <h2>Your look, Our passion!</h2>
        <p>We provide professional grooming services tailored to your needs.</p>
        <button className="hero-button" onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
}

export default Main;
