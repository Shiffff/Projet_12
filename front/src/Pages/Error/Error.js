import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorPage">
      <h2>Error 404 page non trouvée</h2>

      <Link to={`/`}>
        <p>retour a l'accueil</p>
      </Link>
    </div>
  );
};

export default Error;
