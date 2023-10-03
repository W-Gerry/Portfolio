import "./ProjectGallery.scss"

import projects from "../../data/projects";
import ProjectDetailsButton from "./ProjectDetailsButton";

import { useState } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import Project from "../../models/Project";

function ProjectGallery () {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [SelectedProjectVisible, setSelectedProjectVisible] = useState(false);

  return (
    <>
      <h1 className="Project-gallery-header">Projects</h1>
      <div className="Project-gallery">
        {projects.map((project) => 
          <div className="Project-gallery__item">
            <img className="Project-gallery__image" alt={`${project.name} screenshot`} src={`${project.imageUrl}`}/>
            <div className="Project-gallery__text">
              <h2 className="Project-gallery__text__title">{project.name}</h2>
              <p className="Project-gallery__text__description">{project.description}</p>
            </div>
            <ProjectDetailsButton 
              project = {project}
              isVisible = {SelectedProjectVisible}  
              setSelectedProject={() => setSelectedProject}
              setSelectedProjectVisible={() => setSelectedProjectVisible}
            />
          </div>
        )}
        <ProjectDetailsCard project = {selectedProject} isVisible = {SelectedProjectVisible}/>     
      </div>
    </>
  )
};

export default ProjectGallery;