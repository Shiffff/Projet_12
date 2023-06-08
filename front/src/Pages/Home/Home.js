import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const users = [12, 18];

  return (
    <div className="homePage">
      <h2>Choisissez le profil que vous souhaitez voir</h2>
      <div className="usersContainer">
        {users.map((user) => (
          <Link to={`/profile/${user}`} key={user}>
            <div className="user">{user}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
