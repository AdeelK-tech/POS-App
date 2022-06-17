const express = require("express");
const {
  getItemController,
  postItemController,
} = require("../controllers/itemController");
const router = express.Router();
router.post("/items", postItemController);
router.get("/get-item", getItemController);

module.exports = router;
