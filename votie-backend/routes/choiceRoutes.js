const express = require("express");
const choiceController = require("./../controller/choicesController");

const router = express.Router();

router.route("/").post(choiceController.createChoice);

module.exports = router;
