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

// vote
exports.vote = async (req, res, next) => {
  const poll = await Choice.findById({
    _id: mongoose.Types.ObjectId(req.params.id),
  });

  const arr = poll.choices.filter(
    (choice, index) => String(choice._id) === String(req.params.choiceId)
    // console.log(String(mongoose.Types.ObjectId(req.params.choiceId)));
  );

  // if (!poll) return next(new Error("No such choice found."));

  console.log(arr);
};

exports.getChoice = async (req, res, next) => {
  const poll = await Choice.findById({
    _id: mongoose.Types.ObjectId(req.params.id),
  });

  if (!poll) return next(new Error("No such choice found."));

  res.json({ poll }).status(200);
};

exports.getAllPolls = async (req, res, next) => {
  const storedPolls = await Choice.find({});

  res.json({ storedPolls }).status(200);
};
// 62bd735cbe1cd387c9ecb476
// 62bd735cbe1cd387c9ecb476
