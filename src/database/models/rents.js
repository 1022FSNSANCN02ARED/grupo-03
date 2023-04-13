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
        },
        {
            tableName: "rents",
        }
    );
    return model;
};
