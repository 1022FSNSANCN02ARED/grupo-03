module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Users",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: { type: DataTypes.TEXT, allowNull: false },
            first_name: { type: DataTypes.STRING, allowNull: false },
            last_name: { type: DataTypes.STRING, allowNull: false },
            avatar: { type: DataTypes.STRING, allowNull: true },
        },
        {
            tableName: "users",
        }
    );

    model.associate = (db) => {
        // model.belongsTo(db.Address, {
        //     as: "address",
        //     foreignKey: "address_id",
        // });
        // model.belongsTo(db.Roles, {
        //     as: "rol",
        //     foreignKey: "rol_id",
        // });
        // model.belongsToMany(db.Cottages, {
        //     through: "rents",
        //     foreignKey: "user_id",
        //     otherKey: "cottage_id",
        // });
    };
    return model;
};
