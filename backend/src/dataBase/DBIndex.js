const mongoDB = require("./mongoDB/ConIndex");

const Database = {
  mongoDB,
};
module.exports = Database["mongodb"];
