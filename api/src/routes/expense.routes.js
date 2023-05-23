const express = require("express");
const expenseController = require("../controllers/expense.controllers");
const router = express.Router();
const { isAuth } = require("../middlewares/auth");
const { expenseValidatorRules } = require("../validators/expense.validator");
const { validateMiddleware } = require("../middlewares/validator");

router.post(
  "/expenses",
  isAuth,
  expenseValidatorRules(),
  validateMiddleware,
  expenseController.store
);
//particular user ko all expenses
router.get("/expenses", isAuth, expenseController.get);
//expense by id
router.get("/expenses/:id", isAuth, expenseController.getbyId);
router.put(
  "/expenses/:id",
  expenseValidatorRules(),
  validateMiddleware,
  isAuth,
  expenseController.edit
);
router.delete("/expenses/:id", isAuth, expenseController.destroy);
module.exports = router;
