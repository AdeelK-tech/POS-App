const mongoose = require("mongoose");
const connect_DB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database ");
  } catch (e) {
    console.log(e);
  }
};
connect_DB();
