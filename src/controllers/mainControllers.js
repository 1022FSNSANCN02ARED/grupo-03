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
            // activities = await serv.findAllParse("Activities", [
            //     "images",
            //     "services",
            // ]);

            // Esto solo por ahora, hasta tener el modelo de actividades.
            activities = serv.findAll("activities.json");
        } catch (error) {
            console.log(error);
            cottages = serv.findAll("productsDataBase.json");
            activities = serv.findAll("activities.json");
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
