const { Router } = require("express");
const mainApiControllers = require("../../controllers/api/mainApiControllers");
const activityApiRouter = require("./activityApiRouter")

const router = Router();

router.use("/activities", activityApiRouter)

router.get("/discounts", mainApiControllers.findDiscounts);

module.exports = router;
