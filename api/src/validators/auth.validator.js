const { check } = require("express-validator");

const registerValidatorRules = () => {
  return [
    check("username")
      .notEmpty()
      .withMessage("user name should not be empty")
      .isLength({ min: 3 })
      .withMessage("user name must be minimum 3 character long")
      .bail(),
    check("email")
      .notEmpty()
      .withMessage("email name should not be empty")
      .isEmail()
      .withMessage("email is not valid")
      .bail(),
    check("password")
      .notEmpty()
      .withMessage("password field should not be empty")
      .isLength({ min: 5 })
      .withMessage("Must be minimum 5 character long")
      .bail(),
  ];
};

const loginvalidatorRules = () => {
  return [
    check("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("email is not valid")
      .bail(),
    check("password").notEmpty().withMessage("password is required").bail(),
  ];
};

module.exports = {
  loginvalidatorRules,
  registerValidatorRules,
};
