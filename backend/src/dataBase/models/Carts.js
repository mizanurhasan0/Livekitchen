const { Schema, model } = require("mongoose");

const cartSchema =new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      require:false,
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
    isActive: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  
  },
  { timestamps: true }
);

const Carts = model("Carts", cartSchema);

module.exports = Carts;
