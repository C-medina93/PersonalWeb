import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar(){
    const [nav, setNav] = useState();

    return( 
    <div className ="navbar">
        <Link className="navLink" to ="/ " onClick={()=>{setNav('home')}}> Home {nav === 'home' ? <hr/> :<></>}</Link>
        <Link  className="navLink" to ="/projects" onClick={()=>{setNav('projects')}}> Projects {nav === 'projects' ? <hr/> : <></>}</Link>
        <Link  className="navLink" to ="/experience" onClick={()=>{setNav('experience')}}> Experience {nav === 'experience' ? <hr/> : <></>}</Link>
        <Link  className="navLink" to ="/aboutMe" onClick ={()=>{setNav('aboutMe')}}>About Me {nav === 'aboutMe' ? <hr/> : <></>}</Link>
    </div>)
};

export default  Navbar; 