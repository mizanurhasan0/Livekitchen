const ResponseHandler = require("../Controller/ResHandler");
const {
  Create,
  getAll,
  remove,
  update,
  getOne,
} = require("../entity/Products");
const auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/products", ResponseHandler(Create));
router.get("/products", ResponseHandler(getAll));
router.get("/products/:id", ResponseHandler(getOne));
router.patch("/products/remove/:id", auth, ResponseHandler(remove));
router.patch("/products/update/:id", ResponseHandler(update));

module.exports = router;
