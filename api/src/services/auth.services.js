const UserRepo = require("../repository/user-repo");
const { encryptPassword, comparePassword } = require("../utils/bcrypt");
const { generateJwtToken } = require("../utils/jwt");

const register = async (data) => {
  const { username, email, password } = data;

  try {
    const userData = await UserRepo.findByEmail(email);

    if (userData) {
      return {
        message: "Email already Exist",
        error: true,
        status: 400,
      };
    } else {
      const hashPassword = await encryptPassword(password);
      let data;
      if (hashPassword) {
        data = {
          username,
          email,
          password: hashPassword,
        };
      }

      const user = await UserRepo.store(data);

      if (user) {
        const token = await generateJwtToken({
          id: user.id,
          email: user.email,
        });
        return {
          message: "Register Successful",
          data: {
            id: user.id,
            username: user.username,
            email: user.email,
            token,
          },
          error: false,
          status: 201,
        };
      }
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Internal Server Error",
      error: true,
      status: 500,
    };
  }
};

const login = async (data) => {
  const { email, password } = data;

  if (!(email && password)) {
    return {
      message: "all input is required",
      error: true,
      status: 400,
    };
  }

  try {
    const user = await UserRepo.findByEmail(email);

    if (!user) {
      return {
        message: "Invalid email or password",
        error: true,
        status: 401,
      };
    }
    const comparePass = await comparePassword(password, user.password);
    if (!comparePass) {
      return {
        message: "Invalid email or password",
        error: true,
        status: 401,
      };
    }

    if (user && comparePass) {
      const token = await generateJwtToken({
        id: user.id,
        email: user.email,
      });
      return {
        message: "Login sucessful",
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          token,
        },
        error: false,
        status: 200,
      };
    }
  } catch (error) {
    return {
      message: "Internal Server Error",
      error: true,
      status: 500,
    };
  }
};

module.exports = {
  register,
  login,
};
