module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Roles",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: "roles",
        }
    );
    return model;
};
