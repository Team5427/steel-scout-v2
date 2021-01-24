import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SeasonsComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeSeasonName = this.onChangeSeasonName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            season_name: '',
        }
    }

    onChangeSeasonName(e) {
        this.setState({
            season_name: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();
        const obj = {
            season_name: this.state.season_name,

        };
        axios.post('http://localhost:5000/seasons/create', obj)
            .then(res => console.log(res.data));

        this.setState({
            season_name: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h1 align="center">Seasons Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Season Name: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.season_name}
                               onChange={this.onChangeSeasonName}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary"
                        />
                    </div>

                </form>

                <button><Link to="/seasonData">Click Here to See Data</Link></button>

            </div>
        )
    }
}