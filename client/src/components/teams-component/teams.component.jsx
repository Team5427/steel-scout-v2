import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './teams.styles.css'

class TeamsComponent extends React.Component {
    render() {
        return (
            <div className='competitions'>
                <form>
                    <FormInput
                        name='team_number'
                        type='text'
                        placeholder='Team Number'
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
export default TeamsComponent

