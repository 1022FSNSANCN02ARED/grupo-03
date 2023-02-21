const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/usersController");

router.get("/register", usersController.register);
router.post("/create", usersController.create);

router.get("/login", usersController.login);

module.exports = router;