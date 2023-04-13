module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Services",
        {
            cottage_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            service: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "services",
        }
    );
    return model;
};
