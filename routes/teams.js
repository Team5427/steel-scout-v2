const express = require('express');
const {DataTypes} = require('sequelize');
const router = express.Router();

require('dotenv').config()

module.exports = (sequelize) => {
    const Team = require('../models/teams')(sequelize, DataTypes)

    router.get("/", (req, res, next) => { //Get all team entries
        console.log("--- READING all teams entries")

        Team.findAll({raw: true}).then(teamsEntry => {
            console.log("Found all team entries!")
            res.send(teamsEntry)
        }).catch(err => {
            console.error(err)
            res.status(500).send({"error": "SQL ERROR"})
        })
    })

    router.get("/get/:id", (req, res, next) => { //Get team entry by ID
        const id = parseInt(req.params.id)

        if (!isNaN(id)) {
            console.log(`--- READING team entry with id ${req.params.id}`)
            Team.findOne({  //Queries DB for team entry
                where: {
                    team_id: id
                },
                raw: true
            }).then(teamsEntry => {
                if (teamsEntry) {
                    console.log(`Found team entry with id ${teamsEntry.team_id}!`)
                    res.send(teamsEntry)
                } else {
                    console.log("Couldn't find team entry with that id!")
                    res.status(404).send({"error": "TEAM ENTRY NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error": "SQL ERROR"})
            })

        } else {
            console.log(`--- READING team entry`)
            console.log(`Invalid ID Format!`)
            res.status(400).send({"error": `ID INVALID FORMAT`})
        }
    })

    router.post("/create", (req, res, next) => { //Create team entry
        console.log(`--- CREATING new team entry`)
        const team_number = req.body.team_number


        if (team_number) {
            //TODO: Season ID Validation
            Team.create({
                team_number: team_number
            }).then(teamsEntry => {
                if (teamsEntry) {
                    console.log(`Team entry created`)
                    res.send({"success": true})
                } else {
                    console.log("Couldn't create team entry!")
                    res.status(404).send({"error": "ENTRY NOT CREATED"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error": "SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if (!team_number)
                err += " team_number "

            res.status(400).send({"error": `BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/update", (req, res, next) => {
        const team_number = req.body.team_number
        const team_id = req.body.team_id

        if (team_number) {
            console.log(`--- UPDATING team entry with id ${req.body.team_id}`)

            //TODO: Season ID Validation
            Team.update({
                team_number
            }, {
                where: {
                    team_id
                }
            }).then(team => {
                if (team[0]) {
                    console.log(`Team "${team_id}" has been set to #${team_number}"`)
                    res.send({"success": true})
                } else {
                    console.log("Couldn't update team (It might not exist)!")
                    res.status(404).send({"error": "TEAM NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error": "SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if (!team_number)
                err += " team_number "
            res.status(400).send({"error": `BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/delete", (req, res, next) => {
        const id = parseInt(req.body.team_id)

        if (!isNaN(id)) {
            console.log(`--- DELETING team entry with id ${req.body.team_id}`)
            Team.destroy({
                where: {
                    team_id: id
                }
            }).then(success => {
                if (success) {
                    console.log(`Deleted team entry with id ${id}!`)
                    res.send({"success": true})
                } else {
                    console.log("Couldn't find team entry with that id!")
                    res.status(404).send({"error": "TEAM NOT FOUND"})
                }
            })
        } else {
            console.log(`--- DELETING team entry`)
            console.log(`Invalid ID Format! (${typeof id})`)
            res.status(400).send({"error": `ID INVALID FORMAT`})
        }
    })

    return router;
}