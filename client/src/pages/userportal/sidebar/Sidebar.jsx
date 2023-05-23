import React from "react";
import { Link } from "react-router-dom";
import dashboard from "../../../assets/img/dashboard.png";
import income from "../../../assets/img/salary.png";
import expenses from "../../../assets/img/expenses.png";

import * as RouteList from "../../../routes";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar ">
      <nav className="sidebar__nav">
        <div className="link-div">
          <Link className="sidebar__links" to={RouteList.USER_PORTAL_PAGE}>
            {" "}
            <img src={dashboard} alt="dashboard" /> Portal
          </Link>
        </div>
        <div className="link-div">
          <Link className="sidebar__links" to={RouteList.INCOME_PAGE}>
            {" "}
            <img src={income} alt="income" /> Income
          </Link>
        </div>
        <div className="link-div">
          <Link to={RouteList.EXPENSE_PAGE} className="sidebar__links">
            <img src={expenses} alt="expenses" /> Expense
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
