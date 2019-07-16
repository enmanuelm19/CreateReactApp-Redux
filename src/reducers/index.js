import { combineReducers } from "redux";
import loadingReducer from "./loading";

export default combineReducers({
  loading: loadingReducer
});
