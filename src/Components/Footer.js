import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import priceImage from "../Assets/orange-knockout-512x512-v2.webp";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
      <div style={{display:'flex'}} >
      <img src={priceImage} width='40px'alt="" />
        <h1 style={{color:'white'}}>ZEROTIER</h1>
      </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>GET STARTED</span>
          <span>Download</span>
          <span>GitHub</span>
          <span>SDK</span>
          <span>Partners</span>
        </div>
        
        <div className="footer-section-columns">
          <span>SUPPORT</span>
          <span>Documentation</span>
          <span>Knowledge Base</span>
          <span>Community</span>
          <span>Getting Started</span>
        </div>

        <div className="footer-section-columns">
          <span>COMPANY</span>
          <span>Contact</span>
          <span>About Us</span>
          <span>Careers</span>
          <span>Blog</span>
          <span>Media Kit</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
