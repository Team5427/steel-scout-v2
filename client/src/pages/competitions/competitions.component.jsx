import React, { useState, useEffect } from 'react'
import axios from "axios";
// import './competitions.css';
// import CompetitionsComponent from '../../components/competitions-component/competitions-component';

const Competitions = () => {
    const [competitions, setCompetitions] = useState([])

    useEffect(() => {
        axios.get("/competitions").then(res => setCompetitions(res.data)).catch(ex => {
            console.error("Couldn't pull competition data from API!")
        })
    }, [])

    useEffect(() => {
        console.log(competitions)
    }, [competitions])

    return (
        <div className='competitions'>
            <h1>Competitions</h1>
            {/* <CompetitionsComponent/> */}
            <table>
                <thead>
                    <tr>
                        <th> Competition Name </th>
                        <th> Competition Date </th>
                        <th>Season ID</th>
                    </tr>
                </thead>
                <tbody>
                    {competitions.map(comp => (
                        <tr key={comp.competition_id}>
                            <td>{comp.competition_name}</td>
                            <td>{comp.competition_date}</td>
                            <td>{comp.season_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Competitions