'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    // Stage Model
    class Stage extends Model { }
    Stage.init({
        stage_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stage_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Stage',
        tableName: 'stage',
        timestamps: false
    });
    return Stage
}