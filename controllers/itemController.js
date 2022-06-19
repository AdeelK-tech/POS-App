const Item = require("../models/itemModel");
const getItemController = async (req, res) => {
  try {
    const items = await Item.find();
    console.log(items);
    res.send(items);
  } catch (e) {
    res.status(404).send(e);
  }
};

const postItemController = async (req, res) => {
  const item = new Item(req.body);
  console.log(req.body);
  try {
    await item.save(item);
    res.send(item);
  } catch (e) {
    res.send(e);
  }
};

const getItemByIdController = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const item = await Item.findById(id);
    res.status(200).send(item);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getItemController,
  postItemController,
  getItemByIdController,
};
