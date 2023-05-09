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


router.post(
    "/create",
    uploadFile.array("activity_images"),
    createActivityMiddleware,
    error_create_act,
    activitiesController.create
);

router.get("/",activitiesController.activities)
router.get("/edit/:id", activitiesController.showEditForm);

module.exports = router;
