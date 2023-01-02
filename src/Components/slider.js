/** @format */

import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
const Sliders = () => {
  const getValue = (e, val) => {
    console.log(val);
  };
  const mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 50,
      label: "start-end",
    },
    {
      value: 100,
      label: "Middle",
    },
    {
      value: 150,
      label: "Middle-end",
    },
    {
      value: 200,
      label: "End",
    },
  ];
  return (
    <div>
      <Typography variant="h4">Slider</Typography>
      <div
        style={{
          width: "300px",
          margin: "auto",
          height: "400px",
        }}
      >
        <Slider
          color="error"
          defaultValue={150}
          max={200}
          step={5}
          marks={mark}
          valueLabelDisplay="auto"
          onChange={getValue}
          orientation="vertical"
        />
      </div>
    </div>
  );
};

export default Sliders;
