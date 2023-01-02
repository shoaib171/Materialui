/** @format */

import { Typography } from "@mui/material";
import "./App.css";
import Buttons from "./Components/Buttons";
import CheckBoxes from "./Components/CheckBoxes";
import RadioButton from "./Components/RadioButton";
import Sliders from "./Components/slider";
import RangeSlider from "./Components/RangeSlider";
import SelectBox from "./Components/SelectBox";
import Text from "./Components/Text";
import Contained from "./Components/Contained";
import ResponsiveDesign from "./Components/ResponsiveDesign";
import TabsMenu from "./Components/TabsMenu";
function App() {
  return (
    <div className="App">
      {/*
        <Buttons />
      <CheckBoxes />
      <RadioButton />
      <Sliders />
      <RangeSlider />
         <SelectBox />
          <ResponsiveDesign />
          <Text />
        */}
      <TabsMenu />
    </div>
  );
}

export default App;
