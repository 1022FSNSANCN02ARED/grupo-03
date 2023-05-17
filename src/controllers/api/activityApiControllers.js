const { Activities } = require("../../database/models");

module.exports = {
    async findActivities(req, res) {
        const activities = await Activities.findAll({
            include: ["images", "hours"],
        });

        const modificateActivities = activities.map((activity) => {
            let dataActivities = activity.dataValues;
            return {
                ...dataActivities,
                image: `http://localhost:3000${activity.images[0].image}`,
                detail: `http://localhost:3000/api/activities/detail/${activity.id}`,
            };
        });
        // Objeto que devuelve la API
        res.json({
            count: modificateActivities.length,
            data: modificateActivities,
        });
    },

    async findActivity(req, res) {
        const activity = await Activities.findByPk(req.params.id, {
            include: ["images", "hours"],
        });

        activity.dataValues.images = activity.images.map((img) => {
            return `http://localhost:3000${img.image}`;
        });

        // Objeto que devuelve la API
        res.json({
            status: 200,
            data: activity.dataValues,
        });
    },
};
