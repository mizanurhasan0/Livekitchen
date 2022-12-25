const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routers");
const cookieParser = require("cookie-parser");
const bodyParser=require("body-parser")
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(express.json());
app.use(cookieParser());
// Public directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })
);
app.use(express.static("images"));
app.use("/images", express.static("images"));

app.use(router);

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    app.listen(process.env.PORT, () => {
      console.log("Server is running port" + process.env.PORT);
    });
  }
);
