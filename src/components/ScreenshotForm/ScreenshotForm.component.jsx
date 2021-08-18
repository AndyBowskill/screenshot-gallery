import React from 'react';
import './ScreenshotForm.style.css';

const ScreenshotForm = ({ onInputChange, onSaveButtonClick }) => {
    return (
        <section>
            <div className='form flex'>
                <input
                    type='text'
                    placeholder='Please enter a website'
                    onChange={ onInputChange }
                />
                <button onClick={ onSaveButtonClick }>Save</button>
            </div>
        </section>
    )
}

export default ScreenshotForm;
