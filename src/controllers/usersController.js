const serv = require("../data/serv");

module.exports = {
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  create: (req, res) => {
    let user = {
      id: Date.now(),
      ...req.body,
    };
    serv.uploadData("users.json", user);

    res.redirect("/");
  },
  delete: (req, res) => {},
};
