import React, { useEffect, useState } from "react";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./barChart.css";

const Barchart = () => {
  const [userActivity, setUserActivity] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const stats = await Caller.userActivity("12");
      const data = Formater.barChartFormat(stats.data.sessions);
      setUserActivity(data);
      setisLoading(true);
    }

    fetchData();
  }, []);

  return (
    <div className="barchart">
      <div className="title">
        <p>Activité quotidienne</p>
        <div>
          <img src="iconChartBlack.svg"></img>
          Poids (kg)
          <img src="iconChartRed.svg"></img>
          Calories brûlées (kCal)
        </div>
      </div>
      {isLoading ? (
        <ResponsiveContainer width="100%" height="60%">
          <BarChart data={userActivity}>
            <CartesianGrid
              strokeDasharray="2"
              horizontal={true}
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tickMargin={15}
              tickLine={false}

              //minTickGap={0}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              dataKey="calories"
              domain={[0, "dataMax + 210"]}
              axisLine={false}
              tickLine={false}
              tickCount={3}
              hide
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              dataKey="kilogram"
              domain={["dataMin - 6", "dataMax + 5"]}
              tickMargin={15}
              axisLine={false}
              tickLine={false}
              tickCount={3}
            />
            <Tooltip />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="black"
              radius={[20, 20, 0, 0]}
              maxBarSize={12}
              barSize={12}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="red"
              radius={[20, 20, 0, 0]}
              barSize={12}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Chargement</p>
      )}
    </div>
  );
};

export default Barchart;
