import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from "./routes/sign-in/sign-in.component";
import { Navigation } from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Shop = () => {
  return <h1> I am the shop page</h1>;
};

root.render(
  <Router>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  </Router>
);

serviceWorker.unregister();
