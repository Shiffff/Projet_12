import React, { useState, useEffect } from "react";
import "./title.css";
import Caller from "../../../Utils/caller";

const Title = () => {
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
    <div>
      {isLoading ? (
        <div>
          <h2>
            Bonjour{" "}
            <span className="firstNameTitle">
              {userStats.data.userInfos.firstName}
            </span>
          </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      ) : (
        <p>Chargement</p>
      )}
    </div>
  );
};

export default Title;
