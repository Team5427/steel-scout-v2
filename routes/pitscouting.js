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
        const scouter_id = parseInt(req.body.scouter_id)
        const competition_id = parseInt(req.body.competition_id)
        const team_id = parseInt(req.body.team_id)
        const climb = parseInt(req.body.climb)
        const adjust_level = parseInt(req.body.adjust_level)
        const drive_team_experience = parseInt(req.body.drive_team_experience)
        const inner_port = parseInt(req.body.inner_port)
        const higher_port = parseInt(req.body.higher_port)
        const lower_port = parseInt(req.body.lower_port)
        const defense = parseInt(req.body.defense)
        const autonomous_abilities = parseInt(req.body.autonomous_abilities)

        
        if(!isNaN(scouter_id) && !isNaN(competition_id) && !isNaN(team_id) && !isNaN(climb) 
        && !isNaN(adjust_level) && !isNaN(drive_team_experience) && !isNaN(inner_port)
        && !isNaN(higher_port) && !isNaN(lower_port) && !isNaN(defense) && !isNaN(autonomous_abilities)) {
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
            if(isNaN(scouter_id))
                err+=" scouter_id "
            if(isNaN(competition_id))
                err+=" competition_id "
            if(isNaN(team_id))
                err+=" team_id "
            if(isNaN(climb))
                err+=" climb "
            if(isNaN(adjust_level))
                err+=" adjust_level "
            if(isNaN(drive_team_experience))
                err+=" drive_team_experience "
            if(isNaN(inner_port))
                err+=" inner_port "
            if(isNaN(higher_port))
                err+=" higher_port "
            if(isNaN(lower_port))
                err+=" lower_port "
            if(isNaN(defense))
                err+=" defense "
            if(isNaN(autonomous_abilities))
                err+=" autonomous_abilities "

            res.status(400).send({"error":`BAD PARAMS (No${err}provided)`})
        }
    })

    router.post("/update", (req, res, next) => {
        const pit_scouting_id = parseInt(req.body.pit_scouting_id)
        const scouter_id = parseInt(req.body.scouter_id)
        const competition_id = parseInt(req.body.competition_id)
        const team_id = parseInt(req.body.team_id)
        const climb = parseInt(req.body.climb)
        const adjust_level = parseInt(req.body.adjust_level)
        const drive_team_experience = parseInt(req.body.drive_team_experience)
        const inner_port = parseInt(req.body.inner_port)
        const higher_port = parseInt(req.body.higher_port)
        const lower_port = parseInt(req.body.lower_port)
        const defense = parseInt(req.body.defense)
        const autonomous_abilities = parseInt(req.body.autonomous_abilities)

        if(!isNaN(scouter_id) && !isNaN(competition_id) && !isNaN(team_id) && !isNaN(climb) 
        && !isNaN(adjust_level) && !isNaN(drive_team_experience) && !isNaN(inner_port)
        && !isNaN(higher_port) && !isNaN(lower_port) && !isNaN(defense) && !isNaN(autonomous_abilities)) {
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
                    pit_scouting_id: pit_scouting_id
                }
            }).then(entry => {
                if(entry[0]) {
                    console.log(`Entry "${pit_scouting_id}" updated`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't update pit scouting entry (It might not exist)!")
                    res.status(404).send({"error":"ENTRY NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if(isNaN(scouter_id))
                err+=" scouter_id "
            if(isNaN(competition_id))
                err+=" competition_id "
            if(isNaN(team_id))
                err+=" team_id "
            if(isNaN(climb))
                err+=" climb "
            if(isNaN(adjust_level))
                err+=" adjust_level "
            if(isNaN(drive_team_experience))
                err+=" drive_team_experience "
            if(isNaN(inner_port))
                err+=" inner_port "
            if(isNaN(higher_port))
                err+=" higher_port "
            if(isNaN(lower_port))
                err+=" lower_port "
            if(isNaN(defense))
                err+=" defense "
            if(isNaN(autonomous_abilities))
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
                    res.status(404).send({"error":"ENTRY NOT FOUND"})
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