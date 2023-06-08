import React, { useEffect, useState } from "react";
import "./radarchart.css";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useNavigate, useParams } from "react-router-dom";

const Radarchart = () => {
  const [userAverage, setUserAverage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await Caller.userPerformance(id);
      if (typeof data === "object") {
        const newData = Formater.radarchartFormat(data.data);
        setUserAverage(newData);
        setisLoading(true);
      } else {
        navigate("/error");
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="radarchart">
      {isLoading ? (
        <ResponsiveContainer width="100%" height="90%">
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
      ) : (
        <p>Chargement</p>
      )}
    </div>
  );
};

export default Radarchart;
