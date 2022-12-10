const { Schema, model } = require("mongoose");

const orderSchema =new Schema(
  {
  
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
    isActive:{
      type:Boolean,
      default:true
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
    totalprice: {
      type:Number,
      require:true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Orders = model("Orders", orderSchema);

module.exports = Orders;
