import * as categoryActionType from "../constants/categoryActionType";
import axios from "axios";
export const allCategory = () => async (disptach) => {
  try {
    disptach({
      type: categoryActionType.CATEGORY_REQUEST,
    });

    const { data } = await axios.get(`/categories`);

    disptach({
      type: categoryActionType.CATEGORY_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: categoryActionType.CATEGORY_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: categoryActionType.CLEAR_ERRORS,
  });
};
