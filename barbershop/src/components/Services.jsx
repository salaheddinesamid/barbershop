import React from "react";
import "./OurServices.css"; // Add custom styles if needed

export function OurServices() {
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

  return (
    <div className="container py-5">
      <div className="row">
        <h2 className="text-center mb-4">Our Services</h2>
      </div>
      <div className="row justify-content-center">
        {Services.map((service) => (
          <div
            key={service.id}
            className="card m-3 shadow-sm"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h4 className="card-title">{service.service_name}</h4>
              <p className="card-text">
                <strong>Price:</strong> {`${service.price} DH`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
