const ConnectDB = require("./ConnectDB");
const Table = require("./Schemas/SchemaIndex");

//
/**
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @param {Object} options it contain data to controll the action
 * if you want to populate then you have to provide a populate object inside options.
 * @returns {Object} created item.
 */
const create = async ({ table, reqBody, options }) => {
  try {
    const newInstance = await new Table[table.toLowerCase()](reqBody);
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
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @param {Object} options it contain data to controll the action
 * if you want to populate then you have to provide a populate object inside options.
 * @returns {Object} found item.
 */
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

/**
 *
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @param {Object} options it contain data to controll the action
 * if you want to populate then you have to provide a populate object inside options.
 * @returns {Object} found item.
 */
const findOne = async ({ table, reqBody, options }) => {
  try {
    let res;
    if (options?.populate) {
      let populateOption = "";
      options.populate?.unset
        ? options.populate.unset
            .split(" ")
            .forEach((i) => (populateOption += " -" + i))
        : (populateOption = options.populate?.select);
      // console.log(populateOption);
      res = await Table[table.toLowerCase()]
        .findOne(reqBody.body)
        .populate({ path: options.populate?.path, select: populateOption });
    } else res = await Table[table.toLowerCase()].findOne(reqBody.body);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @param {Object} options it contain data to controll the action
 * if you want to populate then you have to provide a populate object inside options.
 * if you want to find data before action you have to provide findBy object inside reqBody.
 * @returns {Array} found items.
 */
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

/**
 *
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @param {Object} options it contain data to controll the action
 * @returns {Object} removed item
 */
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

/**
 *
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @param {Object} options it contain data to controll the action
 * @returns {Object} removed items
 */
const removeAll = async ({ table, reqBody }) => {
  try {
    const data = await Table[table.toLowerCase()].deleteMany(reqBody.body);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {String} table it contains the name of table where the action will be performed.
 * @param  {Object} reqBody it contains the data to perform the action.
 * @returns {Object} found item.
 */
const updateMany = async ({ table, reqBody }) => {
  try {
    await Table[table.toLowerCase()].updateMany(reqBody.findBy, reqBody.update);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {Object} data it contains the data to save.
 * @returns {Object} The saved data.
 */
const save = async (data) => await data.save();
module.exports = {
  ConnectDB,
  find,
  findOne,
  create,
  update,
  remove,
  removeAll,
  save,
  updateMany,
};
