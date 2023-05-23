import * as incomeActionType from "../constants/incomeActionType";
import axios from "axios";
export const allIncome = () => async (disptach) => {
  try {
    disptach({
      type: incomeActionType.INCOME_REQUEST,
    });

    const { data } = await axios.get(`/incomes`);

    disptach({
      type: incomeActionType.INCOME_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: incomeActionType.INCOME_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const addIncome = (incomeData) => async (disptach) => {
  try {
    disptach({
      type: incomeActionType.ADD_INCOME_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(`/incomes`, incomeData, config);
    disptach({
      type: incomeActionType.ADD_INCOME_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: incomeActionType.ADD_INCOME_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const deleteIncome = (id) => async (disptach) => {
  try {
    disptach({
      type: incomeActionType.DELETE_INCOME_REQUEST,
    });

    const { data } = await axios.delete(`/incomes/${id}`);
    disptach({
      type: incomeActionType.DELETE_INCOME_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: incomeActionType.DELETE_INCOME_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: incomeActionType.CLEAR_ERRORS,
  });
};
