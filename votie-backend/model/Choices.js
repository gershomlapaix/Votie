const mongoose = require("mongoose");

const choiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    choices: [
      {
        name: String,
        choicePicture: String,
        votes: [{ type: mongoose.Types.ObjectId, ref: "users" }],
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Choice = mongoose.model("choices", choiceSchema);

module.exports = Choice;
