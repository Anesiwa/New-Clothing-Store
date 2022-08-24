import React from "react";
import "./Menus.css";
import cocktailPic from "./menu-photos/peach-marg.jpeg";

export default function Cocktails() {
  return (
    <div className="container">
      <div className="Cocktails">Hello from Cocktails</div>
      <div>
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src={cocktailPic}
          alt="Salted Carmel Martini"
        />
      </div>
    </div>
  );
}
