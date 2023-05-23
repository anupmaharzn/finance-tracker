import * as incomeActionType from "../constants/incomeActionType";

export const IncomeReducer = (state = { incomes: [] }, action) => {
  switch (action.type) {
    case incomeActionType.INCOME_REQUEST:
      return {
        loading: true,
        incomes: [],
      };
    case incomeActionType.INCOME_SUCESS:
      return {
        loading: false,
        incomes: action.payload,
      };
    case incomeActionType.INCOME_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case incomeActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const addIncomeReducer = (state = { income: {} }, action) => {
  switch (action.type) {
    case incomeActionType.ADD_INCOME_REQUEST:
      return {
        loading: true,
        income: {},
      };
    case incomeActionType.ADD_INCOME_SUCESS:
      return {
        loading: false,
        income: action.payload,
      };
    case incomeActionType.ADD_INCOME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case incomeActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const deleteIncomeReducer = (state = { income: {} }, action) => {
  switch (action.type) {
    case incomeActionType.DELETE_INCOME_REQUEST:
      return {
        loading: true,
        income: {},
      };
    case incomeActionType.DELETE_INCOME_SUCESS:
      return {
        loading: false,
        income: action.payload,
      };
    case incomeActionType.DELETE_INCOME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case incomeActionType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
