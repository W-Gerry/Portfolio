import "./TripModal.scss";

import Trip from "../../models/Trip";
import fullscreenIcon from "/images/modal/fullscreen_icon.svg";

import { useState } from "react";

interface TripDataProps {
  tripData: Trip;
}

const TripModal = ({ tripData }: TripDataProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPreviousImage = () => {
    imageIndex == 0 ? setImageIndex(tripData.images.length - 1) : setImageIndex(imageIndex - 1);
  }

  const showNextImage = () => {
    imageIndex == (tripData.images.length - 1) ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  }

  return (
    <>
      <div className="TripModal">
        <div className="TripModal__image-container">
          <div className="TripModal__arrow-container">
            <img 
              className="TripModal__arrows TripModal__arrows--left"
              src="/images/navigation/chevron_left.svg"
              onClick={showPreviousImage}
            />
          </div>
          <img
            className="TripModal__image"
            src={tripData.images[imageIndex]}
            alt={`image ${imageIndex + 1} from trip to ${tripData.country}`}
          />
          <div className="TripModal__arrow-container">
            <img 
              className="TripModal__arrows TripModal__arrows--right"
              src="/images/navigation/chevron_right.svg"
              onClick={showNextImage}
            />
          </div>
          <a href={tripData.images[imageIndex]} target="_blank">
            <img
              className="TripModal__fullscreen"
              src={fullscreenIcon}
              alt="Show image fullscreen"
            />
          </a>
        </div>
        <div className="TripModal__content">
          <h3 className="TripModal__heading__title">
            Placeholder
          </h3>
          <p className="TripModal__description">placeholder</p>
        </div>
      </div>
    </>
  );
};

export default TripModal;
