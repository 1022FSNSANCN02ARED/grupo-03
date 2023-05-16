const { Users } = require("../../database/models");
module.exports = {
    async findUsers(req, res) {
        const users = await Users.findAll();

        const allUsers = await users.map((users) => {
            let dataUsers = users.dataValues;
            delete dataUsers.password;
            dataUsers.avatar = "http://localhost:3000" + dataUsers.avatar;
            return {
                ...dataUsers,
                detail: `http://localhost:3000/api/users/${users.id}`,
            };
        });
        // Objeto que devuelve la API
        res.json({
            count: allUsers.length,
            data: allUsers,
        });
    },

    async findUser(req, res) {
        const user = await Users.findByPk(req.params.id);
        // Objeto que devuelve la API
        res.json({
            ...user,
        });
    },
};
