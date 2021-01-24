import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class CompetitionsComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeCompName = this.onChangeCompName.bind(this);
        this.onChangeCompDate = this.onChangeCompDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            competition_name: '',
            competition_date: '',
        }
    }

    onChangeCompName(e) {
        this.setState({
            competition_name: e.target.value
        });
    }

    onChangeCompDate(e) {
        this.setState({
            competition_date: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            competition_name: this.state.competition_name,
            competition_date: this.state.competition_date,
            season_id: 5,

        };
        axios.post('http://localhost:5000/competitions/create', obj)
            .then(res => console.log(res.data));

        this.setState({
            competition_name: '',
            competition_date: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h1 align="center">Competitions Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Competition Name: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.competition_name}
                               onChange={this.onChangeCompName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Competition Date: </label>
                        <input type="date"
                               required
                               className="form-control"
                               value={this.state.competition_date}
                               onChange={this.onChangeCompDate}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary"
                        />
                    </div>

                </form>

                <button><Link to="/competitionsData">Click Here to See Data</Link></button>

            </div>
        )
    }
}