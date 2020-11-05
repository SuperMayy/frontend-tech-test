import React from 'react';
import { Link } from "react-router-dom";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footerText">Share this Tournament</h1>
            <div className="icons">
                <Link to="/"><img src={twitter} className="icon" alt="twitter icon"/></Link>
                <Link to="/"><img src={facebook} className="icon" alt="facebook icon"/></Link>
            </div>
        </div>
    )
}

export default Footer;
