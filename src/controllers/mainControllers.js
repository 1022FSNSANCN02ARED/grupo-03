const serv = require("../data/serv");
const db = require("../database/models");

module.exports = {
    home: async (req, res) => {
        // Se usa el try catch para seguir usando la base de datos en json
        // si la SQL no esta disponible.
        let activities;
        let cottages;
        try {
            // En la vista "index.ejs" hay un "or" que hay que borrar cuando estemos trabajando full con la db de MySQL.
            cottages = await db.Cottages.findAll({ include: ["images"] });
            activities = serv.findAll("activities.json");
        } catch (error) {
            console.log(error);
            activities = serv.findAll("activities.json");

            cottages = serv.findAll("productsDataBase.json");
        }
        res.render("index", {
            cottage: cottages,
            activities: activities,
        });
    },
    generalCab: (req, res) => {
        res.render("generalCab");
    },
    activities: (req, res) => {
        res.render("activities");
    },
};
