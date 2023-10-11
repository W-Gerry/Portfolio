import profileImageTrek from "../assets/profile/profile_image_trek.jpg";
import coverImage from "../assets/profile/cover_photo.jpg";
import TravelTimeline from "../components/timeline/trip_timeline";
import PhotographyGallery from "../components/photographygallery/PhotographyGallery";
import AboutSection from "../components/aboutsection/AboutSection";
import aboutPara from "../data/aboutpara";

import { useState } from "react";

import "./About.scss";
import SportPhotoCarousel from "../components/sportphotocarousel/SportPhotoCarousel";
import ContactLinks from "../components/contact/ContactLinks";

function About() {
  const [timelineVisibility, setTimelineVisibility] = useState(false);
  const [sportCarouselVisibility, setSportCarouselVisibility] = useState(false);
  const [photoGalleryVisibility, setPhotoGalleryVisibility] = useState(false);

  const showOrHideTimeline = () => {
    setTimelineVisibility(!timelineVisibility)
    // if (timelineVisibility) {
    //   setTimelineVisibility(false)
    // } else {
    //   setTimelineVisibility(true)
    // }
  }

  const showOrHideSportCarousel = () => {
  if (sportCarouselVisibility) {
    setSportCarouselVisibility(false)
  } else {
    setSportCarouselVisibility(true)
  }
  }

  const showOrHidePhotoGallery = () => {
    if (photoGalleryVisibility) {
      setPhotoGalleryVisibility(false)
    } else {
      setPhotoGalleryVisibility(true)
    }
  }

  // const openRecipePage = () => {
  //   window.open("http://localhost:5173/Portfolio/#/recipes", "_blank");
  // }

  return (
    <>
      <div className="Cover-image-container">
        <img 
          className="Cover-image-container__image"
          src={coverImage}
          alt="Cover photo of a valley in Costa Rica"
        />
      </div>
      <h1>Wasson Shag</h1>
      <section className="container">
        <div className="Profile-intro">
          <img className="Profile-intro__image" src={profileImageTrek} />
          <div className="Profile-intro__content">
            <p className="Profile-intro__content__text">
              {aboutPara}
            </p>
            <ContactLinks />
          </div>
        </div>
      </section>
      <AboutSection
        sectionColor={"dark"}
        heading={<>Travel</>}
        headingAlignment="Left"
        text={<>Although I do love playing with computers, I also love exploring the world and travelling to new places. I have been incredibly lucky to visit some beautiful countries and hoping to see a few more!</>}
        onClick={showOrHideTimeline}
        buttonText={<>See some of my travels</>}
      />
      <TravelTimeline isVisible={timelineVisibility} />
      <AboutSection
        sectionColor={"medium"}
        heading={<>Sports</>}
        headingAlignment="Right"
        text={
          <>Don't get me started about rugby because I will not stop talking if you do, I've played since I was 6 years old and watch as much as I can. I even managed to get some tickets to the Rugby World Cup in France to see England vs Tonga.
          <br/>
          I also played American Football at university and every so often I chase a golfball around the fairway (or rough), still chasing that hole in one though.</>
        }
        onClick={showOrHideSportCarousel}
        buttonText={<>See more</>}
      />
      <SportPhotoCarousel isVisible={sportCarouselVisibility} />
      <AboutSection
        sectionColor={"light"}
        heading={<>Photography</>}
        headingAlignment="Left"
        text={<>During my travels I also found a of a love for (amateur) photography although I'm never sure what to do with all the pictures.</>}
        onClick={showOrHidePhotoGallery}
        buttonText={<>See some of my favourites</>}
      />
      <PhotographyGallery isVisible={photoGalleryVisibility} />
      {/* <AboutSection
        sectionColor={"lightest"}
        heading={<>Cooking</>}
        headingAlignment="Right"
        text={<>I'm always up for trying new recipes, although maybe just once depending on how complicated the recipe is. As a Cornishman you can't beat a good pasty or barbecue by the beach.</>}
        onClick={openRecipePage}
        buttonText={<>Check out some recipes</>}
      /> */}
    </>
  )
};

export default About;
