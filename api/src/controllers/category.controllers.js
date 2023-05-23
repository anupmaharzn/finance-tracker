const CategroyServices = require("../services/category.services");

const store = async (req, res) => {
  const data = req.body;
  const result = await CategroyServices.store(data);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const result = await CategroyServices.get();
  return res.status(result.status).send(result);
};

const getbyId = async (req, res) => {
  const id = req.params.id;
  const result = await CategroyServices.getbyId(id);

  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await CategroyServices.edit(id, data);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const id = req.params.id;
  const result = await CategroyServices.destroy(id);
  return res.status(result.status).send(result);
};

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
