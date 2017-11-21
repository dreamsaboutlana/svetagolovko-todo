import React from 'react';

import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';

import './main.scss'

export const Main = () =>{

  return (
   <div className='wrapper'>
     <Aside />
     <Content />
   </div>
  );
};

