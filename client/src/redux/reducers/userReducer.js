import * as userActionType from "../constants/userActionType";

export const UserReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case userActionType.LOGIN_REQUEST:
    case userActionType.REGISTER_USER_REQUEST:
      return {
        loading: true,
      };
    case userActionType.LOGIN_SUCESS:
    case userActionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case userActionType.LOGIN_FAIL:
    case userActionType.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: action.payload,
      };

    case userActionType.LOGOUT_SUCCESS:
      sessionStorage.removeItem("userInfo");
      return {
        loading: false,
        userInfo: null,
      };

    case userActionType.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case userActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
