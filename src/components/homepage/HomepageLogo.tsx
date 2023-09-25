import "./HomepageLogo.scss";

import logoLarge from "../../assets/images/general/Logo.svg"
import chevronDown from "../../assets/images/navigation/chevron_down.svg"

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