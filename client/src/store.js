import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { UserReducer } from "./redux/reducers/userReducer";
import {
  IncomeReducer,
  addIncomeReducer,
  deleteIncomeReducer,
} from "./redux/reducers/incomeReducer";
import {
  addExpenseReducer,
  deleteExpenseReducer,
  expenseReducer,
} from "./redux/reducers/expenseReducer";
import { categoryReducer } from "./redux/reducers/categoryReducer";

const reducers = combineReducers({
  user: UserReducer,
  income: IncomeReducer,
  addIncome: addIncomeReducer,
  deleteIncome: deleteIncomeReducer,
  expense: expenseReducer,
  addExpense: addExpenseReducer,
  deleteExpense: deleteExpenseReducer,
  category: categoryReducer,
});

//preload states as per docs
//userInfo from session to user redux state
let initalState = {
  user: {
    userInfo: sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : {},
  },
};
const middleware = [thunk];
const store = createStore(
  reducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
