const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainControllers");
router.get("/", mainController.home);

const cottagesRouter = require("./cottagesRouter");
router.use("/product", cottagesRouter);

const usersRouter = require("./usersRouter");
router.use("/user", usersRouter);

router.get("/activities", mainController.activities);

module.exports = router;
