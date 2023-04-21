const { Discounts } = require("../../database/models");
module.exports = {
    async findDiscounts(req, res) {
        const discounts = await Discounts.findAll();
        res.json(discounts);
    },
};
