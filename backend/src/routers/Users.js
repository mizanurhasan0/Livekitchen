const ResponseHandler = require("../Controller/ResHandler");
const {
  Create,
  getAll,
  remove,
  update,
  logIn,
  getOne,
  loadUser,
  logOut,
} = require("../entity/Users");
const auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/user", ResponseHandler(Create));
router.get("/user", ResponseHandler(getAll));
router.get("/user/:id", ResponseHandler(getOne));
router.get("/userprofile", ResponseHandler(loadUser));

router.get("/logout", auth, ResponseHandler(logOut));
router.post("/login", ResponseHandler(logIn));
router.patch("/user/remove/:id", auth, ResponseHandler(remove));
router.patch("/user/update/:id", ResponseHandler(update));

module.exports = router;
