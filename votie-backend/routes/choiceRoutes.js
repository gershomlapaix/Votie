const express = require("express");
const choiceController = require("./../controller/choicesController");

const router = express.Router();

router.route("/").post(choiceController.createChoice).get(choiceController.getAllPolls);
router.route("/:id").get(choiceController.getChoice)

module.exports = router;
