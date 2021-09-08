import React from 'react';
import renderer from 'react-test-renderer';
import ScreenshotForm from '../ScreenshotForm.component';

const onInputChange = jest.fn();
const onSaveButtonClick = jest.fn();

test('ScreenshotForm component displays correctly.', () => {
  const component = renderer.create(
    <ScreenshotForm
      onInputChange={onInputChange}
      onSaveButtonClick={onSaveButtonClick}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
