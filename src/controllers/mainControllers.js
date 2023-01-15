module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  product: (req, res) => {
    res.render("productDetail", {
      footerProductDetails: "footer-producDetail",
    });
  },
  register: (req, res) => {
    res.render("register");
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
  login: (req, res) => {
    res.render("login");
  },
};
