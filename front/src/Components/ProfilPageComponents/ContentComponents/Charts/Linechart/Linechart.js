import React, { useEffect, useState } from "react";
import "./linechart.css";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  linearGradient,
} from "recharts";
import { useNavigate, useParams } from "react-router-dom";

const Linechart = () => {
  const [userAverage, setUserAverage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await Caller.userAverage(id);
      if (typeof data === "object") {
        const newData = Formater.lineChartFormat(data.data.sessions);
        setUserAverage(newData);
        setisLoading(true);
      } else {
        navigate("/error");
      }
    }

    fetchData();
  }, [id]);

  const colorLineGradient = (
    <linearGradient id="colorLine">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2} />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
    </linearGradient>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-lineChart">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="linechartContainer">
      <div className="darkRedBg"></div>
      <p className="linechartTitle">Durée moyenne des sessions</p>
      {isLoading ? (
        <ResponsiveContainer width="100%" height="60%">
          <LineChart data={userAverage}>
            <defs>{colorLineGradient}</defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={17}
              tick={{ fill: "#FFFFFF" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              dot={false}
              strokeWidth={4}
              stroke="url(#colorLine)"
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
