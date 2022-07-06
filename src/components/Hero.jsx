import React from "react";
import logo from "./images/logo_w_name.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="Hero">
        <p className="float-right p-0">Call Today: 563-323-2345</p>
        <img
          className="img-fluid"
          src={logo}
          alt="Embers of the Phoenix logo"
        />
      </div>
    </div>
  );
}
