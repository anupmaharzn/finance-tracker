const UserService = require("../services/user.services");

const get = async (req, res) => {
  const result = await UserService.get();
  return res.status(result.status).send(result);
};

const getbyId = async (req, res) => {
  const result = await UserService.getbyId(req.params.id);

  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const result = await UserService.edit(req.params.id, req.body);
  return res.status(result.status).send(result);
};

module.exports = {
  get,
  getbyId,
  edit,
};
