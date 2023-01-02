/** @format */

import { Container } from "@mui/system";
import React from "react";

const Contained = () => {
  return (
    <div>
      <Container style={{ maxWidth: "lg", backgroundColor: "red" }}>
        <h1 style={{ textAlign: "center" }}>Material Ui Container</h1>
      </Container>
    </div>
  );
};

export default Contained;
