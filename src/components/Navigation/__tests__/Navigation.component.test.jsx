import React from 'react';
import { render, screen } from '@testing-library/react';
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

  render(<Navigation onRouteChange={onRouteChangeFn} isUserSignedIn={true} />);

  const signOutElement = screen.getAllByText(/Sign Out/);
  UserEvent.click(signOutElement[0]);
  expect(signOutElement[0]).toBeInTheDocument();
});

test('Elements display correctly when the user is signed out.', () => {
  const onRouteChangeFn = jest.fn();

  render(<Navigation onRouteChange={onRouteChangeFn} isUserSignedIn={false} />);

  const signInElement = screen.getAllByText(/Sign In/);
  UserEvent.click(signInElement[0]);
  expect(signInElement[0]).toBeInTheDocument();

  const registerElement = screen.getAllByText(/Register/);
  UserEvent.click(registerElement[0]);
  expect(registerElement[0]).toBeInTheDocument();
});
