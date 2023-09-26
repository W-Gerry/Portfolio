import profileImage from "../assets/profile/profile.jpg";
import coverImage from "../assets/profile/cover_photo.jpg";
import Button from "../components/button/Button";
import Timeline from "../components/timeline/trip_timeline";

import { useState } from "react";

import "./About.scss";

function About() {
  const [timelineVisibility, setTimelineVisibility] = useState(false);

  const handleClick = () => {
    if (timelineVisibility) {
      setTimelineVisibility(false)
    } else {
      setTimelineVisibility(true)
    }
  }

  return (
    <>
      <div className="Cover-image-container">
        <img 
          className="Cover-image-container__image"
          src={coverImage}
          alt="Cover photo of a valley in Costa Rica"
        />
      </div>
      <h1>About Me</h1>
      <section className="container">
        <div className="Profile-intro">
          <img className="Profile-intro__image" src={profileImage} />
          <div className="Profile-intro__content">
            <h2 className="Profile-intro__content__about-me">
              About Me
            </h2>
            <p className="Profile-intro__content__text">
              This is the about me section
            </p>
          </div>
        </div>
      </section>
      <section className="Section-dark">
        <div className="Section-dark__text">
          <h2>Travel</h2>
          <p>Although I do love playing with computers, I also love exploring the world and travelling to new places. I have been incredibly lucky to visit some beautiful countries and hoping to see a few more!</p>
        </div>
        <Button 
          type={"submit"}
          onClick={() => handleClick()}
        >
          See some of my travels
        </Button>
      </section>
      <Timeline isVisible={timelineVisibility}/>
    </>
  )
};

export default About;
