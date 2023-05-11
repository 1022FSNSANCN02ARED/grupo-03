const db = require("../database/models");

module.exports = {
    productDetail: async (req, res) => {
        let cottage = [];
        try {
            cottage = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services"],
            });
        } catch (error) {
            console.log(error);
        }
        res.render("productDetail", {
            footerProductDetails: "footer-producDetail",
            cottage: cottage,
        });
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

        if (!oldData) {
            const productToEdit = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services"],
            });
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

            await cottageToUpdate.update(newDataCottage);

            await cottageToUpdate.services.map((service) => {
                return service.destroy();
            });
            await cottageToUpdate.images.map((image) => {
                return image.destroy();
            });

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
        res.render("delete-detail", { product: cottageToDelete });
    },
    delete: (req, res) => {
        res.redirect("/");
    },
};
