const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainControllers");
router.get("/", mainController.home);

const productsRouter = require("./productsRouter");
router.use("/products", productsRouter);

const usersRouter = require("./usersRouter");
router.use("/user", usersRouter);

//const generalCab = require("./generalCab");
router.get("/generalCab", mainController.generalCab);

router.get("/activities", mainController.activities);

// API
const mainApiRoutes = require("./api/mainApiRouter");
router.use("/api", mainApiRoutes);

module.exports = router;
