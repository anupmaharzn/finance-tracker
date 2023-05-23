const SavingRepo = require("../repository/saving-repo");

const store = async (data, user_id) => {
  try {
    const result = await SavingRepo.store(data, user_id);
    if (result) {
      return {
        message: "Saving created sucessfully",
        data: result,
        error: false,
        status: 201,
      };
    } else {
      return {
        message: "Bad request,creation failed",
        data: null,
        error: true,
        status: 400,
      };
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

const get = async (user_id) => {
  try {
    const results = await SavingRepo.find(user_id);
    if (results) {
      return {
        message: "success,all savings list",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get savings list",
        data: null,
        error: true,
        status: 404,
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
const getbyId = async (id, user_id) => {
  try {
    const results = await SavingRepo.findById(id, user_id);
    if (results) {
      return {
        message: "success,particular saving",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get particular saving",
        data: null,
        error: true,
        status: 404,
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
const edit = async (id, savingData, user_id) => {
  try {
    const saving = await SavingRepo.findById(id, user_id);

    if (saving) {
      const amount = savingData.amount ? savingData.amount : saving.amount;
      const detail = savingData.detail ? savingData.detail : saving.detail;

      const result = await SavingRepo.edit(id, amount, detail);
      if (result) {
        return {
          message: "success,Saving Updated",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not found,Fail to update Saving with particular id",
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
const destroy = async (id, user_id) => {
  try {
    const saving = await SavingRepo.findById(id, user_id);

    if (saving) {
      const result = await SavingRepo.destroy(id);
      if (result) {
        return {
          message: "success,particular Saving Deleted",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not Found,particular Saving doesnot exist",
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
  store,
  get,
  getbyId,
  edit,
  destroy,
};
