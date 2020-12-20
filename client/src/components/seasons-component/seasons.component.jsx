import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const seasonsComponent = () => (
    <div className='seasons'>
        <h2>Adding Season Entries</h2>

        <form onSubmit={}>
            <FormInput
                name='season'
                type='text'
                handleChange={this.handleChange}
                value={this.state.team}
                label='Season Name'
                required
            />
            <div className='buttons'>
                <CustomButton type='submit'>Submit</CustomButton>
            </div>
        </form>
    </div>
)

export default seasonsComponent