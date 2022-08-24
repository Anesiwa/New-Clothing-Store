import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Menus,
  SpecialEvents,
  Cheesecake,
  Martinis,
  Dinner,
  Wine,
  Cocktails,
  Login,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menus" element={<Menus />}>
          <Route path="dinner" element={<Dinner />} />
          <Route path="cheesecake" element={<Cheesecake />} />
          <Route path="martinis" element={<Martinis />} />
          <Route path="wine" element={<Wine />} />
          <Route path="Cocktails" element={<Cocktails />} />
        </Route>
        <Route path="/specialevents" element={<SpecialEvents />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

serviceWorker.unregister();
