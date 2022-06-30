const Choice = require("./../model/Choices");

exports.createChoice = async (req, res) => {
  const { title, choices } = req.body;

  const newChoice = await Choice.create({
    title,
    choices,
  });

  res.json({ message: "choices created ", choice: newChoice }).status(201);
};
