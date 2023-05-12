const db = require("../database/models");

module.exports = {
    home: async (req, res) => {
        try {
            const cottages = await db.Cottages.findAll({
                include: ["images"],
                limit: 4,
            });
            const activities = await db.Activities.findAll({
                include: ["images", "hours"],
                limit: 4,
            });

            res.render("index", {
                cottage: cottages,
                activities: activities,
            });
        } catch (error) {
            console.log(error);
        }
    },
    generalCab: (req, res) => {
        res.render("generalCab");
    },
};
