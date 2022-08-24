import React from "react";
import "./Menus.css";
import cheesecakePic from "./menu-photos/cheesecake.JPEG";

export default function Cheesecake() {
  return (
    <div className="container">
      <div className="Cheesecake">Hello from Cheescake</div>
      <div>
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src={cheesecakePic}
          alt="Salted Carmel Martini"
        />
      </div>
    </div>
  );
}
