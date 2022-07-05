const mongoose = require("mongoose");
const { registerSchema, registerSchemas } = require("swaggiffy");


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
    votes: [mongoose.Types.ObjectId],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Choice = mongoose.model("choices", choiceSchema);

registerSchema("choices", choiceSchema, { orm: "mongoose" });
module.exports = Choice;
