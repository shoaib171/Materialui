/** @format */
import React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
const CheckBoxes = () => {
  const [AllValue, SetAllValue] = useState([]);
  function GetValues(e) {
    let data = AllValue;
    data.push(e.target.value);
    SetAllValue(data);
    console.log(data);
  }
  return (
    <div>
      <Checkbox
        color="secondary"
        value="HTML"
        onChange={(e) => {
          GetValues(e);
        }}
      />
      <Checkbox
        color="secondary"
        value="Css"
        onChange={(e) => {
          GetValues(e);
        }}
      />
      <Checkbox
        color="secondary"
        value="JavaScript"
        onChange={(e) => {
          GetValues(e);
        }}
      />
      <Checkbox
        color="error"
        size="large"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        value="React"
        onChange={(e) => {
          GetValues(e);
        }}
      />
    </div>
  );
};

export default CheckBoxes;
