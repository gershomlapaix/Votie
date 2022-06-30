const express = require("express");
const userController = require("./../controller/userController");

const router = express.Router();

router.route("/").post(userController.register).get(userController.getAllUsers);

router.post("/login", userController.signin);

module.exports = router;
