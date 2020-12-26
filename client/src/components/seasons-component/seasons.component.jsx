import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './seasons.styles.css'

class SeasonsComponent extends React.Component {
    render() {
        return (
            <div className='seasons'>
                <form>
                    <FormInput
                        name='season_name'
                        type='text'
                        placeholder='Season Name'
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
export default SeasonsComponent

