const e = require('express');
const express = require('express');
const { DataTypes } = require('sequelize');
const router = express.Router();

require('dotenv').config()

module.exports = (sequelize) => {
    const Competitions = require('../models/2020_competitions')(sequelize, DataTypes)

    router.get("/", (req, res, next) => { //Get all competitions
        console.log("--- READING all competitions")

        Competitions.findAll({raw: true}).then(competitions => {
            console.log("Found all competitions!")
            res.send(competitions)
        }).catch(err => {
            console.error(err)
            res.status(500).send({"error":"SQL ERROR"})
        })
    })

    router.get("/get/:id", (req, res, next) => { //Get competition by ID
        const id = parseInt(req.params.id)

        if(!isNaN(id)) {
            console.log(`--- READING competition with id ${req.params.id}`)
            Competitions.findOne({  //Queries DB for competition
                where: {
                    competition_id: id
                },
                raw: true
            }).then(competition => {
                if(competition) {
                    console.log(`Found competition with id ${competition.competition_id}!`)
                    res.send(competition)
                } else {
                    console.log("Couldn't find competition with that id!")
                    res.status(404).send({"error":"COMP NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`--- READING competition`)
            console.log(`Invalid ID Format!`)
            res.status(400).send({"error":`ID INVALID FORMAT`})
        }
    })

    router.post("/create", (req, res, next) => { //Create competition
        console.log(`--- CREATING new competition`)
        const competition_name = req.body.competition_name
        const competition_date = req.body.competition_date
        const season_id = req.body.season_id
        
        if(competition_name && competition_date && season_id) {
            //TODO: Season ID Validation
            Competitions.create({
                competition_name: competition_name,
                competition_date: competition_date,
                season_id: season_id,
            }).then(competition => {
                if(competition) {
                    console.log(`Competition "${competition_name}" created for date "${competition_date}"`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't create competition!")
                    res.status(404).send({"error":"COMP NOT CREATED"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if(!competition_name)
                err+=" competition_name "
            if(!competition_date)
                err+=" competition_date "
            if(!season_id)
                err+=" season_id "

            res.status(400).send({"error":`BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/update", (req, res, next) => {
        const competition_id = req.body.competition_id
        const competition_name = req.body.competition_name
        const competition_date = req.body.competition_date
        const season_id = req.body.season_id

        if(competition_id && competition_name && competition_date && season_id) {
            console.log(`--- UPDATING competition with id ${req.body.competition_id}`)

            //TODO: Season ID Validation
            Competitions.update({
                competition_name: competition_name,
                competition_date: competition_date,
                season_id: season_id
            }, {
                where: {
                    competition_id: competition_id
                }
            }).then(competition => {
                if(competition[0]) {
                    console.log(`Competition "${competition_name}" updated for date "${competition_date}"`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't update competition (It might not exist)!")
                    res.status(404).send({"error":"COMP NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if(!competition_id)
                err+=" competition_id "
            if(!competition_name)
                err+=" competition_name "
            if(!competition_date)
                err+=" competition_date "
            if(!season_id)
                err+=" season_id "

            res.status(400).send({"error":`BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/delete", (req, res, next) => {
        const id = parseInt(req.body.competition_id)

        if(!isNaN(id)) {
            console.log(`--- DELETING competition with id ${req.body.competition_id}`)
            Competitions.destroy({
                where: {
                    competition_id: id
                }
            }).then(success => {
                if(success) {
                    console.log(`Deleted competition with id ${id}!`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't find competition with that id!")
                    res.status(404).send({"error":"COMP NOT FOUND"})
                }
            })
        } else {
            console.log(`--- DELETING competition`)
            console.log(`Invalid ID Format! (${typeof id})`)
            res.status(400).send({"error":`ID INVALID FORMAT`})
        }
    })

    return router;
}