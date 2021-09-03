import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from './Navigation.component';

const onRouteChange = (route) => {
  // Empty function
};

test('Navigation component displays correctly when the user is signed out.', () => {
  const component = renderer.create(
    <Navigation onRouteChange={onRouteChange} isUserSignedIn={false} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Navigation component displays correctly when the user is signed in.', () => {
  const component = renderer.create(
    <Navigation onRouteChange={onRouteChange} isUserSignedIn={true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
