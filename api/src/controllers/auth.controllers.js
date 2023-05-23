const AuthService = require("../services/auth.services");

//cookie options
const options = {
  expires: new Date(
    Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
};

const register = async (req, res) => {
  const data = req.body;
  const result = await AuthService.register(data);
  return res
    .status(result?.status)
    .cookie("token", result?.data?.token, options)
    .send(result);
};
const login = async (req, res) => {
  const data = req.body;
  const result = await AuthService.login(data);
  return res
    .status(result?.status)
    .cookie("token", result?.data?.token, options)
    .send(result);
};
const logout = async (req, res) => {
  //for logout simply token null expiry date now
  return res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .send({
      message: "logged out",
      error: false,
      status: 200,
    });
};

module.exports = {
  register,
  login,
  logout,
};
