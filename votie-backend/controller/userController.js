const jwt = require("jsonwebtoken");
const User = require("./../model/User");

const signToken = (id, role) => {
  return jwt.sign({ id: id, role: role }, "voting-1$$-great@##$secretkey", {
    expiresIn: "90d",
  });
};

const createToken = (user, statusCode, req, res) => {
  const token = signToken(user._id, user.role);

  res.cookie("votie-token", token, {
    secure: false,
    httpOnly: true,
  });

  user.password = undefined;

  return res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.register = async (req, res) => {
  const { names, email, password } = req.body;

  const newUser = await User.create({
    names,
    email,
    password,
  });

  res.json({ message: `New user created` }).status(201);
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Please provide email and password"));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new Error("Incorrect email or password"));
  }

  req.user = user;
  createToken(user, 200, req, res);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.json({ users }).status(200);
};

exports.updateUser = async (req, res, next) => {
  await User.findByIdAndUpdate(req.params.id, { role: "ADMIN" });

  res.status(204).json({
    status: "success",
  });
};
