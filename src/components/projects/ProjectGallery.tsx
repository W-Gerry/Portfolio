import "./ProjectGallery.scss"

import projects from "../../data/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardExpanded from "./ProjectCardExpanded";

function ProjectGallery () {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleExpandProject = (index: number | null) => {
		setExpandedProject(index);
	};
  
  return (
    <>
      <h1 className="Project-gallery-header">Projects</h1>
      <div className="Project-gallery">
        {projects.map((project, index) => {
          if (index === expandedProject) {
            return (
              <>
                <ProjectCard 
                  project={project}
                  expanded={true}
                  setExpandedProject={() => handleExpandProject(null)}
                />
                <ProjectCardExpanded />
              </>
            )
          }
          return (
            <ProjectCard 
              project={project}
              setExpandedProject={() => handleExpandProject(null)}
            />
          )
        })}
      </div>
    </>
  )
};

export default ProjectGallery;