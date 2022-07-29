import React, {useState} from 'react'
import { Box } from "@mui/material"
import HeroBanner from "../Components/HeroBanner"
import Exercises from "../Components/Exercises"
import ExercisesSearch from "../Components/ExercisesSearch"

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <ExercisesSearch/>
      <Exercises/>

    </Box>
  )
}

export default Home