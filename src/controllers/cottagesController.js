const serv = require("../data/serv");
const db = require("../database/models");

module.exports = {
    showBookingForm: async (req, res) => {
        let cottage = [];
        try {
            cottage = await db.Cottages.findByPk(req.params.id, {
                include: ["images", "services"],
            });
        } catch (error) {
            console.log(error);
            serv.findById("productsDataBase.json", req.params.id);
        }
        res.render("productDetail", {
            footerProductDetails: "footer-producDetail",
            cottage: cottage,
        });
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
    productCart: (req, res) => {
        res.render("productCart");
    },
    showCreateForm: (req, res) => {
        res.render("create-product-form");
    },
    create: async (req, res) => {
        let cottage = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            beds: req.body.beds,
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
            serv.uploadData("productsDataBase.json", cottage);
        }

        res.redirect("/");
    },
    showEditForm: (req, res) => {
        // el controlador funciona, solo que falta la vista
        const productToEdit = serv.findById(
            "productsDataBase.json",
            req.params.id
        );
        res.render("create-product-form", { cottage: productToEdit });
    },
    update: async (req, res) => {
        let cottage = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            beds: req.body.beds,
        };
        try {
            const cottageToUpdate = await db.Cottages.getOne({
                where: { id: req.params.id },
                include: ["images", "services"],
            });
            await cottageToUpdate.update(cottage);
            await cottageToUpdate.setImages(null);
            await cottageToUpdate.setServices(null);

            await db.Images.bulkCreate(
                req.files.map((image) => {
                    return {
                        cottage_id: cottageToUpdate.id,
                        image: `/images/cottageImages/${image.filename}`,
                    };
                })
            );
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
            serv.editData("productDataBase.json", req.params.id, cottageToEdit);
        }
        res.redirect("/");
    },
    showDeleteOption: (req, res) => {
        const cottageToDelete = serv.findById(
            "productsDataBase.json",
            req.params.id
        );
        res.render("delete-detail", { product: cottageToDelete });
    },
    delete: (req, res) => {
        serv.delete("productsDataBase.json", req.params.id);
        res.redirect("/");
    },
};
