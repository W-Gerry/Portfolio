import "./ProjectCard.scss"

import Project from "../../models/Project"

interface ProjectSummaryProps {
	expanded?: boolean;
	setExpandedProject: () => void;
  project: Project;
}

const ProjectCard = (props : ProjectSummaryProps) => {
  const { expanded, setExpandedProject, project } = props;

  return (
    <div className={`Project-gallery__item ${expanded && `Project-gallery__item--active`}`}>
      <img 
        className="Project-gallery__image" 
        alt={`${project.name} screenshot`} 
        src={`${project.imageUrls[0]}`}
        onClick={() => setExpandedProject()} 
      />
      <div className="Project-gallery__text">
        <h2 className="Project-gallery__text__title">{project.name}</h2>
        <p className="Project-gallery__text__description">{project.descriptionShort}</p>
      </div>
      
    </div>
  )
}

export default ProjectCard;