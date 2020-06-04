import axios from "axios";
//import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";
import setAuthtoken from "../utils/setAuthtoken";

// Get current users profile

export const getcurrentprofile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthtoken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
