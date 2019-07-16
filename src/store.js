import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";

const initialState = {};

export default () => {
  const store = createStore(rootReducer, initialState, applyMiddleware());
  return store;
};
