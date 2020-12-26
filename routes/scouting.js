const express = require('express');
const { DataTypes } = require('sequelize');
const router = express.Router();

require('dotenv').config()

module.exports = (sequelize) => {
    const Scouting = require('../models/2020_scouting')(sequelize, DataTypes)

    router.get("/", (req, res, next) => { //Get all scouting entries
        console.log("--- READING all scouting entries")

        Scouting.findAll({ raw: true }).then(scoutingEntries => {
            console.log("Found all scouting entries!")
            res.send(scoutingEntries)
        }).catch(err => {
            console.error(err)
            res.status(500).send({ "error": "SQL ERROR" })
        })
    })

    router.get("/get/:id", (req, res, next) => { //Get competition by ID
        const id = parseInt(req.params.id)

        if (!isNaN(id)) {
            console.log(`--- READING scouting entry with id ${req.params.id}`)
            Scouting.findOne({  //Queries DB for competition
                where: {
                    scouting_id: id
                },
                raw: true
            }).then(competition => {
                if (competition) {
                    console.log(`Found scouting entry with id ${competition.competition_id}!`)
                    res.send(competition)
                } else {
                    console.log("Couldn't find scouting entry with that id!")
                    res.status(404).send({ "error": "ENTRY NOT FOUND" })
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({ "error": "SQL ERROR" })
            })

        } else {
            console.log(`--- READING scouting entry`)
            console.log(`Invalid ID Format!`)
            res.status(400).send({ "error": `ID INVALID FORMAT` })
        }
    })

    router.post("/create", (req, res, next) => { //Create scouting entry
        console.log(`--- CREATING new scouting entry`)

        const scouter_id = parseInt(req.body.scouter_id)
        const competition_id = parseInt(req.body.competition_id)
        const team_id = parseInt(req.body.team_id)
        const match_number = parseInt(req.body.match_number)
        const auto_line = parseInt(req.body.auto_line)
        const auto_high_target = parseInt(req.body.auto_high_target)
        const auto_low_target = parseInt(req.body.auto_low_target)
        const auto_collect_balls = parseInt(req.body.auto_collect_balls)
        const stage1_high_target = parseInt(req.body.stage1_high_target)
        const stage1_low_target = parseInt(req.body.stage1_low_target)
        const stage1_completed = parseInt(req.body.stage1_completed)
        const stage2_high_target = parseInt(req.body.stage2_high_target)
        const stage2_low_target = parseInt(req.body.stage2_low_target)
        const rotation_control = parseInt(req.body.rotation_control)
        const stage3_high_target = parseInt(req.body.stage3_high_target)
        const stage3_low_target = parseInt(req.body.stage3_low_target)
        const stage3_completed = parseInt(req.body.stage3_completed)
        const position_control = parseInt(req.body.position_control)
        const end_status = parseInt(req.body.end_status)
        const shield_gen_level = parseInt(req.body.shield_gen_level)
        const finalRP = parseInt(req.body.finalRP)
        const defense = parseInt(req.body.defense)
        const inner_port = parseInt(req.body.inner_port)

        if (!isNaN(match_number) && !isNaN(auto_line) && !isNaN(auto_high_target) && !isNaN(auto_low_target)
            && !isNaN(auto_collect_balls) && !isNaN(stage1_high_target) && !isNaN(stage1_low_target)
            && !isNaN(stage1_completed) && !isNaN(stage2_high_target) && !isNaN(stage2_low_target)
            && !isNaN(rotation_control) && !isNaN(stage3_high_target) && !isNaN(stage3_low_target)
            && !isNaN(stage3_completed) && !isNaN(position_control) && !isNaN(end_status)
            && !isNaN(shield_gen_level) && !isNaN(finalRP) && !isNaN(defense)) {

            Scouting.create({
                scouter_id,
                competition_id,
                team_id,
                match_number,
                auto_line,
                auto_high_target,
                auto_low_target,
                auto_collect_balls,
                stage1_high_target,
                stage1_low_target,
                stage1_completed,
                stage2_high_target,
                stage2_low_target,
                rotation_control,
                stage3_high_target,
                stage3_low_target,
                stage3_completed,
                position_control,
                end_status,
                shield_gen_level,
                finalRP,
                defense,
                inner_port
            }).then(scoutingEntry => {
                if (scoutingEntry) {
                    console.log(`Pit scouting entry created`)
                    res.send({ "success": true })
                } else {
                    console.log("Couldn't create scouting entry!")
                    res.status(404).send({ "error": "ENTRY NOT CREATED" })
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({ "error": "SQL ERROR" })
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if (isNaN(match_number))
                err += " match_number "
            if (isNaN(auto_line))
                err += " auto_line "
            if (isNaN(auto_high_target))
                err += " auto_high_target "
            if (isNaN(auto_low_target))
                err += " auto_low_target "
            if (isNaN(auto_collect_balls))
                err += " auto_collect_balls "
            if (isNaN(stage1_high_target))
                err += " stage1_high_target "
            if (isNaN(stage1_low_target))
                err += " stage1_low_target "
            if (isNaN(stage1_completed))
                err += " stage1_completed "
            if (isNaN(stage2_high_target))
                err += " stage2_high_target "
            if (isNaN(stage2_low_target))
                err += " stage2_low_target "
            if (isNaN(rotation_control))
                err += " rotation_control "
            if (isNaN(stage3_high_target))
                err += " stage3_high_target "
            if (isNaN(stage3_low_target))
                err += " stage3_low_target "
            if (isNaN(stage3_completed))
                err += " stage3_completed "
            if (isNaN(position_control))
                err += " position_control "
            if (isNaN(end_status))
                err += " end_status "
            if (isNaN(shield_gen_level))
                err += " shield_gen_level "
            if (isNaN(finalRP))
                err += " finalRP "
            if (isNaN(defense))
                err += " defense "

            res.status(400).send({ "error": `BAD PARAMS (No${err}provided)` })
        }
    })

    router.post("/update", (req, res, next) => { //Create scouting entry
        const scouting_id = parseInt(req.body.scouting_id)
        const scouter_id = parseInt(req.body.scouter_id)
        const competition_id = parseInt(req.body.competition_id)
        const team_id = parseInt(req.body.team_id)
        const match_number = parseInt(req.body.match_number)
        const auto_line = parseInt(req.body.auto_line)
        const auto_high_target = parseInt(req.body.auto_high_target)
        const auto_low_target = parseInt(req.body.auto_low_target)
        const auto_collect_balls = parseInt(req.body.auto_collect_balls)
        const stage1_high_target = parseInt(req.body.stage1_high_target)
        const stage1_low_target = parseInt(req.body.stage1_low_target)
        const stage1_completed = parseInt(req.body.stage1_completed)
        const stage2_high_target = parseInt(req.body.stage2_high_target)
        const stage2_low_target = parseInt(req.body.stage2_low_target)
        const rotation_control = parseInt(req.body.rotation_control)
        const stage3_high_target = parseInt(req.body.stage3_high_target)
        const stage3_low_target = parseInt(req.body.stage3_low_target)
        const stage3_completed = parseInt(req.body.stage3_completed)
        const position_control = parseInt(req.body.position_control)
        const end_status = parseInt(req.body.end_status)
        const shield_gen_level = parseInt(req.body.shield_gen_level)
        const finalRP = parseInt(req.body.finalRP)
        const defense = parseInt(req.body.defense)
        const inner_port = parseInt(req.body.inner_port)

        if (!isNaN(match_number) && !isNaN(auto_line) && !isNaN(auto_high_target) && !isNaN(auto_low_target)
            && !isNaN(auto_collect_balls) && !isNaN(stage1_high_target) && !isNaN(stage1_low_target)
            && !isNaN(stage1_completed) && !isNaN(stage2_high_target) && !isNaN(stage2_low_target)
            && !isNaN(rotation_control) && !isNaN(stage3_high_target) && !isNaN(stage3_low_target)
            && !isNaN(stage3_completed) && !isNaN(position_control) && !isNaN(end_status)
            && !isNaN(shield_gen_level) && !isNaN(finalRP) && !isNaN(defense) && !isNaN(scouting_id)) {

        console.log(`--- UPDATING scouting entry with id ${req.body.scouting_id}`)
            Scouting.update({
                scouter_id,
                competition_id,
                team_id,
                match_number,
                auto_line,
                auto_high_target,
                auto_low_target,
                auto_collect_balls,
                stage1_high_target,
                stage1_low_target,
                stage1_completed,
                stage2_high_target,
                stage2_low_target,
                rotation_control,
                stage3_high_target,
                stage3_low_target,
                stage3_completed,
                position_control,
                end_status,
                shield_gen_level,
                finalRP,
                defense,
                inner_port
            }, {
                where: {
                    scouting_id
                }
            }).then(entry => {
                if(entry[0]) {
                    console.log(`Entry "${scouting_id}" updated`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't update scouting entry (It might not exist)!")
                    res.status(404).send({"error":"ENTRY NOT FOUND"})
                }
            }).catch(err => {
                console.error(err)
                res.status(500).send({"error":"SQL ERROR"})
            })

        } else {
            console.log(`Invalid Input Format!`)

            let err = ""
            if (isNaN(scouting_id))
                err += " scouting_id "
            if (isNaN(match_number))
                err += " match_number "
            if (isNaN(auto_line))
                err += " auto_line "
            if (isNaN(auto_high_target))
                err += " auto_high_target "
            if (isNaN(auto_low_target))
                err += " auto_low_target "
            if (isNaN(auto_collect_balls))
                err += " auto_collect_balls "
            if (isNaN(stage1_high_target))
                err += " stage1_high_target "
            if (isNaN(stage1_low_target))
                err += " stage1_low_target "
            if (isNaN(stage1_completed))
                err += " stage1_completed "
            if (isNaN(stage2_high_target))
                err += " stage2_high_target "
            if (isNaN(stage2_low_target))
                err += " stage2_low_target "
            if (isNaN(rotation_control))
                err += " rotation_control "
            if (isNaN(stage3_high_target))
                err += " stage3_high_target "
            if (isNaN(stage3_low_target))
                err += " stage3_low_target "
            if (isNaN(stage3_completed))
                err += " stage3_completed "
            if (isNaN(position_control))
                err += " position_control "
            if (isNaN(end_status))
                err += " end_status "
            if (isNaN(shield_gen_level))
                err += " shield_gen_level "
            if (isNaN(finalRP))
                err += " finalRP "
            if (isNaN(defense))
                err += " defense "

            res.status(400).send({ "error": `BAD PARAMS (No${err}provided)` })
        }
    })

    router.post("/delete", (req, res, next) => {
        const id = parseInt(req.body.scouting_id)

        if(!isNaN(id)) {
            console.log(`--- DELETING scouting entry with id ${req.body.scouting_id}`)
            Scouting.destroy({
                where: {
                scouting_id: id
                }
            }).then(success => {
                if(success) {
                    console.log(`Deleted scouting entry with id ${id}!`)
                    res.send({"success":true})
                } else {
                    console.log("Couldn't find scouting entry with that id!")
                    res.status(404).send({"error":"ENTRY NOT FOUND"})
                }
            })
        } else {
            console.log(`--- DELETING scouting entry`)
            console.log(`Invalid ID Format! (${typeof id})`)
            res.status(400).send({"error":`ID INVALID FORMAT`})
        }
    })

    return router
}