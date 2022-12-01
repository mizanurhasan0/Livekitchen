const Category = require("./model/Category");
const OrdersItems = require("./model/OrderItems");
const Orders = require("./model/Orders");
const Products = require("./model/Products");
const Users = require("./model/Users");

module.exports = {
  Users: Users,
  Category: Category,
  OrderItems: OrdersItems,
  Products: Products,
  Orders: Orders,
};
