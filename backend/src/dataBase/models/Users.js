const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
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
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: [{ type: String, enum: ["user", "admin"] }],
      default: ["user"],
    },
    isActive: {
      type: Boolean,
      default: true,
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
// userSchema.methods.toJSON = function () {
//   const user = this;
//   const userObject = user.toObject();
//   userObject.id = userObject._id;
//   delete userObject._id;
//   delete userObject.__v;
//   delete userObject.tokens;
//   delete userObject.createdAt;
//   delete userObject.updatedAt;
//   delete userObject.password;
//   return userObject;
// };
userSchema.methods.generateToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    throw new Error(error.message);
  }
});

userSchema.methods.checkPassword = async function (submittedPassword) {
  return await bcrypt.compare(submittedPassword, this.password);
};

const Users = model("Users", userSchema);
module.exports = Users;
