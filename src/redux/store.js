import { legacy_createStore as createStore, applyMiddleware,compose } from "redux";
import {thunk} from "redux-thunk";
import counterReducer from "./counterReducer";
import logger from "./logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);


export default store;
