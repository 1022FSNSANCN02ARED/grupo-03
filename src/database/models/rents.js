module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Rents",
        {
            cottage_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            date_in: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            date_out: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: "rents",
        }
    );
    return model;
};
