import Project from "../models/Project";

import marsImg from "../assets/mars-mission/mars-cover-img.png";
import photoviewerImg from "../assets/projects/Photoviewer_cover.png";
import busboardImg from "../assets/projects/Busboard_cover.png";


const projects: Project[] = [
    {
        name: "Mars Mission",
        description: "I worked as part of a team to create a React + TypeScript application designed to get young people interested in space. We used various Nasa APIs. I learnt about collaboration using Git.",
        imageUrl: marsImg,
        link: "https://techswitch-learners.github.io/mars-mission-2023-aug/"
    },
    {
        name: "Bus Board",
        description: "Description of Bus Board project.",
        imageUrl: busboardImg,
    },
    {
        name: "Photo Viewer",
        description: "Description of Photo Viewer project.",
        imageUrl: photoviewerImg,
    },
]

export default projects;