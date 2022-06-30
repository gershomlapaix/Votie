const mongoose = require("mongoose");
const Choice = require("./../model/Choices");

exports.createChoice = async (req, res) => {
  const { title, choices } = req.body;

  const newChoice = await Choice.create({
    title,
    choices,
  });

  res.json({ message: "choices created ", choice: newChoice }).status(201);
};

// exports.getChoice = async (req, res, next) => {
//   const poll = await Choice.findById({
//     _id: mongoose.Types.ObjectId(req.params.id),
//   });

//   if (!poll) return next(new Error("No such choice found."));

//   res.json({ poll }).status(200);
// };

exports.getAllPolls = async (req, res, next) => {
  const storedPolls = await Choice.find({});

  res.json({ storedPolls }).status(200);
};
