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
const FalldownPrediction:Project = {
    name: "Dynamic Fall Risk Analysis and Prediction Using Inertial Sensor Data.",
    link: "https://github.com/ShengqiWu2004/Inertial-Sensor-Data-Prediction",
    bullets: [
        "Engineered neural network models using PyTorch that combine Convolutional Neural Networks (CNNs) and Long Short-Term Memory (LSTM) architectures for effective fall detection from Gyroscope and Acceleration sensor data.",
        "Developed a flexible data segmentation and augmentation pipeline that slices sensor data into training segments based on configurable window size and prediction size parameters, allowing the model to adapt to diverse input dynamics.",
        "Experimented with various dimensionality reduction and visualization techniques, including PCA, LDA, UMAP, to observe data patterns and enhance data analysis.",
        "Employed CNNs to extract spatial features and LSTMs to capture temporal dependencies from a dataset comprising approximately 108,900 data points, enabling accurate predictions across 4 main activity categories—expandable to 8 detailed subcategories—highlighting the model's robustness.",
        "Achieved test mse loss of 0.48, demonstrating exceptional precision and effectiveness in dynamic fall prediction.",
    ],
    description: "Designed a PyTorch-based predictive analytics system that integrates LSTM and CNN architectures to analyze multidimensional inertial sensor data for fall detection, achieving a per time-step prediction loss of 0.089.",
    begin_time: new Date(2025,1),
    end_time: new Date(2025,2),
    rel_path:"/images/FalldownPrediction/",
    pictures: [],
    media: []
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
   // FalldownPrediction,
    SoCalSocial,
    TumorGrowth
];
const ChemLab: Experience = {
    companyName: "Joseph Wang Nano-bioelectronics (NBE) Lab",
    companyLink: "https://joewang.ucsd.edu/",
    companyPosition: "San Diego, CA",
    jobTitle: "Undergraduate Researcher",
    jobDescription: "Develop and implement deep learning models for sensor data analysis and motion capture categorization, integrating hardware code solutions under the mentorship of Dr. Shichao Ding.",
    projects: [],
    begin_time: new Date(2025,1),
    isEnded: false,
    end_time: new Date(),
}

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
    ChemLab,
    NanoLab,
];



