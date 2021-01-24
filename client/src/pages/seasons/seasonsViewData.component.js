import React, { useState, useEffect } from 'react'
import axios from "axios";
const SeasonData = () => {

    const [seasons, setTeams] = useState([])

    useEffect(() => {
        axios.get("/seasons").then(res => setTeams(res.data)).catch(ex => {
            console.error("Couldn't pull season data from API!")
        })
    },
        [])

    useEffect(() => {
        console.log(seasons)
    }, [seasons])

    return (
        <div className='teams'>
            <h1>Viewing Seasons Data</h1>

            <table>
                <thead>
                    <tr>
                        <th>Season Name</th>
                        <th colSpan="2">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {seasons.map(season => (
                        <tr key={season.season_id}>
                            <td>{season.season_name}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



export default SeasonData