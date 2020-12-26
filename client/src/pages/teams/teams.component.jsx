import React, { useState, useEffect } from 'react'
import './teams.css';
import TeamsComponent from '../../components/teams-component/teams.component'
import axios from "axios";

const Teams = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get("/teams").then(res => setTeams(res.data)).catch(ex => {
            console.error("Couldn't pull team data from API!")
        })
    },
        [])

    useEffect(() => {
        console.log(teams)
    }, [teams])

    return (
        <div className='teams'>
            <h1>Teams</h1>
            <TeamsComponent />
            <br />
            <br />
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Team ID</th>
                        <th>Team Number</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.team_id}>
                            <td>{team.team_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



export default Teams