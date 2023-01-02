const db = require("../dataBase/index");

const TABLE = "carts";
const USERS = "users";

const Create = async (req) => {
  const { productId, quantity } = req.body;

  try {
    let user = await db.findOne({
      table: TABLE,
      reqBody: { body: { userId: req.user.id, isActive: true } },
    });
    if (user) {
      //cart exists for user
      let itemIndex = user.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = user.products[itemIndex];
        productItem.quantity = quantity;
        user.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        user.products.push({ productId, quantity });
      }
      cart = await db.save(user);
      return cart;
    } else {
      //no cart for user, create new cart
      const newCart = await db.Create({
        table: TABLE,
        reqBody: {
          userId: "63919b50601b520cac5b77ef",
        },
      });

      return newCart;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const remove = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };

    const newInstance = await db.update({
      table: TABLE,
      reqBody: {
        findBy: { _id: req.params.id },
        body: { isActive: false },
      },
    });
    if (!newInstance) return { status: 404, reason: "User not found." };
    return { status: 200, newInstance };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

const update = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };

    const newInstance = await db.update({
      table: TABLE,
      reqBody: { findBy: { _id: req.params.id }, body: req.body },
    });
    if (!newInstance) return { status: 404, reason: "User not found." };
    return { newInstance };
  } catch (err) {
    throw new Error("Something went wrong");
  }
};

const getOne = async (req) => {
  try {
    // if (!req.params.id) return { status: 400, reason: "Invalid request" };
    const newInstance = await db.findOne({
      table: TABLE,
      reqBody: {
        body: {
          userId: req.user.id,
          isActive: true,
        },
       
      },
      options: { populate: { path: "products.productId",select:"name description images brand price countInStock" } }
    });
    if (!newInstance) return { status: 404, reason: "No data found" };
    return  {newInstance} ;
  } catch (err) {
    console.log(err)
    throw new Error("Something went wrong");
  }
};

const getAll = async (req) => {
  try {
    const data = await db.find({ table: TABLE, reqBody: { body: req.query } });
    return { data }
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
