import "./SportPhotoCarousel.scss";

import sportsImages from "../../Data/sportsImages";
import chevronLeft from "/images/navigation/chevron_left.svg"
import chevronRight from "/images/navigation/chevron_right.svg"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SportPhotoCarouselProps {
  isVisible: boolean;
}

const SportPhotoCarousel = ({ isVisible }: SportPhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === sportsImages.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? sportsImages.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index : number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className={`Carousel ${isVisible && `Carousel-visible`}`}>
        <div className="Carousel-images">
        <AnimatePresence>
          <motion.img
            className="Carousel-images__image"
            key={currentIndex}
            src={sportsImages[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
        <div className="Slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <img
              className="Slide_direction__left" 
              src={chevronLeft} 
              alt="Select previous image"
              />
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <img src={chevronRight} alt="Select next image" />
          </motion.div>
        </div>
      </div>
      <div className="Carousel-indicator">
        {sportsImages.map((_, index) => (
          <motion.div
            key={index}
            className={`Dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  )
}

export default SportPhotoCarousel;