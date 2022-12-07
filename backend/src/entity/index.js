const DB = require("../dataBase");

const Create = async (req) => {
  
  try {
     await DB.Create({ table: req.table, reqBody: req.body });
     return {status:200,msg:"ADD success"}
  } catch (error) {
    console.log(error);
  }
};

const GetAll = async (req) => {
  try {
    return await DB.GetAll({ table: req.table});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Create,GetAll };
