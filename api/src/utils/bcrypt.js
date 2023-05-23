const bcrypt = require("bcrypt");

const salts = 10;

const salt = bcrypt.genSaltSync(salts);

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = {
  encryptPassword,
  comparePassword,
};
