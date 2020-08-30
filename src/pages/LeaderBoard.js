import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Results from "../components/LeaderBoard/Results/Results";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import maskot from "../styles/img/maskot.png";

const LeaderBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Navigation />

      <Results />
      <Footer />
    </div>
  );
};

export default LeaderBoard;
