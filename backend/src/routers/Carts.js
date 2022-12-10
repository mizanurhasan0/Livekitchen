const ResponseHandler = require("../Controller/ResHandler");
const {
  Create, getOne,
} = require("../entity/Carts");
const auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/carts",auth, ResponseHandler(Create));
router.get("/cart",auth, ResponseHandler(getOne));

module.exports = router;
