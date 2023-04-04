
module.exports = (sequelize, DataTypes) => {
    
    const model = sequalize.define(
        'Activities',
        {
            activities_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: { 
                type: DataTypes.TEXT, 
                allowNull: false,
            },
            images:{
                type: DataTypes.TEXT, 
                allowNull: false,
            },
            time_start:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            time_end:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            assessment:{
                type: DataTypes.DECIMAL,
                defaultValue: 0,
                allowNull: false,
            },
            max_place:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            wknd_time_start:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            wknd_time_end:{
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "activities",
        },
        
    ); 
    
    return model;
    
};
