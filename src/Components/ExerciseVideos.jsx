import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name}) => {
  

  if (!exerciseVideos.length) return "Loading..."
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" textTransform="capitalize">
        watch{" "}
        <span style={{ fontWeight: "bold", color: "#008000" }}>{name}</span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
          key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          ><img src={item.video.thumbnails[0].url} alt="" />
          <Box>
            <Typography variant="h5" color="#000" borderBottom="solid 2px #000">{item.video.title}</Typography>
            <Typography mt="10px" variant="h5" color="#000">{item.video.channelName}</Typography>
          </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
