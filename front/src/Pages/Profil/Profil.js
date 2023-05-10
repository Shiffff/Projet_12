import React from "react";
import Menu from "../../Components/Menu/Menu";
import "./profil.css";
import ProfilPageContent from "../../Components/ProfilPageComponents/ProfilPageContent";

const Profil = () => {
  return (
    <div className="profilPage">
      <Menu />
      <ProfilPageContent />
    </div>
  );
};

export default Profil;
