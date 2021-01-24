import React, { useState, useEffect } from 'react'
import axios from "axios";
const ScoutingData = () => {

    const [seasons, setTeams] = useState([])

    useEffect(() => {
            axios.get("/scouting").then(res => setTeams(res.data)).catch(ex => {
                console.error("Couldn't pull scouting data from API!")
            })
        },
        [])

    useEffect(() => {
        console.log(seasons)
    }, [seasons])

    return (
        <div className='teams'>
            <h1>Viewing Scouting Data</h1>

            <table>
                <thead>
                <tr>
                    <th>Match Number</th>
                    <th>Auto Line</th>
                    <th>Auto High Target</th>
                    <th>Auto Low Target</th>
                    <th>Auto Collect Balls</th>
                    <th>Stage 1 High Target</th>
                    <th>Stage 1 Low Target</th>
                    <th>Stage 1 Completed</th>
                    <th>Stage 2 High Target</th>
                    <th>Stage 2 Low Target</th>
                    <th>Rotational Control</th>
                    <th>Position Control</th>
                    <th>End Status</th>
                    <th>Shield Generator Level</th>
                    <th>Final RP</th>
                    <th>Defense</th>
                    <th>Stage 3 High Target</th>
                    <th>Stage 3 Low Target</th>
                    <th>Stage 3 Completed</th>
                    <th>Inner Port</th>

                    <th colSpan="2">Action</th>

                </tr>
                </thead>
                <tbody>
                {seasons.map(season => (
                    <tr key={season.scouting_id}>
                        <td>{season.match_number}</td>
                        <td>{season.auto_line}</td>
                        <td>{season.auto_high_target}</td>
                        <td>{season.auto_low_target}</td>
                        <td>{season.auto_collect_balls}</td>
                        <td>{season.stage1_high_target}</td>
                        <td>{season.stage1_low_target}</td>
                        <td>{season.stage1_completed}</td>
                        <td>{season.stage2_high_target}</td>
                        <td>{season.stage2_low_target}</td>
                        <td>{season.rotation_control}</td>
                        <td>{season.stage3_high_target}</td>
                        <td>{season.stage3_low_target}</td>
                        <td>{season.stage3_completed}</td>
                        <td>{season.position_control}</td>
                        <td>{season.end_status}</td>
                        <td>{season.shield_gen_level}</td>
                        <td>{season.finalRP}</td>
                        <td>{season.defense}</td>
                        <td>{season.inner_port}</td>

                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}



export default ScoutingData