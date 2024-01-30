'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    // Meet_Greet Model
    class Meet_Greet extends Model { }
    Meet_Greet.init({
        meet_greet_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        event_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Event',
                key: 'event_id'
            }
        },
        band_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Band',
                key: 'band_id'
            }
        },
        meet_start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        meet_end_time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Meet_Greet',
        tableName: 'meet_greet',
        timestamps: false
    });
    return Meet_Greet
}