import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../Item.component';
import { render, screen, fireEvent } from '@testing-library/react';

const item = {
  url: 'www.amazon.co.uk',
  screenshot: '',
};

const onDeleteButtonClick = jest.fn();

test('Item component displays correctly.', () => {
  const component = renderer.create(
    <Item item={item} onDeleteButtonClick={onDeleteButtonClick} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Delete button click event is successful.', () => {
  const component = render(
    <Item item={item} onDeleteButtonClick={onDeleteButtonClick} />
  );

  const deleteElement = screen.getByText('Delete');

  fireEvent.click(deleteElement);
});
