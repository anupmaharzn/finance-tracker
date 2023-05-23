const express = require("express");
const categoryController = require("../controllers/category.controllers");
const router = express.Router();
const { isAuth } = require("../middlewares/auth");
const { categoryValidatorRules } = require("../validators/category.validator");
const { validateMiddleware } = require("../middlewares/validator");

//for now just for postname
router.post(
  "/categories",
  isAuth,
  categoryValidatorRules(),
  validateMiddleware,
  categoryController.store
);
router.get("/categories", isAuth, categoryController.get);
router.get("/categories/:id", isAuth, categoryController.getbyId);
router.put("/categories/:id", isAuth, categoryController.edit);
router.delete("/categories/:id", isAuth, categoryController.destroy);
module.exports = router;
