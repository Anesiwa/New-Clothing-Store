import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Navigation } from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
);

serviceWorker.unregister();
