const e = require('express');
const express = require('express');
const { DataTypes } = require('sequelize');
const router = express.Router();

require('dotenv').config()

module.exports = (sequelize) => {
    const PitScouting = require('../models/2020_pit_scouting')(sequelize, DataTypes)

    router.get("/", (req, res, next) => { //Get all pit scouting entries
        console.log("--- READING all pit scouting entries")

        PitScouting.findAll({raw: true}).then(pitscoutingEntries => {
            console.log("Found all pit scouting entries!")
            res.send(pitscoutingEntries)
        }).catch(err => {
            console.error(err)
            res.status(500).send({"error":"SQL ERROR"})
        })
    })

    router.get("/get/:id", (req, res, next) => { //Get pit scouting entry by ID
        const id = parseInt(req.params.id)

        if(!isNaN(id)) {
            console.log(`--- READING pit scouting entry with id ${req.params.id}`)
            PitScouting.findOne({  //Queries DB for pit scouting entry
                where: {
                    pit_scouting_id: id
                },
                raw: true
            }).then(pitscoutingEntry => {
                if(pitscoutingEntry) {
                    console.log(`Found pit scouting entry with id ${pitscoutingEntry.pit_scouting_id}!`)
                    res.send(pitscoutingEntry)
                } else {
                    console.log("Couldn't find pit scouting entry with that id!")
                    res.status(404).send({"error":"PIT SCOUTING ENTRY NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`--- READING pit scouting entry`)
            console.log(`Invalid ID Format!`)
            res.status(400).send({"error":`ID INVALID FORMAT`})
        }
    })

    router.post("/create", (req, res, next) => { //Create pit scouting entry
        console.log(`--- CREATING new pit scouting entry`)
        const scouter_id = req.body.scouter_id
        const competition_id = req.body.competition_id
        const team_id = req.body.team_id
        const climb = req.body.climb
        const adjust_level = req.body.adjust_level
        const drive_team_experience = req.body.drive_team_experience
        const inner_port = req.body.inner_port
        const higher_port = req.body.higher_port
        const lower_port = req.body.lower_port
        const defense = req.body.defense
        const autonomous_abilities = req.body.autonomous_abilities

        
        if(scouter_id && competition_id && team_id && climb && adjust_level && drive_team_experience && inner_port && higher_port && lower_port && defense && autonomous_abilities) {
            //TODO: Season ID Validation
            PitScouting.create({
                scouter_id: scouter_id,
                competition_id: competition_id,
                team_id: team_id,
                climb: climb,
                adjust_level: adjust_level,
                drive_team_experience: drive_team_experience,
                inner_port: inner_port,
                higher_port: higher_port,
                lower_port: lower_port,
                defense: defense,
                autonomous_abilities: autonomous_abilities
            }).then(pitscoutingEntry => {
                if(pitscoutingEntry) {
                    console.log(`Pit scouting entry created`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't create pit scouting entry!")
                    res.status(404).send({"error":"ENTRY NOT CREATED"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if(!scouter_id)
                err+=" scouter_id "
            if(!competition_id)
                err+=" competition_id "
            if(!team_id)
                err+=" team_id "
            if(!climb)
                err+=" climb "
            if(!adjust_level)
                err+=" adjust_level "
            if(!drive_team_experience)
                err+=" drive_team_experience "
            if(!inner_port)
                err+=" inner_port "
            if(!higher_port)
                err+=" higher_port "
            if(!lower_port)
                err+=" lower_port "
            if(!defense)
                err+=" defense "
            if(!autonomous_abilities)
                err+=" autonomous_abilities "

            res.status(400).send({"error":`BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/update", (req, res, next) => {
        const scouter_id = req.body.scouter_id
        const competition_id = req.body.competition_id
        const team_id = req.body.team_id
        const climb = req.body.climb
        const adjust_level = req.body.adjust_level
        const drive_team_experience = req.body.drive_team_experience
        const inner_port = req.body.inner_port
        const higher_port = req.body.higher_port
        const lower_port = req.body.lower_port
        const defense = req.body.defense
        const autonomous_abilities = req.body.autonomous_abilities

        if(scouter_id && competition_id && team_id && climb && adjust_level && drive_team_experience && inner_port && higher_port && lower_port && defense && autonomous_abilities) {
            console.log(`--- UPDATING pitscouting entry with id ${req.body.pit_scouting_id}`)

            //TODO: Season ID Validation
            PitScouting.update({
                scouter_id: scouter_id,
                competition_id: competition_id,
                team_id: team_id,
                climb: climb,
                adjust_level: adjust_level,
                drive_team_experience: drive_team_experience,
                inner_port: inner_port,
                higher_port: higher_port,
                lower_port: lower_port,
                defense: defense,
                autonomous_abilities: autonomous_abilities
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
            if(!scouter_id)
                err+=" scouter_id "
            if(!competition_id)
                err+=" competition_id "
            if(!team_id)
                err+=" team_id "
            if(!climb)
                err+=" climb "
            if(!adjust_level)
                err+=" adjust_level "
            if(!drive_team_experience)
                err+=" drive_team_experience "
            if(!inner_port)
                err+=" inner_port "
            if(!higher_port)
                err+=" higher_port "
            if(!lower_port)
                err+=" lower_port "
            if(!defense)
                err+=" defense "
            if(!autonomous_abilities)
                err+=" autonomous_abilities "

            res.status(400).send({"error":`BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/delete", (req, res, next) => {
        const id = parseInt(req.body.pit_scouting_id)

        if(!isNaN(id)) {
            console.log(`--- DELETING pit scouting entry with id ${req.body.pit_scouting_id}`)
            PitScouting.destroy({
                where: {
                    pit_scouting_id: id
                }
            }).then(success => {
                if(success) {
                    console.log(`Deleted pit scouting entry with id ${id}!`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't find pit scouting entry with that id!")
                    res.status(404).send({"error":"COMP NOT FOUND"})
                }
            })
        } else {
            console.log(`--- DELETING pit scouting entry`)
            console.log(`Invalid ID Format! (${typeof id})`)
            res.status(400).send({"error":`ID INVALID FORMAT`})
        }
    })

    return router;
}