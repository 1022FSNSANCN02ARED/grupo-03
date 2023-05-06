module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "ActivitiesHours",
        {
            activity_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            weekday_hours: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            second_weekday_hours: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            weekend_hours: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            second_weekend_hours: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: "activity_hours",
        }
    );
    return model;
};
