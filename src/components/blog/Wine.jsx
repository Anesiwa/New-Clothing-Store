import React from "react";
import "./Menus.css";
import winePic from "./menu-photos/wine_1.JPEG";
import winePic2 from "../images/wine_2.JPEG";
import winePic3 from "../images/wine_3.JPEG";
import winePic4 from "../images/wine_4.JPEG";
import Pic1 from "../images/wineDinnerCover.png";

export default function Wine() {
  return (
    <div className="container text-center">
      <h2 className="Wine">Wine</h2>
      <img className="img-fluid rounded" src={Pic1} alt="Wine Dinner Photo" />
      <a href="../winedinner" className="btn btn-danger btn-lrg mt-4 mb-4">
        Sign up for our famous Wine Dinners!
      </a>

      <div>
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src={winePic}
          alt="February 2015 Wine Dinner"
        />
      </div>
      <div>
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src={winePic2}
          alt="February 2015 Wine Dinner"
        />
      </div>
      <div>
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src={winePic3}
          alt="February 2015 Wine Dinner"
        />
      </div>
      <div>
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src={winePic4}
          alt="February 2015 Wine Dinner"
        />
      </div>
    </div>
  );
}
