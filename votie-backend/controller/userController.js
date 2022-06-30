const User = require("./../model/User");

exports.register = async (req, res) => {
  const { names, email, password } = req.body;

  const newUser = await User.create({
    names,
    email,
    password,
  });

  res.json({message:`New user created`}).status(201)
};
