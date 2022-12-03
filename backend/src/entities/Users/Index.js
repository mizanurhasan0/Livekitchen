const db = require("../../dataBase/DBIndex");

const TABLE = "users";

const allowedQuery = ["name", "isActive", "isAdmin"];

const create = async (req) => {
  let { email, password, name } = req.body;
  try {
    if (!email || !password || !name)
      return { status: 400, reason: "bad request" };

    const newUser = await db.create({ table: TABLE, reqBody: req.body });
    const token = await newUser.generateToken();
    return { newUser, token };
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

//
const login = async (req) => {
  let { email, password } = req.body;

  try {
    if (!email || !password) return { status: 400, reason: "bad request" };

    const loginProfile = await db.findOne({
      table: TABLE,
      reqBody: { body: { email } },
    });
    if (!loginProfile)
      return { status: 401, reason: "Incorrect username or password" };

    let checkPass = await loginProfile.checkPassword(password);
    if (!checkPass)
      return { status: 401, reason: "Incorrect username or password" };
    else {
      const token = await loginProfile.generateToken();
      return { status: 200, loginProfile, token, cookie: set };
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const remove = async (req) => {
  let { id } = req.body.id;
  try {
    if (!id) return { status: 401, reason: "Bad request" };
    if (id === req.user.id)
      return { status: 400, reason: "Self deletion isn't possible" };
    const user = await db.update({
      table: TABLE,
      reqBody: { findBy: { _id: id }, body: { isActive: "false" } },
    });
    if (!user) return { status: 404, reason: "User not found." };
    return { user };
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const update = async (req) => {
  let { id } = req.body.id;

  try {
    let allowed = [];
    if (!id) return { status: 401, reason: "Bad request" };

    if (id === req.user.id) {
      allowed = [
        "name",
        "phone",
        "street",
        "apartment",
        "city",
        "zip",
        "country",
      ];
      if (req.user.isAdmin) {
        allowed = [...allowed, "isAdmin"];
      }
    } else return { status: 401, reason: "Bad request" };
    let isValid = Object.keys(req.body).every((key) => allowed.includes(key));
    if (!isValid) return { status: 400, reason: "Invalid request." };

    const user = await db.update({
      table: TABLE,
      reqBody: { findBy: { _id: id }, body: req.body },
    });
    if (!user) return { status: 404, reason: "User not found." };
    return { user };
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
