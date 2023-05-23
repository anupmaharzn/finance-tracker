const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const incomeRoutes = require("./routes/income.routes");
const categoryRoutes = require("./routes/category.routes");
const expenseRoutes = require("./routes/expense.routes");
const savingRoutes = require("./routes/saving.routes");
const investmentRoutes = require("./routes/investment.routes");

const api = process.env.API_URL;
const corsOptions = {
  credentials: true,
  origin: ["*", "http://localhost:3000"],
};

module.exports = () => {
  const app = express();
  //cross origin resource sharing // * allow for all domain
  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(cookieParser());
  app.use(`${api}/`, authRoutes);
  app.use(`${api}/`, userRoutes);
  app.use(`${api}/`, incomeRoutes);
  app.use(`${api}/`, categoryRoutes);
  app.use(`${api}/`, expenseRoutes);
  app.use(`${api}/`, savingRoutes);
  app.use(`${api}/`, investmentRoutes);

  return app;
};
