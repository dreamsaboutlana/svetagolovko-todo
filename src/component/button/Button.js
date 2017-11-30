import React from 'react';

import './button.scss';

export const Button = (props) => {
  const { active, onClick, title } = props;
  const clName = active || '';
  return (
    <button
      className={clName}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
