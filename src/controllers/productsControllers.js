const db = require("../database/models");
module.exports = {
    showForm: (req, res) => {
        const formType = req.session.formType;
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.formType = null;
        req.session.errors = null;
        req.session.oldData = null;

        const isActivity = formType == "activity";
        const isCottage = formType == "cottage";

        res.render("create-product-form", {
            isActivity,
            isCottage,
            errors,
            oldData,
        });
    },

    productsList: async (req, res) => {
        try {
            const cottages = await db.Cottages.findAll({
                include: ["images"],
            });
            const activities = await db.Activities.findAll({
                include: ["images", "hours"],
            });

            res.render("products-list", {
                showCottages: req.query.show == "cottages",
                showActivities: req.query.show == "activities",
                cottages,
                activities,
            });
        } catch (error) {
            console.log(error);
        }
    },
    productCart: async (req, res) => {
        res.render("product-cart");
    },
};
