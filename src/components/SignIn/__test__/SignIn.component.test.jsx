import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../SignIn.component';
import { render, screen, fireEvent } from '@testing-library/react';

const onRouteChange = jest.fn();
const loadUser = jest.fn();
const loadGoogleUser = jest.fn();
const loadScreenshots = jest.fn();

test('SignIn component displays correctly.', () => {
  const component = renderer.create(
    <SignIn
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadGoogleUser={loadGoogleUser}
      loadScreenshots={loadScreenshots}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Email element changes correctly.', () => {
  render(
    <SignIn
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadGoogleUser={loadGoogleUser}
      loadScreenshots={loadScreenshots}
    />
  );

  const emailElement = screen.getByPlaceholderText(/Please enter email/);

  fireEvent.change(emailElement, { target: { value: 'andy@gmail.com' } });
});

test('Password element changes correctly.', () => {
  render(
    <SignIn
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadGoogleUser={loadGoogleUser}
      loadScreenshots={loadScreenshots}
    />
  );

  const passwordElement = screen.getByPlaceholderText(/Please enter password/);

  fireEvent.change(passwordElement, { target: { value: '123' } });
});
