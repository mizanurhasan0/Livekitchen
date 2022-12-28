const Table = require("./models");

const GetAll = async ({ table, reqBody, options }) => {
  try {
    const newInstance = await Table[table.toLowerCase()].find();
    return newInstance;
  } catch (error) {
    console.log(error);
  }
};

//
const Create = async ({ table, reqBody, options }) => {
  try {
    const newInstance = await Table[table.toLowerCase()](reqBody);
    const res = await newInstance.save();
    if (options?.populate) {
      let populateOption = "";
      options.populate?.unset
        ? options.populate.unset
            .split(" ")
            .forEach((i) => (populateOption += " -" + i))
        : (populateOption = options.populate?.select);
      await res.populate({
        path: options.populate?.path,
        select: populateOption,
      });
    }
    return res;
  } catch (error) {
    return { status: 400, msg: "Something went wrong" };
  }
};

const find = async ({ table, reqBody, options }) => {
  try {
    let res;

    if (options?.populate) {
      let populateOption = "";
      options.populate?.unset
        ? options.populate.unset
            .split(" ")
            .forEach((i) => (populateOption += " -" + i))
        : (populateOption = options.populate?.select);
      res = await Table[table.toLowerCase()]
        .find(reqBody.body)
        .populate({ path: options.populate?.path, select: populateOption });
    } else res = await Table[table.toLowerCase()].find(reqBody.body);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

const findOne = async ({ table, reqBody, options }) => {
  try {
    let res;
    if (options?.populate) {
      let populateOption = "";
      options?.populate?.unset
        ? options.populate.unset
            .split(" ")
            .forEach((i) => (populateOption += " -" + i))
        : (populateOption = options?.populate?.select);
      console.log(options?.populate?.path);
      res = await Table[table.toLowerCase()]
        .findOne(reqBody.body)
        .populate({ path: options?.populate?.path, select: populateOption });
    } else res = await Table[table.toLowerCase()].findOne(reqBody.body);

    return res;
  } catch (err) {
    throw new Error(err);
  }
};

const update = async ({ table, reqBody, options }) => {
  try {
    const data = await Table[table.toLowerCase()].findOne(reqBody.findBy);
    if (!data) return data;
    Object.keys(reqBody.body).forEach(
      (property) => (data[property] = reqBody.body[property])
    );
    await data.save();
    if (options?.populate) {
      let populateOption = "";
      options.populate?.unset
        ? options.populate.unset
            .split(" ")
            .forEach((i) => (populateOption += " -" + i))
        : (populateOption = options.populate?.select);
      await data.populate({
        path: options.populate?.path,
        select: populateOption,
      });
    }
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async ({ table, reqBody }) => {
  try {
    const data = await Table[table.toLowerCase()].findOne(reqBody.findBy);
    if (!data) return data;

    await data.remove();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const save = async (data) => await data.save();

module.exports = { GetAll, remove, Create, save, update, findOne, find };
