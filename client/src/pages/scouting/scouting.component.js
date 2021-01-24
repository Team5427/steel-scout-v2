import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ScoutingComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangematch_number = this.onChangematch_number.bind(this);
        this.onChangeauto_line = this.onChangeauto_line.bind(this);
        this.onChangeauto_high_target = this.onChangeauto_high_target.bind(this);
        this.onChangeauto_low_target = this.onChangeauto_low_target.bind(this);
        this.onChangeauto_collect_balls = this.onChangeauto_collect_balls.bind(this);
        this.onChangestage1_high_target = this.onChangestage1_high_target.bind(this);
        this.onChangestage1_low_target = this.onChangestage1_low_target.bind(this);
        this.onChangestage1_completed = this.onChangestage1_completed.bind(this);
        this.onChangestage2_high_target = this.onChangestage2_high_target.bind(this);
        this.onChangestage2_low_target = this.onChangestage2_low_target.bind(this);
        this.onChangerotation_control = this.onChangerotation_control.bind(this);
        this.onChangestage3_high_target = this.onChangestage3_high_target.bind(this);
        this.onChangestage3_low_target = this.onChangestage3_low_target.bind(this);
        this.onChangeposition_control = this.onChangeposition_control.bind(this);
        this.onChangeend_status = this.onChangeend_status.bind(this);
        this.onChangeshield_gen_level = this.onChangeshield_gen_level.bind(this);
        this.onChangefinalRP = this.onChangefinalRP.bind(this);
        this.onChangedefense = this.onChangedefense.bind(this);
        this.onChangeinner_port = this.onChangeinner_port.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            match_number: '',
            auto_line: '',
            auto_high_target: '',
            auto_low_target: '',
            auto_collect_balls: '',
            stage1_high_target: '',
            stage1_low_target: '',
            stage1_completed: '',
            stage2_high_target: '',
            stage2_low_target: '',
            rotation_control: '',
            stage3_high_target: '',
            stage3_low_target: '',
            stage3_completed: '',
            position_control: '',
            end_status: '',
            shield_gen_level: '',
            finalRP: '',
            defense: '',
            inner_port: ''
        }
    }

    onChangematch_number(e) {
        this.setState({
            match_number: e.target.value
        });
    }

    onChangeauto_line(e) {
        this.setState({
            auto_line: e.target.value
        });
    }

    onChangeauto_high_target(e) {
        this.setState({
            auto_high_target: e.target.value
        });
    }

    onChangeauto_low_target(e) {
        this.setState({
            auto_low_target: e.target.value
        });
    }

    onChangeauto_collect_balls(e) {
        this.setState({
            auto_collect_balls: e.target.value
        });
    }

    onChangestage1_high_target(e) {
        this.setState({
            stage1_high_target: e.target.value
        });
    }

    onChangestage1_low_target(e) {
        this.setState({
            stage1_low_target: e.target.value
        });
    }

    onChangestage1_completed(e) {
        this.setState({
            stage1_completed: e.target.value
        });
    }

    onChangestage2_high_target(e) {
        this.setState({
            stage2_high_target: e.target.value
        });
    }

    onChangestage2_low_target(e) {
        this.setState({
            stage2_low_target: e.target.value
        });
    }

    onChangerotation_control(e) {
        this.setState({
            rotation_control: e.target.value
        });
    }

    onChangestage3_high_target(e) {
        this.setState({
            stage3_high_target: e.target.value
        });
    }

    onChangestage3_low_target(e) {
        this.setState({
            stage3_low_target: e.target.value
        });
    }

    onChangeposition_control(e) {
        this.setState({
            position_control: e.target.value
        });
    }

    onChangeend_status(e) {
        this.setState({
            end_status: e.target.value
        });
    }

    onChangeshield_gen_level(e) {
        this.setState({
            shield_gen_level: e.target.value
        });
    }

    onChangefinalRP(e) {
        this.setState({
            finalRP: e.target.value
        });
    }

    onChangeinner_port(e) {
        this.setState({
            inner_port: e.target.value
        });
    }

    onChangedefense(e) {
        this.setState({
            defense: e.target.value
        });
    }

    // onChangestage3_completed(e) {
    //     this.setState({
    //         stage3_completed: e.target.value
    //     });
    // }


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
            stage3_completed:this.state.stage3_completed,
            position_control:this.state.position_control,
            end_status: this.state.position_control,
            shield_gen_level: this.state.shield_gen_level,
            finalRP: this.state.finalRP,
            defense: this.state.defense,
            inner_port: this.state.inner_port

        };
        axios.post('http://localhost:5000/scouting/create', obj)
            .then(res => console.log(res.data));

        this.setState({
            competition_id: 6,
            team_id: 9,
            match_number: '',
            auto_line: '',
            auto_high_target: '',
            auto_low_target: '',
            auto_collect_balls: '',
            stage1_high_target: '',
            stage1_low_target: '',
            stage1_completed: '',
            stage2_high_target: '',
            stage2_low_target: '',
            rotation_control: '',
            stage3_high_target: '',
            stage3_low_target: '',
            stage3_completed: 5,
            position_control: '',
            end_status: '',
            shield_gen_level: '',
            finalRP: '',
            defense: '',
            inner_port: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h1 align="center">Scouting Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Match text: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.match_number}
                               onChange={this.onChangematch_number}
                        />
                    </div>
                    <div className="form-group">
                        <label>Auto Line </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.auto_line}
                               onChange={this.onChangeauto_line}
                        />
                    </div>
                    <div className="form-group">
                        <label>Auto High Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.auto_high_target}
                               onChange={this.onChangeauto_high_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Auto Low Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.auto_low_target}
                               onChange={this.onChangeauto_low_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Auto Collect Balls: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.auto_collect_balls}
                               onChange={this.onChangeauto_collect_balls}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 1 High Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage1_high_target}
                               onChange={this.onChangestage1_high_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 1 Low Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage1_low_target}
                               onChange={this.onChangestage1_low_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 1 Completed</label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage1_completed}
                               onChange={this.onChangestage1_completed}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 2 High Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage2_high_target}
                               onChange={this.onChangestage2_high_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 2 Low Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage2_low_target}
                               onChange={this.onChangestage2_low_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rotational Control: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.rotation_control}
                               onChange={this.onChangerotation_control}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 3 High Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage3_high_target}
                               onChange={this.onChangestage3_high_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 3 Low Target: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.stage3_low_target}
                               onChange={this.onChangestage3_low_target}
                        />
                    </div>
                    <div className="form-group">
                        <label>Stage 3 Completed: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.stage3_completed}
                               onChange={this.onChangestage3_completed}
                        />
                    </div>
                    <div className="form-group">
                        <label>End Status: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.end_status}
                               onChange={this.onChangeend_status}
                        />
                    </div>
                    <div className="form-group">
                        <label>Shield Generator Level: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.shield_gen_level}
                               onChange={this.onChangeshield_gen_level}
                        />
                    </div>
                    <div className="form-group">
                        <label>Final RP: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.finalRP}
                               onChange={this.onChangefinalRP}
                        />
                    </div>
                    <div className="form-group">
                        <label>Defense: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.defense}
                               onChange={this.onChangedefense}
                        />
                    </div>
                    <div className="form-group">
                        <label>Inner Port: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.inner_port}
                               onChange={this.onChangeinner_port}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               className="btn btn-primary"
                        />
                    </div>

                </form>

                <button><Link to="/scoutingData">Click Here to See Data</Link></button>

            </div>
        )
    }
}