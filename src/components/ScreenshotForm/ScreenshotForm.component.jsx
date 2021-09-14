import React from 'react';
import './ScreenshotForm.style.css';

const ScreenshotForm = ({
  onInputWebsiteChange,
  onSaveButtonClick,
  isDisabled,
}) => {
  return (
    <section>
      <div className='screenshotform flex'>
        <input
          type='text'
          placeholder='Please enter a website'
          name='inputWebsite'
          id='inputWebsite'
          onChange={onInputWebsiteChange}
        />
        <button disabled={isDisabled} onClick={onSaveButtonClick}>
          Save
        </button>
      </div>
    </section>
  );
};

export default ScreenshotForm;
