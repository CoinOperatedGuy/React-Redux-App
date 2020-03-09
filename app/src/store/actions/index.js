import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });

  axios
    .get("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(res => {
      console.log("res", res.data.en);
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.en });
    })
    .catch(err => {
      console.log("err", err);
      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: `${err.response.message} with response code ${
          err.response.code
        }`
      });
    });
};
