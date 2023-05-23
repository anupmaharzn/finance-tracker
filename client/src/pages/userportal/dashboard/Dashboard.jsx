import React from "react";
import "./dashboard.scss";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, registerables } from "chart.js";
import { Link } from "react-router-dom";
import * as routelist from "../../../routes";
import { useSelector } from "react-redux";
Chart.register(CategoryScale, ...registerables);

const Dashboard = () => {
  const { incomes } = useSelector((state) => state.income);
  const { expenses } = useSelector((state) => state.expense);
  const lineState = {
    labels: ["zero", "Total Amount"],
    datasets: [
      {
        label: "TOTAL INCOME",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#742774",
        hoverBackgroundColor: ["rgb(197,72,49)"],
        data: [0, incomes?.totalIncome],
      },
      {
        label: "TOTAL EXPENSES",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#d9664a",
        hoverBackgroundColor: ["rgb(197,72,49)"],
        data: [0, expenses?.totalExpense],
      },
      {
        label: "TOTAL SAVING",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#3684ad",
        hoverBackgroundColor: ["rgb(197,72,49)"],
        data: [0, 0],
      },
      {
        label: "TOTAL INVESTMENT",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#36ad54",
        hoverBackgroundColor: ["rgb(197,72,49)"],
        data: [0, 0],
      },
    ],
  };

  const doughnutState = {
    labels: ["Income", "Expense", "Saving", "Investment"],
    datasets: [
      {
        backgroundColor: ["#742774", "#d9664a", "#3684ad", "#36ad54"],
        hoverBackgroundColor: ["#485000", "#35014F", "#ada136", "#0e2745"],
        data: [incomes?.totalIncome, expenses?.totalExpense, 3000, 3000],
      },
    ],
  };
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__cards">
          <Link className="dashboard__card one" to={routelist.INCOME_PAGE}>
            <span className="dashboard__card-title">Total Income</span>
            <span className="dashboard__card-amount">
              <p>Rs. {incomes?.totalIncome}</p>
            </span>
          </Link>

          <Link className="dashboard__card two" to={routelist.EXPENSE_PAGE}>
            <span className="dashboard__card-title">Total Expense</span>
            <span className="dashboard__card-amount">
              <p>Rs. {expenses?.totalExpense}</p>
            </span>
          </Link>

          <Link className="dashboard__card three">
            <span className="dashboard__card-title">Total Saving</span>
            <span className="dashboard__card-amount">
              <p>Rs.0</p>
            </span>
          </Link>
          <Link className="dashboard__card four">
            <span className="dashboard__card-title">Total Investment</span>
            <span className="dashboard__card-amount">
              <p>Rs.0</p>
            </span>
          </Link>
        </div>
      </div>

      <div className="chart">
        <div className="dashboard__charts">
          <div className="lineChart">
            <Line
              data={lineState}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Income vs Expense",
                  },
                  legend: {
                    display: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
