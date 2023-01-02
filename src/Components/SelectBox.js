/** @format */

import { MenuItem, Typography } from "@mui/material";
import React from "react";
import Select from "@mui/material/Select";
import { useState } from "react";
const SelectBox = () => {
  const [select, setSelect] = useState("");
  const GetCourse = (e) => {
    setSelect(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <Typography variant="h4">Select Box </Typography>
      <Select value={select} displayEmpty onChange={GetCourse}>
        <MenuItem value="" disabled>
          Select Courses
        </MenuItem>
        <MenuItem value="1">HTML</MenuItem>
        <MenuItem value="2">Css</MenuItem>
        <MenuItem value="3">JavaScript</MenuItem>
        <MenuItem value="4">React.Js</MenuItem>
        <MenuItem value="5">Next.Js</MenuItem>
      </Select>
    </div>
  );
};

export default SelectBox;
