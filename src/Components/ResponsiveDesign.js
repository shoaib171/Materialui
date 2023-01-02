/** @format */

import React from "react";
import Grid from "@mui/material/Grid";
const ResponsiveDesign = () => {
  return (
    <>
      <Grid lg={12} item container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <h2 style={{ backgroundColor: "red", textAlign: "center" }}>
            Hello Grid-1
          </h2>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <h2 style={{ backgroundColor: "red", textAlign: "center" }}>
            Hello Grid-2
          </h2>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <h2 style={{ backgroundColor: "red", textAlign: "center" }}>
            Hello Grid-3
          </h2>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <h2 style={{ backgroundColor: "red", textAlign: "center" }}>
            Hello Grid-4
          </h2>
        </Grid>
      </Grid>
    </>
  );
};

export default ResponsiveDesign;
