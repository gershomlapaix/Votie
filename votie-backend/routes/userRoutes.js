const express = require("express");
const userController = require("./../controller/userController");

const router = express.Router();

router
  .route("/")
  .post(userController.register)

  // define the swgger document for this API

  .get(userController.getAllUsers);

router.post("/login", userController.signin);
router.get("/in", userController.checkLogin);

router.patch("/update/:id", userController.updateUser);
module.exports = router;
