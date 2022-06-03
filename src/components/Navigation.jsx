import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand">
          <NavLink className="navbar-brand" to="/">
            Embers of the Phoenix
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Menus
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="divider-7"></div>
    </div>
  );
}
