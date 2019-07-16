import { LOADING, LOADING_SUCCESS } from "../actions/loader";

export default (state = [], action) => {
  console.log("action ", action);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return { ...state };
  }
};
