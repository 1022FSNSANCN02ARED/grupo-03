module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "AcivitiesUsers",
        {
            activity_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            day: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cart_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            hour: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            total_cost: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "activity_user",
        }
    );

    model.associate = (db) => {
        model.belongsTo(db.Users, {
            as: "user",
            foreignKey: "user_id",
        });

        model.belongsTo(db.Activities, {
            as: "activity",
            foreignKey: "activity_id",
        });
        model.belongsTo(db.Carts, {
            as: "cart",
            foreignKey: "cart_id",
        });
    };

    return model;
};
