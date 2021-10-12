import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../Register.component';
import { render, screen, fireEvent } from '@testing-library/react';

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

test('Email element changes correctly.', () => {
  render(
    <Register
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadScreenshots={loadScreenshots}
    />
  );

  const emailElement = screen.getByPlaceholderText(/Please enter email/);

  fireEvent.change(emailElement, { target: { value: 'andy@gmail.com' } });
});

test('Name element changes correctly.', () => {
  render(
    <Register
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadScreenshots={loadScreenshots}
    />
  );

  const nameElement = screen.getByPlaceholderText(/Please enter name/);

  fireEvent.change(nameElement, { target: { value: 'John Smith' } });
});

test('Password element changes correctly.', () => {
  render(
    <Register
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadScreenshots={loadScreenshots}
    />
  );

  const passwordElement = screen.getByPlaceholderText(/Please enter password/);

  fireEvent.change(passwordElement, { target: { value: '123' } });
});

test('Register button click event is successful.', () => {
  render(
    <Register
      onRouteChange={onRouteChange}
      loadUser={loadUser}
      loadScreenshots={loadScreenshots}
    />
  );

  const registerElement = screen.getAllByText('Register');

  fireEvent.click(registerElement[1]);
});
