import React from "react";
import * as routeList from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/Header";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import ProtectedRoute from "./route/ProtectedRoute";
import UserPortal from "./pages/userportal/UserPortal";
import Income from "./pages/userportal/income/Income";
import Expense from "./pages/userportal/expense/Expense";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routeList.HOME_PAGE} element={<Home />}></Route>
        <Route path={routeList.LOGIN_PAGE} element={<Login />}></Route>
        <Route path={routeList.REGISTER_PAGE} element={<Register />}></Route>
        <Route
          path={routeList.USER_PORTAL_PAGE}
          element={
            <ProtectedRoute>
              <UserPortal />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routeList.INCOME_PAGE}
          element={
            <ProtectedRoute>
              <Income />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routeList.EXPENSE_PAGE}
          element={
            <ProtectedRoute>
              <Expense />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
