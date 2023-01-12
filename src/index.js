import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authentication } from "./routes/authentication/authentication";
import { Navigation } from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { UserProvider } from "./context/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Shop = () => {
  return <h1> I am the shop page</h1>;
};

root.render(
  <Router>
    <UserProvider>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </UserProvider>
  </Router>
);

serviceWorker.unregister();
