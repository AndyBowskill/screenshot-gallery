import React from 'react';
import './Item.style.css';

const Item = ({ item, onDeleteButtonClick }) => {
  return (
    <article className='item'>
      <img alt={item.url} src={item.screenshot} width='300px' height='225px' />
      <p className='top'>Web address:</p>
      <a href={item.url} target='_blank' rel='noopener noreferrer'>
        <p>{item.url}</p>
      </a>
      <button type='submit' onClick={() => onDeleteButtonClick(item.id)}>
        Delete
      </button>
    </article>
  );
};

export default Item;
