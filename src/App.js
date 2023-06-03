import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
