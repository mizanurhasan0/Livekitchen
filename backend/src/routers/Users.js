const ResponseHandler = require("../Controller/ResHandler");
const { Create, GetAll } = require("../entity");
const GetUserName = require("../utils/tableName/GetUserName");

const router = require("express").Router();

router.post("/", GetUserName, ResponseHandler(Create));
router.get("/", GetUserName, ResponseHandler(GetAll));

module.exports = router;
