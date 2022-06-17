const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
require("./config/config");
const router = require("./routes/itemRoutes");

//middlewares

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(router);

app.listen(port, () => {
  console.log("listening");
});
