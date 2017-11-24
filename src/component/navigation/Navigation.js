import React from 'react';

import './navigation.scss'

export const Navigation = (props) => (
  <nav className='nav'>
    <ul>
      {
        props.list.map((item, index) => (
            <li key={index}>
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          )
        )
      }
    </ul>
  </nav>
);


