import { Project,Experience } from "../types";
//Notice that Month is 0-index Base !
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
    begin_time: new Date(2024,8),
    end_time: new Date(2024,11),
    rel_path:"/images/SoCalSocial/",
    pictures: [{src: "Landing.png",alt:"Landing Page"},{src: "HomePage.png",alt:"Home Page"},{src: "Events.png",alt:"Browse Events"},{src: "EventDetail.png",alt:"Detail of Event"},{src: "Clubs.png",alt:"Find Clubs"},{src: "AddEvent.png",alt:"Publish an Event"},{src: "ManageEvent.png",alt:"Manage Your Events"}],
    media: ["https://www.youtube.com/watch?v=m3Xlao0JmpI","https://www.youtube.com/watch?v=ZsWwgNoCHX8"]
}
const TumorGrowth: Project = {
    name: "Tumor Growth Estimation with Transcriptomic Data (Ongoing)",
    link: "",
    bullets: ["Designed and implemented Convolutional Neural Networks (CNNs) to extract spatial features and Recurrent Neural Networks (RNNs) to model temporal gene expression dynamics",
        "Built a robust data cleaning and processing framework with NumPy and pandas to normalize features and ensure structured datasets for efficient analysis.",
        "Automated hyperparameter tuning using KerasTuner and visualized tuning results with HiPlot to streamline the optimization process.",
        "Utilized TensorFlow with CUDA acceleration to optimize computational efficiency in handling large-scale transcriptomic datasets."
    ],//, achieving 85% prediction accuracy.
    description: "Developed a neural network-based pipeline leveraging CNNs and RNNs to predict tumor growth dynamics using a transcriptomic dataset of 6 billion data points.",
    begin_time: new Date(2024,9),
    end_time: new Date(),
    rel_path: "",
    pictures: [],
    media: []
}

export const ProjectList:Project[] = [
    SoCalSocial,
    TumorGrowth
];

const NanoLab: Experience = {
    companyName: "Nanomaterials & Nanomedicine Laboratory",
    companyLink: "http://nano.ucsd.edu/~l7zhang/index.php",
    companyPosition: "San Diego, CA",
    jobTitle: "Undergraduate Researcher",
    jobDescription: "Conducted modeling for tumor growth dynamics using transcriptomic data and gained wet lab experience in gene extraction and immunological research.",
    projects: [TumorGrowth],
    begin_time: new Date(2024,9),
    isEnded: false,
    end_time: new Date(),
}

export const ExperienceList: Experience [] = [
    NanoLab,
];



