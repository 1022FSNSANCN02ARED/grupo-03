const { Router } = require("express");
const router = Router();

const normalUserRedirect = require("../middlewares/normalUserRedirect");
const productsControllers = require("../controllers/productsControllers");
const cottagesRouter = require("./cottagesRouter");
const activitiesRouter = require("./activitiesRouter");
const redirectUserLoggedOut = require("../middlewares/redirectUserLoggedOut");

router.get("/create", normalUserRedirect, productsControllers.showForm);
router.get("/list", productsControllers.productsList);

router.use("/cottages", cottagesRouter);

router.use("/activities", activitiesRouter);

router.get("/cart", productsControllers.productCart);
router.post("/cart", redirectUserLoggedOut, productsControllers.buyCart);
router.get("/cart/cartFin", productsControllers.cartFin);

router.get("/cart/edit/cottage/:id", productsControllers.showEditCottageInCart);
router.get(
    "/cart/edit/activity/:id",
    productsControllers.showEditActivityInCart
);

router.delete(
    "/cart/delete/cottage/:id",
    productsControllers.deleteCottageCart
);
router.delete(
    "/cart/delete/activity/:id",
    productsControllers.deleteActivityCart
);

module.exports = router;
