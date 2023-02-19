import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

serviceWorker.unregister();
