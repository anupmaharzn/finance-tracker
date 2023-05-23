import * as expenseActionType from "../constants/expenseActionType";
import axios from "axios";
export const allExpense = () => async (disptach) => {
  try {
    disptach({
      type: expenseActionType.EXPENSE_REQUEST,
    });

    const { data } = await axios.get(`/expenses`);

    disptach({
      type: expenseActionType.EXPENSE_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: expenseActionType.EXPENSE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const addExpense = (expenseData) => async (disptach) => {
  try {
    disptach({
      type: expenseActionType.ADD_EXPENSE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(`/expenses`, expenseData, config);
    disptach({
      type: expenseActionType.ADD_EXPENSE_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: expenseActionType.ADD_EXPENSE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const deleteExpense = (id) => async (disptach) => {
  try {
    disptach({
      type: expenseActionType.DELETE_EXPENSE_REQUEST,
    });

    const { data } = await axios.delete(`/expenses/${id}`);

    disptach({
      type: expenseActionType.DELETE_EXPENSE_SUCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: expenseActionType.DELETE_EXPENSE_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: expenseActionType.CLEAR_ERRORS,
  });
};
