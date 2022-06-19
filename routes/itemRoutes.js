const express = require("express");
const {
  getItemController,
  postItemController,
  getItemByIdController,
} = require("../controllers/itemController");
const router = express.Router();
router.post("/items", postItemController);
router.get("/get-items", getItemController);
router.get("/get-item/:id", getItemByIdController);

module.exports = router;
