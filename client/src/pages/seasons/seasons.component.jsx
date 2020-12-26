import React, { useState, useEffect } from 'react'
import './seasons.css';
import axios from "axios";
import SeasonsComponent from '../../components/seasons-component/seasons.component'
const Teams = () => {

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
            <h1>Seasons</h1>
            <SeasonsComponent />
            <br />
            <br />
            <br />
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Season ID</th>
                        <th>Season Name</th>
                    </tr>
                </thead>
                <tbody>
                    {seasons.map(season => (
                        <tr key={season.season_id}>
                            <td>{season.season_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



export default Teams