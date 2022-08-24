import React from "react";
import "./Menus.css";
import martiniPic from "./menu-photos/salted-carmel-martini.jpeg";

export default function Martinis() {
  return (
    <div>
      <div className="container">
        Hello from martini
        <div>
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={martiniPic}
            alt="Salted Carmel Martini"
          />
        </div>
      </div>
    </div>
  );
}
