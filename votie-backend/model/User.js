const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  names: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

userSchema.plugin(require("mongoose-beautiful-unique-validation"));

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if it is not new

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  storePassword
) {
  return await bcrypt.compare(candidatePassword, storePassword);
};

const User = mongoose.model("users", userSchema);
module.exports = User;
