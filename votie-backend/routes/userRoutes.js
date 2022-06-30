const express = require("express");
const userController = require("./../controller/userController");

const router = express.Router();

router
  .route("/")
  .post(userController.register)
  .get(userController.getAllUsers);

module.exports = router;
