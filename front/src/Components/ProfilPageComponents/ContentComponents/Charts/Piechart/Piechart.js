import React, { useEffect, useState } from "react";
import "./piechart.css";
import Caller from "../../../../../Utils/caller";
import Formater from "../../../../../Utils/formatData";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const Piechart = () => {
  const [userScore, setUserScore] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await Caller.userStats("12");
      const newData = Formater.scoreChartFormat(data.data);

      setUserScore(newData);
      setisLoading(true);
    }

    fetchData();
  }, []);

  return (
    <div className="piechart">
      <p className="piechartTitle">Score</p>
      {isLoading ? (
        <p className="piechartDescription">
          <span className="score">
            12% <br />
          </span>
          de votre
          <br /> objectif
        </p>
      ) : (
        <p>Chargement...</p>
      )}
      {isLoading ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userScore}
              dataKey="score"
              startAngle={90}
              endAngle={userScore[0].pie}
              innerRadius={100}
              outerRadius={115}
              cornerRadius={30}
              fill="red"
            />
            <Pie
              data={userScore}
              dataKey="score"
              outerRadius={100}
              fill="white"
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Piechart;

/*            <Pie
              data={userScore}
              dataKey="score"
              outerRadius={105}
              fill="white"
            />*/
