const { Users } = require("../../database/models");
const { Rents } = require("../../database/models");
const { AcivitiesUsers } = require("../../database/models");
module.exports = {
    async findUsers(req, res) {
        const users = await Users.findAll({ include: ["rol"] });

        const allUsers = await users.map((users) => {
            let dataUsers = users.dataValues;
            delete dataUsers.password;
            dataUsers.avatar = "http://localhost:3000" + dataUsers.avatar;
            return {
                ...dataUsers,
                detail: `http://localhost:3000/api/users/detail/${users.id}`,
            };
        });
        // Objeto que devuelve la API
        res.json({
            status: 200,
            data: allUsers,
            count: allUsers.length,
        });
    },

    async findUser(req, res) {
        const user = await Users.findByPk(req.params.id, {
            include: ["rol", "rents", "tickets"],
        });
        // Objeto que devuelve la API
        user.avatar = `http://localhost:3000/${user.avatar}`;
        delete user.dataValues.password;
        res.json({
            status: 200,
            data: user,
        });
    },
    async findRents(req, res) {
        const rents = await Rents.findAll({
            where: { user_id: req.params.id },
            include: ["cottage", "cart"],
        });
        res.json({
            status: 200,
            data: rents,
            count: rents.length,
        });
    },

    async findTickets(req, res) {
        const tickets = await AcivitiesUsers.findAll({
            where: { user_id: req.params.id },
            include: ["activity", "cart"],
        });
        res.json({
            status: 200,
            data: tickets,
            count: tickets.length,
        });
    },
};
