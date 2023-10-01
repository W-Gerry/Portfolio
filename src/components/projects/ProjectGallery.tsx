import "./ProjectGallery.scss"

import projects from "../../data/projects";
import caretDown from "../../assets/navigation/caret_down.svg"

import { useState } from "react";

function ProjectGallery () {
  const [activeArrow, setActiveArrow] = useState()
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const displayProjectDetails = () => {
    setShowProjectDetails(!showProjectDetails);
  }

  return (
    <div className="Project-gallery-wrapper">
      <h1>This be the projects page</h1>
      <div className="Project-gallery">
        {projects.map((project) => 
          <div className="Project-gallery__item">
            <img className="Project-gallery__image" alt={`${project.name} screenshot`} src={`${project.imageUrl}`}/>
            <div className="Project-gallery__text">
              <h2 className="Project-gallery__text__title">{project.name}</h2>
              <p className="Project-gallery__text__description">{project.description}</p>
            </div>
            <img 
              className={`Project-gallery__arrow ${showProjectDetails && `Project-gallery__arrow--active`}`}
              src={caretDown}
              onClick={() => displayProjectDetails()}
            />
          </div>
        )}      
      </div>
    </div>
  )
};

export default ProjectGallery;