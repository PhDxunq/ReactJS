import React from 'react';
import './List.css';
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}><input type="checkbox" className='checkbox'/><span className='text'>{item}</span></li>
      ))}
    </ul>
  );
};


export default List;
