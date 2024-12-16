import { Project,Experience } from "../types";

const SoCalSocial:Project = {
    name: "SoCalSocial",
    link: "https://github.com/harry-lons/SoCalSocial",
    bullets: [
        "Simplifies event discovery and management with features like saving and bookmarking events.",
        "Reduces information overload and eliminates traditional advertising clutter.",
        "Allows users to view event details and plan schedules through a calendar interface.",
        "Enables organizations to create official accounts to publish and manage events.",
        "Supports sharing media, connecting with attendees, and personalized event filtering.",
        "Built using React, TypeScript, FastAPI, Python, PyJWT, and PostGre SQL.",
    ],
    description: "A web platform that centralizes and personalizes event information for UC San Diego students.",
    begin_time: new Date(2024,9),
    end_time: new Date(2024,12),
    rel_path:"/images/SoCalSocial/",
    pictures: [{src: "Landing.png",alt:"Landing Page"},{src: "HomePage.png",alt:"Home Page"},{src: "Events.png",alt:"Browse Events"},{src: "EventDetail.png",alt:"Detail of Event"},{src: "Clubs.png",alt:"Find Clubs"},{src: "AddEvent.png",alt:"Publish an Event"},{src: "ManageEvent.png",alt:"Manage Your Events"}],
    media: ["https://www.youtube.com/watch?v=m3Xlao0JmpI","https://www.youtube.com/watch?v=ZsWwgNoCHX8"]
}

export const ProjectList:Project[] = [
    SoCalSocial,


];

const NanoLab: Experience = {
    companyName: "Nanomaterials & Nanomedicine Laboratory",
    companyLink: "https://fanglab.com/",
    companyPosition: "San Diego, CA",
    jobTitle: "Undergraduate Researcher",
    jobDescription: "Conducted modeling for tumor growth dynamics using transcriptomic data and gained wet lab experience in gene extraction and immunological research.",
    projects: [SoCalSocial,SoCalSocial],
    begin_time: new Date(2024,9),
    isEnded: false,
    end_time: new Date(),
}

export const ExperienceList: Experience [] = [
    NanoLab
];



