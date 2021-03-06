import React from 'react';
import renderer from 'react-test-renderer';
import ItemList from '../ItemList.component';

const items = [
  {
    url: 'www.amazon.co.uk',
    screenshot: '',
  },
  {
    url: 'www.twitter.com',
    screenshot: '',
  },
];

const onDeleteButtonClick = jest.fn();

test('ItemList component displays correctly.', () => {
  const component = renderer.create(
    <ItemList items={items} onDeleteButtonClick={onDeleteButtonClick} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
