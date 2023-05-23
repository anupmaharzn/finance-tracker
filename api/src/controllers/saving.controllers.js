const SavingService = require("../services/saving.services");

const store = async (req, res) => {
  const { id: user_id } = req.user;
  const data = req.body;
  const result = await SavingService.store(data, user_id);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const { id: user_id } = req.user;
  const result = await SavingService.get(user_id);
  return res.status(result.status).send(result);
};

const getbyId = async (req, res) => {
  const { id: user_id } = req.user;
  const id = req.params.id;
  const result = await SavingService.getbyId(id, user_id);

  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const { id: user_id } = req.user;
  const result = await SavingService.edit(id, data, user_id);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const id = req.params.id;
  const { id: user_id } = req.user;
  const result = await SavingService.destroy(id, user_id);
  return res.status(result.status).send(result);
};

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
