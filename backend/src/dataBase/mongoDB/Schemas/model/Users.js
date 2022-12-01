const { Schema, model } = require("mongoose");
const validator = require("validator");
const bCrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("Email is invalid");
      },
    },
    passwordHash: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    street: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: true,
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
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: [{ type: String, enum: ["user", "admin"] }],
      default: ["user"],
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.methods.generateToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (!user.isModified("passwordHash")) return next();
    const salt = await bCrypt.genSalt(10);
    const hash = await bCrypt.hash(user.passwordHash, salt);
    user.passwordHash = hash;
    next();
  } catch (error) {
    throw new Error(error.message);
  }
});

const Users = model("Users", userSchema);
module.exports = Users;
