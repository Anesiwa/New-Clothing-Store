import React from "react";
import { Outlet, Link } from "react-router-dom";
import Scampi from "./menu-photos/scampi_pasta.JPEG";
import MenuShortcuts from "./MenuShortcuts";
import "./Menus.css";
import Cheesecake from "./menu-photos/cheesecake.JPEG";
import Martini from "./menu-photos/salted-carmel-martini.jpeg";
import Margarita from "./menu-photos/peach-marg.jpeg";

export default function Menu() {
  return (
    <div className="Menu">
      <h1 className="text-center mt-5">Phoenix Menus</h1>
      <div className="container">
        <MenuShortcuts />
        <Outlet />
        <div className="main-menu-list">
          <Link to="/menus/Dinner">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={Scampi}
                  alt="Shrimp Scampi Alfredo"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="menu-type">Dinner Menu</h1>
              </div>
            </div>
          </Link>
          <Link to="/menus/cheesecake">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={Cheesecake}
                  alt="Homemade Cheesecake"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="menu-type">Homemade Cheesecakes</h1>
              </div>
            </div>
          </Link>
          <Link to="/menus/martinis">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={Martini}
                  alt="Martinis"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="menu-type">Handcrafted Martinis</h1>
              </div>
            </div>
          </Link>
          <Link to="/menus/wine">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={Cheesecake}
                  alt="Wine"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="menu-type">Wine Menu</h1>
              </div>
            </div>
          </Link>
          <Link to="/menus/cocktails">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={Margarita}
                  alt="Shrimp Scampi Alfredo"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="menu-type">Cocktails & Drinks</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
