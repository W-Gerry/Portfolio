import "./ProjectGallery.scss"

import projects from "../../data/projects";

function Projects () {
  return (
    <div className="project-page-wrapper">
      <h1>This be the projects page</h1>
      {projects.map((project) => 
        <div className="project-item">
          <img className="project-image" alt={`${project.name} screenshot`} src={`${project.imageUrl}`}/>
          <div className="project-text">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.link && <a href={project.link} target="_blank">See this project live</a>}
          </div>
        </div>
      )}      
    </div>
  )
};

export default Projects;