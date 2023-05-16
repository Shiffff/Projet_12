import React, { useEffect, useState } from "react";
import "./radarchart.css";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Radarchart = () => {
  const [userAverage, setUserAverage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await Caller.userPerformance("12");
      const newData = Formater.radarchartFormat(data.data);
      setUserAverage(newData);
      setisLoading(true);
    }

    fetchData();
  }, []);

  return (
    <div className="radarchart">
      <ResponsiveContainer>
        <RadarChart data={userAverage}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: 15 }}
          />
          <Radar
            name="kind"
            dataKey="value"
            stroke="rgba(255, 1, 1, 0.9)"
            fill="rgba(255, 1, 1, 0.9)"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Radarchart;
