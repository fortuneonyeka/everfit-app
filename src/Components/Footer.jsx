import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
import Logo from "../assets/images/Logo-3.png"

const Footer = () => {
  return (
    <Box mt="80px" >
      <Stack sx={{opacity:"0.09"}} gap="40px" alignItems="center" px="40px" pt="24px"  direction="row">
        <img src={Logo} alt="logo" width="100px" height="40px" />
        <Typography variant="h1" pb="20px" mt="20px" color={"green"} mb="20px" >Made by Ihedoro Fortunatus</Typography>
      </Stack>
    </Box>
  )
}

export default Footer