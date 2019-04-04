import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";

// register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(result => history.push("/login"))
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    );
};

// login - get user token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(result => {
      // save to localStorage
      const { token } = result.data;
      //set token to localStorage
      localStorage.setItem("jwtToken", token);
      // set token to Auth header
      setAuthToken(token);
      // decode token to get user data
      const decodedUser = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decodedUser));
    })
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    );
};

// set logged in user
export const setCurrentUser = decodedUser => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedUser
  };
};

// log user out
export const logoutUser = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("jwtToken");
  // remove auth header for future request
  setAuthToken(false);
  // set current user to {} will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
