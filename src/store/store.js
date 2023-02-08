import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export default configureStore({
  reducer: rootReducer,
  composedEnhancers,
});
