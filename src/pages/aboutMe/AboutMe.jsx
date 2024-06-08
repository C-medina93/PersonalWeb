import React from "react";
import "./AboutMe.css"; 

function AboutMe(){
    return(
        <div className="aboutMe-body">
            <div className="header">
                <h1>A little about me:</h1>
            </div>
            <div className="body-txt">
                <p>
                    I am born and raised in San Jose California. <br/>
                    I am mostly a home-body but I love to be out and about on hot summer days.<br/>
                    I like to build gunpla.<br/>
                    I love watching movies.<br/>
                </p>
            </div>
        </div>
    )

};

export default AboutMe;
