import React from "react";
import "./Projects.css"

function Projects(){
    return(
        <div className="p-body">
            <h1>Projects</h1>
            <div className=" p-container">
                <div className="p1">
                    <p>this website</p>
                    <img src="src/assets/Page.svg"></img>

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