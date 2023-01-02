/** @format */

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AppBar } from "@mui/material";
import { useState } from "react";
const TabsMenu = () => {
  const [TabValue, SetTabValue] = useState(0);
  const HandleTabs = (e, data) => {
    console.log(data);
    SetTabValue(data);
  };
  return (
    <div>
      <h1>Material_UI Tabs Menu</h1>
      <AppBar
        position="static"
        style={{ backgroundColor: "red", margin: "auto", width: "500px" }}
      >
        <Tabs value={TabValue} onChange={HandleTabs}>
          <Tab label="Item-1" />
          <Tab label="Item-2" />
          <Tab label="Item-3" />
        </Tabs>
      </AppBar>
      <TabPanel value={TabValue} index={0}>
        Item -1 Detail Page
      </TabPanel>
      <TabPanel value={TabValue} index={1}>
        Item -2 Detail Page
      </TabPanel>
      <TabPanel value={TabValue} index={2}>
        Item -3 Detail Page
      </TabPanel>
    </div>
  );
};
export default TabsMenu;
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
