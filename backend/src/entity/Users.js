const db = require("../dataBase/index");

const TABLE = "users";

const Create = async (req) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      const newUser = await db.Create({ table: TABLE, reqBody: req.body });
      const token = await newUser.generateToken();
      return { newUser, token };
    }
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

const logIn = async (req) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) return { status: 400, reason: "bad requests" };

    const loginProfile = await db.findOne({
      table: TABLE,
      reqBody: { body: { email: req.body.email } },
    });
    if (!loginProfile)
      return { status: 401, reason: "Incorrect username or password" };
    const isValid = await loginProfile.checkPassword(req.body.password);
    if (!isValid)
      return { status: 401, reason: "Incorrect username or password" };
    else {
      const token = await loginProfile.generateToken();
      return { status: 200, loginProfile, token, cookie: "set" };
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

const remove = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };
    if (req.params.id === req.user.id)
      return { status: 400, reason: "Self deletion isn't possible" };
    const user = await db.update({
      table: TABLE,
      reqBody: {
        findBy: { _id: req.params.id },
        body: { isActive: false },
      },
    });
    if (!user) return { status: 404, reason: "User not found." };
    return { status: 200, user };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

const update = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };

    const user = await db.update({
      table: TABLE,
      reqBody: { findBy: { _id: req.params.id }, body: req.body },
    });
    if (!user) return { status: 404, reason: "User not found." };
    return { user };
  } catch (err) {
    throw new Error("Something went wrong");
  }
};

const getOne = async (req) => {
  try {
    if (!req.params.id) return { status: 400, reason: "Invalid request" };
    const user = await db.findOne({
      table: TABLE,
      reqBody: { body: { _id: req.params.id } },
    });
    if (!user) return { status: 404, reason: "No data found" };
    return { user };
  } catch (err) {
    throw new Error("Something went wrong");
  }
};

const getAll = async (req) => {
  try {
    const data = await db.find({ table: TABLE, reqBody: { body: req.query } });
    return { data };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
const logOut = async (req) => {
  try {
    const user = req.user;
    user.tokens = user.tokens.filter((token) => token.token !== req.token);
    db.save(user);
    return { status: 200, cookie: "unset" };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
const loadUser = async (req) => {
  try {
    const userProfile = await db.findOne({
      table: TABLE,
      reqBody: { body: { _id: req.user.id } },
    });
    if (!userProfile) return { status: 400, reason: "Invalid request" };
    return { userProfile };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
module.exports = {
  getAll,
  Create,
  remove,
  getOne,
  update,
  logIn,
  logOut,
  loadUser,
};
