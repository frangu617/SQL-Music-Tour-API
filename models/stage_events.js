'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    // Stage_Events Model (junction table for many-to-many relationship between stages and events)
    class Stage_Events extends Model { }
    Stage_Events.init({
        stage_events_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Stage',
                key: 'stage_id'
            }
        },
        event_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Event',
                key: 'event_id'
            }
        }
    }, {
        sequelize,
        modelName: 'Stage_Events',
        tableName: 'stage_events',
        timestamps: false
    });
    return Stage_Events
}