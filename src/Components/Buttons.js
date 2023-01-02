/** @format */

import React from "react";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { ButtonGroup, Typography } from "@mui/material";
const Buttons = () => {
  const [color, setColor] = useState("primary");
  const ButtonStyle = {
    margin: "10px 20px",
    size: "large",

    borderRadius: "20px",
  };
  const ButtonClicked = () => {
    color === "primary" ? setColor("secondary") : setColor("primary");
    /*{
          if (color === "primary") {
      setColor("secondary");
        } else {
      setColor("primary");
    }
      }*/
  };
  return (
    <div>
      <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>

      <Button
        variant="contained"
        size="large"
        color={color}
        onClick={ButtonClicked}
      >
        Click Me
      </Button>
      <br />
      <br />

      <Typography variant="h4">Button Group structure</Typography>
      <ButtonGroup
        variant="contained"
        orientation="horizontal"
        color="secondary"
      >
        <Button style={ButtonStyle} startIcon={<HomeIcon />}>
          One
        </Button>
        <Button style={ButtonStyle} startIcon={<DeleteIcon />}>
          Two
        </Button>
        <Button style={ButtonStyle}>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
