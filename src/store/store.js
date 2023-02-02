import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export default configureStore({
  reducer: rootReducer,
  composedEnhancers,
});
