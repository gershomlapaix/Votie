const express = require("express");
const choiceController = require("./../controller/choicesController");
const userController = require("./../controller/userController");

const router = express.Router();

router
  .route("/")
  .post(choiceController.createChoice)
  .get(choiceController.getAllPolls);

router.route("/:id").get(choiceController.getChoice);

router.route("/recorded/:id").get(userController.protect,choiceController.recordedVoters);
router
  .route("/makevote/:id/choice/:choiceId")
  .patch(userController.protect, choiceController.vote);

module.exports = router;
