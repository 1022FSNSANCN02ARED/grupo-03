module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Rents",
        {
            cottage_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            date_in: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            date_out: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            cart_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            total_cost: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            guests: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "rents",
        }
    );

    model.associate = (db) => {
        model.belongsTo(db.Users, {
            as: "user",
            foreignKey: "user_id",
        });
        model.belongsTo(db.Cottages, {
            as: "cottage",
            foreignKey: "cottage_id",
        });
        model.belongsTo(db.Carts, {
            as: "cart",
            foreignKey: "cart_id",
        });
    };
    return model;
};
