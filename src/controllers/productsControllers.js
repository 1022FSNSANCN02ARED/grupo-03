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

            //console.log(cottages)
            //console.log(activities);

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
        const cottageInCart = req.session.cottagesInCart;
        const actInCart = req.session.activitiesInCart;

        console.log(cottageInCart);
        //console.log(actInCart);

        let cottages;
        if (cottageInCart) {
            const cottageId = cottageInCart.map((cottage) => {
                return cottage.cottage_id;
            });
            cottages = await db.Cottages.findAll({
                include: ["images"],
                where: {
                    id: cottageId,
                },
            });
        }

        let activities;
        if (actInCart) {
            const actId = actInCart.map((act) => {
                return act.activity_id;
            });
            activities = await db.Activities.findAll({
                include: ["images"],
                where: {
                    id: actId,
                },
            });
        }

        //console.log(cottages);
        //console.log(activities);

        res.render("product-cart", {
            cottageId: cottages,
            actId: activities,
            cottageInCart: cottageInCart,
            actInCart: actInCart,
        });
    },

    showEditCottageInCart: async (req, res) => {
        const cottageToEdit = req.session.cottagesInCart.find((cottage) => {
            return Number(cottage.sessionId) == Number(req.params.id);
        });

        const cottage = await db.Cottages.findByPk(cottageToEdit.cottage_id, {
            include: ["images", "services"],
        });

        const oldData = {
            check_in: cottageToEdit.date_in,
            check_out: cottageToEdit.date_out,
            guest: Number(cottageToEdit.guests),
        };

        const newCottagesInCart = req.session.cottagesInCart.filter(
            (cartCottage) => {
                return (
                    Number(cartCottage.sessionId) !==
                    Number(cottageToEdit.sessionId)
                );
            }
        );
        req.session.cottagesInCart = newCottagesInCart;

        res.render("cottage-booking-form", {
            errors: null,
            oldData,
            cottage: cottage,
        });
    },

    showEditActivityInCart: async (req, res) => {
        const activityToEdit = req.session.activitiesInCart.find((activity) => {
            return Number(activity.sessionId) === Number(req.params.id);
        });

        const activity = await db.Activities.findByPk(
            activityToEdit.activity_id,
            {
                include: ["images", "hours"],
            }
        );

        const newActivitiesInCart = req.session.activitiesInCart.filter(
            (sessionActivity) => {
                return (
                    Number(activityToEdit.sessionId) !==
                    Number(sessionActivity.sessionId)
                );
            }
        );

        req.session.activitiesInCart = newActivitiesInCart;

        res.render("activity-ticket-form", {
            errors: null,
            oldData: activityToEdit,
            activity: activity,
        });
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
                tickets.map((ticket) => {
                    return {
                        user_id: req.session.userLog.id,
                        activity_id: ticket.activity_id,
                        day: ticket.day,
                        quantity: ticket.quantity,
                        hour: ticket.hour,
                        total_cost: ticket.total_cost,
                        cart_id: newCart.id,
                    };
                })
            );
        }

        req.session.cottagesInCart = null;
        req.session.activitiesInCart = null;

        res.redirect("/products/cart/cartFin");
    },
    cartFin: (req, res) => {
        res.render("cartFin");
    },
    deleteCottageCart: (req, res) => {
        const cottageInCart = req.session.cottagesInCart;
        const cottageId = req.params.id
        
        req.session.cottagesInCart.find((cottage) => cottage.cottage_id === cottageId);

        cottagesQueSeQuita = null;
        res.redirect("/products/cart");
    },
    deleteActivityCart: (req, res) => {
        const actInCart = req.session.activitiesInCart;
        const actId = req.params.id;

        

        req.session.activitiesInCart = null;
        res.redirect("/products/cart");
    },
};
