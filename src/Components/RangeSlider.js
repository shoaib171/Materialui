/** @format */

import React from "react";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Typography } from "@mui/material";
const RangeSlider = () => {
  const [val, setVal] = useState([10, 20]);
  const RangeVal = (e, data) => {
    setVal(data);
  };
  return (
    <div>
      <Typography variant="h4">Range slider</Typography>
      <div
        style={{
          width: "300px",
          margin: "auto",
        }}
      >
        <Slider
          color="error"
          value={val}
          onChange={RangeVal}
          valueLabelDisplay="auto"
          step={5}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
