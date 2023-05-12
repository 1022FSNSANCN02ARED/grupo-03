module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "AssessmentsActivity",
        {
            activity_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            assessment: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "activity_assessment",
        }
    );
    return model;
};
