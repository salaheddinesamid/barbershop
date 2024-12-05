import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./routes/MainPage";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import { BookingPage } from "./routes/BookingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
