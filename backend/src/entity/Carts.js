const db = require("../dataBase/index");

const TABLE = "carts";

const Create=async(req)=>{
    const { productId, quantity } = req.body;
    let user = await db.findOne({table:TABLE, reqBody: { body: { _id: req.users.id } } });
    console.log(req.user)
    // try {
    //   let user = await db.findOne({table:TABLE, reqBody: { body: { _id: req.users.id } } });
  
    //   if (user) {
    //     //cart exists for user
    //     let itemIndex = cart.products.findIndex(p => p.productId == productId);
  
    //     if (itemIndex > -1) {
    //       //product exists in the cart, update the quantity
    //       let productItem = cart.products[itemIndex];
    //       productItem.quantity = quantity;
    //       cart.products[itemIndex] = productItem;
    //     } else {
    //       //product does not exists in cart, add new item
    //       cart.products.push({ productId, quantity, name, price });
    //     }
    //     cart = await cart.save();
    //     return res.status(201).send(cart);
    //   } else {
    //     //no cart for user, create new cart
    //     const newCart = await Cart.create({
    //       userId,
    //       products: [{ productId, quantity, name, price }]
    //     });
  
    //     return res.status(201).send(newCart);
    //   }
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).send("Something went wrong");
    // }
  }


// const Create = async (req) => {
//   const { name, image, icon } = req.body;
//   try {
//     if (!name) {
//       const newInstance = await db.Create({ table: TABLE, reqBody: req.body });
//       return { newInstance };
//     }
//   } catch (error) {
//     throw new Error("Something went wrong.");
//   }
// };

const remove = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };

    const newCat = await db.update({
      table: TABLE,
      reqBody: {
        findBy: { _id: req.params.id },
        body: { isActive: false },
      },
    });
    if (!user) return { status: 404, reason: "User not found." };
    return { status: 200, newCat };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
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
