import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ exerciseEquipment, targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3" mb="10" textAlign="center">
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative", marginTop: "8px" }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" textAlign="center" mb="15px" mt="15px">
        Exercises that use the same equiments
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative", marginTop: "8px" }}
      >
        {exerciseEquipment.length ? (
          <HorizontalScrollbar data={exerciseEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
