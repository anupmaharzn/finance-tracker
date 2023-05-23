const { validationResult } = require("express-validator");

const validateMiddleware = (req, res, next) => {
  const result = validationResult(req);
  //if validator throw error then
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  //else next
  next();
};

module.exports = {
  validateMiddleware,
};
