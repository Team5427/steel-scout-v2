import React from 'react'
import './competitions.css';
import CompetitionsComponent from '../../components/competitions-component/competitions-component';

const Competitions = () => (
    <div className='competitions'>
        <h1>Competitions Page</h1>
        <CompetitionsComponent/>
        <br/>
        <br/>
        <br/>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th> Competition Name </th>
                <th> Competition Date </th>
                <th>Season ID</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Chanelview</td>
                <td>March</td>
                <td>3</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Austin</td>
                <td>April</td>
                <td>4</td>
            </tr>
            </tbody>
        </table>
    </div>
)

export default Competitions