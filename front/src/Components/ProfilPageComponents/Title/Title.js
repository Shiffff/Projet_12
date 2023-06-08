import React, { useState, useEffect } from "react";
import "./title.css";
import Caller from "../../../Utils/caller";
import { useNavigate, useParams } from "react-router-dom";

const Title = () => {
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
