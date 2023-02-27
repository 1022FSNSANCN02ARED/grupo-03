const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/usersController");
const error_register = require("../middlewares/error_register");
const registerMiddleware = require("../middlewares/registerMiddleware");

router.get("/register", usersController.showRegister);
router.post(
    "/register",
    [registerMiddleware, error_register],
    usersController.create
);

router.get("/login", usersController.showLogin);

router.get("/edit", usersController.showEdit);
router.put("/edit/:id", usersController.edit);

module.exports = router;
