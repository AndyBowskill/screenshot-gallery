import React from 'react';
import Item from '../Item/Item.component';
import './ItemList.style.css';

const ItemList = (props) => {
  return (
    <div className='itemlist'>
      {props.items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ItemList;
