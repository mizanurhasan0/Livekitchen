const db = require("../dataBase/index");
const CheckImageSize = require("../utils/CheckImgSize");
const DeleteImages = require("../utils/DeleteImages");
const RmListImgs = require("../utils/RmListImgs");
const TABLE = "products";

const Create = async (req) => {
  try {
    const images = CheckImageSize(req);

    if (images.check) {
      // const category = await db.findOne({
      //   table: "category",
      //   reqBody: { body: { _id: req.body.category } },
      // });

      const newInstance = await db.Create({
        table: TABLE,
        reqBody: {
          ...req.body,
          images: images.images
        },
      });

      if (newInstance.status === 400) {
         DeleteImages(req);
      }
      return { newInstance };
    } else {
      return { error: "Image size not more than 1MB" };
    }
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};

const remove = async (req) => {
  try {
    if (!req.params.id) return { status: 400, reason: "Invalid request" };
    const data = await db.remove({
      table: TABLE,
      reqBody: { findBy: { _id: req.params.id } },
    });
    if (!data) return { status: 404, reason: "User not found." };
    // Remove list of Images function
   
    await RmListImgs(data.images, "products");
    return { status: 200, data };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

const update = async (req) => {
  try {
    if (!req.params.id) return { status: 401, reason: "Bad request" };
    const images = CheckImageSize(req);

    // Delete previous images Function
    DeleteImages(req, TABLE);
    const newInstance = await db.update({
      table: TABLE,
      reqBody: {
        findBy: { _id: req.params.id },
        body:
          req.files.length === 0
            ? req.body
            : { ...req.body, images: images.images },
      },
    });

    return { newInstance };
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
    throw new Error("Something went wrong" + err);
  }
};

const getAll = async (req) => {
  try {
    const data = await db.find({
      table: TABLE,
      reqBody: { body: req.query },
      options: { populate: { path: "category", select: "name" } },
      select: "-buy",
    });
    return { data };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
const adminGetAll = async (req) => {
  try {
    const data = await db.find({
      table: TABLE,
      reqBody: { body: req.query },
      options: { populate: { path: "category", select: "name" } },
    });
    return { data };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
const getProductByCategory = async (req) => {
  try {
    if (!req.params.id) return { status: 400, reason: "Invalid request" };
    const data = await db.find({
      table: TABLE,
      reqBody: { body: { category: req.params.id } },
    });
    if (!data) return { status: 404, reason: "No data found" };
    return { data };
  } catch (err) {
    throw new Error("Something went wrong" + err);
  }
};
module.exports = {
  getAll,
  Create,
  remove,
  getOne,
  update,
  getProductByCategory,
  adminGetAll,
};
