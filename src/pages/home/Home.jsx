import React from "react";
import ReactCurvedText from "react-curved-text";
import './Home.css';
import {FaCss3Alt, FaHtml5, FaReact, FaDatabase, FaJs, FaNodeJs, FaPython, FaJava, FaVuejs, FaGitAlt} from "react-icons/fa"

function Home(){

    return(
        <div className="home-body">
            <div className="opener">
                <div className="circle">
                    <div className="logo"></div>
                    <div className="name">
                        <ReactCurvedText
                            width={300}
                            height={300}
                            cx={150}
                            cy={150}
                            rx={95}
                            ry={95}
                            startOffset={0}
                            reversed={false}
                            text=" - CHRISTOPHER MEDINA - FULL STACK ENGINEER"
                            textProps={{style: {fontSize:24}}}
                            textPathProps={null}
                            tspanProps={{dy: 45}}
                            ellipseProps={null}
                            svgProps={{className : "rotating-name"}}
                        />
                    </div>
                </div>
                <h1> Hey there! I'm Chris.</h1>
            </div>    
            <div className="summary">
                <p className="summary-txt"> 
                    I am a full stack devloper currently looking to collaborate on projects and learn new languages along the way.<br/>
                </p>
                <p className="summary-txt">
                    I have a background in sales and cullinary. I've worked as a sales associate and quickly became management. I operated a forklift while working recieving at a warehouse. I'm a barista and a prep-chef.<br/>
                </p >
                <p className="summary-txt">
                    I have always wanted to work with computers. I want to do my part and help create the programs we will use tomorrow.<br/>

                </p>
            </div>
            
            <div className="ends">
                <div className="front">
                    <h2 className="title"> FRONT END </h2> 
                    <span className="ends-item"> <FaHtml5 color="purple"/>HTML</span>
                    <span className="ends-item"> <FaReact color="#62b7ea"/> React </span>
                    <span className="ends-item"><FaCss3Alt color="orange"/> CSS </span>
                    <span className="ends-item"><FaVuejs color="#42b883"/> Vue </span>
                    <span className="ends-item"> <FaGitAlt color="#F1502F"/> Git </span>
                </div>

                <div className="back">
                    <h2 className="title"> BACK END </h2>
                    <span className="ends-item"> <FaJs color="#f0db4f"/> JavaScript </span>
                    <span className="ends-item"> <FaDatabase color="#35495e"/> PostgreSQL </span>
                    <span className="ends-item"> <FaJava color="#62b7ea"/> Java </span>
                    <span className="ends-item"> <FaNodeJs color="#215732"/> Node </span>
                    <span className="ends-item"> <FaPython color="#62b7ea"/> Python </span>
                </div>
            </div>

        </div>
    )
};

export default Home;