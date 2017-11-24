import React from 'react';

import './navigation.scss'

const items = [
  { label: 'Home', id:'assd'},
  { label: 'Gallery', id:'assw'},
  { label: 'About', id:'assq'},
  { label: 'Contacts', id:'assy'}
];
export const Navigation = ({islogin}) => (
  <nav className='nav'>
    <ul>
      {/*{*/}
        {/*props.items.map( (item, index) => (*/}
            {/*<li key={index, item.id}>*/}
              {/*<a href={`/${item.label.toLowerCase()}`}>{item.label}</a>*/}
            {/*</li>*/}
          {/*)*/}
        {/*)*/}
      {/*}*/}

      <li><a href="home">Home</a></li>

      { islogin && <li><a href="logout">Logout</a></li> }
    </ul>
  </nav>
);


