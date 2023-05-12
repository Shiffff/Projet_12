import React from "react";
import "./ContentComponents.css";
import Stats from "./StatsPart/Stats";
import Barchart from "./Charts/Barchart/Barchart";
import LineChart from "./Charts/Linechart/Linechart";
import Radarchart from "./Charts/Radarchart/Radarchart";
import Piechart from "./Charts/Piechart/Piechart";

const ContentComponents = () => {
  return (
    <div className="ContentComponentsPage">
      <div className="ContentComponentsLeftPart">
        <div className="topPart">
          <Barchart />
        </div>
        <div className="bottomPart">
          <LineChart />
          <Radarchart />
          <Piechart />
        </div>
      </div>
      <div className="ContentComponentsRight">
        <Stats />
      </div>
    </div>
  );
};

export default ContentComponents;
