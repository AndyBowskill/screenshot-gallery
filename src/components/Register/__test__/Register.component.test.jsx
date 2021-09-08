import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../Register.component';

const onRouteChange = jest.fn();
const loadUser = jest.fn();
const loadScreenshots = jest.fn();

test('Register component displays correctly.', () => {
  const component = renderer.create(
    <Register
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadScreenshots={loadScreenshots}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
