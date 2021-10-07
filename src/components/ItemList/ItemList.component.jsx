import React from 'react';
import Item from '../Item/Item.component';
import './ItemList.style.css';

const ItemList = ({ items, onDeleteButtonClick }) => {
  return (
    <div className='itemlist'>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      ))}
    </div>
  );
};

export default ItemList;
