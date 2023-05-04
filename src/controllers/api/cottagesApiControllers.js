const { Cottages} = require("../../database/models")

module.exports= {  

async findCottages(req, res) {
    const cottages = await Cottages.findAll();

    const cottages2 = cottages.map((cottage) => {
        let dataCottage = cottage.dataValues;
        return {
            ...dataCottage,
            detail: `http://localhost:3000/api/cottages/${cottage.id}`,
        };
    });
    // Objeto que devuelve la API
    res.json({
        count: cottages2.length,
        data: cottages2,
    });
},

async findCottage(req, res) {
    const cottage = await Cottages.findByPk(req.params.id, {
        include: ["images"],
    });
    console.log(cottage.images);

    const urlImages = cottage.images.map((img) => {
        return `laUrl/${img.id}`;
    });
    // Objeto que devuelve la API
    res.json({
        ...cottage,
        imageUrl: `unaApi/${cottage.images.id}`,
    });
},}