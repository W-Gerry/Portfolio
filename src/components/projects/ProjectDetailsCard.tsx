import Project from "../../models/Project";

import "./ProjectDetailsCard.scss"

interface ProjectDetailsProps {
  project: Project | undefined;
  isVisible: boolean
}

const ProjectDetailsCard = ( { project, isVisible } : ProjectDetailsProps) => {
  return(
    <div className={`ProjectDetailsCard ${isVisible && `ProjectDetailsCard--visible`}`}>
      <p>
        {project && 
          project.description}
        Placeholder for details
      </p>
    </div>
  )
}

export default ProjectDetailsCard;