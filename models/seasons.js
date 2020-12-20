require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('seasons', {
        sequelize,
        tableName: 'seasons',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "season_id"},
                ]
            },
        ]
    }, {
        season_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        season_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    });
};
