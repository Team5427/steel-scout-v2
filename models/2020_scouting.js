require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('2020_scouting', {
        sequelize,
        tableName: '2020_scouting',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "scouting_id"},
                ]
            },
        ]
    }, {
        scouting_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        scouter_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        competition_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        match_number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        auto_line: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        auto_high_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        auto_low_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        auto_collect_balls: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
        },
        stage1_high_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stage1_low_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stage1_completed: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        stage2_high_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stage2_low_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rotation_control: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        stage3_high_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stage3_low_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stage3_completed: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        position_control: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        end_status: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        shield_gen_level: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
        },
        finalRP: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        defense: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
        },
        inner_port: {
            type: DataTypes.TINYINT,
            allowNull: true,
            defaultValue: 0
        }
    });
};
