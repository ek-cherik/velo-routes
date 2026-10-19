import React from "react";
import About from "../components/About";
import RoutesList from "../components/RoutesList";
import Principles from "../components/Principles";
import Journal from "../components/Journal";

function HomePage() {
  return (
    <div className="home-page">
      <About />
      <RoutesList />
      <Principles />
      <Journal />
    </div>
  );
}

export default HomePage;
