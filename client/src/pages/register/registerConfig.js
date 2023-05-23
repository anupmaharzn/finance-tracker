export const registerConfig = {
  username: {
    required: "* username is required",
    minLength: {
      value: 3,
      message: "* min length 3 characters",
    },
  },

  email: {
    required: "* Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "* Invalid Email Format ",
    },
  },
  password: {
    required: "* Password required",
    minLength: {
      value: 5,
      message: "* min length 5 characters",
    },
  },
};
