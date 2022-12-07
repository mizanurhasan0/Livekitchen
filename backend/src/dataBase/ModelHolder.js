const TABLE = require("./models");

const GetAll = async ({ table, reqBody, options }) => {
  try {
    const newInstance = await TABLE[table.toLowerCase()].find();
    return newInstance;
  } catch (error) {
    console.log(error);
  }
};

//
const Create = async ({ table, reqBody, options }) => {
  try {
    const newInstance = await TABLE[table.toLowerCase()](reqBody);
    await newInstance.save();
    return newInstance;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { GetAll, Create };
