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
        },
        {
            tableName: "activity_user",
        }
    );
    return model;
};
