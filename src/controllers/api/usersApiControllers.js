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
            count: allUsers.length,
            data: allUsers,
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
};
