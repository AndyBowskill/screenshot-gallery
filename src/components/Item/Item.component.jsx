import React from 'react';
import './Item.style.css';

const Item = (props) => {
  return (
    <article className='item'>
      <img
        alt={props.item.url}
        src={props.item.screenshot}
        width='300px'
        height='169px'
      />
      <p>{props.item.url}</p>
    </article>
  );
};

export default Item;
