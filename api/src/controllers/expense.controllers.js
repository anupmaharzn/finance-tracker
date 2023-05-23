const ExpenseService = require("../services/expense.services");

const store = async (req, res) => {
  const { id: user_id } = req.user;
  const data = req.body;
  const result = await ExpenseService.store(data, user_id);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const { id: user_id } = req.user;
  const { category_id } = req.query;
  const result = await ExpenseService.get(user_id, category_id);
  return res.status(result.status).send(result);
};

const getbyId = async (req, res) => {
  const { id: user_id } = req.user;
  const id = req.params.id;
  const result = await ExpenseService.getbyId(id, user_id);

  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const { id: user_id } = req.user;
  const id = req.params.id;
  const data = req.body;
  const result = await ExpenseService.edit(id, data, user_id);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const { id: user_id } = req.user;
  const id = req.params.id;
  const result = await ExpenseService.destroy(id, user_id);
  return res.status(result.status).send(result);
};

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
