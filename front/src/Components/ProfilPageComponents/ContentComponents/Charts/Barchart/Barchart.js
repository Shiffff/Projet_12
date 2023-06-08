import React, { useEffect, useState } from "react";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./barChart.css";
import { useNavigate, useParams } from "react-router-dom";

const Barchart = () => {
  const [userActivity, setUserActivity] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const stats = await Caller.userActivity(id);
      if (typeof stats === "object") {
        const data = Formater.barChartFormat(stats.data.sessions);
        setUserActivity(data);
        setisLoading(true);
      } else {
        navigate("/error");
      }
    }

    fetchData();
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="intro">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
  };

  return (
    <div className="barchart">
      <div className="title">
        <p className="dayActivity">Activité quotidienne</p>
        <div className="legendChartBar">
          <img src="../iconChartBlack.svg" alt="icon"></img>
          <p>Poids (kg)</p>
          <img
            className="iconChartRed"
            src="../iconChartRed.svg"
            alt="icon"
          ></img>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      {isLoading ? (
        <ResponsiveContainer width="100%" height="60%">
          <BarChart data={userActivity}>
            <Tooltip content={<CustomTooltip />} />

            <CartesianGrid
              strokeDasharray="2"
              horizontal={true}
              vertical={false}
            />

            <XAxis dataKey="name" tickMargin={15} tickLine={false} />
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
