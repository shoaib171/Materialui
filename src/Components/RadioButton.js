/** @format */

import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";
const RadioButton = () => {
  const [Gender, setGender] = useState("male");
  const HandleGender = (e) => {
    /*
       const data = Gender;
    data.push(e.target.value);
    console.log(data);
    setGender(data);
      */
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <div>
      <Typography variant="h4">Radio and FAB Buttons</Typography>
      <Fab color="primary" aria-label="add" sx={{ mr: 2 }}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" sx={{ mr: 2 }}>
        <EditIcon />
      </Fab>
      <Fab variant="extended" sx={{ mr: 2 }}>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab aria-label="like" sx={{ mr: 2 }} color="primary">
        <FavoriteIcon />
      </Fab>
      <br />
      <span>Male</span>
      <Radio
        value="male"
        checked={Gender === "male"}
        color="secondary"
        onChange={HandleGender}
      />
      <span>FeMale</span>
      <Radio
        value="Female"
        color="secondary"
        checked={Gender === "Female"}
        onChange={HandleGender}
      />
      <span>others</span>
      <Radio
        value="other"
        color="secondary"
        checked={Gender === "other"}
        onChange={HandleGender}
      />
    </div>
  );
};

export default RadioButton;
