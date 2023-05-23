const InvestmentRepo = require("../repository/investment-repo");

const store = async (data, user_id) => {
  try {
    const result = await InvestmentRepo.store(data, user_id);
    if (result) {
      return {
        message: "Investement created sucessfully",
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
    const results = await InvestmentRepo.find(user_id);
    if (results) {
      return {
        message: "success,all investments list",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get investments list",
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
    const results = await InvestmentRepo.findById(id, user_id);
    if (results) {
      return {
        message: "success,particular investment",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get particular investment",
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
const edit = async (id, investmentData, user_id) => {
  try {
    const investment = await InvestmentRepo.findById(id, user_id);

    if (investment) {
      const amount = investmentData.amount
        ? investmentData.amount
        : investment.amount;
      const detail = investmentData.detail
        ? investmentData.detail
        : investment.detail;

      const result = await InvestmentRepo.edit(id, amount, detail);
      if (result) {
        return {
          message: "success,Investement Updated",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not found,Fail to update Investement with particular id",
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
    const investment = await InvestmentRepo.findById(id, user_id);

    if (investment) {
      const result = await InvestmentRepo.destroy(id);
      if (result) {
        return {
          message: "success,particular Investement Deleted",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not Found,particular Investement doesnot exist",
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
