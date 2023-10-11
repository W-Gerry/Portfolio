import "./ProjectModal.scss";

import Project from "../../models/Project";
import fullscreenIcon from "../../assets/modal/fullscreen_icon.svg";
import Button from "../button/Button";

import { useState } from "react";

interface ProjectDataProps {
  projectData: Project;
}

const ProjectModal = ({ projectData }: ProjectDataProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPreviousImage = () => {
    imageIndex == 0 ? setImageIndex(projectData.imageUrls.length - 1) : setImageIndex(imageIndex - 1);
  }

  const showNextImage = () => {
    imageIndex == (projectData.imageUrls.length - 1) ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  }

  const openProjectLink = () => {
    window.open(`${projectData.link}`, "_blank")
  }

  return (
    <>
      <div className="ProjectModal">
        <div className="ProjectModal__image__container">
          <img
            className="ProjectModal__image"
            src={projectData.imageUrls[imageIndex]}
            alt={`image ${imageIndex + 1} from ${projectData.name} project`}
          />
          <div className="ProjectModal__arrows">
            <img 
              className="ProjectModal__arrows--left"
              onClick={showPreviousImage}
            />
            <img 
              className="ProjectModal__arrows--right"
              onClick={showNextImage}
            />
          </div>
          <a href={projectData.imageUrls[imageIndex]} target="_blank">
            <img
              className="ProjectModal__fullscreen"
              src={fullscreenIcon}
              alt="Show image fullscreen"
            />
          </a>
        </div>
        <div className="ProjectModal__content">
          <h3 className="ProjectModal__heading__title">
            {projectData.name}
          </h3>
          <p className="ProjectModal__description">{projectData.descriptionShort}</p>
          {projectData.link && (<Button type="button" onClick={openProjectLink} />)}
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
