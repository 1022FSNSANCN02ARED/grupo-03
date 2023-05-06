const db = require("../database/models");

module.exports = {
    activityDetail: async (req, res) => {
        let activity = [];
        try {
            activity = await db.Activities.findByPk(req.params.id, {
                include: ["images", "hours"],
            });
        } catch (error) {
            console.log(error);
        }
        res.render("activity-detail", { activity });
    },
    create: async (req, res) => {
        const activity = {
            name: req.body.name,
            price: Number(req.body.price),
            max_place: Number(req.body.max_place),
            description: req.body.description,
        };
        const hours = {
            weekday_hours: req.body.weekday_in
                ? `desde: ${req.body.weekday_in}, hasta ${req.body.weekday_out}`
                : null,
            second_weekday_hours: req.body.second_weekday_in
                ? `desde: ${req.body.second_weekday_in}, hasta ${req.body.second_weekday_out}`
                : null,
            weekend_hours: req.body.weekend_in
                ? `desde: ${req.body.weekend_in}, hasta ${req.body.weekend_out}`
                : null,
            second_weekend_hours: req.body.second_weekend_in
                ? `desde: ${req.body.second_weekend_in}, hasta ${req.body.second_weekend_out}`
                : null,
        };
        try {
            // Crea la cabaña en la db, y a su vez la guarda en "newActivity", para poder saber su id
            // para agregarle las imágenes y servicios
            const newActivity = await db.Activities.create(activity);
            // Sube las "imágenes" en la db, usando el id de la cabaña recien creada.
            await db.Images.bulkCreate(
                req.files.map((image) => {
                    return {
                        activity_id: newActivity.id,
                        image: `/images/activityImages/${image.filename}`,
                    };
                })
            );
            await db.ActivitiesHours.create({
                activity_id: newActivity.id,
                ...hours,
            });
        } catch (error) {
            console.log(error);
        }
        // res.redirect("/");
    },
    showEditForm: async (req, res) => {
        const productToEdit = await db.Activities.findByPk(req.params.id);
        res.render("create-product-form", { activity: productToEdit });
    },
};
