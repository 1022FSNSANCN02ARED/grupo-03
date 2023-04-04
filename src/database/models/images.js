module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Images", {
        cottage_id: {
            type: DataTypes.INTEGER,
            AllowNull: false,
        },
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
    });

    return model;
};
