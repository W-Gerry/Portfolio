import "./ProjectGallery.scss"

import projects from "../../data/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectGallery () {
  const [globalKey, setGlobalKey] = useState(null)
  return (
    <>
      <h1 className="Project-gallery-header">Projects</h1>
      <div className="Project-gallery">
        {projects.map((project, key) => 
          <ProjectCard project={project} selectedKey={key} globalKey={globalKey} setGlobalKey={setGlobalKey} />
        )}
      </div>
    </>
  )
};

export default ProjectGallery;