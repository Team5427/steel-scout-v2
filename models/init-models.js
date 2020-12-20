var DataTypes = require("sequelize").DataTypes;
var _2020_competitions = require("./2020_competitions");
var _2020_pit_scouting = require("./2020_pit_scouting");
var _2020_scouters = require("./2020_scouters");
var _2020_scouting = require("./2020_scouting");
var _seasons = require("./seasons");
var _teams = require("./teams");

function initModels(sequelize) {
  var 2020_competitions = _2020_competitions(sequelize, DataTypes);
  var 2020_pit_scouting = _2020_pit_scouting(sequelize, DataTypes);
  var 2020_scouters = _2020_scouters(sequelize, DataTypes);
  var 2020_scouting = _2020_scouting(sequelize, DataTypes);
  var seasons = _seasons(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);


  return {
    2020_competitions,
    2020_pit_scouting,
    2020_scouters,
    2020_scouting,
    seasons,
    teams,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
