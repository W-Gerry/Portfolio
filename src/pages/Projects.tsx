import "./Projects.scss"

import ProjectGallery from "../components/projects/ProjectGallery";

function Projects () {
  return (
    <div className="Project-page-wrapper">
      <div className="Project-gallery-wrapper">
        <ProjectGallery />
      </div>  
    </div>
  )
};

export default Projects;