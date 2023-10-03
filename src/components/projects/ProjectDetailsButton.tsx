import "./ProjectDetailsButton.scss";

import caretDown from "../../assets/navigation/caret_down.svg";
import Project from "../../models/Project";

import { useState } from "react";

interface ProjectDetailsProps {
  project: Project;
  isVisible: boolean;
  setSelectedProject: (project : Project) => void;
  setSelectedProjectVisible: (isVisible : boolean) => void;
}

const ProjectDetailsButton = ( {project, isVisible, setSelectedProject, setSelectedProjectVisible} : ProjectDetailsProps) => {
  
  const [buttonActive, setButtonActive] = useState(false)

  const handleClick = (project : Project, isVisible : boolean) => {
    setButtonActive(!buttonActive)
    setSelectedProject(project);
    setSelectedProjectVisible(!isVisible)
  }

  return(
    <img 
      className={`Project-gallery__arrow ${buttonActive && `Project-gallery__arrow--active`}`}
      src={caretDown}
      onClick={() => handleClick(project, isVisible)}
    />
  )
}

export default ProjectDetailsButton;