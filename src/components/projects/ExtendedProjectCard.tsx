import Project from "../../models/Project";

import "./ExtendedProjectCard.scss"

interface ProjectDetailsProps {
  project: Project | undefined;
}

const ExtendedProjectCard = ( { project } : ProjectDetailsProps) => {
  return(
    <div className={`ProjectDetailsCard`}>
      <p>
        {project && 
          project.description}
        Placeholder for details
      </p>
    </div>
  )
}

export default ExtendedProjectCard;