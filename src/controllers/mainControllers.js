module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  product: (req, res) => {
    res.render("productDetail", {
      footerProductDetails: "footer-producDetail",
    });
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  crear: (req, res) => {
    res.render("crear-cabaña");
  },
};
