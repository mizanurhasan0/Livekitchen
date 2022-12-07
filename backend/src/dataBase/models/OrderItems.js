const { Schema, model } = require("mongoose");

const orderitemsSchema = Schema(
  {
    product: [{ type: Schema.Types.ObjectId, ref: "Products" }],
    qty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const OrdersItems = model("OrdersItems", orderitemsSchema);

module.exports = OrdersItems;
