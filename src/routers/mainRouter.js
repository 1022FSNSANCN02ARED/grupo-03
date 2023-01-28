const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainControllers");

router.get("/", mainController.home);
router.get("/product/:id", mainController.product);
router.get("/productCart", mainController.productCart);
router.get("/crear", mainController.crear);

const usersRouter = require("./usersRouter");
router.use("/user", usersRouter);

module.exports = router;
