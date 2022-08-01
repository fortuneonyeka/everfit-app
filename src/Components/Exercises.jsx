import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Button, Stack, Typography } from "@mui/material";

import { excerciseOptions, fetchData } from "../utils/FetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ bodyPart, exercises, setExercises }) => {
const [currentPage, setCurrentpage] = useState(1)
const exercisesPerPage = 9;

const indexOfLastExercise =  currentPage * exercisesPerPage
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentpage(value);

    window.scrollTo({top: 1800, behavior:"smooth"})
  }
  
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 10 && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
