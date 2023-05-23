const { check } = require("express-validator");

const incomeValidatorRules = () => {
  return [
    check("amount")
      .notEmpty()
      .withMessage("amount should not be empty")
      .isNumeric()
      .withMessage("amount must be digit")
      .bail(),
  ];
};

module.exports = {
  incomeValidatorRules,
};
