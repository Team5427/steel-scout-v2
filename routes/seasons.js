const express = require('express');
const {DataTypes} = require('sequelize');
const router = express.Router();

require('dotenv').config()

module.exports = (sequelize) => {
    const Season = require('../models/seasons')(sequelize, DataTypes)

    router.get("/", (req, res, next) => { //Get all season entries
        console.log("--- READING all seasons")

        Season.findAll({raw: true}).then(season => {
            console.log("Found all season entries!")
            res.send(season)
        }).catch(err => {
            console.error(err)
            res.status(500).send({"error": "SQL ERROR"})
        })
    })

    router.get("/get/:id", (req, res, next) => { //Get season entry by ID
        const id = parseInt(req.params.id)

        if (!isNaN(id)) {
            console.log(`--- READING season with id ${req.params.id}`)
            Season.findOne({  //Queries DB for season entry
                where: {
                    season_id: id
                },
                raw: true
            }).then(season => {
                if (season) {
                    console.log(`Found season with id ${season.team_id}!`)
                    res.send(season)
                } else {
                    console.log("Couldn't find season entry with that id!")
                    res.status(404).send({"error": "SEASON ENTRY NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error": "SQL ERROR"})
            })

        } else {
            console.log(`--- READING season`)
            console.log(`Invalid ID Format!`)
            res.status(400).send({"error": `ID INVALID FORMAT`})
        }
    })

    router.post("/create", (req, res, next) => { //Create season entry
        console.log(`--- CREATING new season`)
        const season_name = req.body.season_name


        if (season_name) {
            //TODO: Season ID Validation
            Season.create({
                season_name: season_name
            }).then(season => {
                if (season) {
                    console.log(`season entry created`)
                    res.send({"success": true})
                } else {
                    console.log("Couldn't create season entry!")
                    res.status(404).send({"error": "ENTRY NOT CREATED"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error": "SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if (!season_name)
                err += " season_name "

            res.status(400).send({"error": `BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/update", (req, res, next) => {
        const season_id = parseInt(req.body.season_id)
        const season_name = req.body.season_name


        if (season_name && !isNaN(season_id)) {
            console.log(`--- UPDATING season with id ${req.body.team_id}`)

            //TODO: Season ID Validation
            Season.update({
                season_name
            }, {
                where: {
                    season_id
                }
            }).then(team => {
                if (team[0]) {
                    console.log(`Season "${season_name}" was updated"`)
                    res.send({"success": true})
                } else {
                    console.log("Couldn't update season (It might not exist)!")
                    res.status(400).send({"error": "COULD NOT UPDATE"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error": "SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if (!season_name)
                err += " season_name "
            res.status(400).send({"error": `BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/delete", (req, res, next) => {
        const id = parseInt(req.body.season_id)

        if (!isNaN(id)) {
            console.log(`--- DELETING season entry ${id}`)
            Season.destroy({
                where: {
                    season_id: id
                }
            }).then(success => {
                if (success) {
                    console.log(`Deleted season entry with id ${id}!`)
                    res.send({"success": true})
                } else {
                    console.log("Couldn't find season entry with that id!")
                    res.status(404).send({"error": "SEASON NOT FOUND"})
                }
            })
        } else {
            console.log(`--- DELETING season entry`)
            console.log(`Invalid ID Format! (${typeof id})`)
            res.status(400).send({"error": `ID INVALID FORMAT`})
        }
    })

    return router;
}