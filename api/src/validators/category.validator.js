const { check } = require("express-validator");
const categoryValidatorRules = () => {
  return [
    check("name")
      .notEmpty()
      .withMessage("category name should not be empty")
      .bail(),
  ];
};

module.exports = {
  categoryValidatorRules,
};
