const ExpenseRepo = require("../repository/expense-repo");

const store = async (data, user_id) => {
  try {
    //if created_at field xa but empty xa
    let { created_at } = data;
    if (created_at === "") {
      const currentDate = new Date();
      created_at = currentDate.toISOString();
      data["created_at"] = created_at;
    }
    const result = await ExpenseRepo.store(data, user_id);
    if (result) {
      return {
        message: "Expense created sucessfully",
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

const get = async (user_id, category_id) => {
  try {
    let results;
    if (category_id) {
      results = await ExpenseRepo.findByCategory(user_id, category_id);
    } else {
      results = await ExpenseRepo.find(user_id);
    }
    const totalExpense = await ExpenseRepo.totalExpense(user_id);
    if (results) {
      return {
        message: "success,all expenses list",
        data: results,
        totalExpense: totalExpense["totalexpense"],
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get expense list",
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
    const results = await ExpenseRepo.findById(id, user_id);
    if (results) {
      return {
        message: "success,particular expense",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get particular expense",
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
const edit = async (id, expenseData, user_id) => {
  try {
    const expense = await ExpenseRepo.findById(id, user_id);

    if (expense) {
      const amount = expenseData.amount ? expenseData.amount : expense.amount;
      const detail = expenseData.detail ? expenseData.detail : expense.detail;
      const category_id = expenseData.category_id
        ? expenseData.category_id
        : expense.category_id;
      const created_at = expenseData.created_at
        ? expenseData.created_at
        : expense.created_at;

      const result = await ExpenseRepo.edit(
        id,
        amount,
        detail,
        category_id,
        created_at
      );

      if (result) {
        return {
          message: "success,Expense Updated",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not found,Fail to update Expense with particular id",
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
    const expense = await ExpenseRepo.findById(id, user_id);

    if (expense) {
      const result = await ExpenseRepo.destroy(id);
      if (result) {
        return {
          message: "success,particular Expense Deleted",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not Found,particular Expense doesnot exist",
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
