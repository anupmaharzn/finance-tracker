const IncomeRepo = require("../repository/income-repo");

const store = async (data, user_id) => {
  try {
    const result = await IncomeRepo.store(data, user_id);
    if (result) {
      return {
        message: "Income created sucessfully",
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
    const results = await IncomeRepo.find(user_id);
    const totalIncome = await IncomeRepo.totalIncome(user_id);

    if (results) {
      return {
        message: "success,all incomes list",
        data: results,
        totalIncome: totalIncome["totalincome"],
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get incomes list",
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
    const results = await IncomeRepo.findById(id, user_id);
    if (results) {
      return {
        message: "success,particular income",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get particular income",
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
const edit = async (id, incomeData, user_id) => {
  try {
    const income = await IncomeRepo.findById(id, user_id);

    if (income) {
      const amount = incomeData.amount ? incomeData.amount : income.amount;
      const detail = incomeData.detail ? incomeData.detail : income.detail;

      const result = await IncomeRepo.edit(id, amount, detail);
      if (result) {
        return {
          message: "success,Income Updated",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not found,Fail to update Income with particular id",
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
    const income = await IncomeRepo.findById(id, user_id);

    if (income) {
      const result = await IncomeRepo.destroy(id);
      if (result) {
        return {
          message: "success,particular Income Deleted",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not Found,particular Income doesnot exist",
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
