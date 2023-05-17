const { Router } = require("express");
const multer = require("multer");
const router = Router();
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/activityImages"));
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${Date.now()}_img_activity${path.extname(file.originalname)}`
        );
    },
});
const uploadFile = multer({ storage });

const createActivityMiddleware = require("../middlewares/createActivityMiddleware");
const activitiesController = require("../controllers/activitiesControllers");
const error_create_act = require("../middlewares/error_product_form");
const error_edit_act = require("../middlewares/error_product_edit_form");
const activityTicketsMiddleware = require("../middlewares/activityTicketsMiddleware");
const error_activity_tickets = require("../middlewares/error_activity_tickets");
const normalUserRedirect = require("../middlewares/normalUserRedirect");

router.post(
    "/create",
    uploadFile.array("activity_images"),
    createActivityMiddleware,
    error_create_act,
    activitiesController.create
);

router.get("/", activitiesController.activities);

router.get("/edit/:id", normalUserRedirect, activitiesController.showEditForm);
router.put(
    "/edit/:id",
    uploadFile.array("activity_images"),
    createActivityMiddleware,
    error_edit_act,
    activitiesController.update
);

router.get("/tickets/:id", activitiesController.showTicketsShop);
router.post(
    "/tickets/:id",
    activityTicketsMiddleware,
    error_activity_tickets,
    activitiesController.addTicketsToCart
);

router.get(
    "/delete/:id",
    normalUserRedirect,
    activitiesController.showDeleteOption
);
router.delete("/delete/:id", normalUserRedirect, activitiesController.delete);

module.exports = router;
