const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('2020_competitions', {
    competition_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    competition_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    competition_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    season_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: '2020_competitions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "competition_id" },
        ]
      },
    ]
  });
};
