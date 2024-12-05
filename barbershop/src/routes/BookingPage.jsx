import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";


export function BookingPage(){
    const Services = [
        {
          id: 1,
          service_name: "Short Haircut",
          price: 20,
        },
        {
          id: 2,
          service_name: "Long Haircut",
          price: 30,
        },
        {
          id: 3,
          service_name: "Buzz Cut",
          price: 15,
        },
        {
          id: 4,
          service_name: "Partial Head Shave",
          price: 15,
        },
      ];
      function Book(){
        const [appointment,setAppointment] = useState({
            fullName : "",
            email : "",
            phoneNumber : "",
            date : "",
            time : ""
        });
        const handleChange = (e) =>{
            const { name, value } = e.target;
            setAppointment({ ...appointment, [name]: value });
        }
        return(
            <div className="container mt-4">
                <div className="row">
                    <h3 className="text-center">Book Now</h3>
                </div>
                <div className="row">
                    <input type="text" name="" id="" 
                    value={appointment.fullName} 
                    onChange={handleChange}
                    placeholder="Full Name"
                    />
                    <input type="text" name="" id="" 
                    value={appointment.fullName} 
                    onChange={handleChange}
                    placeholder="email@example.com"
                    />
                    <input type="text" name="" id="" 
                    value={appointment.fullName} 
                    onChange={handleChange}
                    placeholder="Phone number"
                    />
                    
                </div>
            </div>
        )
      }
    return(
        <div>
            <Navbar/>
            <Book/>
        </div>
    )
}