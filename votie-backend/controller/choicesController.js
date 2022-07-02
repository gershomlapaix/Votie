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

  let foundPoll;
  for (let index = 0; index < poll.choices.length; index++) {
    if (String(poll.choices[index]._id) === String(req.params.choiceId)) {
      foundPoll = poll.choices[index];

      if (
        poll.choices[index].votes.includes(
          mongoose.Types.ObjectId(req.user._id)
        )
      ) {
        res.json({ message: "Already voted" }).status(400);
      } else {
        poll.choices[index].votes.push(req.user._id);
        res.json({ message: "Thanks for your vote.", foundPoll }).status(400);

        // save a the user vote
        poll.votes.push(req.user._id);
        await poll.save();
      }
      break;
    }
  }
};

exports.recordedVoters = async (req, res, next) => {
  const currentPoll = await Choice.findById({
    _id: mongoose.Types.ObjectId(req.params.id),
  });

  if (currentPoll.votes.includes(mongoose.Types.ObjectId(req.user._id))) {
    res.send(true).status(200);
  } else {
    res.send(false);
  }
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
