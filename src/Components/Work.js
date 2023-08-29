import React from "react";
import Zero from "../Assets/game-icon.webp";
import priceImage from "../Assets/orange-knockout-512x512-v2.webp";
import {
  Grid,
  Container,
} from '@mui/material';

const Work = () => {
  const workInfoData = [
    {
      image: Zero,
      title: "Individuals",
      text: `Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere
      Conveniently share files and data, or even play LAN games with others
      Manage secure network access to users of choice`,
    },
    {
      image: Zero,
      title: "IT Teams",
      text: `Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution
      Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface
      Easily provision remote access for all of your users`,
    },
    {
      image: Zero,
      title: "DevOps",
      text: `Quickly build backplane networks spanning multiple cloud providers
      Save on performance, storage, and bandwidth
      Administrate and debug from anywhere
      Secure corporate network overlay and failover layer`,
    },
    {
      image: Zero,
      title: "Embedded",
      text: `Enjoy vastly superior network control and functionality
      Develop and manage products or services running on their own decentralized networks
      Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM`,
    },
  ];
  const pricingData=[
    {
      image: priceImage,
      title: "Basic",
      text: `Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere
      Conveniently share files and data, or even play LAN games with others
      Manage secure network access to users of choice`,
      btnText:'Free Sign Up'
    },
    {
      image: priceImage,
      title: "Professional",
      text: `Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere
      Conveniently share files and data, or even play LAN games with others
      Manage secure network access to users of choice`,
      btnText:'Sign Up'
    },
    {
      image: priceImage,
      title: "Business",
      text: `Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere
      Conveniently share files and data, or even play LAN games with others
      Manage secure network access to users of choice`,
      btnText:'Contact Sales'
    },
  ]
  return (
    <>
      <div className="work-section-wrapper">
        <div className="work-section-top"  style={{color: 'white'}}>
          <h3 style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '40px',
            marginTop: '34px',
      }}>Secure networks for teams of any size</h3>
        </div>
        <Container>
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
        >
          {workInfoData.map((data) => (
            <Grid item xs={12} sm={6} md={3} lg={3}  className="work-section-info" key={data.title}
            style={{display:'flex', flexDirection:'column',padding:'10px'}}
            >
              <div className="info-boxes-img-container" style={{width:'120px'}}>
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </Grid>
          ))}
        </Grid>
        </Container>

        <div className="work-section-top" style={{color: 'white',margin:'20px'}}>
        <h3 style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '40px',
          marginTop: '14px',
      }}>Pricing</h3>
      <p>ZeroTier makes networking easy for everyone - anywhere.</p>
      </div>
      <Container>
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
        >
        {pricingData.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={4}  className="work-section-info" key={data.title}
          style={{display:'flex', flexDirection:'column',padding:'10px',border: '2px solid #e1e11a'}}
          >
            <div className="info-boxes-img-container"  style={{width:'120px'}}>
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button className="secondary-button">{data.btnText}</button>
          </Grid>
        ))}
        </Grid>      
        </Container>
      </div>
    </>
  );
};

export default Work;
