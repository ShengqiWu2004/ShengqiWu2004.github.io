import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBar } from "../components/NavBar";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profile from "../constants/profile.png";
import MountainPic from "../constants/background.jpeg";
import { ProjectList } from "../constants/constants";
import { ProjectCard } from "../components/ProjectCard";
import "./HomePage.css";

export const HomePage = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const screenSizeLimit = 900;
    useEffect(() => {
        // Set initial width on mount
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                        Computer Engineering & Math-CS Undergrad @ UC San Diego
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
                            <a href="mailto:shw105@ucsd.edu">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="fa-icon"
                                    style={{ fontSize: windowWidth <= screenSizeLimit ? "1.5em" : "1em" }}
                                />
                                {windowWidth > screenSizeLimit && <span>Email</span>}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shengqi-wu-68a84a333/">
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
                        <div id="about-me" className="section-container">
                            <h2 className="section-title">About Me</h2>
                            <p>
                                Hi!
                                I am Shengqi (Diana) Wu, a third-year 💻 <strong>Computer Engineering</strong>  and 💭 <strong>Math-CS</strong> student at University of California San Diego. 
                                My academic interests include <strong>Machine Learning</strong> and <strong>Software Engineering</strong>. 
                                My work focuses on neural network applications in bioinformatics and exploring ways to apply CNNs 
                                to solve everyday problems and enhance software solutions for improving quality of life.
                            </p>
                            <p>
                            Outside academics, I am a classically trained percussionist specializing in  
                            🎼 <strong> Marimba</strong> and 🥁 <strong>Timpani</strong>, where I developed a strong appreciation 
                            for precision and teamwork. I am eager to contribute to impactful innovations in my fields of interest.
                            </p>
                        </div>

                        {/* News Section */}
                        <div id="news" className="section-container">
                            <h2 className="section-title">News</h2>
                            <p>09/2424 🔬: Join the Research Team at Fang Lab</p>
                            <p>09/2022 🌊: Moved to San Diego!</p>
                        </div>

                        {/* Projects Section */}
                        <div id="projects" className="section-container">
                            <h2 className="section-title">Projects</h2>
                            <div className="project-grid">
                            {ProjectList.map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                            ))}
                            </div>
                        </div>

                        {/* CV Section */}
                        <div id="cv" className="section-container">
                            <h2 className="section-title">CV</h2>
                            <div id = "Education" className="subsection-container">
                                <h3 className="subsection-title">Education</h3>
                            </div>

                            <div id = "Experiences" className="subsection-container">
                                <h3 className="subsection-title">Experiences</h3>
                            </div>


                            <div id = "Awards & Certificates" className="subsection-container">
                                <h3 className="subsection-title">Awards & Certificates</h3>
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
