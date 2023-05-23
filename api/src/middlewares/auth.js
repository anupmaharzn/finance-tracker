const { validateToken } = require("../utils/jwt");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  if (req.cookies === undefined) {
    res.status(401).send({
      message: "Not authorized,Please login",
      error: true,
      status: 401,
    });
  } else {
    const { token } = req.cookies;
    if (token) {
      try {
        const decoded = validateToken(token, process.env.JWT_SECRET);
        // console.log(decoded);
        req.user = decoded;
        next();
      } catch (error) {
        return res.send(error);
      }
    }
    if (!token) {
      res.send({
        message: "Not authorized,Please login",
        error: true,
        status: 401,
      });
    }
  }
};

module.exports = {
  isAuth,
};
