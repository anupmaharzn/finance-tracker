import React, { useEffect } from "react";
import "./userportal.scss";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { allIncome } from "../../redux/actions/incomeAction";
import { allExpense } from "../../redux/actions/expenseAction";

const UserPortal = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(allIncome());
    dispatch(allExpense());
  }, [userInfo]);

  return (
    <section className="portal ">
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default UserPortal;
