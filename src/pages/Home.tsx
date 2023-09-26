import "./Home.scss";

import HomepageLogo from "../components/homepage/HomepageLogo";
import ProjectGallery from "../components/projects/ProjectGallery";

function Home () {
  return (
    <div className="homepage-wrapper">
      <HomepageLogo />
      <ProjectGallery />
    </div>
  )
};

export default Home;