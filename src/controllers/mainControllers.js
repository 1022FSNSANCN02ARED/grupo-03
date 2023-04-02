const serv = require("../data/serv");

module.exports = {
    home: async (req, res) => {
        let cottages = [];
        let activities = [];
        // Se usa el try catch para seguir usando la base de datos en json
        // si la SQL no esta disponible.
        try {
            cottages = await serv.findAllParse("Cottages", [
                "images",
                "services",
            ]);
            activities = await serv.findAllParse("Activities", [
                "images",
                "services",
            ]);
        } catch (error) {
            cottages = serv.findAll("productsDataBase.json");
            activities = serv.findAll("activities.json");
        }
        res.render("index", {
            cottage: cottages,
            activities: activities,
        });
    },
    activities: (req, res) => {
        res.render("activities");
    },
};
