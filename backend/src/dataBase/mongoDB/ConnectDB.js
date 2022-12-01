const mongoose = require("mongoose");

const ConnectDB = (resolve, reject) => {
  mongoose.connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) reject(err.message);
      resolve("Connected to MongoDB.....");
    }
  );
};

module.exports = ConnectDB;
