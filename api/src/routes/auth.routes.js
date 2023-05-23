const express = require("express");
const authController = require("../controllers/auth.controllers");
const {
  registerValidatorRules,
  loginvalidatorRules,
} = require("../validators/auth.validator");
const { validateMiddleware } = require("../middlewares/validator");
const router = express.Router();

router.post(
  "/auth/register",
  registerValidatorRules(),
  validateMiddleware,
  authController.register
);
router.post(
  "/auth/login",
  loginvalidatorRules(),
  validateMiddleware,
  authController.login
);
router.get("/auth/logout", authController.logout);

module.exports = router;
