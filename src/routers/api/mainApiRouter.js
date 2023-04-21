const { Router } = require("express");
const mainApiControllers = require("../../controllers/api/mainApiControllers");

const router = Router();

router.get("/discounts", mainApiControllers.findDiscounts);

module.exports = router;
