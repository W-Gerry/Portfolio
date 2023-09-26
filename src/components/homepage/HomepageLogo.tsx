import "./HomepageLogo.scss";

import logoLarge from "../../assets/general/Logo.svg"
import chevronDown from "../../assets/navigation/chevrons_down.svg"

const HomepageLogo = () => {
  return (
    <div className="homepage-logo-wrapper">
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
  )
};

export default HomepageLogo;