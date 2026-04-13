import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBar } from "../components/NavBar";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profile from "../constants/profile.png";
import MountainPic from "../constants/background.jpeg";
import { ExperienceList, ProjectList,PubList } from "../constants/constants";
import { ProjectCard } from "../components/ProjectCard";
import "./HomePage.css";
import { WidthFull } from "@mui/icons-material";
import { formatDate, validFormat } from "../components/Common";
import { ReactComponent as GoogleScholarIcon } from '../constants/googlescholar.svg';

export const HomePage = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const screenSizeLimit = 900;
    useEffect(() => {
        // Set initial width on mount
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        //const navbarHeight = 68.5; // Adjust this value based on your navbar height
        if (section) {
          const offset = section.offsetTop ;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      };

    // Prevent rendering logic based on windowWidth before it's initialized
    if (windowWidth === 0) return null;

    return (
        <div className="homepage">
            <div className="homepage-navbar">
                <NavBar />
            </div>
            <div className="content-container"
            style={{
                display: "flex",
                flexDirection: windowWidth <= screenSizeLimit ? "column" : "row",
                justifyContent: "space-between",
                alignItems: windowWidth <= screenSizeLimit ? "center" : "flex-start",
                gap: windowWidth <= screenSizeLimit ? "0" : "0",
                width: windowWidth <= screenSizeLimit ? "100%" : "90%",
                margin: "20px 0",
            }}
            >
                <div
                    className="identity-container"
                    itemScope
                    itemType="http://schema.org/Person"
                    style={
                        windowWidth <= screenSizeLimit
                            ? {
                                  display: "flex", // Enable flexbox
                                  flexDirection: "row", // Arrange items in a row
                                  justifyContent: "flex-start", // Align content to the left
                                  alignItems: "center", // Vertically align items
                                  width: "90%",
                                  gap: "10px", // Add spacing between elements
                                  marginTop:"-20px",
                                  marginBottom: "-10px",
                              }
                            : {
                                  display: "flex", // Enable flexbox for vertical layout
                                  flexDirection: "column", // Stack items vertically
                                  alignItems: "center", // Center-align items
                                  textAlign: "center", // Center-align text
                                  width: "100%"
                              }
                    }
                >
                    {windowWidth > screenSizeLimit && <img src={profile} alt="Profile Picture" />}
                    <h3
                        style={{
                            fontWeight: 'bold',
                            fontFamily: 'Arial',
                            whiteSpace: "nowrap",
                            marginRight: '20px'
                        }}
                    >
                        Shengqi Wu
                    </h3>
                    {windowWidth > screenSizeLimit && 
                    <p
                        style={{
                            fontFamily: 'Arial',
                        }}
                    >
                        Incoming Ph.D. Student in Electrical Engineering @ Stanford University
                    </p>
                    }
                    <ul
                        className="author__urls"
                        style={
                            windowWidth <= screenSizeLimit
                                ? { display: "flex", gap: "1em", padding: 0, margin: 0, listStyle: "none" }
                                : { display: "block",justifyContent:"flex-start", alignContent: "flex-start"}
                        }
                    >
                        <li>
                            <a href="mailto:wsq20041130@gmail.com">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="fa-icon"
                                    style={{ fontSize: windowWidth <= screenSizeLimit ? "1.5em" : "1em" }}
                                />
                                {windowWidth > screenSizeLimit && <span>Email</span>}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dianashengqiwu/">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="fa-icon"
                                    style={{ fontSize: windowWidth <= screenSizeLimit ? "1.5em" : "1em" }}
                                />
                                {windowWidth > screenSizeLimit && <span>LinkedIn</span>}
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ShengqiWu2004">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="fa-icon"
                                    style={{ fontSize: windowWidth <= screenSizeLimit ? "1.5em" : "1em" }}
                                />
                                {windowWidth > screenSizeLimit && <span>Github</span>}
                            </a>
                        </li>
                        

                        <li>
                            <a href="https://scholar.google.com/citations?user=GB1cIFgAAAAJ&hl=en">
                                <GoogleScholarIcon
                                className="fa-icon"
                                style={{
                                    width: windowWidth <= screenSizeLimit ? "1.5em" : "1em",
                                    height: "auto",
                                }}
                                />
                                {windowWidth > screenSizeLimit && <span>Google Scholar</span>}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="info-container"
                style={{
                    width: windowWidth <= screenSizeLimit ? "90%" : "70%",
                }}
                >
                    <div className="image-container">
                        <img src={MountainPic} alt="Mountain" />
                    </div>
                    <div className="detailInfo-container">
                        {/* About Me Section */}
                        <section id="about-me" className="section-container">
                            <h2 className="section-title">About Me</h2>
                            <p>
                            Hi! I am Shengqi (Diana) Wu, an incoming PhD student in 💻 Electrical Engineering at Stanford University. My research lies at the intersection of machine learning and physical systems, with a focus on hardware–software co-optimization for energy-efficient, real-world intelligent systems. I am particularly interested in Physical AI, edge intelligence, and bioelectronic platforms, where sensing, computation, and learning are tightly integrated.
                            </p>
                            <p>
                            Outside academics, I am a classically trained percussionist specializing in 🎼 Marimba and 🥁 Timpani. This experience has shaped how I think about precision, timing, and collaboration within complex systems. I am excited to contribute to impactful innovations that bridge intelligent algorithms and the physical world.
                            </p>
                        </section>



                        {/* Projects Section
                        <section id="projects" className="section-container">
                            <h2 className="section-title">Projects</h2>
                            <div className="project-grid">
                            {ProjectList.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                            ))}
                            </div>
                        </section> */}

                        {/* CV Section */}
                        <div id="cv" className="section-container">
                            <h2 className="section-title">CV</h2>
                            <div id = "Education" className="subsection-container">
                                <h3 className="subsection-title">Education</h3>
                                <ul>
                                    <li>
                                    <p>🌲 <strong>Stanford University</strong>, 2026 - Present</p>
                                    <p className="descriptive-text">Ph.D Student in Electrical Engineering</p>
                                    </li>
                                    <li>
                                    <p>🔱 <strong>University of California San Diego</strong>, 2022 - 2025</p>
                                    <p className="descriptive-text">B.S. in Computer Engineering and Mathematics-Computer Science</p>
                                    <p className="descriptive-text">GPA: 4.0        Summa Cum Laude</p>
                                    </li>
                                    <li>
                                    <p>📕 <strong>Stanford Summer Session</strong>, 2020 - 2021 Summer</p>
                                    </li>
                                </ul>
                            </div>

                            <div id = "Experiences" className="subsection-container">
                                <h3 className="subsection-title">Experiences</h3>
                                <ul>{ExperienceList.map((experience, index) => (
                                    <li key={index}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                            <div className="text-div">
                                                <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" style={{  color: 'inherit' }} id="experience-title">
                                                    <strong>{experience.companyName}</strong></a>, {experience.companyPosition}
                                            </div>
                                            <p style={{ margin: 0 }}>{formatDate(experience.begin_time)} - {experience.isEnded ? formatDate(experience.end_time) : "Now"}</p>
                                        </div>
                                        <p className="descriptive-text"><em>{experience.jobTitle}</em></p>
                                        <p className="descriptive-text">{experience.jobDescription}</p>
                                        {experience.projects.length > 0 && (
                                        <div className="project-anchor">
                                        <p className = "descriptive-text" style={{ color: 'inherit', cursor: 'pointer' }}>
                                        Related Projects:{" "}
                                        {experience.projects.map((project, projIndex) => (
                                        <span key={projIndex} onClick={() => scrollToSection(validFormat(project.name))} style={{ color: 'inherit', cursor: 'pointer' }}>
                                        {project.name}
                                        {projIndex < experience.projects.length - 1 ? ", " : ""}
                                        </span>
                                        ))}
                                        </p>
                                        </div>)}
                                    </li>))}
                                </ul>
                            </div>
                            <div id="Publications" className="subsection-container">
                                <h3 className="subsection-title">Publications</h3>
                                {/* <p className="descriptive-text" style={{ fontStyle: 'italic' }}>
                                    ⊥ Co-First Authors, * Correspondence Authors
                                    </p> */}

                                <ul>
                                    {PubList.map((publication, index) => {
                                    // const formattedAuthors = publication.authorList.replace(/Shengqi Wu/,"<strong>Shengqi Wu</strong>");
                                    const formattedAuthors = publication.authorList
                                        .replace(/Shengqi Wu/, "<strong>Shengqi Wu</strong>")
                                        .replace(/\*/g, "<sup>*</sup>")
                                        .replace(/⊥/g, "<sup>⊥</sup>");
                                    return (
                                        <li key={index}>
                                        <p className="descriptive-text" style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px",}}>
                                        <span>
                                            <strong>{publication.title}</strong>
                                                {publication.link && (
                                                <span style={{ marginLeft: "8px" }}>
                                                    [<a href={publication.link} target="_blank" rel="noopener noreferrer">paper</a>]
                                                </span>
                                                )}
                                        </span>
                                        <span style={{backgroundColor: "rgba(206, 240, 241, 0.3)",borderRadius: "8px",padding: "2px 8px",fontSize: "0.9em",color: "black",whiteSpace: "nowrap"}}>
                                            {publication.journal}
                                        </span>
                                        </p>
                                        <p className="descriptive-text" dangerouslySetInnerHTML={{ __html: formattedAuthors }}/>
                                        </li>);})}
                                </ul>
                                </div>

                                

                            <div id = "Awards & Certificates" className="subsection-container">
                                <h3 className="subsection-title">Awards & Certificates</h3>
                                <ul>
                                    <li>
                                    <p className="descriptive-text">University of California San Diego Provost Honor × 10</p>
                                    </li>
                                    <li>
                                    <p className="descriptive-text">Heartsaver First Aid CPR AED by American Heart  Association</p>
                                    </li>
                                </ul>
                            </div>
                            {/* <p>
                                Download my CV <a href="/path-to-cv">here</a>.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
