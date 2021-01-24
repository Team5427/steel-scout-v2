import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class TeamsComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeTeamNumber = this.onChangeTeamNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            team_number: '',
        }
    }

    onChangeTeamNumber(e) {
        this.setState({
            team_number: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();
        const obj = {
            team_number: this.state.team_number,

        };
        axios.post('http://localhost:5000/teams/create', obj)
            .then(res => console.log(res.data));

        this.setState({
            team_number: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h1 align="center">Competitions Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Team Number: </label>
                        <input type="number"
                               required
                               className="form-control"
                               value={this.state.team_number}
                               onChange={this.onChangeTeamNumber}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary"
                        />
                    </div>

                </form>

                <button><Link to="/teamsData">Click Here to See Data</Link></button>

            </div>
        )
    }
}