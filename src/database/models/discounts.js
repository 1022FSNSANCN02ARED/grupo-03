module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Discounts",
        {
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            discount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "discount_codes",
        }
    );
    return model;
};
