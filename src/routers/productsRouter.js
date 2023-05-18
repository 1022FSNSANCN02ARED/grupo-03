const { Router } = require("express");
const router = Router();

const productsControllers = require("../controllers/productsControllers");
router.get("/create", productsControllers.showForm);

router.get("/list", productsControllers.productsList);

const cottagesRouter = require("./cottagesRouter");
router.use("/cottages", cottagesRouter);

const activitiesRouter = require("./activitiesRouter");
router.use("/activities", activitiesRouter);

router.get("/cart", productsControllers.productCart);
router.post("/cart", productsControllers.buyCart);
router.get("/cart/cartFin", productsControllers.cartFin);


router.get("/cart/edit/cottage/:id", productsControllers.showEditCottageInCart);
router.get(
    "/cart/edit/activity/:id",
    productsControllers.showEditActivityInCart
);

module.exports = router;
