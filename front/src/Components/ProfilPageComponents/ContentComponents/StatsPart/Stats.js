import React, { useEffect, useState } from "react";
import "./stats.css";
import Caller from "../../../../Utils/caller";

const Stats = () => {
  const [userStats, setUserStats] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const stats = await Caller.userStats("18");
      setUserStats(stats);
      setisLoading(true);
    }

    fetchData();
  }, []);

  return (
    <div className="statsPage">
      {isLoading ? (
        <ul>
          <li>
            <img src="../calories.svg" alt="calories Logo"></img>
            <div className="statsContent">
              <p>{userStats.data.keyData.calorieCount}kCal</p>
              <p>Calories</p>
            </div>
          </li>
          <li>
            <img src="../proteines.svg" alt="proteines Logo"></img>
            <div className="statsContent">
              <p>{userStats.data.keyData.proteinCount}g</p>
              <p>Proteines</p>
            </div>
          </li>

          <li>
            <img src="../glucides.svg" alt="glucides"></img>
            <div className="statsContent">
              <p>{userStats.data.keyData.carbohydrateCount}g</p>
              <p>Glucides</p>
            </div>
          </li>

          <li>
            <img src="../lipides.svg" alt="lipidesLogo"></img>
            <div className="statsContent">
              <p>{userStats.data.keyData.lipidCount}g</p>
              <p>Lipides</p>
            </div>
          </li>
        </ul>
      ) : (
        <p>Chargement</p>
      )}
    </div>
  );
};

export default Stats;
