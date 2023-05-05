const { Router } = require("express");
const activitiesApiControllers = require("../../controllers/api/activityApiControllers");

const router = Router();

router.get("/", activitiesApiControllers.findActivities);
router.get("/detail/:id", activitiesApiControllers.findActivity);


module.exports = router;
