import React, {useState} from 'react'
import { Box } from "@mui/material"
import HeroBanner from "../Components/HeroBanner"
import Exercises from "../Components/Exercises"
import ExercisesSearch from "../Components/ExercisesSearch"


const Home = () => {
 
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState("all ")
  return (
    <Box>
      <HeroBanner/>
      <ExercisesSearch bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
      <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises}/>

    </Box>
  )
}

export default Home