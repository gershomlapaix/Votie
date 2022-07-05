const express = require("express");
const userController = require("./../controller/userController");

const router = express.Router();

router
  .route("/")
  .post(userController.register)

  // define the swgger document for this API

  /**
   * @swagger
   * /users:
   *  get:
   *    summary: Get all from the database
   *    description: Get all users in the application
   *    responses:
   *      200:
   *        description: A list of users
   *        content:
   *         application/json:
   *          schema:
   *            type: array
   *            properties:
   *              data:
   *                type: array
   *                items:
   *                  type: object
   *                 properties:
   *                  id:
   *                    type: integer
   *                    description: The user ID.
   *                    example: 0
   *                  name:
   *                    type: string
   *                    description: The user's name.
   *                    example: Leanne Graham
   *
   * */
  .get(userController.getAllUsers);

router.post("/login", userController.signin);
router.get("/in", userController.checkLogin);

router.patch("/update/:id", userController.updateUser);
module.exports = router;
