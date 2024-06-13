import React from "react";
import "./Projects.css";
import {FaGithub} from "react-icons/fa6";

function Projects(){
    return(
        <div className="p-body">
            <h1>Projects</h1>
            <div className=" p-container">
                <div className="p1">
                    <p>this website</p>
                    <img className="p-img" src="src/assets/Page.svg"></img>
                </div>
                <div className="p-links">
                    <a  href="https://github.com/C-medina93/PersonalWeb" target="blank"><FaGithub/> source</a>
                </div>

                <div className="p2">
                    <p>
                        WORK<br/>
                        IN<br/>
                        PROGRESS
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Projects;