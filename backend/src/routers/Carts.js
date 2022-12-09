const ResponseHandler = require("../Controller/ResHandler");
const {
  Create,
} = require("../entity/Carts");
const auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/carts",auth, ResponseHandler(Create));

module.exports = router;
