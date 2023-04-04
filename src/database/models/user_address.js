module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "User_address",
        {
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

                    tableName: "user_address",
        }
    );
   
    return model;
};
