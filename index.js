const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
require("./config/config");
const Item = require("./models/itemModel");

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.post("/items", async (req, res) => {
  const item = new Item(req.body);
  console.log(item);
  try {
    await item.save(item);
    res.send(item);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log("listening");
});
