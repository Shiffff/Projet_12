import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import Profil from "../Pages/Profil/Profil";
import Error from "../Pages/Error/Error";

const Router = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<Profil />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
