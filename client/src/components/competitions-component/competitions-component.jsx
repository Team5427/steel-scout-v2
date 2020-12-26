import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './competitions.styles.css'
import axios from 'axios';


class CompetitionsComponent extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeCompetitionName = this.onChangeCompetitionName.bind(this)
        this.onChangeCompetitionDate = this.onChangeCompetitionDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            competition_name: '',
            competition_date: ''
        }

    }
    onChangeCompetitionName(e) {
        this.setState({ competition_name: e.target.value })
    }

    onChangeCompetitionDate(e) {
        this.setState({ competition_date: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const competitionObj = {
            competition_name: this.state.competition_name,
            competition_date: this.state.competition_date
        };

        axios.post('http://localhost:5000/competitions/create', competitionObj)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ competition_name: '', competition_date: '' })
    }


    render() {
        return (
            <div className='competitions'>
                <form>
                    <FormInput
                        name='competition_name'
                        type='text'
                        placeholder='Competition Name'
                        value={this.state.competition_name}
                        onChange={this.onChangeCompetitionName}
                        required
                    />
                    <FormInput
                        name='competition_date'
                        type='text'
                        placeholder='Competition Date'
                        value={this.state.competition_date}
                        onChange={this.onChangeCompetitionDate}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Submit</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default CompetitionsComponent