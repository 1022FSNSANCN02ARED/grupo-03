const { Router } = require("express");
const cottagesApiControllers = require("../../controllers/api/cottagesApiControllers");

const router = Router();

router.get("/", cottagesApiControllers.findCottages);
router.get("/detail/:id", cottagesApiControllers.findCottage);

module.exports = router;
