const { findById } = require("../data/serv");
const serv = require("../data/serv");

module.exports = {
    productDetail: (req, res) => {
        res.render("productDetail", {
            footerProductDetails: "footer-producDetail",
            cottage: serv.findById("productsDataBase.json", req.params.id),
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
            ...req.body,
        };
        serv.uploadData("productsDataBase.json", cottage);

        res.redirect("/");
    },
    delete: (req, res) => {
        serv.delete("productsDataBase.json", req.params.id);
        res.redirect("/");
    },
};
