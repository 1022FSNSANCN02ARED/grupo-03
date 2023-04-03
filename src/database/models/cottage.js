module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "Cottages",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            description: { type: DataTypes.TEXT, allowNull: false },
            images: { type: DataTypes.TEXT, allowNull: true },
            beds: { type: DataTypes.INTEGER, allowNull: false },
            assessment: {
                type: DataTypes.DECIMAL,
                defaultValue: 0,
                allowNull: false,
            },
            services: { type: DataTypes.TEXT, allowNull: false },
        },
        {
            tableName: "cottages",
        }
    );
    /*model.associate = function (db) {

    };*/

    return model;
};
