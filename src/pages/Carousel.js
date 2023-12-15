import React, { useState, useEffect, useRef } from "react";
import "../StylesPages/Carousel.css";
import DigitalVideo from "../assets/la_era_digital.mp4";
import DesignVideo from "../assets/la_era_digital2.mp4";
import DescubreVideo from "../assets/la_era_digital3.mp4";

const Carousel = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const videoRef = useRef(null);
  const backgrounds = [DigitalVideo, DesignVideo, DescubreVideo];

  const nextBackground = () => {
    setCurrentBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgrounds.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBackground();
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentBackgroundIndex]);

  const handleArrowClick = () => {
    nextBackground();
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <div className="container-carousel">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="diseños-rutas-carousel-video"
      >
        <source src={backgrounds[currentBackgroundIndex]} type="video/mp4" />
      </video>
      {/* Flechas de izquierda y derecha */}
      <div onClick={handleArrowClick} className="row-left">
        &#8249;
      </div>
      <div onClick={handleArrowClick} className="row-right">
        &#8250;
      </div>
    </div>
  );
};

export default Carousel;
