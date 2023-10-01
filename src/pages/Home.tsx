import "./Home.scss";

import HomepageLogo from "../components/homepage/HomepageLogo";
import ProjectGallery from "../components/projects/ProjectGallery";

function Home () {
  return (
    <div className="Homepage-wrapper">
      <HomepageLogo />
      <div className="Content-section-wrapper">
        <ProjectGallery />
      </div>
    </div>
  )
};

export default Home;