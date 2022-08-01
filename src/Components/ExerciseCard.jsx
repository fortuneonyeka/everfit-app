import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { textTransform } from "@mui/system";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            '&:hover': {
              backgroundColor: '#fff',
              color: '#ffa9a9',
          },
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            '&:hover': {
              backgroundColor: '#fff',
              color: '#fcc757',
          },
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" sx={{textTransform:"capitalize", fontSize:"22px"}}>{exercise.name}</Typography>
    </Link>
  );
};

export default ExerciseCard;
