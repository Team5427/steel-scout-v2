import React from 'react'
import './teams.css';
import TeamsComponent from '../../components/teams-component/teams.component'


const Teams = () => (
    <div className='teams'>
        <h1>Adding Teams</h1>
        <TeamsComponent/>
        <br/>
        <br/>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Team Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>5427</td>
            </tr>
            <tr>
                <td>2</td>
                <td>624</td>
            </tr>
           
            </tbody>
        </table>
    </div>
)

export default Teams