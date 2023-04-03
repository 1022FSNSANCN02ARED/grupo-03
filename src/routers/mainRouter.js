const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainControllers");
router.get("/", mainController.home);

const cottagesRouter = require("./cottagesRouter");
router.use("/product", cottagesRouter);

const usersRouter = require("./usersRouter");
router.use("/user", usersRouter);

//const generalCab = require("./generalCab");
router.get("/generalCab", mainController.generalCab);


module.exports = router;
