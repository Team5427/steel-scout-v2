const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('2020_pit_scouting', {
    pit_scouting_id: {
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
    climb: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    adjust_level: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drive_team_experience: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inner_port: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    higher_port: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    lower_port: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    defense: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    autonomous_abilities: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: '2020_pit_scouting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pit_scouting_id" },
        ]
      },
    ]
  });
};
