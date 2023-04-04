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
            time_start: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            time_end: {
                type: DataTypes.STRING,
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
            wknd_time_start: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            wknd_time_end: {
                type: DataTypes.STRING,
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
    };

    return model;
};
