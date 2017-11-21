import React from 'react';

import './numbers.scss';

const numList = (from, to, type) => {
  let arr = [];

  for (let i = from; i <= to; i++) {
    if (type) {
      if (type == 'odd') {
        if (i % 2 === 0) {
          arr.push(i);
        }
      }
      if (type == 'even') {
        if (i % 2 !== 0) {
          arr.push(i);
        }
      }
    } else {
      arr.push(i);
    }
  }

  return (<ul>
    {
      arr.map(num => (
          <li key={num}>
            {num}
          </li>
        )
      )
    }
  </ul>);
};

export const Numbers = (props) => {
  let {from, to} = props.data;

  return (
    <div className='numbers'>
      {numList(from, to, props.type)}
    </div>
  );
};
