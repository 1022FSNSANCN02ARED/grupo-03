const { Router } = require("express");
const router = Router();

const normalUserRedirect = require("../middlewares/normalUserRedirect");
const productsControllers = require("../controllers/productsControllers");
const cottagesRouter = require("./cottagesRouter");
const activitiesRouter = require("./activitiesRouter");

router.get("/create", normalUserRedirect, productsControllers.showForm);
router.get("/list", productsControllers.productsList);

router.use("/cottages", cottagesRouter);

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
