const { Schema, model } = require("mongoose");

const categorySchema =new Schema(
  {
    name: { type: String, required: true },
    image: {
      type: String,
    },
    icon: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

module.exports = Category;
