export const LOADING = "LOADING";
export const LOADING_SUCCESS = "LOADING_SUCCESS";

export const loading = () => {
  return {
    type: LOADING,
    payload: true
  };
};

export const loadingSuccess = () => {
  return {
    type: LOADING_SUCCESS,
    payload: false
  };
};
