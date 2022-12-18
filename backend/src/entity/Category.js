const db = require("../dataBase/index");

const TABLE = "category";

const Create = async (req) => {
  const { name, image, icon } = req.body;
  try {
    if (!name) {
      const newInstance = await db.Create({ table: TABLE, reqBody: req.body });
      return { newInstance };
    }
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

const remove = async (req) => {
  try {
    if (!req.params.id) return { status: 400, reason: "Invalid request" };
    const data = await db.remove({ table: TABLE, reqBody: { findBy: { _id: req.params.id } } });
    if (!data) return { status: 404, reason: 'User not found.' };
    return { status: 200, data };
  } catch (err) {
    console.log(err);
    throw new Error('Something went wrong');
  }
};

const update = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };

    const newCate = await db.update({
      table: TABLE,
      reqBody: { findBy: { _id: req.params.id }, body: req.body },
    });
    if (!user) return { status: 404, reason: "User not found." };
    return { newCate };
  } catch (err) {
    throw new Error("Something went wrong");
  }
};

const getOne = async (req) => {
  try {
    if (!req.params.id) return { status: 400, reason: "Invalid request" };
    const newInstance = await db.findOne({
      table: TABLE,
      reqBody: { body: { _id: req.params.id } },
    });
    if (!newInstance) return { status: 404, reason: "No data found" };
    return { newInstance };
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

module.exports = {
  getAll,
  Create,
  remove,
  getOne,
  update,
};
