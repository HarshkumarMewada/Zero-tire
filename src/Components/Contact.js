import React from "react";
import {
  Grid,
  Box,
  CardContent,
  Card
} from '@mui/material';
const Contact = () => {
  return (
<Grid item xs={12}
sx={{ mb: '18px' , mt:'80px'}}>
<Card sx={{backgroundColor:'grey'}}>
    <CardContent >
      <Box sx={{display:'flex'}}>
        <Box sx={{}}>
      <h3 style={{
            color:'white',
            padding: '20px',
            textTransform: 'capitalize'
        }}>
            Newsletter Signup
        </h3>
        <h4 style={{
            paddingLeft:'20px',
            color:'white',
        }}>
          Join over 300,000 community members worldwide and receive the latest news from Team ZeroTier.
        </h4>
        </Box>
      
        <div className="contact-form-container">
         <input type="text" placeholder="Email Address" />
         <button className="secondary-button" style={{marginLeft:'20px'}}>Subscribe</button>
       </div>
      </Box>
    </CardContent>
</Card >
</Grid>
  );
};

export default Contact;
