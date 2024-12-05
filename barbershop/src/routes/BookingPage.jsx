import React, { useState } from "react";
import Navbar from "../components/Navbar";

export function BookingPage() {
  const Services = [
    { id: 1, service_name: "Short Haircut", price: 20 },
    { id: 2, service_name: "Long Haircut", price: 30 },
    { id: 3, service_name: "Buzz Cut", price: 15 },
    { id: 4, service_name: "Partial Head Shave", price: 15 },
  ];

  
  const [appointment, setAppointment] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    selectedServices: [],
    totalPrice: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };


  const toggleService = (service) => {
    const { selectedServices, totalPrice } = appointment;

    if (selectedServices.includes(service.id)) {
      
      const updatedServices = selectedServices.filter((id) => id !== service.id);
      setAppointment({
        ...appointment,
        selectedServices: updatedServices,
        totalPrice: totalPrice - service.price,
      });
    } else {
      
      setAppointment({
        ...appointment,
        selectedServices: [...selectedServices, service.id],
        totalPrice: totalPrice + service.price,
      });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", appointment);

    
    setAppointment({
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
      selectedServices: [],
      totalPrice: 0,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h3 className="text-center mb-4">Book Your Appointment</h3>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={appointment.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={appointment.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter your phone number"
              value={appointment.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={appointment.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Appointment Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control"
              value={appointment.time}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <h5>Select Services</h5>
            <div className="row">
              {Services.map((service) => (
                <div key={service.id} className="col-md-3 mb-3">
                  <div
                    className={`card ${
                      appointment.selectedServices.includes(service.id) ? "border-primary" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleService(service)}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{service.service_name}</h5>
                      <p className="card-text">
                        <strong>Price:</strong> {service.price} DH
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4>Total Price: {appointment.totalPrice} DH</h4>
          </div>

          
          <button type="submit" className="btn btn-primary">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
