import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authentication } from "./routes/authentication/authentication";
import { Navigation } from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { UserProvider } from "./contexts/user.context";
import Shop from "./routes/shop/shop.component";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Navigation />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Authentication />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Router>
);

serviceWorker.unregister();
