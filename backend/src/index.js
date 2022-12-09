const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./routers");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(router);
app.use(cookieParser());

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    app.listen(process.env.PORT, () => {
      console.log("Server is running port");
    });
    console.log("Connected....");
  }
);
