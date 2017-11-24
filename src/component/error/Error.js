import React from 'react';

import './error.scss';

export const Error = (props) =>
  <mark className='error' style={{color: props.color}}>{props.text || 'Error!'}</mark>;

