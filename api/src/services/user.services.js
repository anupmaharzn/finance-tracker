const UserRepo = require("../repository/user-repo");

const get = async () => {
  try {
    const users = await UserRepo.find();
    if (users) {
      return {
        message: "success",
        data: users,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "fail to get users",
        data: null,
        error: true,
        status: 404,
      };
    }
  } catch (error) {
    return {
      message: " Internal Server Error",
      error: true,
      status: 500,
    };
  }
};

const getbyId = async (id) => {
  try {
    const user = await UserRepo.findById(id);

    if (user) {
      return {
        message: "success",
        data: {
          id: user.id,
          created_at: user.created_at,
          updated_at: user.updated_at,
          username: user.username,
          email: user.email,
        },
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "user not found",
        data: null,
        error: true,
        status: 404,
      };
    }
  } catch (error) {
    return {
      message: " Internal Server Error",
      error: true,
      status: 500,
    };
  }
};

const edit = async (id, userData) => {
  try {
    const user = await UserRepo.findById(id);

    if (user) {
      const username = userData.username ? userData.username : user.username;
      const email = userData.email ? userData.email : user.email;

      const result = await UserRepo.edit(id, username, email);
      if (result) {
        return {
          message: "User Profile Updated",
          data: {
            id: result.id,
            created_at: result.created_at,
            updated_at: result.updated_at,
            username: result.username,
            email: result.email,
          },
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Fail,user not found",
        data: null,
        error: true,
        status: 404,
      };
    }
  } catch (error) {
    return {
      message: " Internal Server Error",
      error: true,
      status: 500,
    };
  }
};

module.exports = {
  get,
  getbyId,
  edit,
};
