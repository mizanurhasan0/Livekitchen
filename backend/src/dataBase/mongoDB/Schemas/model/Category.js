const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    name: { type: String, required: true },
    image: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);

module.exports = Category;
