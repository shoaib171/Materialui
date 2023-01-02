/** @format */

import { TextField } from "@mui/material";
import React from "react";

const Text = () => {
  const valueFiled = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <TextField
        variant="outlined"
        label="Enter Name"
        color="secondary"
        onChange={valueFiled}
      />
    </div>
  );
};

export default Text;
