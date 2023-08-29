import React from 'react'
import {
    Grid,
    Box,
    CardContent,
    CardActions,
    Card
  } from '@mui/material';
import johnImage from '../Assets/computer.jpg'
  const styles={
    myPathwayCard: {
      background: 'linear-gradient(280.85deg, #4653F6 6.64%, #00ADBB 105.38%)',
      borderRadius: '20px',
      boxShadow: 'none',
      cursor: 'pointer',

  },
  pathwayCardContent: {
    backgroundImage: `url(${johnImage})`,
    padding: '0px !important',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat'
  },
  }

function BottomCard() {
  return (
    <>
     <Grid item xs={12}
            sx={{ mb: '18px',mt:'80px' }}>
            <Card style={styles.myPathwayCard} >
                <CardContent sx={styles.pathwayCardContent}>
                  <Box sx={{width:'70%'}}>
                  <h1 style={{
                        color:'white',
                        padding: '20px',
                        textTransform: 'capitalize'
                    }}>
                        ZeroTier Enterprise
                    </h1>
                    <h3 style={{
                        paddingLeft:'20px'
                    }}>
                        For high-volume VPN, IoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.
                    </h3>
                    <CardActions sx={{ p: '20px 0px 44px 50px' }}>
                    <button className="secondary-button">Contact Sales</button>
                    </CardActions>
                  </Box>
                </CardContent>
            </Card >
        </Grid>
        <Grid item xs={12}
            sx={{ mb: '18px', mt:'80px' }}>
            <Card style={styles.myPathwayCard} >
                <CardContent sx={{...styles.pathwayCardContent,backgroundPosition: 'left',}}>
                  <Box sx={{paddingLeft: '240px'}}>
                  <h1 style={{
                        color:'white',
                        padding: '20px',
                        textTransform: 'capitalize'
                    }}>
                        Service Providers
                    </h1>
                    <h3 style={{
                        paddingLeft:'20px'
                    }}>
For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.
                    </h3>
                    <CardActions sx={{ p: '20px 0px 44px 50px' }}>
                    <button className="secondary-button">Contact SP Sales</button>
                    </CardActions>
                  </Box>
                </CardContent>
            </Card >
        </Grid>
    </>
   
  )
}

export default BottomCard