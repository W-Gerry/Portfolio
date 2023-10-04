import "./ProjectCard.scss"

import Project from "../../models/Project"
import ProjectDetailsButton from "./ProjectDetailsButton"

import { useState, useEffect } from "react";
import ExtendedProjectCard from "./ExtendedProjectCard";

const ProjectCard = ({ project, selectedKey, globalKey, setGlobalKey }: { project: Project, selectedKey: any, globalKey: any, setGlobalKey: any }) => {
  const [SelectedProjectVisible, setSelectedProjectVisible] = useState(false);
  useEffect(() => {
    if (globalKey === selectedKey) setSelectedProjectVisible(false)
  }, [globalKey])

  return (
    <div className="Project-gallery__item">
      <img className="Project-gallery__image" alt={`${project.name} screenshot`} src={`${project.imageUrl}`} />
      <div className="Project-gallery__text">
        <h2 className="Project-gallery__text__title">{project.name}</h2>
        <p className="Project-gallery__text__description">{project.description}</p>
      </div>
      <ProjectDetailsButton
        setSelectedProjectVisible={() => {
          setGlobalKey(selectedKey)
          setSelectedProjectVisible(x => !x)
        }}
        selectedProjectVisible={SelectedProjectVisible}
      />
      {SelectedProjectVisible && (<ExtendedProjectCard project={project}/>)}
    </div>
  )
}

export default ProjectCard;