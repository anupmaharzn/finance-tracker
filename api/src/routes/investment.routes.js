const express = require("express");
const investmentController = require("../controllers/investment.controllers");
const router = express.Router();
const { isAuth } = require("../middlewares/auth");
//using income wala
const { incomeValidatorRules } = require("../validators/income.validator");
const { validateMiddleware } = require("../middlewares/validator");
router.post(
  "/investments",
  isAuth,
  incomeValidatorRules(),
  validateMiddleware,
  investmentController.store
);
//particular user ko all investments
router.get("/investments", isAuth, investmentController.get);
//particular investment ko detail
router.get("/investments/:id", isAuth, investmentController.getbyId);
router.put("/investments/:id", isAuth, investmentController.edit);
router.delete("/investments/:id", isAuth, investmentController.destroy);
module.exports = router;
