import * as expenseActionType from "../constants/expenseActionType";

export const expenseReducer = (state = { expenses: [] }, action) => {
  switch (action.type) {
    case expenseActionType.EXPENSE_REQUEST:
      return {
        loading: true,
        expenses: [],
      };
    case expenseActionType.EXPENSE_SUCESS:
      return {
        loading: false,
        expenses: action.payload,
      };
    case expenseActionType.EXPENSE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case expenseActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const addExpenseReducer = (state = { expense: {} }, action) => {
  switch (action.type) {
    case expenseActionType.ADD_EXPENSE_REQUEST:
      return {
        loading: true,
        expense: {},
      };
    case expenseActionType.ADD_EXPENSE_SUCESS:
      return {
        loading: false,
        expense: action.payload,
      };
    case expenseActionType.ADD_EXPENSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case expenseActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const deleteExpenseReducer = (state = { expense: {} }, action) => {
  switch (action.type) {
    case expenseActionType.DELETE_EXPENSE_REQUEST:
      return {
        loading: true,
        expense: {},
      };
    case expenseActionType.DELETE_EXPENSE_SUCESS:
      return {
        loading: false,
        expense: action.payload,
      };
    case expenseActionType.DELETE_EXPENSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case expenseActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
