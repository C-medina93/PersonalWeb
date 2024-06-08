import React from "react";
import './Footer.css';
import {FaInstagram, FaLinkedin, FaXTwitter, FaGithub} from "react-icons/fa6";
import {Link} from "react-router-dom";



function Footer (){
    return(
        <div className="foot">
            <h3>FOLLOW ME AT:</h3>
            <span className="toes">
                <Link to="https://www.instagram.com " target="blank"><FaInstagram/></Link>
                <Link to="https://www.linkedin.com/in/christopher--medina/ " target="blank"><FaLinkedin/></Link>
                <Link to="https://x.com/Chris__Medina " target="blank"><FaXTwitter/></Link>
                <Link to="https://github.com/C-medina93" target="blank"><FaGithub/></Link>

            </span>
        </div>
    )
};

export default Footer;