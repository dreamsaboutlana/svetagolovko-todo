import React from 'react';

import './navigation.scss'

const items = [
  { label: 'Home', id:'assd'},
  { label: 'Gallery', id:'assw'},
  { label: 'About', id:'assq'},
  { label: 'Contacts', id:'assy'}
];
export const Navigation = () =>{

  return (
    <nav className='nav'>
      <ul>
        {
          items.map( (item) => (
              <li key={item.id}>
                <a href={`/${item.label.toLowerCase()}`}>{item.label}</a>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
};

