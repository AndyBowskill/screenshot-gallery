import React from 'react';
import './Item.style.css';

const Item = (props) => {
  return (
    <article className='item'>
      <img
        alt={props.item.url}
        src={props.item.screenshot}
        width='300px'
        height='225px'
      />
      <p>Web address:</p>
      <a href={props.item.url} target='_blank' rel='noopener'>
        <p>{props.item.url}</p>
      </a>
    </article>
  );
};

export default Item;
