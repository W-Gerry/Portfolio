import "./HomepageLogo.scss";
import "../../styles/NCradleLoader.scss";

import logoLarge from "../../assets/general/Logo.svg"
import chevronDown from "../../assets/navigation/chevrons_down.svg"

import { useEffect, useState } from "react";
import { NewtonsCradle } from '@uiball/loaders'

const HomepageLogo = () => {
  const [visible, setVisible] = useState(true)
  const windowWidth = window.innerWidth;

  const setLogoVisibility = () => {
    var scrollDistance = 50;
    if (windowWidth < 600) {
      scrollDistance = 10;
    }

    if (windowWidth >= 600 && windowWidth < 992) {
      scrollDistance = 25;
    }

    if (scrollY > scrollDistance) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setLogoVisibility)
    return () => {
      window.removeEventListener("scroll", setLogoVisibility)
    }
  }, [])

  return (
    <>
      {logoLarge ? (
        <div className={`homepage-logo-wrapper ${visible && `Visible`}`}>
          <img 
            className="homepage-logo-wrapper__logo" 
            src={logoLarge}
            alt="Homepage main logo image"
          />
          <img 
            className="homepage-logo-wrapper__down-arrow"
            src={chevronDown}
            alt="Downward scroll arrow"
          />
        </div>
      ):(
        <div className="homepage-logo-wrapper">
          <NewtonsCradle 
            size={40}
            speed={1.4} 
            color="black" 
          />
        </div>
      )}
      
    </>
  )
};

export default HomepageLogo;