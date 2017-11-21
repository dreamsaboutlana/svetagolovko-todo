import React from 'react';

import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';
import { Greeting } from '../greeting/Greeting';
import { Numbers } from '../numbers/Numbers';

import './main.scss';

export const Main = () => {

  return (
    <div className='wrapper'>
      <Aside/>
      <Content/>
      <Greeting/>
      <Numbers
        data = {
          {
            from: 5,
            to:7
          }
        }
        type='even'
      />
    </div>
  )
    ;
};

