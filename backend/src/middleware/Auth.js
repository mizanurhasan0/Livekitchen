/* impots */
const jwt = require("jsonwebtoken");
const db = require("../dataBase");
const TABLE = "users";

const auth = async (req, res, next) => {
  try {
    const cookies = req.header("cookie") && req.header("cookie").split("; ");
    let authCookie =
      Array.isArray(cookies) &&
      cookies.filter((i) => i.startsWith(process.env.COOKIE_NAME.concat("=")));

    authCookie =
      authCookie.length > 0 &&
      authCookie[0].replace(process.env.COOKIE_NAME.concat("="), "");

    const token = req.header("Authorization")
      ? req.header("Authorization").replace("Bearer ", "")
      : authCookie;
    // console.log({ authCookie })
    if (!token) return res.status(401).send({ error: "Please authenticate" });
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await db.findOne({
      table: TABLE,
      reqBody: { body: { _id: decoded, "tokens.token": token } },
    });
    if (!user) throw new Error();
    req.token = token;
    req.user = user;
    // console.log(user)
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
