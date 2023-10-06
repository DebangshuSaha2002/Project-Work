import React from "react";
import LoginPage from "./LoginPage";
import About from "./About";
import Team from "./Team";
import { Routes, Route } from "react-router-dom";
const RoutesModules = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" exact element={<LoginPage />} />
      </Routes>{" "}
    </>
  );
};

export default RoutesModules;
