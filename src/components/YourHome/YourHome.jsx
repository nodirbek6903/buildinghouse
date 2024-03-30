import React, { useState } from "react";
import "./YourHome.css";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";

const images = [
  require("../../images/carousel1.jpg"),
  require("../../images/carousel2.jpg"),
  require("../../images/carousel3.jpg"),
  require("../../images/carousel4.jpg"),
  require("../../images/carousel5.jpg"),
  require("../../images/carousel6.jpg"),
];

const YourHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="yourhome-container">
      <div className="section-title">
        <span>Your dream home</span>
      </div>
      <div className="carousel-container">
        <LuMoveLeft className="carousel-icon1" onClick={prevSlide} />
        <div className="carousel-card">
          <img
            className="carousel-img"
            src={images[currentImageIndex]}
            alt={`carousel${currentImageIndex + 1}`}
          />
        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
        <LuMoveRight className="carousel-icon2" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default YourHome;
