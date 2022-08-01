import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you healthy and strong. <strong>{name}</strong> is one
          of the best exercises to target your <strong>{target}</strong>. it
          will help you improve mood and gain enermous energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button sx={{background: "#fcc757", borderRadius:"50px", width:"100px", height:"100px"}}>
              <img src={item.icon} alt={bodyPart} style={{width:"50px",height:"50px"}}/>
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
