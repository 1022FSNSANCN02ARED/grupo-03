module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "AssessmentsCottage",
        {
            cottage_id: {
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
            tableName: "assessment_cottage",
        }
    );
    return model;
};
