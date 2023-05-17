const { Cottages } = require("../../database/models");

module.exports = {
    async findCottages(req, res) {
        const cottages = await Cottages.findAll({
            include: ["images", "services"],
        });

        const modificateCottages = cottages.map((cottage) => {
            let dataCottage = cottage.dataValues;

            return {
                ...dataCottage,
                image: `http://localhost:3000${dataCottage.images[0].image}`,
                detail: `http://localhost:3000/api/cottages/detail/${cottage.id}`,
                services: dataCottage.services.map((service) => {
                    return service.service;
                }),
            };
        });

        delete modificateCottages.images;

        // Objeto que devuelve la API
        res.json({
            status: 200,
            data: modificateCottages,
            count: modificateCottages.length,
        });
    },

    async findCottage(req, res) {
        const cottage = await Cottages.findByPk(req.params.id, {
            include: ["images", "services"],
        });

        cottage.dataValues.images = cottage.images.map((img) => {
            return `http://localhost:3000/${img.image}`;
        });

        cottage.dataValues.services = cottage.services.map((service) => {
            return service.service;
        });

        // Objeto que devuelve la API
        res.json({
            status: 200,
            data: cottage.dataValues,
        });
    },
};
