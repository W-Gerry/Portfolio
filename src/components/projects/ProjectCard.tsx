import "./ProjectCard.scss"

import Project from "../../models/Project"

interface ProjectSummaryProps {
  expanded?: boolean;
  setExpandedProject: () => void;
  project: Project;
}

const ProjectCard = (props: ProjectSummaryProps) => {
  // const { expanded, setExpandedProject, project } = props;
  const { project } = props;

  if (project.link) {
    return (
      <div className={`Project-gallery__item`}>
        <img
          className={`Project-gallery__image Active-site`}
          alt={`${project.name} screenshot`}
          src={`${project.imageUrls[0]}`}
          onClick={() => window.open(project.link, "")}
        />
        <div className="Project-gallery__text">
          <h2 
          className="Project-gallery__text__title Active-site" 
          onClick={() => window.open(project.link, "")}
          >
            {project.name}</h2>
          <p className="Project-gallery__text__description">{project.descriptionShort}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`Project-gallery__item`}>
        <img
          className={`Project-gallery__image`}
          alt={`${project.name} screenshot`}
          src={`${project.imageUrls[0]}`}
        />
        <div className="Project-gallery__text">
          <h2 className="Project-gallery__text__title">{project.name}</h2>
          <p className="Project-gallery__text__description">{project.descriptionShort}</p>
        </div>
      </div>
    )
  }

}

export default ProjectCard;