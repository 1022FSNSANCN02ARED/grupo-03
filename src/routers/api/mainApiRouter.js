const { Router } = require("express");
const mainApiControllers = require("../../controllers/api/mainApiControllers");
const activityApiRouter = require("./activityApiRouter");
const cottagesApiRouter = require("./cottagesApiRouter");
const usersApiRouter = require("./usersApiRouter");

const router = Router();

router.use("/activities", activityApiRouter);
router.use("/cottages", cottagesApiRouter);
router.use("/users", usersApiRouter);

router.get("/discounts", mainApiControllers.findDiscounts);

module.exports = router;
