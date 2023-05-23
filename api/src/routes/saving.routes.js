const express = require("express");
const savingController = require("../controllers/saving.controllers");
const router = express.Router();
const { isAuth } = require("../middlewares/auth");
//using income wala
const { incomeValidatorRules } = require("../validators/income.validator");
const { validateMiddleware } = require("../middlewares/validator");
router.post(
  "/savings",
  isAuth,
  incomeValidatorRules(),
  validateMiddleware,
  savingController.store
);
//particular user ko all savings
router.get("/savings", isAuth, savingController.get);
//particular saving ko detail
router.get("/savings/:id", isAuth, savingController.getbyId);
router.put("/savings/:id", isAuth, savingController.edit);
router.delete("/savings/:id", isAuth, savingController.destroy);
module.exports = router;
