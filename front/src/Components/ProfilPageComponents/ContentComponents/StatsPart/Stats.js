import React, { useEffect, useState } from "react";
import "./stats.css";
import Caller from "../../../../Utils/caller";
import { useNavigate, useParams } from "react-router-dom";

const Stats = () => {
  const [userStats, setUserStats] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const stats = await Caller.userStats(id);
      if (typeof stats === "object") {
        setUserStats(stats);
        setisLoading(true);
      } else {
        navigate("/error");
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="statsPage">
      {isLoading ? (
        <ul>
          <li>
            <img src="../calories.svg" alt="calories Logo"></img>
            <div className="statsContent">
              <p className="dataText">
                {userStats.data.keyData.calorieCount}kCal
              </p>
              <p className="unitText">Calories</p>
            </div>
          </li>
          <li>
            <img src="../proteines.svg" alt="proteines Logo"></img>
            <div className="statsContent">
              <p className="dataText">{userStats.data.keyData.proteinCount}g</p>
              <p className="unitText">Proteines</p>
            </div>
          </li>

          <li>
            <img src="../glucides.svg" alt="glucides"></img>
            <div className="statsContent">
              <p className="dataText">
                {userStats.data.keyData.carbohydrateCount}g
              </p>
              <p className="unitText">Glucides</p>
            </div>
          </li>

          <li>
            <img src="../lipides.svg" alt="lipidesLogo"></img>
            <div className="statsContent">
              <p className="dataText">{userStats.data.keyData.lipidCount}g</p>
              <p className="unitText">Lipides</p>
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
