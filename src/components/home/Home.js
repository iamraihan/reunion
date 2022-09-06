import React from "react";
import "./Home.css";
import SearchForRent from "./pages/SearchForRent/SearchForRent";

const Home = () => {
  return (
    <div className="container">
      <SearchForRent></SearchForRent>
    </div>
  );
};

export default Home;
