const { Router } = require("express");
const router = Router();

const productsControllers = require("../controllers/productsControllers");
router.get("/create", productsControllers.showForm);

router.get("/list", productsControllers.productsList);

router.get("/cart", productsControllers.productCart);

const cottagesRouter = require("./cottagesRouter");
router.use("/cottages", cottagesRouter);

const activitiesRouter = require("./activitiesRouter");
router.use("/activities", activitiesRouter);

module.exports = router;
