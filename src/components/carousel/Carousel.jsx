import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button carousel-button-left">
        &#10094;
      </button>
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.image} alt={slide.caption} />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button carousel-button-right">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
