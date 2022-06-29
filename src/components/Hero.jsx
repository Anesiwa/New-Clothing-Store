import React from "react";
import logo from "./images/logo_w_name.png";
import ReactPlayer from "react-player";
import banner from "./images/Phoenix Banner.mp4";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container">
      <div className="Hero">
        <p>Call Today: 563-323-2345</p>
        <img className="img-fluid" src={logo} alt="Embers of the Phoenix" />
        <ReactPlayer
          className="react-player"
          src={banner}
          width="400"
          controls
          autoplay
          alt="Phoenix events and specials"
        />
      </div>
    </div>
  );
}
