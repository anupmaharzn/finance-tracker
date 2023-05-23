import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = `http://localhost:5000/api/v1`;
  axios.defaults.withCredentials = true;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
