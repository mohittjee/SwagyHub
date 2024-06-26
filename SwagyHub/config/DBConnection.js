const mongoose = require("mongoose");
require("dotenv").config();
const _DBUrl =process.env.DB;

mongoose.set('strictQuery', true); 
mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));

