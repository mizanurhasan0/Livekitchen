const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    richDescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: false }],
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    countInStock: {
      type: Number,
      default: 0,
    },
    isActive:{
      type:Boolean,
      default:true
    },
    createdDate: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

productSchema.methods.toJSON = function () {
  const product = this;
  const productObj = product.toObject();
  productObj.id = productObj._id;
  delete productObj._id;
  delete productObj.__v;

  return productObj;
};
const Products = model("products", productSchema);
module.exports = Products;
