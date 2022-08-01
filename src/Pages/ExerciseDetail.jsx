import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import SimilarExercises from "../Components/SimilarExercises";
import Details from "../Components/Details";
import ExerciseVideos from "../Components/ExerciseVideos";

import {exerciseOptions, fetchData} from "../utils/FetchData"

const ExerciseDetail = () => {

const [exerciseDetail, setExerciseDetail] = useState({})
const {id} = useParams()

useEffect(() => {
  const fetchExercisesData =  async () => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
    const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    setExerciseDetail(exerciseDetailData)
  }
  fetchExercisesData()
},[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/> 
    </Box>
  )
}

export default ExerciseDetail