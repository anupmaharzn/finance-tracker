import axios from "axios";
import * as userActionType from "../constants/userActionType.js";
//login
export const loginUser = (userData) => async (disptach) => {
  console.log("userdata", userData);
  try {
    disptach({
      type: userActionType.LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const loginData = { email: userData.email, password: userData.password };

    const { data } = await axios.post(`/auth/login`, loginData, config);

    disptach({
      type: userActionType.LOGIN_SUCESS,
      payload: data,
    });

    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    disptach({
      type: userActionType.LOGIN_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: userActionType.REGISTER_USER_REQUEST });

    const config = { headers: { "Content-type": "application/json" } };

    const registerData = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    };

    const { data } = await axios.post(`/auth/register`, registerData, config);

    dispatch({
      type: userActionType.REGISTER_USER_SUCCESS,
      payload: data,
    });

    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userActionType.REGISTER_USER_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

//logout
export const logout = () => async (dispatch) => {
  console.log("heelo from logout");

  try {
    await axios.get(`/auth/logout`);
    dispatch({
      type: userActionType.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: userActionType.LOGOUT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: userActionType.CLEAR_ERRORS,
  });
};
