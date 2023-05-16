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

    buyCart: async (req, res) => {
        const rents = req.session.cottagesInCart;
        const tickets = req.session.activitiesInCart;

        let total_cost = 0;

        tickets?.forEach((ticket) => {
            total_cost += ticket.total_cost;
        });

        rents?.forEach((rent) => {
            total_cost += rent.total_cost;
        });

        const newCart = await db.Carts.create({
            user_id: req.session.userLog.id,
            order_status: "en proceso",
            payment_method: "no implementado",
            total_cost: total_cost,
        });

        if (rents) {
            await db.Rents.bulkCreate(
                rents.map((rent) => {
                    return {
                        user_id: req.session.userLog.id,
                        cottage_id: rent.cottage_id,
                        date_in: rent.date_in,
                        date_out: rent.date_out,
                        total_cost: rent.total_cost,
                        guests: rent.guests,
                        cart_id: newCart.id,
                    };
                })
            );
        }

        if (tickets) {
            await db.AcivitiesUsers.bulkCreate(
                tickets.map((rent) => {
                    return {
                        user_id: req.session.userLog.id,
                        activity_id: rent.activity_id,
                        day: rent.day,
                        quantity: rent.quantity,
                        hour: rent.date_in,
                        total_cost: rent.total_cost,
                        cart_id: newCart.id,
                    };
                })
            );
        }

        req.session.cottagesInCart = null;
        req.session.activitiesInCart = null;

        res.redirect("/");
    },
};
