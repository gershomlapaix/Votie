const jwt = require("jsonwebtoken");
const User = require("./../model/User");

const signToken = (id, role) => {
  return jwt.sign({ id: id, role: role }, "voting-1$$-great@##$secretkey", {
    expiresIn: "90d",
  });
};

const sendToken = (user, statusCode, req, res) => {};

exports.register = async (req, res) => {
  const { names, email, password } = req.body;

  const newUser = await User.create({
    names,
    email,
    password,
  });

  res.json({ message: `New user created` }).status(201);
};

exports.getAllUsers = async (req, res) => {
  //   const users = await User.find({});
};
