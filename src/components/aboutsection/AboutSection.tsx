import "./AboutSection.scss"

import { ReactElement } from "react";
import Button from "../button/Button";

interface AboutSectionProps {
  sectionColor: string;
  heading: ReactElement;
  headingAlignment: string;
  text: ReactElement;
  onClick: () => void;
  buttonText: ReactElement;
}

const AboutSection = ( {sectionColor, heading, headingAlignment, text, onClick, buttonText} : AboutSectionProps) => {
  return (
    <section className={`Section-${sectionColor} ${headingAlignment}`}>
      <div className={`Section-${sectionColor}__text`}>
        <h2>
          {heading}
        </h2>
        <p>
          {text}
        </p>
      </div>
      <Button 
        type={"submit"}
        onClick={() => onClick()}
      >
        {buttonText}
      </Button>
    </section>
  )
}

export default AboutSection;