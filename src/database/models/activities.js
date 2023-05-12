module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Activities",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            assessment: {
                type: DataTypes.DECIMAL,
                defaultValue: 0,
                allowNull: false,
            },
            max_place: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "activities",
        }
    );

    model.associate = function (db) {
        model.hasMany(db.Images, {
            as: "images",
            foreignKey: "activity_id",
        });
        model.hasOne(db.ActivitiesHours, {
            as: "hours",
            foreignKey: "activity_id",
        });
        model.hasMany(db.AssessmentsActivity, {
            as: "assessments",
            foreignKey: "activity_id",
        });
    };
    return model;
};
