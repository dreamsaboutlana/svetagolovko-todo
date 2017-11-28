import React from 'react';

import './button.scss';

export const Button = (props) => {
  const {active, onClick, title} = props;

  return (
    <button
      className={active + ' btn'}
      onClick={onClick}>{title}</button>
  );
};
