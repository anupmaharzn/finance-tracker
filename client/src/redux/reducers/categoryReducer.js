import * as categoryActionType from "../constants/categoryActionType";

export const categoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case categoryActionType.CATEGORY_REQUEST:
      return {
        loading: true,
        category: [],
      };
    case categoryActionType.CATEGORY_SUCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case categoryActionType.CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case categoryActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
