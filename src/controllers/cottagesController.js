const db = require("../database/models");
const fs = require("fs");
const path = require("path");

module.exports = {
    showBookingForm: async (req, res) => {
        try {
            const errors = req.session.errores;
            const oldData = req.session.oldData;
            req.session.errores = null;
            req.session.oldData = null;

            const cottage = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services"],
            });

            res.render("cottage-booking-form", {
                cottage: cottage,
                errors,
                oldData,
            });
        } catch (error) {
            console.log(error);
        }
    },
    showDetails: async (req, res) => {
        try {
            const cottage = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services"],
            });
            res.render("generalCab", {
                cottage: cottage,
            });
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        let cottage = {
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            beds: Number(req.body.beds),
            guest: Number(req.body.guest),
            bedrooms: Number(req.body.bedrooms),
            bathrooms: Number(req.body.bathrooms),
        };
        try {
            // Crea la cabaña en la db, y a su vez la guarda en "newCottage", para poder saber su id
            // para agregarle las imágenes y servicios
            const newCottage = await db.Cottages.create(cottage);
            // Sube las "imágenes" en la db, usando el id de la cabaña recien creada.
            await db.Images.bulkCreate(
                req.files.map((image) => {
                    return {
                        cottage_id: newCottage.id,
                        image: `/images/cottageImages/${image.filename}`,
                    };
                })
            );
            await db.Services.bulkCreate(
                req.body.services.map((service) => {
                    return {
                        cottage_id: newCottage.id,
                        service: service,
                    };
                })
            );
        } catch (error) {
            console.log(error);
        }

        res.redirect("/");
    },
    showEditForm: async (req, res) => {
        const errors = req.session.errors;
        let oldData = req.session.oldData;
        req.session.formType = null;
        req.session.errors = null;
        req.session.oldData = null;

        try {
            if (!oldData) {
                const productToEdit = await db.Cottages.findByPk(
                    req.params.id,
                    {
                        include: ["images", "services"],
                    }
                );
                const services = productToEdit.services.map(
                    (service) => service.service
                );
                // res.json(services);
                oldData = {
                    ...productToEdit.dataValues,
                    services,
                };
                // res.json(oldData);
            }
            res.render("create-product-form", {
                isCottage: true,
                isActivity: false,
                oldData,
                errors,
            });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        let newDataCottage = {
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            beds: Number(req.body.beds),
            guest: Number(req.body.guest),
            bedrooms: Number(req.body.bedrooms),
            bathrooms: Number(req.body.bathrooms),
        };
        try {
            const cottageToUpdate = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services"],
            });

            if (cottageToUpdate.images) {
                for (const image of cottageToUpdate.images) {
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

            await cottageToUpdate.update(newDataCottage);

            await cottageToUpdate.services.map((service) => {
                return service.destroy();
            });

            if (cottageToUpdate.images) {
                for (const image of cottageToUpdate.images) {
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
                        cottage_id: cottageToUpdate.id,
                        image: `/images/cottageImages/${image.filename}`,
                    };
                })
            );

            req.body.services =
                typeof req.body.services == "string"
                    ? [req.body.services]
                    : req.body.services;

            await db.Services.bulkCreate(
                req.body.services.map((service) => {
                    return {
                        cottage_id: cottageToUpdate.id,
                        service: service,
                    };
                })
            );

            await cottageToUpdate.reload();
        } catch (error) {
            console.log(error);
        }
        res.redirect("/");
    },
    showDeleteOption: async (req, res) => {
        const cottageToDelete = await db.Cottages.findByPk(req.params.id);
        res.render("delete-detail", {
            product: cottageToDelete,
            productType: "cottages",
        });
    },
    delete: async (req, res) => {
        try {
            const cottageToDelete = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services", "assessments"],
            });

            if (cottageToDelete.images) {
                for (const image of cottageToDelete.images) {
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

            if (cottageToDelete.assessments) {
                if (cottageToDelete.assessments.length == 1) {
                    await cottageToDelete.assessments.destroy();
                }
                if (cottageToDelete.assessments.length > 1) {
                    for (const assessment of cottageToDelete.assessments) {
                        await assessment.destroy();
                    }
                }
            }

            if (cottageToDelete.services) {
                if (cottageToDelete.services.length == 1) {
                    await cottageToDelete.services.destroy();
                }
                if (cottageToDelete.services.length > 1) {
                    for (const service of cottageToDelete.services) {
                        await service.destroy();
                    }
                }
            }

            await cottageToDelete.destroy();
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    },
    bookingCottage: async (req, res) => {
        const rent = {
            cottage_id: req.params.id,
            user_id: req.session.userLog.id,
            date_in: req.body.check_in,
            date_out: req.body.check_out,
            cart_id: null,
            total: Number(req.body.total),
        };

        if (!req.session.cottagesInCart) {
            req.session.cottagesInCart = [rent];
        } else {
            req.session.cottagesInCart.push(rent);
        }
        console.log(req.session.cottagesInCart);
        res.redirect("/products/cart");
    },
};
