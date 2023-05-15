const db = require("../database/models");
const fs = require("fs");
const path = require("path");

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
            weekday_hours:
                req.body.weekday_in && req.body.weekday_out
                    ? `desde: ${req.body.weekday_in}, hasta ${req.body.weekday_out}`
                    : null,
            second_weekday_hours:
                req.body.second_weekday_in && req.body.second_weekday_out
                    ? `desde: ${req.body.second_weekday_in}, hasta ${req.body.second_weekday_out}`
                    : null,
            weekend_hours:
                req.body.weekend_in && req.body.weekend_out
                    ? `desde: ${req.body.weekend_in}, hasta ${req.body.weekend_out}`
                    : null,
            second_weekend_hours:
                req.body.second_weekend_in && req.body.second_weekend_out
                    ? `desde: ${req.body.second_weekend_in}, hasta ${req.body.second_weekend_out}`
                    : null,
        };
        try {
            // Crea la actividad en la db, y a su vez la guarda en "newActivity", para poder saber su id
            // para agregarle las imágenes y servicios
            const newActivity = await db.Activities.create(activity);
            // Sube las "imágenes" en la db, usando el id de la actividad recien creada.
            await db.Images.bulkCreate(
                req.files.map((image) => {
                    return {
                        activity_id: newActivity.id,
                        image: `/images/activityImages/${image.filename}`,
                    };
                })
            );
            // Crea el horario.
            await db.ActivitiesHours.create({
                activity_id: newActivity.id,
                ...hours,
            });
        } catch (error) {
            console.log(error);
        }
        res.redirect("/");
    },
    showEditForm: async (req, res) => {
        try {
            const errors = req.session.errors;
            let oldData = req.session.oldData;
            req.session.formType = null;
            req.session.errors = null;
            req.session.oldData = null;

            if (!oldData) {
                const productToEdit = await db.Activities.findByPk(
                    req.params.id,
                    {
                        include: ["images", "hours"],
                    }
                );

                // Función para obtener la hora de fin
                function getHoursIn(string) {
                    if (string) {
                        // Genera un array desde el string
                        let arrayOfString = string.split(" ");
                        // Toma el horario de entrada, sacandole la coma.
                        let hourIn = arrayOfString[1].replace(",", "");
                        // Si el string resultante no es "xx:xx", le agrega un "0" al comienzo.
                        // Así, esto: "1:30", será esto: "01:30"
                        hourIn = hourIn.length < 5 ? "0" + hourIn : hourIn;
                        return hourIn;
                    }
                    return null;
                }

                // Función para obtener la hora de inicio
                function getHoursOut(string) {
                    if (string) {
                        // Genera un array desde el string
                        let arrayOfString = string.split(" ");
                        // Toma el horario de salida
                        let hourOut = arrayOfString[3];
                        // Si el string resultante no es "xx:xx", le agrega un "0" al comienzo.
                        // Así, esto: "1:30", será esto: "01:30"
                        hourOut = hourOut.length < 5 ? "0" + hourOut : hourOut;
                        return hourOut;
                    }
                    return null;
                }

                // Arma un nuevo objeto con los horarios.
                // Porque en la db se guardan como strings.
                const hours = productToEdit.hours;
                const hoursToEdit = {
                    weekday_in: getHoursIn(hours.weekday_hours),
                    weekday_out: getHoursOut(hours.weekday_hours),

                    second_weekday_in: getHoursIn(hours.second_weekday_hours),
                    second_weekday_out: getHoursOut(hours.second_weekday_hours),

                    weekend_in: getHoursIn(hours.weekend_hours),
                    weekend_out: getHoursOut(hours.weekend_hours),

                    second_weekend_in: getHoursIn(hours.second_weekend_hours),
                    second_weekend_out: getHoursOut(hours.second_weekend_hours),
                };

                oldData = {
                    ...productToEdit.dataValues,
                    ...hoursToEdit,
                };
            }
            res.render("create-product-form", {
                isCottage: false,
                isActivity: true,
                oldData,
                errors,
            });
        } catch (error) {
            console.log();
        }
    },

    update: async (req, res) => {
        let newDataActivity = {
            name: req.body.name,
            price: Number(req.body.price),
            max_place: Number(req.body.max_place),
            description: req.body.description,
        };
        try {
            const activityToUpdate = await db.Activities.findByPk(
                req.params.id,
                {
                    include: ["images", "hours"],
                }
            );
            await activityToUpdate.update(newDataActivity);

            await activityToUpdate.hours.destroy();

            if (activityToUpdate.images) {
                for (const image of activityToUpdate.images) {
                    // Crea la ruta hacia el archivo de imágen.
                    const imagePath = path.join(
                        __dirname,
                        `../../public/${image.image}`
                    );
                    // lo elimina
                    await fs.promises.unlink(imagePath);
                    await image.destroy();
                }
            }

            await db.Images.bulkCreate(
                req.files.map((image) => {
                    return {
                        activity_id: activityToUpdate.id,
                        image: `/images/activityImages/${image.filename}`,
                    };
                })
            );

            const hours = {
                weekday_hours:
                    req.body.weekday_in && req.body.weekday_out
                        ? `desde: ${req.body.weekday_in}, hasta ${req.body.weekday_out}`
                        : null,
                second_weekday_hours:
                    req.body.second_weekday_in && req.body.second_weekday_out
                        ? `desde: ${req.body.second_weekday_in}, hasta ${req.body.second_weekday_out}`
                        : null,
                weekend_hours:
                    req.body.weekend_in && req.body.weekend_out
                        ? `desde: ${req.body.weekend_in}, hasta ${req.body.weekend_out}`
                        : null,
                second_weekend_hours:
                    req.body.second_weekend_in && req.body.second_weekend_out
                        ? `desde: ${req.body.second_weekend_in}, hasta ${req.body.second_weekend_out}`
                        : null,
            };
            await db.ActivitiesHours.create({
                activity_id: activityToUpdate.id,
                ...hours,
            });

            await activityToUpdate.reload();
        } catch (error) {
            console.log(error);
        }
        res.redirect("/");
    },
    activities: async (req, res) => {
        let activities;
        try {
            activities = await db.Activities.findAll({
                include: ["images", "hours"],
            });
        } catch (error) {
            console.log(error);
        }
        res.render("activities", {
            activities: activities,
        });
    },
    showDeleteOption: async (req, res) => {
        const activityToDelete = await db.Activities.findByPk(req.params.id);
        res.render("delete-detail", {
            product: activityToDelete,
            productType: "activities",
        });
    },
    delete: async (req, res) => {
        try {
            const activityToDelete = await db.Activities.findByPk(
                req.params.id,
                {
                    include: ["images", "hours", "assessments"],
                }
            );
            if (activityToDelete.images) {
                for (const image of activityToDelete.images) {
                    // Crea la ruta hacia el archivo de imágen.
                    const imagePath = path.join(
                        __dirname,
                        `../../public/${image.image}`
                    );
                    // lo elimina
                    await fs.promises.unlink(imagePath);
                    await image.destroy();
                }
            }
            if (activityToDelete.assessments) {
                if (activityToDelete.assessments.length == 1) {
                    await activityToDelete.assessments.destroy();
                }
                if (activityToDelete.assessments.length > 1) {
                    for (const assessment of activityToDelete.assessments) {
                        await assessment.destroy();
                    }
                }
            }
            if (activityToDelete.hours) {
                await activityToDelete.hours.destroy();
            }

            await activityToDelete.destroy();

            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    },
    showTicketsShop: async (req, res) => {
        try {
            const activity = await db.Activities.findByPk(req.params.id, {
                include: ["images", "hours", "assessments"],
            });
            const errors = req.session.errors;
            const oldData = req.session.oldData;

            req.session.errors = null;
            req.session.oldData = null;

            res.render("activity-ticket-form", {
                activity,
                errors,
                oldData,
            });
        } catch (error) {
            console.log(error);
        }
    },
    addTicketsToCart: async (req, res) => {
        try {
            const activityToAddCart = {
                activity_id: req.params.id,
                user_id: req.session.userLog.id,
                day: req.body.day,
                quantity: req.body.quantity,
                total: Number(req.body.total),
                hour: req.body.hour,
                cart_id: null,
            };

            if (!req.session.activitiesInCart) {
                req.session.activitiesInCart = [activityToAddCart];
            } else {
                req.session.activitiesInCart.push(activityToAddCart);
            }
            console.log(req.session.activitiesInCart);

            res.redirect("/products/cart");
        } catch (error) {
            console.log(error);
        }
    },
};
