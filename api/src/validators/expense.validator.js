const { check } = require("express-validator");

const expenseValidatorRules = () => {
  return [
    check("amount")
      .notEmpty()
      .withMessage("amount should not be empty")
      .isNumeric()
      .withMessage("amount must be digit")
      .bail(),
    check("category_id")
      .notEmpty()
      .withMessage("category field should not be empty")
      .bail(),
    // check("created_at")
    //   .notEmpty()
    //   .withMessage("created_at field should not be empty")
    //   .bail(),
  ];
};

module.exports = {
  expenseValidatorRules,
};
