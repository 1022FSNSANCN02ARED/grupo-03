module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Carts",
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            order_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            payment_method: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            total_cost: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "carts",
        }
    );
    return model;
};
