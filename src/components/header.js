import React from "react";
import "../styles/header.css";
import topImage from "../assets/image/log.png";
import searchIcon from "../assets/searchIcon.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="Header">
      <div className="imageDiv">
        <img className="imageProfile" src={topImage} alt="topImage" />
      </div>

      <div className="options">
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="homeImage" />
          <input type="text" className="input" placeholder="Search" />
        </div >
        <div className="navbar">
        <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
