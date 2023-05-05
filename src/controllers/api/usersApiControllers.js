const { Users } = require("../../database/models")
module.exports = {

async findUsers(req, res) {
    const users = await Users.findAll();

    const users2 = users.map((users) => {
        let dataUsers = users.dataValues;
        return {
            ...dataUsers,
            detail: `http://localhost:3000/api/users/${users.id}`,
        };
    });
    // Objeto que devuelve la API
    res.json({
        count: users2.length,
        data: users2,
    });
},

async findUsers(req, res) {
    const users = await Users.findByPk(req.params.id);
    console.log(users.images);
    
    // Objeto que devuelve la API
    res.json({
        ...users,
    });

},
}