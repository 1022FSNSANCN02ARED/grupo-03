const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainControllers");
router.get("/", mainController.home);

const productRouter = require("./productRouter");
router.use("/product", productRouter);

const usersRouter = require("./usersRouter");
router.use("/user", usersRouter);

module.exports = router;
