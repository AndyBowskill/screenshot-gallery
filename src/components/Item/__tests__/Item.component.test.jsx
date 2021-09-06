import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../Item.component';

const item = {
  url: 'www.amazon.co.uk',
  screenshot: '',
};

test('Item component displays correctly.', () => {
  const component = renderer.create(<Item item={item} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
