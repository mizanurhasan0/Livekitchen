const { Schema, model } = require("mongoose");

const orderSchema = Schema(
  {
    orderitems: [{ type: Schema.Types.ObjectId, ref: "OrdersItems" }],
    shippingAddress1: {
      type: String,
      required: true,
    },
    shippingAddress2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "Bangladesh",
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: [
        {
          type: String,
          enum: ["requested", "pending", "accepted", "delivered"],
        },
      ],
      default: ["requested"],
    },
    totalprice: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Orders = model("Orders", orderSchema);

module.exports = Orders;
