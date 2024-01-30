'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    // Set_Time Model
    class Set_Time extends Model { }
    Set_Time.init({
        set_time_id: {
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
        stage_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'Stage',
                key: 'stage_id'
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
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Set_Time',
        tableName: 'set_time',
        timestamps: false
    });
    return Set_Time
}