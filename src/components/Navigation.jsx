import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "./images/phoenix_bird_blk.png";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navigation">
        <span className="float left">
          <img
            className="img-fluid"
            src={logo}
            alt="Embers of the Phoenix logo"
            width="60"
          />
        </span>
        <ul className="navbar-nav navbar-expand-lg">
          <li className="nav-item">
            <NavLink className="nav-button" to="/">
              HOME
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-button" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-button" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-button" to="/blog">
              MENUS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-button" to="./SpecialEvents">
              SPECIAL EVENTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
