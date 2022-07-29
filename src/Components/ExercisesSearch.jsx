import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FetchData, exerciseOptions } from "../utils/FetchData";

const ExercisesSearch = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([])

  const url = "https://exercisedb.p.rapidapi.com/exercises";

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await FetchData(url, exerciseOptions);
      const searchedExercises = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises)
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Check Out These Awesome Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            width: { lg: "1000px", xs: "350px", borderRadius: "40px" },
            backgroundColor: "fff",
            input: {
              fontWeight: "700px",
              color: "#008000",
              fontSize: "20px",
              textAlign: "center",
            },
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          variant="contained"
          color="success"
          sx={{
            height: "60px",
            width: { lg: "175px", xs: "80px" },
            textTransform: "none",
            fontSize: { lg: "20px", xs: "15px" },
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default ExercisesSearch;
