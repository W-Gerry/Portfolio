import "./TripModal.scss";

import Trip from "../../models/Trip";
import fullscreenIcon from "../../assets/modal/fullscreen_icon.svg";

import { useState } from "react";

interface TripDataProps {
  tripData: Trip;
}

const ProjectModal = ({ tripData }: TripDataProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPreviousImage = () => {
    imageIndex == 0 ? setImageIndex(tripData.images.length - 1) : setImageIndex(imageIndex - 1);
  }

  const showNextImage = () => {
    imageIndex == (tripData.images.length - 1) ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  }

  return (
    <>
      <div className="ProjectModal">
        <div className="ProjectModal__image__container">
          <img
            className="ProjectModal__image"
            src={tripData.images[imageIndex]}
            alt={`image ${imageIndex + 1} from trip to ${tripData.country}`}
          />
          <div className="ProjectModal__arrows">
            <img 
              className="ProjectModal__arrows--left"
              onClick={showPreviousImage}
            />
            <img 
              className="ProjectModal__arrows--right"
              onClick={showNextImage}
            />
          </div>
          <a href={tripData.images[imageIndex]} target="_blank">
            <img
              className="ProjectModal__fullscreen"
              src={fullscreenIcon}
              alt="Show image fullscreen"
            />
          </a>
        </div>
        <div className="ProjectModal__content">
          <h3 className="ProjectModal__heading__title">
            Placeholder
          </h3>
          <p className="ProjectModal__description">placeholder</p>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
