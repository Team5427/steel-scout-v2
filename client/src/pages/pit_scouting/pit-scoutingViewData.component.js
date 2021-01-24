import React, { useState, useEffect } from 'react'
import axios from "axios";
const PitscoutingData = () => {

    const [seasons, setTeams] = useState([])

    useEffect(() => {
            axios.get("/pitscouting").then(res => setTeams(res.data)).catch(ex => {
                console.error("Couldn't pull pit-scouting data from API!")
            })
        },
        [])

    useEffect(() => {
        console.log(seasons)
    }, [seasons])

    return (
        <div className='teams'>
            <h1>Viewing Pit-Scouting Data</h1>

            <table>
                <thead>
                <tr>
                    <th>Climb</th>
                    <th>Adjust Level</th>
                    <th>Drive Team Exp</th>
                    <th>Inner Port</th>
                    <th>Higher Port</th>
                    <th>Lower Port</th>
                    <th>Defense</th>
                    <th>Autonomous </th>
                    <th colSpan="2">Action</th>

                </tr>
                </thead>
                <tbody>
                {seasons.map(season => (
                    <tr key={season.scouting_id}>
                        <td>{season.climb}</td>
                        <td>{season.adjust_level}</td>
                        <td>{season.drive_team_experience}</td>
                        <td>{season.inner_port}</td>
                        <td>{season.higher_port}</td>
                        <td>{season.lower_port}</td>
                        <td>{season.defense}</td>
                        <td>{season.autonomous_abilities}</td>

                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}



export default PitscoutingData