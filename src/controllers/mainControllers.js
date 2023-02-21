const serv = require("../data/serv");

module.exports = {
    home: (req, res) => {
        res.render("index", {
            cottage: serv.findAll("productsDataBase.json"),
            activities: serv.findAll("activities.json"),
        });
    },
};
