import React from 'react';
import './Item.style.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img
          className=''
          alt={props.item.url}
          src={props.item.screenshot}
          width='300px'
          height='169px'
        />
        <p>{props.item.url}</p>
    </div>
  );
};

export default Item;