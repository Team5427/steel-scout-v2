import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './competitions.styles.css'

class CompetitionsComponent extends React.Component {
    render() {
        return (
            <div className='competitions'>
                <form>
                    <FormInput
                        name='competition_name'
                        type='text'
                        placeholder='Competition Name'
                        required
                    />
                    <FormInput
                        name='competition_date'
                        type='text'
                        placeholder='Competition Date'
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