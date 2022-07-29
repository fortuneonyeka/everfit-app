import React from 'react';
import banner from "../assets/images/banner-1.png"
import { NavLink } from "react-router-dom";
import { Box,Stack, Typography,Button } from "@mui/material"
const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: "212px", xs: "70px"},ml: {sm: "50px"}}} position="relative" p="20px">
      <Typography color="#008000" fontWeight="600" fontSize="28">
        Fitness Heaven
      </Typography>
      <Typography fontWeight={700} sx={{fontSize: {lg: "44px", xs:"40px"}}}>
        No PAIN!!!, <br /> No GAIN!!!
      </Typography>
      <Typography  fontSize="25px" lineHeight="35px" mt={2} mb={3} >
        Checkout the most effective exercises
      </Typography>
      <Button sx={{padding:"10px"}}  variant="contained" color="success" href="#exercises">Explore Exercises</Button>
      <Typography fontWeight={600} fontSize={300} color="#008000" sx={{
        opacity:0.1,
        display: {lg: "block", xs: "none"}
      }}>
        Exercise
        </Typography>
      <img className="hero-banner-img"  src={banner} alt="banner" />
    </Box>
  )
}

export default HeroBanner