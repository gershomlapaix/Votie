const mongoose = require("mongoose");

const userSchema = new mongoose.model({
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
});

const User = mongoose.model("users", userSchema);
module.exports = User;
