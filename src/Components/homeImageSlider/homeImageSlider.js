import React, { useState, useEffect } from "react";
import "./slider.css"; // CSS file
import img1 from "../../images/slider0.jpg"
import img2 from "../../images/slider1.jpg"
import img3 from "../../images/slider2.jpg"
import img4 from "../../images/slider4.jpg"

const images = [img1,img2,img3,img4];const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-image"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <div className="overlay"></div>

        <div className="content">
          <h1>
            Holds the Hands, <br/><b><span className="highlight">To Help the Poor</span></b>
          </h1>
          <p>Your donation will Help someone <br/> to have a respectful Life.</p>
          <button className="donate-btn">Donate Now</button>
        </div>
      </div>

      {/* Dots Pagination */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;