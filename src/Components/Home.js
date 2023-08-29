import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 style={{color:'white',fontWeight: '1000',fontSize: '50px'}}>
          Securely connect any device, anywhere.
          </h1>
          <p className="primary-text">
          ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.
          </p>
          <div style={{display:'flex'}}>
          <button className="secondary-button" style={{marginRight:'20px'}}>
            Get ZeroTier
          </button>
          <button className="primary-button">
            Learn More
          </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    <div style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '20px',
          marginTop: '34px',
    }}>
    NEW! ZeroTier Summer 2023 Release: Download 1.12.1 - Read More
    </div>
    </>
  );
};

export default Home;
