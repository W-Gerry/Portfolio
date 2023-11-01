import Project from "../models/Project";

import marsImg from "/images/mars-mission/mars-cover-img.webp";
import photoviewerImg from "/images/projects/Photoviewer_cover.webp";
import busboardImg from "/images/projects/Busboard_cover.webp";
import whaleImg from "/images/projects/WhaleSpotting_cover.webp";


const projects: Project[] = [
    {
        name: "Whale Spotting",
        descriptionShort: "This project was an opportunity to gain real world experience of managing the development of a website from start to finish using Agile development techniques. The website was a combination of frontend (React) and backend (C#, PostegreSQL) to develop a responsive, interactive and secure web application.",
        descriptionLong: "Placeholder",
        imageUrls: [whaleImg,],
        link: "https://techswitch-learners.github.io/whale-spotting-2023-aug"
    },
    {
        name: "Mars Mission",
        descriptionShort: "I worked as part of a team to create a React + TypeScript application designed to get young people interested in space. We used various Nasa APIs. I learnt about collaboration using Git.",
        descriptionLong: "Placeholder",
        imageUrls: [marsImg,],
        link: "https://techswitch-learners.github.io/mars-mission-2023-aug/"
    },
    {
        name: "Bus Board V1",
        descriptionShort: "I developed a live bus timetable application using React to accept a user's postcode in London and provide live information using API requests for the nearest bus stops and arrivals.",
        descriptionLong: "Placeholder",
        imageUrls: [busboardImg,],
    },
    {
        name: "Photo Viewer",
        descriptionShort: "A small React application to display a gallery of images and make a specific image the main cover photo when selected. This was an opportunity to gain experience of useState and useEffect within React.",
        descriptionLong: "Placeholder",
        imageUrls: [photoviewerImg,],
    },
]

export default projects;