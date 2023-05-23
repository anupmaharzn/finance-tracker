const CategoryRepo = require("../repository/category-repo");

const store = async (data) => {
  try {
    const result = await CategoryRepo.store(data);
    if (result) {
      return {
        message: "Category created sucessfully",
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

const get = async () => {
  try {
    const results = await CategoryRepo.find();
    if (results) {
      return {
        message: "success,all categories list",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get categories list",
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
const getbyId = async (id) => {
  try {
    const results = await CategoryRepo.findById(id);
    if (results) {
      return {
        message: "success,particular category",
        data: results,
        error: false,
        status: 200,
      };
    } else {
      return {
        message: "Not Found,fail to get particular category",
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
const edit = async (id, categoryData) => {
  try {
    const category = await CategoryRepo.findById(id);

    if (category) {
      const name = categoryData.name ? categoryData.name : category.name;

      const result = await CategoryRepo.edit(id, name);
      if (result) {
        return {
          message: "success,Category Updated",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not found,Fail to update Category with particular id",
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
const destroy = async (id) => {
  try {
    const category = await CategoryRepo.findById(id);

    if (category) {
      const result = await CategoryRepo.destroy(id);
      if (result) {
        return {
          message: "success,particular Category Deleted",
          data: result,
          error: false,
          status: 200,
        };
      }
    } else {
      return {
        message: "Not Found,particular Category doesnot exist",
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
