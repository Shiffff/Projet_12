import React, { useEffect, useState } from "react";
import "./linechart.css";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const Linechart = () => {
  const [userAverage, setUserAverage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await Caller.userAverage("12");
      const newData = Formater.lineChartFormat(data.data.sessions);
      setUserAverage(newData);
      setisLoading(true);
    }

    fetchData();
  }, []);
  console.log(userAverage);

  return (
    <div className="linechartContainer">
      <div className="darkRedBg"></div>
      <p className="linechartTitle">Durée moyenne des sessions</p>
      {isLoading ? (
        <ResponsiveContainer width="100%" height="60%">
          <LineChart data={userAverage}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={17}
              tick={{ fill: "#FFFFFF", opacity: "0.5" }}
            />

            <Tooltip />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Linechart;
