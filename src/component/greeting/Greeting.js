import React from 'react';

import './greeting.scss';

const greet = (name) => {
  const time = new Date().getHours();
  const newName = name ? `, ${name}` : '';

  if (time < 3 || time >= 22) {
    return `“Good night${newName}!”`;
  }
  if (3 <= time && time < 12) {
    return `“Good morning${newName}!”`;
  }
  if (12 <= time && time < 18) {
    return `“Good afternoon${newName}!”`;
  }
  if (18 <= time && time < 22) {
    return `“Good evening${newName}!”`;
  }
};

export const Greeting = ({name}) => (
  <div className='greeting'>
      {greet(name)}
    </div>
);
