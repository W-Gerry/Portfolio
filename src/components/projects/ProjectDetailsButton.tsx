import "./ProjectDetailsButton.scss";

import caretDown from "../../assets/navigation/caret_down.svg";

interface ProjectDetailsProps {
  setSelectedProjectVisible: any;
  selectedProjectVisible: boolean;
}

const ProjectDetailsButton = ( {setSelectedProjectVisible, selectedProjectVisible} : ProjectDetailsProps) => {
  return(
    <img 
      className={`Project-gallery__arrow ${selectedProjectVisible && `Project-gallery__arrow--active`}`}
      src={caretDown}
      onClick={setSelectedProjectVisible}
    />
  )
}

export default ProjectDetailsButton;