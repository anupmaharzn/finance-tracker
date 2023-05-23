const express = require("express");
const userController = require("../controllers/user.controllers");
const router = express.Router();

router.get("/users", userController.get);
router.get("/users/:id", userController.getbyId);
router.put("/users/:id", userController.edit);
module.exports = router;
