const ResponseHandler = require("../Controller/ResHandler");
const {
  Create, getOne, remove
} = require("../entity/Carts");
const auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/carts", auth, ResponseHandler(Create));
router.get("/carts", auth, ResponseHandler(getOne));
router.patch("/carts/:id", auth, ResponseHandler(remove));


module.exports = router;
