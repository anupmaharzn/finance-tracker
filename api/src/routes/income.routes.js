const express = require("express");
const incomeController = require("../controllers/income.controllers");
const router = express.Router();
const { isAuth } = require("../middlewares/auth");
const { incomeValidatorRules } = require("../validators/income.validator");
const { validateMiddleware } = require("../middlewares/validator");
router.post(
  "/incomes",
  isAuth,
  incomeValidatorRules(),
  validateMiddleware,
  incomeController.store
);
//particular user ko all incomes
router.get("/incomes", isAuth, incomeController.get);
//particular income ko detail
router.get("/incomes/:id", isAuth, incomeController.getbyId);
router.put("/incomes/:id", isAuth, incomeController.edit);
router.delete("/incomes/:id", isAuth, incomeController.destroy);
module.exports = router;
