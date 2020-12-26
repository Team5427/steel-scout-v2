import React, { useState, useEffect } from 'react'
import axios from "axios";
import TeamsComponent from '../../components/teams-component/teams.component'
import './teams.css';

const Competitions = () => {
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
            <TeamsComponent/>
            <table>
                <thead>
                    <tr>
                       <th>Team Number</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(t => (
                        <tr key={t.team_id}>
                            <td>{t.team_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Competitions