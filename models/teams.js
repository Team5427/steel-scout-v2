require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('teams', {
        sequelize,
        tableName: 'teams',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "team_id"},
                ]
            },
        ]
    }, {
        team_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        team_number: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
};
