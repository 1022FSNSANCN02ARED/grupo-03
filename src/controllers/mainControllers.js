const serv = require("../data/serv");

module.exports = {
  home: (req, res) => {
    res.render("index", { cottage: serv.findAll("productsDataBase.json") });
  },
  product: (req, res) => {
    res.render("productDetail", {
      footerProductDetails: "footer-producDetail",
      cottage: serv.findById("productsDataBase.json", req.params.id),
    });
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  crear: (req, res) => {
    res.render("crear-cabaña");
  },
};
