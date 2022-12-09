const { Schema, model } = require("mongoose");

const cartSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: [
        {
          type: String,
          enum: ["active", "requested", "pending", "accepted", "delivered"],
        },
      ],
      default: ["active"],
    },
  },
  { timestamps: true }
);

const carts = model("Carts", cartSchema);

module.exports = carts;
