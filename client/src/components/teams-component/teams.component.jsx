import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const teamComponent = () => (
    <div className='teams'>
        <h2>Adding Team Entries</h2>

        <form onSubmit={}>
            <FormInput
                name='team'
                type='text'
                handleChange={this.handleChange}
                value={this.state.team}
                label='Team Number'
                required
            />
            <div className='buttons'>
                <CustomButton type='submit'>Submit</CustomButton>
            </div>
        </form>
    </div>
)

export default teamComponent