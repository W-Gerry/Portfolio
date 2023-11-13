import "./Home.scss";

import HomepageLogo from "../components/homepage/HomepageLogo";
import ProjectGallery from "../components/projects/ProjectGallery";
import IntroCard from "../components/intro/IntroCard";

function Home () {
  return (
    <div className="Homepage-wrapper">
      <HomepageLogo />
      <div className="Content-section-wrapper">
        <div className="Intro-section">
          <IntroCard
            title="<Coder>"
            text="Passionate programmer able to write clean and functional code with experience in frontend and backend frameworks. Notably JavaScript, Python, React, C# and CSS."
          />
          <IntroCard
            title="Cyber Security Professional"
            text="Cyber consultant with several years experience of identifying and managing IT and Cyber risks across areas such as Change Management, Identity and Access Management and Threat Response."
          />
        </div>
        <ProjectGallery />
      </div>
    </div>
  )
};

export default Home;