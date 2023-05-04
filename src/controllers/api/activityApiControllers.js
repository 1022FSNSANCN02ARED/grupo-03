const { Activities } = require("../../database/models");
module.exports = {
    async findActivities(req, res) {
        const data = await Activities.findAll();

        const activities = data.map((activity) => {
            let dataActivities = activity.dataValues;
            return {
                ...dataActivities,
                detail: `http://localhost:3000/api/activities/detail/${activity.id}`,
            };
        });
        // Objeto que devuelve la API
        res.json({
            count: activities.length,
            data: activities,
            
        });
    },

    async findActivity(req, res) {
        const activity = await Activities.findByPk(req.params.id, {
            include: ["images", "hours"],
        });
        console.log(activity.images);

        const urlImages = activity.images.map((img) => {
            return img.image;
        });
        
        // Objeto que devuelve la API
        res.json({
            activity: activity.dataValues,
            urlImages,
            hours: activity.hours
        });
    },
};