import React, {useState, useEffect} from 'react'
import axios from "axios";

const TeamData = () => {
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
        <div className='competitions'>
            <h1> Viewing Team Numbers Data</h1>
            <table>
                <thead>
                <tr>
                    <th> Team Number |</th>
                    <th colSpan="2">Action</th>

                </tr>
                </thead>
                <tbody>
                {teams.map(teamNum => (
                    <tr key={teamNum.team_id}>
                        <td>{teamNum.team_number}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}

export default TeamData