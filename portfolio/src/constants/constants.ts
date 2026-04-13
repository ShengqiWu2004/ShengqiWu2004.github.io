import { Description } from "@mui/icons-material";
import { Project,Experience,Publication} from "../types";
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
const TranscriptomicPipeline: Project = {
    name: "Transcriptomic Data Processing Pipeline",
    link: "https://github.com/ShengqiWu2004/Transcriptomic-Quantification",
    bullets: [
      "Developed an end-to-end RNA-Seq analysis workflow covering FASTQ preprocessing, genome alignment (STAR), and transcript quantification (Salmon) with decoy-aware indexing.",
      "Integrated differential expression analysis using R (DESeq2), automating statistical comparison and visualization for downstream biological interpretation.",
      "Validated the workflow on 8 mouse RNA-Seq datasets, successfully reproducing published differential expression results.",
      "Organized the pipeline for accessibility by non-CS collaborators with a clear directory structure, annotated command templates, and a comprehensive step-by-step README."
    ],
    description:
      "Implemented a modular, reproducible bioinformatics pipeline for transcriptomic data analysis from raw sequencing reads to differential expression output, emphasizing usability and reproducibility for interdisciplinary teams.",
    begin_time: new Date(2024, 8), // September 2024
    end_time: new Date(2024, 10),  // November 2024
    rel_path: "/images/TranscriptomicPipeline/",
    pictures: [],
    media: []
  };
  
const FalldownPrediction:Project = {
    name: "Ensole: Dynamic Fall Risk Analysis and Prediction Using Inertial Sensor Data",
    link: "https://github.com/ShengqiWu2004/Inertial-Sensor-Data-Prediction",
    bullets: [
        "Engineered neural network models using PyTorch, Scikit-Learn, and CUDA",
        "Experimented with various dimensionality reduction and visualization techniques, including PCA, LDA, UMAP, to observe data patterns and enhance data analysis.",
        "Developed a flexible data segmentation and augmentation pipeline that slices sensor data into training segments based on configurable window size and prediction size parameters, allowing the model to adapt to diverse input dynamics.",
        "Employed Convolutional Neural Network (CNN) to extract spatial features and Long Short-Term Memory (LSTM) to capture temporal dependencies from a dataset comprising approximately 168,000 data points, enabling accurate prediction and categorization across 6 main activity categories, highlighting the model's robustness.",
        "Achieved test mse loss of 0.48 over 30 time step prediction (3 seconds) prediction and 92% accuracy for motion categorizaiton.",
    ],
    description: "Designed a PyTorch-based predictive analytics system that integrates LSTM and CNN architectures to analyze multidimensional inertial sensor data for fall detection and behavior categorization.",
    begin_time: new Date(2025,1),
    end_time: new Date(2025,2),
    rel_path:"/images/FalldownPrediction/",
    pictures: [],
    media: []
}
const FEST: Project = {
    name: "FEST: Hand Gesture recognition and LED control",
    link:"",
    bullets:["Trained a gesture recognition model with TensorFlow Lite, achieving 96% accuracy and enabling a continuous real-time recognition pipeline; deployed on Arduino Nano 33 BLE to control an LED strip with dynamic light patterns via gesture signals.",
        "Overcame hardware constraints by integrating Arduino Nano 33 BLE (no 5V logic) with a classic Arduino Nano (no IMU/Bluetooth), establishing a custom digital signal communication protocol using ultra-fast pulse transfer and fast polling to achieve sub-millisecond gesture response without interrupts."],
    description:"Built a full-stack real-world application for motion classification, fall prediction, and gesture recognition using IMU sensor data. Developed and trained machine learning models (TensorFlow Lite) for deployment on Arduino Nano 33 BLE, enabling real-time gesture detection with LED feedback via custom low-latency communication protocols. Designed and implemented a companion web interface using React and a Python backend to visualize motion states and prediction results, completing an end-to-end system spanning embedded AI and user-facing applications.",
    begin_time: new Date(2025, 2),
    end_time: new Date(),
    rel_path:"",
    pictures:[],
    media:[]
}
const SANKit_ML: Project = {
    name:"SAN Kit - ML: ",
    link:"",
    bullets:[],
    description:"",
    begin_time:new Date(2025,4),
    end_time: new Date(2025,6),
    rel_path:"/images/SANKit_ML/",
    pictures:[{src:"HomePage.jpg",alt:"Home Page"},{src:"SelectSolution.jpg",alt:"Select Solution"},{src:"SelectBackground.jpg",alt:"Select Background"},{src:"Result.jpg",alt:"Show Result"}],
    media:[],
}
const TumorGrowth: Project = {
    name: "Tumor Growth Estimation with Transcriptomic Data",
    link: "",
    bullets: ["Designed and implemented Convolutional Neural Networks (CNNs) to extract spatial features and Recurrent Neural Networks (RNNs) to model temporal gene expression dynamics",
        "Built a robust data cleaning and processing framework with NumPy and pandas to normalize features and ensure structured datasets for efficient analysis.",
        "Automated hyperparameter tuning using KerasTuner and visualized tuning results with HiPlot to streamline the optimization process.",
        "Utilized TensorFlow with CUDA acceleration to optimize computational efficiency in handling large-scale transcriptomic datasets."
    ],//, achieving 85% prediction accuracy.
    description: "Developed a neural network-based pipeline leveraging CNNs and RNNs to predict tumor growth dynamics using a transcriptomic dataset of 6 billion data points.",
    begin_time: new Date(2024,9),
    end_time: new Date(2024,11),
    rel_path: "",
    pictures: [],
    media: []
}

