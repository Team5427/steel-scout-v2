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
        {/*<Table>*/}
        {/*    <thead>*/}
        {/*    <tr>*/}
        {/*        <th>#</th>*/}
        {/*        <th>First Name</th>*/}
        {/*        <th>Last Name</th>*/}
        {/*        <th>Username</th>*/}
        {/*    </tr>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    <tr>*/}
        {/*        <td>1</td>*/}
        {/*        <td>Mark</td>*/}
        {/*        <td>Otto</td>*/}
        {/*        <td>@mdo</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>2</td>*/}
        {/*        <td>Jacob</td>*/}
        {/*        <td>Thornton</td>*/}
        {/*        <td>@fat</td>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <td>3</td>*/}
        {/*        <td colSpan="2">Larry the Bird</td>*/}
        {/*        <td>@twitter</td>*/}
        {/*    </tr>*/}
        {/*    </tbody>*/}
        {/*</Table>*/}
    </div>
)

export default Competitions