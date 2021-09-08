import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../SignIn.component';

const onRouteChange = jest.fn();
const loadUser = jest.fn();
const loadScreenshots = jest.fn();

test('SignIn component displays correctly.', () => {
  const component = renderer.create(
    <SignIn
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadScreenshots={loadScreenshots}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
