import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import SimilarExercises from "../Components/SimilarExercises";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";

import {exerciseOptions, youtubeOptions ,fetchData} from "../utils/FetchData"

const ExerciseDetail = () => {

const [exerciseDetail, setExerciseDetail] = useState({})
const [exerciseVideos, setExerciseVideos] = useState([])
const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
const [exerciseEquipment, setExerciseEquiment] = useState([])
const {id} = useParams()

useEffect(() => {
  const fetchExercisesData =  async () => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
    const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    setExerciseDetail(exerciseDetailData)

    const exerciseVideoData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
    setExerciseVideos(exerciseVideoData.contents)

    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
    setTargetMuscleExercises(targetMuscleExerciseData)

    const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equiment/${exerciseDetailData.equipment}`, exerciseOptions)
    setExerciseEquiment(equipmentExerciseData)
  }
  fetchExercisesData()
},[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} exerciseEquipment={exerciseEquipment}/> 
    </Box>
  )
}

export default ExerciseDetail