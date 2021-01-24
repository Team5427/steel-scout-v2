import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class PitScoutingComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeClimb = this.onChangeClimb.bind(this);
        this.onChangeAdjust_Level = this.onChangeAdjust_Level.bind(this);
        this.onChangeDriveTeamExp = this.onChangeDriveTeamExp.bind(this);
        this.onChangeLowerPort = this.onChangeLowerPort.bind(this);
        this.onChangeAuton = this.onChangeAuton.bind(this);
        this.onChangeHigherPort = this.onChangeHigherPort.bind(this);
        this.onChangeDefense = this.onChangeDefense.bind(this);
        this.onChangeInner_port = this.onChangeInner_port.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            climb: '',
            defense: '',
            adjust_level: '',
            drive_team_experience: '',
            inner_port: '',
            higher_port: '',
            lower_port: '',
            autonomous_abilities: '',
        }
    }

    onChangeClimb(e) {
        this.setState({
            climb: e.target.value
        });
    }

    onChangeAdjust_Level(e) {
        this.setState({
            adjust_level: e.target.value
        });
    }

    onChangeDriveTeamExp(e) {
        this.setState({
            drive_team_experience: e.target.value
        });
    }

    onChangeLowerPort(e) {
        this.setState({
            lower_port: e.target.value
        });
    }

    onChangeHigherPort(e) {
        this.setState({
            higher_port: e.target.value
        });
    }

    onChangeInner_port(e) {
        this.setState({
            inner_port: e.target.value
        });
    }

    onChangeAuton(e) {
        this.setState({
            autonomous_abilities: e.target.value
        });
    }

    onChangeDefense(e) {
        this.setState({
            defense: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            match_number: this.state.match_number,
            auto_line: this.state.auto_line,
            auto_high_target: this.state.auto_high_target,
            auto_low_target: this.state.auto_low_target,
            auto_collect_balls: this.state.auto_collect_balls,
            stage1_high_target: this.state.stage1_high_target,
            stage1_low_target: this.state.stage1_low_target,
            stage1_completed: this.state.stage1_completed,
            stage2_high_target: this.state.stage1_high_target,
            stage2_low_target: this.state.stage1_low_target,
            rotation_control: this.state.rotation_control,
            stage3_high_target: this.state.stage3_high_target,
            stage3_low_target: this.state.stage3_low_target,
            stage3_completed: this.state.stage3_completed,
            position_control: this.state.position_control,
            end_status: this.state.position_control,
            shield_gen_level: this.state.shield_gen_level,
            finalRP: this.state.finalRP,
            defense: this.state.defense,
            inner_port: this.state.inner_port

        };
        axios.post('http://localhost:5000/pitscouting/create', obj)
            .then(res => console.log(res.data));

        this.setState({
            climb: '',
            defense: '',
            adjust_level: '',
            drive_team_experience: '',
            inner_port: '',
            higher_port: '',
            lower_port: '',
            autonomous_abilities: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h1 align="center">Scouting Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Climb: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.climb}
                               onChange={this.onChangeClimb}
                        />
                    </div>
                    <div className="form-group">
                        <label>Auto Line </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.defense}
                               onChange={this.onChangeDefense}
                        />
                    </div>
                    <div className="form-group">
                        <label>Adjust Level: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.adjust_level}
                               onChange={this.onChangeAdjust_Level}
                        />
                    </div>
                    <div className="form-group">
                        <label>Drive Team Exp. : </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.drive_team_experience}
                               onChange={this.onChangeDriveTeamExp}
                        />
                    </div>
                    <div className="form-group">
                        <label>Inner Port: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.inner_port}
                               onChange={this.onChangeInner_port}
                        />
                    </div>
                    <div className="form-group">
                        <label>Higher Port: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.higher_port}
                               onChange={this.onChangeHigherPort}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lower Port: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.lower_port}
                               onChange={this.onChangeLowerPort}
                        />
                    </div>
                    <div className="form-group">
                        <label>Autonomous Abilities</label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.autonomous_abilities}
                               onChange={this.onChangeAuton}
                        />
                    </div>


                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary"
                        />
                    </div>

                </form>

                <button><Link to="/pit-scoutingData">Click Here to See Data</Link></button>

            </div>
        )
    }
}