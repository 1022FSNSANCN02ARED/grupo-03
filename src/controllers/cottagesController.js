const serv = require("../data/serv");
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
            serv.findById("productsDataBase.json", req.params.id);
        }
        res.render("productDetail", {
            footerProductDetails: "footer-producDetail",
            cottage: cottage,
        });
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    showCreateForm: (req, res) => {
        res.render("crear-cabaña");
    },
    create: (req, res) => {
        let cottage = {
            id: Date.now(),
            name: req.body.name,
            price: req.body.price,
            huespedes: req.body.huespedes,
            servs: req.body.servs || [],
            dormitorios: req.body.dormitorios,
            beds: req.body.beds,
            description: req.body.description,
            image: req.files.map(
                (file) => `/images/cottageImages/${file.filename}`
            ),
        };
        serv.uploadData("productsDataBase.json", cottage);

        res.redirect("/");
    },
    showEditForm: (req, res) => {
        // el controlador funciona, solo que falta la vista
        const productToEdit = serv.findById(
            "productsDataBase.json",
            req.params.id
        );
        res.render("editar-cabaña", { cottage: productToEdit });
    },
    update: (req, res) => {
        // el controlador funciona, solo que falta la vista
        const cottageToEdit = {
            name: req.body.name,
            price: req.body.price,
            huespedes: req.body.huespedes,
            servs: req.body.servs || [],
            dormitorios: req.body.dormitorios,
            beds: req.body.beds,
            description: req.body.description,
            image: req.files.map(
                (file) => `/images/cottageImages/${file.filename}`
            ),
        };
        serv.editData("productDataBase.json", req.params.id, cottageToEdit);
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
