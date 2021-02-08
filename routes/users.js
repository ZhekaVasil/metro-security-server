var express = require("express");
const UsersController = require("../controllers/UsersController");

var router = express.Router();

router.get("/", UsersController.usersList);

module.exports = router;
