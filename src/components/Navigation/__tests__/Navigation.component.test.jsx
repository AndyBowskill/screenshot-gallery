import React from 'react';
import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation.component';

test('Navigation component displays correctly when the user is signed out.', () => {
  const onRouteChangeFn = jest.fn();

  const component = renderer.create(
    <Navigation onRouteChange={onRouteChangeFn} isUserSignedIn={false} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Navigation component displays correctly when the user is signed in.', () => {
  const onRouteChangeFn = jest.fn();

  const component = renderer.create(
    <Navigation onRouteChange={onRouteChangeFn} isUserSignedIn={true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Elements display correctly when the user is signed out.', () => {
  const onRouteChangeFn = jest.fn();

  const { getByText } = render(
    <Navigation onRouteChange={onRouteChangeFn} isUserSignedIn={true} />
  );

  const signOutElement = getByText('Sign Out');
  UserEvent.click(signOutElement);
  expect(signOutElement.toBeInTheDocument);
});

test('Elements display correctly when the user is signed out.', () => {
  const onRouteChangeFn = jest.fn();

  const { getByText } = render(
    <Navigation onRouteChange={onRouteChangeFn} isUserSignedIn={false} />
  );

  const signInElement = getByText('Sign In');
  UserEvent.click(signInElement);
  expect(signInElement.toBeInTheDocument);

  const registerElement = getByText('Register');
  UserEvent.click(registerElement);
  expect(registerElement.toBeInTheDocument);
});
