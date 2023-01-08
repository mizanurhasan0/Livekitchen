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
  AdminlogIn,
} = require("../entity/Users");
const AdminCheck = require("../middleware/AdminCheck");
const auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/user", ResponseHandler(Create));
router.get("/userprofile",auth, ResponseHandler(loadUser));

router.get("/logout", auth, ResponseHandler(logOut));
router.post("/login", ResponseHandler(logIn));
// Amdin Login
router.get("/user",AdminCheck, ResponseHandler(getAll));
router.get("/user/:id",AdminCheck, ResponseHandler(getOne));
router.get("/adminprofile",AdminCheck, ResponseHandler(loadUser));
router.post("/adminlogin", ResponseHandler(AdminlogIn));

router.patch("/user/remove/:id", auth, ResponseHandler(remove));
router.patch("/user/update/:id",auth, ResponseHandler(update));

module.exports = router;
