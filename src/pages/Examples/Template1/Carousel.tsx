import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/800x300?text=Slide+1",
    "https://via.placeholder.com/800x300?text=Slide+2",
    "https://via.placeholder.com/800x300?text=Slide+3",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <button className={styles.navButton} onClick={handlePrev}>{"<"}</button>
      <div className={styles.carouselContent}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? styles.active : ''}
          />
        ))}
      </div>
      <button className={styles.navButton} onClick={handleNext}>{">"}</button>
    </div>
  );
};

export default Carousel;
