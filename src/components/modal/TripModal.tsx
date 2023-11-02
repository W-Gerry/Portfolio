import "./TripModal.scss";

import Trip from "../../models/Trip";
import fullscreenIcon from "/images/modal/fullscreen_icon.svg";
import { ArrowRight, ArrowLeft } from "../navigationarrows/NavigationArrows";

import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Waveform } from '@uiball/loaders'

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
      {tripData.images.length > 0 && (
        <>
          <div className="TripModal">
            <div className="TripModal__image-container">
              <div className="TripModal__arrows Arrows__left" onClick={showPreviousImage}>
                <ArrowLeft />
              </div>
              <LazyLoadImage
                className="TripModal__image"
                alt={`image ${imageIndex + 1} from trip to ${tripData.country}`}
                src={tripData.images[imageIndex].image}
                placeholder={<Waveform />}
              />
              <div className="TripModal__arrows Arrows__right" onClick={showNextImage}>
                <ArrowRight />
              </div>
              <a href={tripData.images[imageIndex].image} target="_blank">
                <img
                  className="TripModal__fullscreen"
                  src={fullscreenIcon}
                  alt="Show image fullscreen"
                />
              </a>
            </div>
            <div className="TripModal__content">
              <h3 className="TripModal__content__heading">
                {tripData.images[imageIndex].title}
              </h3>
              <p className="TripModal__content__text">
                {tripData.images[imageIndex].text}
              </p>
            </div>
          </div>
        </>
        ) : (
        <>
          <div className="TripModal">
            <div className="TripModal__image-container">
              <div className="TripModal__arrows Arrows__left" onClick={showPreviousImage}>
                <ArrowLeft />
              </div>
              <LazyLoadImage
                className="TripModal__image"
                alt={`image ${imageIndex + 1} from trip to ${tripData.country}`}
                src={tripData.images[imageIndex].image}
                placeholder={<Waveform />}
              />
              <div className="TripModal__arrows Arrows__right" onClick={showNextImage}>
                <ArrowRight />
              </div>
              <a href={tripData.images[imageIndex].image} target="_blank">
                <img
                  className="TripModal__fullscreen"
                  src={fullscreenIcon}
                  alt="Show image fullscreen"
                />
              </a>
            </div>
            <div className="TripModal__content">
              <h3 className="TripModal__content__heading">
                {tripData.images[imageIndex].title}
              </h3>
              <p className="TripModal__content__text">
                {tripData.images[imageIndex].text}
              </p>
            </div>
          </div>
        </>
        ) 
      }
    </>
  );
};

export default TripModal;
