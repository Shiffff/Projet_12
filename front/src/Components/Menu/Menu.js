import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuComponents">
      <div className="menuTop">
        <ul>
          <Link to={`/`}>
            <img src="../logo.svg" alt="logo"></img>
          </Link>
          <Link to={`/`}>
            <li>Accueil</li>
          </Link>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </div>
      <div className="menuLeft">
        <img src="../icon1.svg" alt="icon"></img>
        <img src="../icon2.svg" alt="icon"></img>
        <img src="../icon3.svg" alt="icon"></img>
        <img src="../icon4.svg" alt="icon"></img>
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
};

export default Menu;
