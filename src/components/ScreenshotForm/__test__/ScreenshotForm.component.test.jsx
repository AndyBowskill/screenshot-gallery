import React from 'react';
import renderer from 'react-test-renderer';
import ScreenshotForm from '../ScreenshotForm.component';

const onInputWebsiteChange = jest.fn();
const onSaveButtonClick = jest.fn();
const isDisabled = jest.fn();

test('ScreenshotForm component displays correctly.', () => {
  const component = renderer.create(
    <ScreenshotForm
      onInputWebsiteChange={onInputWebsiteChange}
      onSaveButtonClick={onSaveButtonClick}
      isDisabled={isDisabled}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