export const ProjectList:Project[] = [
    //FEST,
    //SANKit_ML,
    FalldownPrediction,
    SoCalSocial,
    TranscriptomicPipeline,
    // TumorGrowth
];

const CWCLab: Experience ={
    companyName: "Center of Wireless Communication",
    companyLink: "https://cwc.ucsd.edu/",
    companyPosition: "San Diego, CA",
    jobTitle: "Undergraduate Researcher, With Prof. Bill Lin",
    jobDescription: "Applied reweighted-L1 pruning to a Neural ODE (KirchhoffNet) and explored device-inspired nonlinearity topologies for analog-aware architectures.",
    projects: [],
    begin_time: new Date(2025,5),
    isEnded: true,
    end_time: new Date(2025,8),
}
const ChemLab: Experience = {
    companyName: "Nano-bioelectronics (NBE) Lab",
    companyLink: "https://joewang.ucsd.edu/",
    companyPosition: "San Diego, CA",
    jobTitle: "Undergraduate Researcher, With Prof. Joseph Wang",
    jobDescription: "Develop and implement deep learning models for sensor data analysis and motion capture categorization, integrating hardware code solutions under the mentorship of Dr. Shichao Ding.",
    projects: [FalldownPrediction],
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
    isEnded: true,
    end_time: new Date(2024,12),
}

export const ExperienceList: Experience [] = [
    ChemLab,
    CWCLab,
    NanoLab,
];

export const PubList: Publication[] = [
    {
        title: "Machine Learning-Assisted Fe–N–C Single-Atom Nanozyme Rapid Screening Platform for Acetylcholinesterase Inhibitors",
        authorList: "Xin Li⊥, Shengqi Wu⊥, Shichao Ding*, Zhao Wang, Jing He, Mingxia Sun, Haitham Saad Al-Mashriqi, Selene Tang, Jia Chen*, Hongdeng Qiu*\n",
        journal: "Analytical Chemistry 2025",
        link: "https://doi.org/10.1021/acs.analchem.5c05641"
      },
    {
      title: "Small-molecule fluorescence probes for biomarkers of Alzheimer’s disease",
      authorList: "Juanxia Wang, Xu Shao, Chao Wang, Shengqi Wu, Mengyao Bai, Pengtao Zhang, Selene Tang, Nan Zhang, Xin Wang, Zhen Yang, Xiaoling Hu, Ping Guan, Zhaoyuan Lyu, Shichao Ding",
      journal: "Biosensors and Bioelectronics 2025",
      link: "https://doi.org/10.1016/j.bios.2025.117722"
    },

  ];
  



