import React from "react";
import "./Home.css";
import Homeslider from "./Homeslider/Homeslider";
import Homelinks from "./Homelinks/Homelinks";
const Home = () => {
  return (
    <div className="home">
      <Homeslider />
      <Homelinks />
    </div>
  );
};

export default Home;
